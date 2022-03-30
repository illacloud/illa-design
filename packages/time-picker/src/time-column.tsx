import {
  useRef,
  useEffect,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react"
import debounce from "lodash/debounce"
import {
  applyColumnItem,
  applyColumnItemText,
  applyTimeColumn,
  applyTimepickerList,
} from "./style"
import { TimeColumnProps } from "./interface"

export type columState = {
  disabled?: boolean
  selected?: boolean
}

export const TimeColumn = forwardRef<HTMLDivElement, TimeColumnProps>(
  (props, ref) => {
    const {
      list,
      value,
      onHandleSelect,
      unit,
      popupVisible,
      scrollSticky,
      ...rest
    } = props

    const wrapperRef = useRef<HTMLDivElement>(null)
    const ulRef = useRef<HTMLUListElement>(null)
    const listElement = useRef<Map<number | string, HTMLElement | null>>(
      new Map(),
    )
    const listItemHeight = useRef<number>(0)
    const prevPopupVisible = useRef<boolean>()
    const currentScrollTop = useRef<number>(
      wrapperRef?.current?.scrollTop as number,
    )

    useEffect(() => {
      prevPopupVisible.current = popupVisible
    })

    useEffect(() => {
      const li = value ? listElement.current.get(value) : undefined
      if (li && popupVisible && prevPopupVisible.current) {
        // scrollTo(wrapperRef.current, li.offsetTop, 150)
        wrapperRef.current?.scrollTo({ top: li.offsetTop })
        currentScrollTop.current = li.offsetTop
      }
    }, [value])

    useEffect(() => {
      if (popupVisible && popupVisible !== prevPopupVisible.current) {
        const li = value ? listElement.current.get(value) : undefined
        if (li) {
          wrapperRef.current?.scrollTo({ top: li.offsetTop })
          currentScrollTop.current = li.offsetTop
        }
      }
    }, [popupVisible, prevPopupVisible])

    useEffect(() => {
      if (list && list?.length <= 1) {
        return
      }
      if (ulRef.current && wrapperRef.current && list?.length) {
        listItemHeight.current =
          (ulRef.current.clientHeight - wrapperRef.current.clientHeight) /
          (list.length - 1)
      }
    }, [list?.length])

    const onScrollList = useCallback(
      debounce(() => {
        if (!wrapperRef.current) {
          return
        }
        const mathFunc =
          wrapperRef.current.scrollTop - currentScrollTop.current > 0
            ? Math.ceil
            : Math.floor
        const index = mathFunc(
          wrapperRef.current.scrollTop / listItemHeight.current,
        )

        if (index !== value && list?.[index] && !list[index].disabled) {
          onHandleSelect?.(list[index].value, unit)
        }
      }, 100),
      [onHandleSelect],
    )

    useImperativeHandle(ref, () => wrapperRef.current as HTMLDivElement, [])

    return (
      <div
        ref={wrapperRef}
        css={applyTimepickerList()}
        onWheel={() => {
          if (scrollSticky) {
            onScrollList()
          }
        }}
      >
        <ul ref={ulRef} css={applyTimeColumn()}>
          {list?.map((item) => {
            return (
              <li
                key={item.value}
                css={applyColumnItem({
                  disabled: item.disabled,
                })}
                onClick={() =>
                  !item.disabled && onHandleSelect?.(item.value, unit)
                }
                ref={(element) => {
                  if (item.value) listElement.current?.set(item.value, element)
                }}
              >
                <div
                  css={applyColumnItemText({
                    disabled: item.disabled,
                    selected: item.selected,
                  })}
                >
                  {item.label}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  },
)
