import { forwardRef, useMemo, useState } from "react"
import { OptionObject, SelectProps } from "./interface"
import { Dropdown, DropList } from "@illa-design/dropdown"
import { useMergeValue } from "@illa-design/system"
import { DownIcon, LoadingIcon, UpIcon } from "@illa-design/icon"
import { getColor } from "@illa-design/theme"
import { Empty } from "@illa-design/empty"
import { InputTag, TagObject } from "@illa-design/input-tag"
import { Checkbox } from "@illa-design/checkbox"
import { dropListItemStyle } from "./style"

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
      ...otherProps
    } = props

    const [finalPopupVisible, setFinalPopupVisible] = useMergeValue(false, {
      defaultValue: defaultPopupVisible,
      value: popupVisible,
    })

    const [finalValue, setFinalValue] = useMergeValue<
      string[] | OptionObject[]
    >([], {
      defaultValue: labelInValue
        ? (value as OptionObject[])
        : (value as string[]),
      value: labelInValue
        ? (defaultValue as OptionObject[])
        : (defaultValue as string[]),
    })

    const finalTagValue: TagObject[] = finalValue.map((v, index) => {
      if (labelInValue) {
        return {
          label: (v as OptionObject).label,
          value: (v as OptionObject).value,
        } as TagObject
      } else {
        return {
          label: index.toString(),
          value: v,
        } as TagObject
      }
    })

    const [finalInputValue, setFinalInputValue] = useState("")

    const finalOptions: OptionObject[] = useMemo(() => {
      let newOptions: OptionObject[] = []
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
        autoAlignPopupWidth={true}
        trigger={trigger}
        triggerProps={{
          closeOnInnerClick: false,
          closeOnClick: false,
        }}
        popupVisible={finalPopupVisible}
        dropList={
          <DropList
            onClickItem={(key) => {
              const option = finalOptions.find((option) => option.label === key)
              if (option) {
                if (labelInValue) {
                  let selectedValue = (finalValue as OptionObject[]).find(
                    (v) => v.label === option.label,
                  )
                  if (selectedValue !== undefined) {
                    onDeselect?.(selectedValue as OptionObject)
                    let newList = [...finalValue]
                    newList.splice(
                      newList.findIndex((v) => selectedValue === v),
                      1,
                    )
                    if (value === undefined) {
                      setFinalValue(newList as OptionObject[])
                    }
                    onChange?.(newList as OptionObject[])
                  } else {
                    let newList = [...finalValue]
                    newList.push(option)
                    if (value === undefined) {
                      setFinalValue(newList as OptionObject[])
                    }
                    onChange?.(newList as OptionObject[])
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
                          ? (finalValue as OptionObject[]).find(
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
          ref={ref}
          onFocus={onFocus}
          onBlur={onBlur}
          onInputChange={(v) => {
            onInputValueChange?.(v)
            setFinalInputValue(v)
          }}
          onClear={() => {
            onChange?.(null)
          }}
          onRemove={(v, index) => {
            let newList = [...finalValue]
            newList.splice(index, 1)
            if (labelInValue) {
              if (value === undefined) {
                setFinalValue(newList as OptionObject[])
              }
              onDeselect?.({
                value: v.value,
                label: v.label,
              } as OptionObject)
              onChange?.(newList as OptionObject[])
            } else {
              if (value === undefined) {
                setFinalValue(newList as string[])
              }
              onDeselect?.(v.value)
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
