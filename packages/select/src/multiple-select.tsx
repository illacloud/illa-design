import { forwardRef, useMemo, useRef, useState } from "react"
import { SelectOptionObject, SelectProps } from "./interface"
import { Dropdown, DropList, DropListItem } from "@illa-design/dropdown"
import { useMergeValue } from "@illa-design/system"
import { DownIcon, LoadingIcon, UpIcon } from "@illa-design/icon"
import { getColor } from "@illa-design/theme"
import { Empty } from "@illa-design/empty"
import { InputTag, TagObject, InputTagRefHandler } from "@illa-design/input-tag"
import { Checkbox } from "@illa-design/checkbox"
import { dropListItemStyle, dropLabelStyle } from "./style"

export const MultipleSelect = forwardRef<HTMLDivElement, SelectProps>(
  (props, ref) => {
    const {
      size = "medium",
      allowClear,
      placeholder,
      labelInValue,
      colorScheme,
      defaultPopupVisible,
      popupVisible,
      children,
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
      filterOption,
      onChange,
      onClear,
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
        if (typeof options[0] === "string" || typeof options[0] === "number") {
          newOptions = (options as []).map((option) => ({
            label: option + "",
            value: option,
          }))
        } else {
          newOptions = options as SelectOptionObject[]
        }
      }
      if (
        (filterOption || showSearch) &&
        finalInputValue &&
        finalInputValue !== ""
      ) {
        newOptions = newOptions.filter((option) => {
          if (typeof filterOption === "function") {
            return filterOption(finalInputValue, option)
          }
          return (
            typeof option.label === "string" &&
            option.label.includes(finalInputValue.toString())
          )
        })
      }
      return newOptions
    }, [filterOption, finalInputValue, options, showSearch])

    const finalTagValue: TagObject[] = useMemo(() => {
      if (options && options.length > 0) {
        return finalValue.map((v, index) => {
          if (labelInValue) {
            return {
              label: (v as SelectOptionObject).label,
              value: (v as SelectOptionObject).value,
              closeable: !readOnly,
            } as TagObject
          } else {
            if (
              typeof options[0] === "string" ||
              typeof options[0] === "number"
            ) {
              return {
                label: (options as []).find((item) => item === v) + "",
                value: v,
                closeable: !readOnly,
              } as TagObject
            } else {
              return {
                label: (options as SelectOptionObject[]).find(
                  (item) => item.value === v,
                )?.label,
                value: v,
                closeable: !readOnly,
              } as TagObject
            }
          }
        })
      } else {
        return []
      }
    }, [finalValue, labelInValue, options, readOnly])

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
              const option = finalOptions.find(
                (option) => String(option.value) === key,
              )
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
            }}
          >
            {finalOptions?.map((option, i) => {
              return (
                <DropListItem
                  key={option.value.toString()}
                  colorScheme={colorScheme}
                  value={option.value.toString()}
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
