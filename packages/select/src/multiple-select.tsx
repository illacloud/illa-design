import { forwardRef, useMemo, useRef, useState } from "react"
import { SelectOptionObject, SelectProps } from "./interface"
import { Dropdown, DropList, DropListItem } from "@illa-design/dropdown"
import { isObject, useMergeValue } from "@illa-design/system"
import { DownIcon, LoadingIcon, UpIcon } from "@illa-design/icon"
import { getColor } from "@illa-design/theme"
import { Empty } from "@illa-design/empty"
import { InputTag, InputTagRefHandler, TagObject } from "@illa-design/input-tag"
import { Checkbox } from "@illa-design/checkbox"
import { dropLabelStyle, dropListItemStyle } from "./style"

export const MultipleSelect = forwardRef<HTMLDivElement, SelectProps>(
  (props, ref) => {
    const {
      size = "medium",
      allowClear,
      placeholder,
      labelInValue,
      colorScheme,
      defaultPopupVisible,
      defaultFilterOption,
      popupVisible,
      addAfter,
      disabled,
      error,
      loading,
      dropdownProps,
      variant,
      addBefore,
      prefix,
      defaultValue,
      options,
      showSearch,
      value,
      readOnly,
      inputAsOption,
      filterOption,
      onChange,
      onClear,
      onSelect,
      onInputValueChange,
      onKeyDown,
      onVisibleChange,
      trigger = "click",
      onDeselect,
      onFocus,
      onBlur,
      multiple,
      autoAlignPopupWidth = true,
      ...otherProps
    } = props

    const focusNum = useRef<number>(0)
    const lastFocusState = useRef(false)

    const inputTagRef = useRef<InputTagRefHandler | undefined>()

    const [finalPopupVisible, setFinalPopupVisible] = useMergeValue(false, {
      defaultValue: defaultPopupVisible,
      value: popupVisible,
    })

    const [finalValue, setFinalValue] = useMergeValue<
      string[] | SelectOptionObject[] | number[]
    >([], {
      value: labelInValue ? (value as SelectOptionObject[]) : (value as []),
      defaultValue: labelInValue
        ? (defaultValue as SelectOptionObject[])
        : (defaultValue as []),
    })

    const [finalInputValue, setFinalInputValue] = useState<number | string>("")

    const finalOptions: SelectOptionObject[] = useMemo(() => {
      let newOptions: SelectOptionObject[] = []
      if (options && options.length > 0) {
        if (!isObject(options[0])) {
          newOptions = (options as []).map((option) => ({
            label: option + "",
            value: option,
          }))
        } else {
          newOptions = options as SelectOptionObject[]
        }
      }

      if (finalValue && finalValue.length > 0) {
        const mixVal = (finalValue as SelectOptionObject[])
          .filter((v) => {
            if (isObject(v)) {
              return !newOptions.find((value) => v === value)
            }
            return !newOptions.find((option) => option.value === v)
          })
          .map((v) => {
            if (isObject(v)) {
              return v as SelectOptionObject
            } else {
              return {
                label: v + "",
                value: v,
              }
            }
          })
        newOptions = [...mixVal, ...newOptions]
      }

      if (inputAsOption && finalInputValue && finalInputValue !== "") {
        const optionIndex = newOptions.findIndex(
          (option) => option.value === finalInputValue,
        )
        if (optionIndex !== -1) {
          newOptions.splice(optionIndex, 1)
        }
        newOptions = [
          {
            label: finalInputValue + "",
            value: finalInputValue,
          },
          ...newOptions,
        ]
      }

      if (
        (filterOption || showSearch) &&
        finalInputValue &&
        finalInputValue !== ""
      ) {
        newOptions = newOptions.filter((option) => {
          if (typeof filterOption === "function") {
            return filterOption(finalInputValue, option)
          } else if (typeof filterOption === "boolean") {
            return filterOption
          }
          return (
            typeof option.label === "string" &&
            option.label.includes(finalInputValue.toString())
          )
        })
      } else {
        newOptions = newOptions.filter((option) => {
          if (typeof defaultFilterOption === "function") {
            return defaultFilterOption(finalInputValue, option)
          } else if (typeof defaultFilterOption === "boolean") {
            return defaultFilterOption
          }
          return true
        })
      }
      return newOptions
    }, [
      defaultFilterOption,
      filterOption,
      finalInputValue,
      finalValue,
      inputAsOption,
      options,
      showSearch,
    ])

    const finalTagValue: TagObject[] = useMemo(() => {
      return finalValue.map((v, index) => {
        if (labelInValue) {
          return {
            label: (v as SelectOptionObject).label,
            value: (v as SelectOptionObject).value,
            closeable: !readOnly,
          } as TagObject
        } else {
          return {
            label:
              (finalOptions as SelectOptionObject[]).find(
                (item) => item.value === v,
              )?.label ?? v,
            value: v,
            closeable: !readOnly,
          } as TagObject
        }
      })
    }, [finalValue, labelInValue, finalOptions, readOnly])

    return (
      <Dropdown
        onFocus={(e) => {
          focusNum.current = focusNum.current + 1
          setTimeout(() => {
            if (focusNum.current === 1 && !lastFocusState.current) {
              lastFocusState.current = true
              onFocus?.(e)
            }
          })
        }}
        onBlur={(e) => {
          focusNum.current = focusNum.current - 1
          setTimeout(() => {
            if (focusNum.current === 0) {
              lastFocusState.current = false
              onBlur?.(e)
            }
          })
        }}
        colorScheme="white"
        autoAlignPopupWidth={autoAlignPopupWidth}
        trigger={trigger}
        triggerProps={{
          closeOnInnerClick: false,
          closeOnClick: false,
          disabled: readOnly,
        }}
        popupVisible={finalPopupVisible}
        dropList={
          <DropList
            maxH="264px"
            onClick={() => {
              inputTagRef.current?.focus()
            }}
            onClickItem={(key) => {
              const option = finalOptions.find((option) => option.value === key)
              if (option) {
                if (labelInValue) {
                  let selectedValue = (finalValue as SelectOptionObject[]).find(
                    (v) => v.value === option.value,
                  )
                  if (selectedValue !== undefined) {
                    onDeselect?.(selectedValue as SelectOptionObject)
                    let newList = [...finalValue]
                    newList.splice(
                      newList.findIndex((v) => selectedValue === v),
                      1,
                    )
                    if (value === undefined) {
                      setFinalValue(newList as SelectOptionObject[])
                    }
                    onChange?.(newList as SelectOptionObject[])
                  } else {
                    let newList = [...finalValue]
                    newList.push(option)
                    if (value === undefined) {
                      setFinalValue(newList as SelectOptionObject[])
                    }
                    onChange?.(newList as SelectOptionObject[])
                  }
                } else {
                  let selectedValue = (finalValue as []).find(
                    (v) => v === option.value,
                  )
                  if (selectedValue !== undefined) {
                    onDeselect?.(selectedValue)
                    let newList = [...finalValue]
                    newList.splice(
                      newList.findIndex((v) => selectedValue === v),
                      1,
                    )
                    if (value === undefined) {
                      setFinalValue(newList as [])
                    }
                    onChange?.(newList as [])
                  } else {
                    let newList = [...finalValue]
                    newList.push(option.value)
                    if (value === undefined) {
                      setFinalValue(newList as [])
                    }
                    onChange?.(newList as [])
                  }
                }
              }
              setFinalInputValue("")
              onInputValueChange?.("")
            }}
          >
            {finalOptions?.map((option, i) => {
              return (
                <DropListItem
                  key={option.value.toString()}
                  colorScheme={colorScheme}
                  value={option.value}
                  selected={
                    typeof finalValue[0] === "object"
                      ? (finalValue as SelectOptionObject[]).find(
                          (i) => i.value === option.value,
                        ) !== undefined
                      : typeof finalValue[0] === "string"
                      ? (finalValue as string[]).includes(String(option.value))
                      : (finalValue as number[]).includes(Number(option.value))
                  }
                  disabled={option.disabled}
                >
                  <div css={dropListItemStyle}>
                    <Checkbox
                      colorScheme={colorScheme}
                      flex="none"
                      mr="8px"
                      checked={
                        labelInValue
                          ? (finalValue as SelectOptionObject[]).find(
                              (v) => v.label === option.label,
                            ) !== undefined
                          : (finalValue as []).find(
                              (v) => v === option.value,
                            ) !== undefined
                      }
                    />
                    <span css={dropLabelStyle}>{option.label}</span>
                  </div>
                </DropListItem>
              )
            })}
            {(!finalOptions || finalOptions.length === 0) && <Empty />}
          </DropList>
        }
        disabled={disabled}
        onVisibleChange={(visible) => {
          if (popupVisible === undefined) {
            setFinalPopupVisible(visible)
          }
          onVisibleChange?.(visible)
        }}
        {...dropdownProps}
      >
        <InputTag
          ref={ref}
          readOnly={!showSearch || readOnly}
          labelInValue={true}
          inputValue={finalInputValue.toString()}
          value={finalTagValue}
          addAfter={addAfter}
          addBefore={addBefore}
          error={error}
          onFocus={(e) => {
            focusNum.current = focusNum.current + 1
            setTimeout(() => {
              if (focusNum.current === 1 && !lastFocusState.current) {
                lastFocusState.current = true
                onFocus?.(e)
              }
            })
          }}
          onBlur={(e) => {
            focusNum.current = focusNum.current - 1
            setTimeout(() => {
              if (focusNum.current === 0) {
                lastFocusState.current = false
                onBlur?.(e)
              }
            })
          }}
          onKeyDown={onKeyDown}
          disabled={disabled}
          colorScheme={colorScheme}
          size={size}
          allowClear={allowClear}
          prefix={prefix}
          placeholder={placeholder}
          inputTagRef={inputTagRef}
          onInputChange={(v) => {
            onInputValueChange?.(v)
            setFinalInputValue(v)
          }}
          onClear={() => {
            if (value === undefined) {
              setFinalValue([])
            }
            setFinalInputValue("")
            onInputValueChange?.("")
            onChange?.(undefined)
          }}
          onRemove={(v) => {
            let removedTag = v as TagObject
            if (labelInValue) {
              let newList = [...finalValue] as SelectOptionObject[]
              const index = newList.findIndex(
                (item) => removedTag.label === item.label,
              )
              newList.splice(index, 1)
              if (value === undefined) {
                setFinalValue(newList as SelectOptionObject[])
              }
              onDeselect?.({
                value: removedTag.value,
                label: removedTag.label,
              } as SelectOptionObject)
              onChange?.(newList as SelectOptionObject[])
            } else {
              let newList = [...finalValue] as []
              const index = newList.findIndex(
                (item) => removedTag.value === item,
              )
              newList.splice(index, 1)
              if (value === undefined) {
                setFinalValue(newList as [])
              }
              onDeselect?.(removedTag.value)
              onChange?.(newList as [])
            }
          }}
          onAdd={(v, index) => {
            let addTag = v as TagObject
            if (labelInValue) {
              const findIndex = (finalValue as SelectOptionObject[]).findIndex(
                (value) => value.value === addTag.value,
              )

              if (findIndex === -1) {
                const newList = [
                  ...finalValue.slice(0, index),
                  addTag,
                  ...finalValue.slice(index, finalValue.length),
                ]
                if (value === undefined) {
                  setFinalValue(newList as SelectOptionObject[])
                }
                onSelect?.({
                  value: addTag.value,
                  label: addTag.label,
                } as SelectOptionObject)
                onChange?.(newList as SelectOptionObject[])
              } else {
                let newList = [...finalValue] as SelectOptionObject[]
                newList.splice(index, 1)
                if (value === undefined) {
                  setFinalValue(newList as SelectOptionObject[])
                }
                onDeselect?.({
                  value: addTag.value,
                  label: addTag.label,
                } as SelectOptionObject)
                onChange?.(newList as SelectOptionObject[])
              }
            } else {
              const findIndex = (finalValue as []).findIndex(
                (value) => value === addTag.value,
              )

              if (findIndex === -1) {
                const newList = [
                  ...finalValue.slice(0, index),
                  addTag.value,
                  ...finalValue.slice(index, finalValue.length),
                ]
                if (value === undefined) {
                  setFinalValue(newList as [])
                }
                onSelect?.(addTag.value)
                onChange?.(newList as [])
              } else {
                let newList = [...finalValue] as []
                const index = newList.findIndex((item) => addTag.value === item)
                newList.splice(index, 1)
                if (value === undefined) {
                  setFinalValue(newList as [])
                }
                onDeselect?.(addTag.value)
                onChange?.(newList as [])
              }
            }
          }}
          suffix={
            !readOnly &&
            (loading ? (
              <LoadingIcon c={getColor("grayBlue", "05")} spin={true} />
            ) : finalPopupVisible ? (
              <UpIcon />
            ) : (
              <DownIcon />
            ))
          }
          {...otherProps}
        />
      </Dropdown>
    )
  },
)

MultipleSelect.displayName = "MultipleSelect"
