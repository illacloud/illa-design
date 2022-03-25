import React, {
  useRef,
  useEffect,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react"
import debounce from "lodash/debounce"
import { applyColumnItem, applyColumnItemText, applyTimeColumn, applyTimepickerList } from "./style"

type ListItem = {
  label?: string
  value?: number | string
  disabled?: boolean
  selected?: boolean
}

export interface TimeColumnProps {
  list?: ListItem[]
  value?: number | string
  onHandleSelect?: (value?: number | string, unit?: string) => void
  unit?: "hour" | "minute" | "second" | "ampm"
  popupVisible?: boolean
  scrollSticky?: boolean
}

export const TimeColumn = forwardRef<HTMLDivElement, TimeColumnProps>(
  (props, ref) => {
    const { list, value, onHandleSelect, unit, popupVisible, scrollSticky } =
      props

    const lis = useRef<Map<number | string, HTMLElement | null>>(new Map())
    const wrapper = useRef<HTMLDivElement>(null)
    const ul = useRef<HTMLUListElement>(null)
    const listItemHeight = useRef<number>(0)

    const prevPopupVisible = useRef<boolean>()
    useEffect(() => {
      prevPopupVisible.current = popupVisible
    })

    const prevScrollTop = useRef<number>(wrapper?.current?.scrollTop as number)

    useEffect(() => {
      const li = value ? lis.current.get(value) : undefined
      if (li && popupVisible && prevPopupVisible.current) {
        // scrollTo(wrapper.current, li.offsetTop, 150)
        wrapper.current?.scrollTo({ top: li.offsetTop })
        prevScrollTop.current = li.offsetTop
      }
    }, [value])

    useEffect(() => {
      if (popupVisible && popupVisible !== prevPopupVisible.current) {
        const li = value ? lis.current.get(value) : undefined
        if (li) {
          // scrollTo(wrapper.current, li.offsetTop, 0)
          wrapper.current?.scrollTo({ top: li.offsetTop })
          prevScrollTop.current = li.offsetTop
        }
      }
    }, [popupVisible, prevPopupVisible])

    useEffect(() => {
      if (list && list.length <= 1) {
        return
      }
      if (ul.current && wrapper.current && list?.length) {
        listItemHeight.current =
          (ul.current.clientHeight - wrapper.current.clientHeight) /
          (list.length - 1)
      }
    }, [list?.length])

    const onScrollList = useCallback(
      debounce(() => {
        if (!wrapper.current) {
          return
        }
        const mathFunc =
          wrapper.current.scrollTop - prevScrollTop.current > 0
            ? Math.ceil
            : Math.floor
        const index = mathFunc(
          wrapper.current.scrollTop / listItemHeight.current,
        )

        if (index !== value && list?.[index] && !list[index].disabled) {
          onHandleSelect?.(list[index].value, unit)
        }
      }, 100),
      [onHandleSelect],
    )

    useImperativeHandle(ref, () => wrapper.current as HTMLDivElement, [])

    return (
      <div
        ref={wrapper}
        css={applyTimepickerList()}
        onWheel={() => {
          if (scrollSticky) {
            onScrollList()
          }
        }}
      >
        <ul ref={ul} css={applyTimeColumn()}>
          {list?.map((item) => {
            return (
              <li
                key={item.value}
                css={applyColumnItem()}
                onClick={() =>
                  !item.disabled && onHandleSelect?.(item.value, unit)
                }
                ref={(element) => {
                  if (item.value) lis.current?.set(item.value, element)
                }}
              >
                <div css={applyColumnItemText()}>{item.label}</div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  },
)
