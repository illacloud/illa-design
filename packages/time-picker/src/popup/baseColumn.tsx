import { FC, useCallback, useEffect, useRef } from "react"
import { TimeColumnProps } from "./interface"
import { usePrevious } from "@illa-design/system"
import debounce from "lodash.debounce"
import {
  applyCellStyle,
  applyCellInnerStyle,
  listStyle,
  ulContainerStyle,
} from "./style"

const scrollIds = new Map<HTMLElement, number>()
function scrollTo(element: HTMLElement, to: number, duration: number) {
  if (scrollIds.get(element)) {
    cancelAnimationFrame(scrollIds.get(element)!)
  }
  if (duration <= 0) {
    scrollIds.set(
      element,
      requestAnimationFrame(() => {
        element.scrollTop = to
      }),
    )

    return
  }
  const difference = to - element.scrollTop
  const perTick = (difference / duration) * 10

  scrollIds.set(
    element,
    requestAnimationFrame(() => {
      element.scrollTop += perTick
      if (element.scrollTop !== to) {
        scrollTo(element, to, duration - 10)
      }
    }),
  )
}

export const BaseColumn: FC<TimeColumnProps> = (props) => {
  const {
    list,
    value,
    onHandleSelect,
    unit,
    popupVisible,
    scrollSticky,
    colorScheme,
  } = props

  const valueMapLiElement = useRef(
    new Map<number | string, HTMLLIElement | null>(),
  )
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const ulContainerRef = useRef<HTMLUListElement>(null)
  const listItemHeight = useRef<number>(0)

  const prevPopupVisible = usePrevious(popupVisible)

  const prevScrollTop = useRef<number>(
    scrollContainerRef.current?.scrollTop || 0,
  )

  useEffect(() => {
    const currentLi = valueMapLiElement.current.get(value!)
    if (currentLi && popupVisible && prevPopupVisible) {
      scrollTo(scrollContainerRef.current!, currentLi.offsetTop, 150)
      prevScrollTop.current = currentLi.offsetTop
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  useEffect(() => {
    if (popupVisible && popupVisible !== prevPopupVisible) {
      const li = valueMapLiElement.current.get(value!)
      if (li) {
        scrollTo(scrollContainerRef.current!, li.offsetTop, 0)
        prevScrollTop.current = li.offsetTop
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [popupVisible, prevPopupVisible])

  useEffect(() => {
    if (list.length <= 1) {
      return
    }
    listItemHeight.current =
      ((ulContainerRef.current?.clientHeight ?? 0) -
        (scrollContainerRef.current?.clientHeight ?? 0)) /
      (list.length - 1)
  }, [list.length])

  const onScrollList = useCallback(
    debounce(() => {
      const mathFunc =
        (scrollContainerRef.current?.scrollTop ?? 0) - prevScrollTop.current > 0
          ? Math.ceil
          : Math.floor
      const index = mathFunc(
        (scrollContainerRef.current?.scrollTop ?? 0) / listItemHeight.current,
      )
      if (index !== value && list[index] && !list[index].disabled) {
        onHandleSelect?.(list[index].value, unit)
      }
    }, 100),
    [onHandleSelect],
  )

  return (
    <div
      className="time-list"
      css={listStyle}
      ref={scrollContainerRef}
      onWheel={scrollSticky ? onScrollList : undefined}
    >
      <ul ref={ulContainerRef} css={ulContainerStyle}>
        {list.map((item) => {
          return (
            <li
              key={item.value}
              css={applyCellStyle(item.disabled, item.selected)}
              onClick={() =>
                !item.disabled && onHandleSelect?.(item.value, unit)
              }
              ref={(element) => {
                valueMapLiElement.current.set(item.value!, element)
              }}
            >
              <div
                className="cell-inner"
                css={applyCellInnerStyle(colorScheme, item.selected)}
              >
                {item.label}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
