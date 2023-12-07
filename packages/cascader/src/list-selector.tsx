import { forwardRef, useMemo } from "react"
import {
  CascaderItem,
  CascaderOptionObject,
  SelectorOption,
  SelectorProps,
} from "./interface"
import { Checkbox } from "@illa-design/checkbox"
import {
  applyListSelectorItemTextStyle,
  applyListSelectorSingleItemStyle,
  listSelectorContainerStyle,
} from "./style"
import { Empty } from "@illa-design/empty"
import { traversalOptions } from "./util"

export const ListSelector = forwardRef<HTMLDivElement, SelectorProps>(
  (props, ref) => {
    const {
      multiple,
      value = [],
      options = [],
      onChange,
      inputValue = "",
      filterOption,
      colorScheme,
      onClick,
    } = props

    const allOptions: SelectorOption[][] = useMemo(() => {
      let allList: SelectorOption[][] = []
      options?.forEach((v) => {
        traversalOptions(allList, [], v)
      })
      return allList
    }, [options])

    const filterOptions: SelectorOption[][] = useMemo(() => {
      if (filterOption && inputValue && inputValue !== "") {
        return allOptions.filter((v, index) => {
          let s = v
            .map((selectorOption) => {
              return selectorOption.label
            })
            .join(" / ")
          if (typeof filterOption === "boolean") {
            return s.includes(inputValue)
          } else {
            return filterOption(inputValue)
          }
        })
      } else {
        return []
      }
    }, [filterOption, inputValue, allOptions])

    const renderCascaderItem: CascaderItem[] = useMemo(() => {
      const valueCollection: string[] =
        value?.map((s) => {
          return s.join(" / ")
        }) ?? []
      return filterOptions.map((v) => {
        const currentValueString = v
          .map((selectorOption) => {
            return selectorOption.value
          })
          .join(" / ")

        return {
          selectorOptions: v,
          labelCollection: v
            .map((selectorOption) => {
              return selectorOption.label
            })
            .join(" / "),
          checked: valueCollection.some(
            (value) => value === currentValueString,
          ),
        } as CascaderItem
      })
    }, [filterOptions, value])

    return (
      <div ref={ref} css={listSelectorContainerStyle} onClick={onClick}>
        {renderCascaderItem.map((item, index) => {
          return (
            <div
              key={`${index}:${item.labelCollection}`}
              css={applyListSelectorSingleItemStyle(item.checked)}
              onClick={() => {
                if (!multiple) {
                  onChange?.([item.selectorOptions.map((i) => i.value)])
                }
              }}
            >
              {multiple && (
                <Checkbox
                  colorScheme={colorScheme}
                  mr="8px"
                  checked={item.checked}
                  onChange={(checked) => {
                    if (checked) {
                      onChange?.([
                        ...value,
                        item.selectorOptions.map((item) => item.value),
                      ])
                    } else {
                      onChange?.(
                        value.filter((i) => {
                          return i.join(" / ") === item.labelCollection
                        }),
                      )
                    }
                  }}
                />
              )}
              <span css={applyListSelectorItemTextStyle(item.checked ?? false)}>
                {item.labelCollection}
              </span>
            </div>
          )
        })}
        {renderCascaderItem.length === 0 && <Empty w="320px" />}
      </div>
    )
  },
)

ListSelector.displayName = "ListSelector"
