import React, {
  useEffect,
  useState,
  CSSProperties,
  ReactNode,
  useRef,
} from "react"
import isEqual from "react-fast-compare"
import { isString, KeyCode } from "@illa-design/system"
import { Empty } from "@illa-design/empty"
import { Checkbox } from "@illa-design/checkbox"
import Store from "../store"
import { Node } from "../node"
import { OptionProps } from "../interface"
import { getLegalIndex } from "./default-popup"

export type SearchPopupProps<T> = {
  store?: Store<T>
  style?: CSSProperties
  multiple?: boolean
  value: string[][]
  inputValue?: string
  onEsc?: () => void
  onChange?: (value: string[][]) => void
}

const formatLabel = (inputValue: string = "", label: ReactNode): ReactNode => {
  let dom = label
  if (isString(label)) {
    const index = label.toUpperCase().indexOf(inputValue?.toUpperCase())
    if (index > -1) {
      const prefix = label.substring(0, index)
      const suffix = label.substring(index + inputValue?.length)
      dom = (
        <>
          {prefix}
          <span>{label.substring(index, inputValue.length)}</span>
          {suffix}
        </>
      )
    }
  }
  return dom
}

export const SearchPopup = <T extends OptionProps>(
  props: SearchPopupProps<T>,
) => {
  const { store, multiple, onChange, inputValue, style, onEsc } = props
  const value = props.value || []

  const [options, setOptions] = useState<Node<T>[]>(
    store?.searchNodeByLabel(inputValue) || [],
  )
  const refActiveItem = useRef<HTMLLIElement | null>(null)
  // 用来标示是否需要scrollIntoView。如果是鼠标hover，不需要滚动。
  const isKeyboardHover = useRef<boolean>()
  const isFirst = useRef<boolean>(true)
  // 保存键盘操作的目标节点
  const [currentHoverIndex, setCurrentHoverIndex] = useState<number>(-1)

  const handleSearchOptionClick = (
    option: Node<T>,
    checked: boolean,
    e: any,
  ) => {
    e?.stopPropagation()
    if (option.disabled) {
      return
    }
    if (multiple) {
      option.setCheckedState(checked)
      let checkedValues
      if (checked) {
        checkedValues = value.concat([option.pathValue])
      } else {
        checkedValues = value.filter((item) => {
          return !isEqual(item, option.pathValue)
        })
      }

      onChange && onChange(checkedValues)
    } else {
      onChange && onChange([option.pathValue])
    }
  }

  const isDidMount = useRef(false)

  useEffect(() => {
    if (isDidMount.current) {
      setCurrentHoverIndex((currentIndex) => {
        if (currentIndex > options.length - 1) {
          return -1
        }
        return currentIndex
      })
    } else {
      isDidMount.current = true
    }
  }, [options])

  useEffect(() => {
    console.log(inputValue, "useEffect [inputValue]")
    if (isDidMount.current) {
      if (store) {
        setOptions(store.searchNodeByLabel(inputValue))
      }
    } else {
      isDidMount.current = true
    }
  }, [inputValue])

  useEffect(() => {
    console.log(inputValue, "[]")
    isFirst.current = false
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      e.stopPropagation()
      // 使用keycode，避免中文输入法输入时，触发enter,space等事件。
      // p.s 中文输入时，keycode 都是229
      const keyCode = e.keyCode || e.which

      switch (keyCode) {
        case KeyCode.Esc: {
          onEsc?.()
          return false
        }
        case KeyCode.ArrowDown:
        case KeyCode.ArrowUp: {
          isKeyboardHover.current = true

          const diff = KeyCode.ArrowDown === keyCode ? 1 : -1

          let nextIndex = getLegalIndex(
            currentHoverIndex + diff,
            options.length - 1,
          )

          while (nextIndex !== currentHoverIndex) {
            const item = options[nextIndex]
            if (item.disabled) {
              nextIndex = getLegalIndex(nextIndex + diff, options.length - 1)
            } else {
              break
            }
          }

          setCurrentHoverIndex(nextIndex)
          return false
        }
        case KeyCode.Enter:
          const item = options[currentHoverIndex]
          if (item) {
            const isChecked = value.some((x) => {
              return isEqual(x, item.pathValue)
            })
            handleSearchOptionClick(item, !isChecked, e)
          }
          return false
        default:
          break
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [options, currentHoverIndex, value])

  useEffect(() => {
    const target = refActiveItem.current
    if (target && (isKeyboardHover.current || isFirst.current)) {
      target?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      })
      // scrollIntoView(target, {
      //   behavior: 'instant',
      //   block: 'nearest',
      //   scrollMode: 'if-needed',
      //   boundary: target.parentNode?.parentNode as Element,
      // });
    }
  }, [currentHoverIndex, options])

  refActiveItem.current = null

  return options.length ? (
    <div>
      <ul
        onMouseMove={() => {
          isKeyboardHover.current = false
        }}
        style={style}
      >
        {options.map((item, i) => {
          const pathNodes = item.getPathNodes()
          const label = formatLabel(
            inputValue,
            pathNodes.map((x) => x.label).join(" / "),
          )

          const isChecked = value.some((x) => {
            return isEqual(x, item.pathValue)
          })

          return (
            <li
              ref={(node) => {
                if (i === currentHoverIndex) {
                  refActiveItem.current = node
                }
                if (isChecked && !refActiveItem.current) {
                  refActiveItem.current = node
                }
              }}
              onClick={(e) => {
                handleSearchOptionClick(item, !isChecked, e)
              }}
              key={i}
              onMouseEnter={() => {
                if (!isKeyboardHover.current && !item.disabled) {
                  setCurrentHoverIndex(i)
                }
              }}
              onMouseLeave={() => {
                if (!isKeyboardHover.current && !item.disabled) {
                  setCurrentHoverIndex(-1)
                }
              }}
            >
              <div>
                {multiple ? (
                  <Checkbox checked={isChecked} disabled={item.disabled}>
                    {label}
                  </Checkbox>
                ) : (
                  label
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  ) : (
    <Empty />
  )
}
