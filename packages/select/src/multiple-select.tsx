import { forwardRef, useMemo, useRef, useState } from "react"
import { SelectOptionObject, SelectProps } from "./interface"
import { Dropdown, DropList } from "@illa-design/dropdown"
import { useMergeValue } from "@illa-design/system"
import { DownIcon, LoadingIcon, UpIcon } from "@illa-design/icon"
import { getColor } from "@illa-design/theme"
import { Empty } from "@illa-design/empty"
import { InputTag, TagObject } from "@illa-design/input-tag"
import { Checkbox } from "@illa-design/checkbox"
import { dropListItemStyle } from "./style"
import { InputTagRefHandler } from "@illa-design/input-tag/src"

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
      disabled,
      error,
      loading,
      dropdownProps,
      addBefore,
      prefix,
      defaultValue,
      options,
      showSearch,
      value,
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

    const inputTagRef = useRef<InputTagRefHandler | undefined>()

    const [finalPopupVisible, setFinalPopupVisible] = useMergeValue(false, {
      defaultValue: defaultPopupVisible,
      value: popupVisible,
    })

    const [finalValue, setFinalValue] = useMergeValue<
      string[] | SelectOptionObject[]
    >([], {
      defaultValue: labelInValue
        ? (value as SelectOptionObject[])
        : (value as string[]),
      value: labelInValue
        ? (defaultValue as SelectOptionObject[])
        : (defaultValue as string[]),
    })

    const finalTagValue: TagObject[] = finalValue.map((v, index) => {
      if (labelInValue) {
        return {
          label: (v as SelectOptionObject).label,
          value: (v as SelectOptionObject).value,
          closeable: true,
        } as TagObject
      } else {
        return {
          label: options?.find((item) => item.value === v)?.label ?? "",
          value: v,
          closeable: true,
        } as TagObject
      }
    })

    const [finalInputValue, setFinalInputValue] = useState("")

    const finalOptions: SelectOptionObject[] = useMemo(() => {
      let newOptions: SelectOptionObject[] = []
      if (options) {
        newOptions = options
      }
      if (filterOption && finalInputValue !== "") {
        newOptions = newOptions.filter((option) => {
          if (typeof filterOption === "function") {
            return filterOption(finalInputValue)
          }
          return option.label.includes(finalInputValue)
        })
      }
      return newOptions
    }, [filterOption, finalInputValue, options])

    return (
      <Dropdown
        colorScheme="white"
        autoAlignPopupWidth={autoAlignPopupWidth}
        trigger={trigger}
        triggerProps={{
          closeOnInnerClick: false,
          closeOnClick: !showSearch,
        }}
        popupVisible={finalPopupVisible}
        dropList={
          <DropList
            onClick={() => {
              inputTagRef.current?.focus()
            }}
            onClickItem={(key) => {
              const option = finalOptions.find((option) => option.label === key)
              if (option) {
                if (labelInValue) {
                  let selectedValue = (finalValue as SelectOptionObject[]).find(
                    (v) => v.label === option.label,
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
                  let selectedValue = (finalValue as string[]).find(
                    (v) => v === option.value,
                  )
                  if (selectedValue !== undefined) {
                    onDeselect?.(selectedValue as string)
                    let newList = [...finalValue]
                    newList.splice(
                      newList.findIndex((v) => selectedValue === v),
                      1,
                    )
                    if (value === undefined) {
                      setFinalValue(newList as string[])
                    }
                    onChange?.(newList as string[])
                  } else {
                    let newList = [...finalValue]
                    newList.push(option.value)
                    if (value === undefined) {
                      setFinalValue(newList as string[])
                    }
                    onChange?.(newList as string[])
                  }
                }
              }
            }}
          >
            {finalOptions?.map((option) => {
              return (
                <DropList.Item key={option.label}>
                  <div css={dropListItemStyle}>
                    <Checkbox
                      colorScheme={colorScheme}
                      mr="8px"
                      checked={
                        labelInValue
                          ? (finalValue as SelectOptionObject[]).find(
                              (v) => v.label === option.label,
                            ) !== undefined
                          : (finalValue as string[]).find(
                              (v) => v === option.value,
                            ) !== undefined
                      }
                    />
                    {option.label}
                  </div>
                </DropList.Item>
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
          labelInValue={true}
          inputValue={finalInputValue}
          value={finalTagValue}
          addBefore={addBefore}
          error={error}
          onKeyDown={onKeyDown}
          disabled={disabled}
          colorScheme={colorScheme}
          size={size}
          allowClear={allowClear}
          prefix={prefix}
          placeholder={placeholder}
          inputTagRef={inputTagRef}
          onFocus={onFocus}
          onBlur={onBlur}
          onInputChange={(v) => {
            onInputValueChange?.(v)
            setFinalInputValue(v)
          }}
          onClear={() => {
            onChange?.(null)
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
              let newList = [...finalValue] as string[]
              const index = newList.findIndex(
                (item) => removedTag.value === item,
              )
              newList.splice(index, 1)
              if (value === undefined) {
                setFinalValue(newList as string[])
              }
              onDeselect?.(removedTag)
              onChange?.(newList as string[])
            }
          }}
          suffix={
            loading ? (
              <LoadingIcon c={getColor("grayBlue", "05")} spin={true} />
            ) : finalPopupVisible ? (
              <UpIcon />
            ) : (
              <DownIcon />
            )
          }
          {...otherProps}
        />
      </Dropdown>
    )
  },
)

MultipleSelect.displayName = "MultipleSelect"
