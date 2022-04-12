import React, { useEffect, useState, CSSProperties, useRef } from "react"
import isEqual from "react-fast-compare"
import { Empty } from "@illa-design/empty"
import { Checkbox } from "@illa-design/checkbox"
import { Node, Store } from "../node"
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
  const { store, multiple, onChange, inputValue, style, value = [] } = props

  const wrapperRef = useRef<HTMLDivElement>(null)
  const [options, setOptions] = useState<Node<T>[]>(
    store?.searchNodeByLabel(inputValue) || [],
  )
  const activeItemRef = useRef<HTMLLIElement | null>(null)
  const isFirst = useRef<boolean>(true)

  const clickOption = (option: Node<T>, checked: boolean, e: any) => {
    e?.stopPropagation()
    if (option.disabled) {
      return
    }
    if (multiple) {
      option.setCheckedState(checked)
      let checkedValues
      if (checked) {
        checkedValues = value?.concat([option.pathValue])
      } else {
        checkedValues = value?.filter((item) => {
          return !isEqual(item, option.pathValue)
        })
      }
      onChange?.(checkedValues)
    } else {
      onChange?.([option.pathValue])
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
      <ul css={optionListStyle} style={style}>
        {options.map((option, i) => {
          const pathNodes = option.getPathNodes()
          const label = pathNodes.map((x) => x.label).join(" / ")

          const checked = value.some((x) => {
            return isEqual(x, option.pathValue)
          })

          return (
            <li
              css={applyOptionStyle({
                active: !multiple && checked,
                disabled: option.disabled,
              })}
              ref={(node) => {
                if (checked && isFirst.current && !activeItemRef.current) {
                  node?.scrollIntoView()
                  activeItemRef.current = node
                }
              }}
              onClick={(e) => {
                clickOption(option, !checked, e)
              }}
              key={i}
            >
              {multiple ? (
                <Checkbox
                  checked={checked}
                  disabled={option.disabled}
                  onChange={(checked, e) => {
                    clickOption(option, checked, e)
                  }}
                >
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
