import { forwardRef, ReactNode, useMemo, useState } from "react"
import {
  CascaderOptionObject,
  SelectorOption,
  SelectorProps,
  SinglePartOption,
} from "./interface"
import {
  applySelectorGroupStyle,
  applySelectorSingleItemStyle,
  selectorContainerStyle,
  selectorSingleItemTextStyle,
} from "./style"
import { Checkbox } from "@illa-design/checkbox"
import { NextIcon } from "@illa-design/icon"
import { traversalOptions } from "./util"
import { Empty } from "@illa-design/empty"

function getTreeNumber(cascader: CascaderOptionObject): number {
  if (cascader.children === undefined || cascader.children.length === 0) {
    return 0
  } else {
    let childrenNum = 0
    cascader.children.forEach((c) => {
      childrenNum += getTreeNumber(c)
    })
    childrenNum += cascader.children.length
    return childrenNum
  }
}

function isIndeterminate(
  value: string[][],
  cascader: CascaderOptionObject,
  step: number,
): [boolean, boolean] {
  // [checked, indeterminate]
  let pathList = value.filter((item) => {
    return item.length > step && item[step] === cascader.value
  })

  if (cascader.children === undefined || cascader.children.length === 0) {
    return [pathList.length > 0, false]
  }

  let childrenSelectedSet = new Set<string>()

  pathList.forEach((list) => {
    list.forEach((item, index) => {
      if (index > step) {
        childrenSelectedSet.add(`${index}:${item}`)
      }
    })
  })

  let childrenSelectedNumber = childrenSelectedSet.size
  let childrenNumber = getTreeNumber(cascader)

  if (childrenSelectedNumber === 0) {
    return [false, false]
  } else if (
    childrenSelectedNumber !== 0 &&
    childrenNumber !== 0 &&
    childrenSelectedNumber === childrenNumber
  ) {
    return [true, false]
  } else {
    return [true, true]
  }
}

export const Selector = forwardRef<HTMLDivElement, SelectorProps>(
  (props, ref) => {
    const {
      multiple,
      value = [],
      options = [],
      onChange,
      colorScheme,
      inputValue = "",
      filterOption,
      onClick,
    } = props

    const [currentShowValue, setCurrentShowValue] = useState<string[]>(
      multiple ? [] : value[0],
    )

    const cascaderList: SinglePartOption[][] = useMemo(() => {
      const list: SinglePartOption[][] = []
      if (currentShowValue && options) {
        // deal 0
        let newList: SinglePartOption[] = options.map((option) => {
          const [checked, indeterminate] = isIndeterminate(value, option, 0)
          return {
            value: option.value,
            label: option.label,
            children: option.children,
            checked: checked,
            selected:
              currentShowValue.length > 0 &&
              option.value === currentShowValue[0],
            indeterminate: indeterminate,
          } as SinglePartOption
        })
        list.push(newList)

        for (let i = 0; i < currentShowValue.length; i++) {
          const lastSelectSinglePartOption = list[i]?.find(
            (item) => item.value === currentShowValue[i],
          )

          if (lastSelectSinglePartOption) {
            if (
              lastSelectSinglePartOption.children &&
              lastSelectSinglePartOption.children.length > 0
            ) {
              let newList: SinglePartOption[] =
                lastSelectSinglePartOption.children.map((option) => {
                  const [checked, indeterminate] = isIndeterminate(
                    value,
                    option,
                    i + 1,
                  )
                  return {
                    value: option.value,
                    label: option.label,
                    children: option.children,
                    selected:
                      currentShowValue.length >= i + 1 &&
                      option.value === currentShowValue[i + 1],
                    checked: checked,
                    indeterminate: indeterminate,
                  } as SinglePartOption
                })
              list.push(newList)
            }
          }
        }
      }
      return list
    }, [value, currentShowValue, options])
    const renderCascaderList = useMemo(() => {
      let list: ReactNode[] = cascaderList.map((item, index) => {
        return (
          <div
            css={applySelectorGroupStyle(index !== cascaderList.length - 1)}
            key={`${index}:${item.map((part) => part.label).join(" / ")}`}
          >
            {item.map((i) => {
              return (
                <div
                  key={i.label}
                  css={applySelectorSingleItemStyle(i.selected)}
                  onClick={() => {
                    let newList = currentShowValue.slice(0, index)
                    newList.push(i.value)
                    setCurrentShowValue(newList)
                    if (
                      !multiple &&
                      (i.children === undefined || i.children.length == 0)
                    ) {
                      onChange?.([newList])
                    }
                  }}
                >
                  {multiple && (
                    <Checkbox
                      mr="8px"
                      checked={i.checked}
                      colorScheme={colorScheme}
                      indeterminate={i.indeterminate}
                      onChange={(checked) => {
                        const currentPath = currentShowValue.splice(0, index)
                        currentPath.push(i.value)
                        const currentPathString = currentPath.join(" / ")
                        if (checked) {
                          if (
                            i.children === undefined ||
                            i.children.length === 0
                          ) {
                            onChange?.([...value, currentPath])
                          } else {
                            let newList = value.filter((vList) => {
                              return !vList
                                .join(" / ")
                                .startsWith(currentPathString)
                            })
                            const allList: SelectorOption[][] = []
                            traversalOptions(allList, [], i)
                            allList.forEach((c) => {
                              newList.push([
                                ...currentPath.slice(0, index),
                                ...c.map((cItem) => cItem.value),
                              ])
                            })
                            onChange?.(newList)
                          }
                        } else {
                          onChange?.(
                            value.filter((vList) => {
                              return !vList
                                .join(" / ")
                                .startsWith(currentPathString)
                            }),
                          )
                        }
                      }}
                    />
                  )}
                  <span css={selectorSingleItemTextStyle}>{i.label}</span>
                  {i.children !== undefined && i.children.length > 0 && (
                    <NextIcon ml="16px" fs="12px" />
                  )}
                </div>
              )
            })}
          </div>
        )
      })
      return (
        <>
          {Array.isArray(cascaderList) && cascaderList.flat().length > 0 ? (
            list
          ) : (
            <Empty w="320px" />
          )}
        </>
      )
    }, [cascaderList, currentShowValue, multiple, onChange, value])

    return (
      <div css={selectorContainerStyle} ref={ref} onClick={onClick}>
        {renderCascaderList}
      </div>
    )
  },
)

Selector.displayName = "Selector"
