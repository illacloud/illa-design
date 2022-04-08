import React, { useEffect, useState, CSSProperties, useRef } from "react"
import isEqual from "react-fast-compare"
import { Empty } from "@illa-design/empty"
import { Checkbox } from "@illa-design/checkbox"
import Store from "../store"
import { Node } from "../node"
import { OptionProps } from "../interface"
import { applyOptionStyle, optionListStyle, searchListWrapper } from "./style"

export type SearchPopupProps<T> = {
  store?: Store<T>
  style?: CSSProperties
  multiple?: boolean
  value?: string[][]
  inputValue?: string
  onChange?: (value: string[][]) => void
}

export const SearchPopup = <T extends OptionProps>(
  props: SearchPopupProps<T>,
) => {
  const {
    store,
    multiple,
    onChange,
    inputValue,
    style,
    value = [],
  } = props

  const wrapperRef = useRef<HTMLDivElement>(null)
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
      if (store) {
        setOptions(store.searchNodeByLabel(inputValue))
      }
    } else {
      isDidMount.current = true
    }
  }, [inputValue])

  useEffect(() => {
    isFirst.current = false
  }, [])

  return options.length ? (
    <div
      ref={wrapperRef}
      css={searchListWrapper}
      onClick={(e) => e?.stopPropagation()}
    >
      <ul
        css={optionListStyle}
        onMouseMove={() => {
          isKeyboardHover.current = false
        }}
        style={style}
      >
        {options.map((option, i) => {
          const pathNodes = option.getPathNodes()
          const label = pathNodes.map((x) => x.label).join(" / ")

          const isChecked = value.some((x) => {
            return isEqual(x, option.pathValue)
          })

          return (
            <li
              css={applyOptionStyle({
                active: !multiple && isChecked,
                disabled: option.disabled,
              })}
              ref={(node) => {
                if (isChecked && isFirst.current && !refActiveItem.current) {
                  node?.scrollIntoView()
                  refActiveItem.current = node
                }
              }}
              onClick={(e) => {
                handleSearchOptionClick(option, !isChecked, e)
              }}
              key={i}
            >
              {multiple ? (
                <Checkbox checked={isChecked} disabled={option.disabled}>
                  {label}
                </Checkbox>
              ) : (
                label
              )}
            </li>
          )
        })}
      </ul>
    </div>
  ) : (
    <Empty />
  )
}
