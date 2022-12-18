import { forwardRef, useMemo, useState } from "react"
import { OptionObject, SelectProps } from "./interface"
import { Input } from "@illa-design/input"
import { Dropdown, DropList } from "@illa-design/dropdown"
import { useMergeValue } from "@illa-design/system"
import { DownIcon, LoadingIcon, UpIcon } from "@illa-design/icon"
import { getColor } from "@illa-design/theme"
import { Empty } from "@illa-design/empty"

export const Select = forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
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
    ...otherProps
  } = props

  const [finalPopupVisible, setFinalPopupVisible] = useMergeValue(false, {
    defaultValue: defaultPopupVisible,
    value: popupVisible,
  })

  const [finalInputValue, setFinalInputValue] = useState("")

  const finalShowInputValue = useMemo(() => {
    if (value === undefined) {
      return finalInputValue
    } else {
      if (typeof value === "string") {
        return options?.find((option) => option.value === value)?.label || ""
      } else {
        return (
          options?.find((option) => option.value === value.value)?.label || ""
        )
      }
    }
  }, [finalInputValue, options, value])

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
      popupVisible={finalPopupVisible}
      dropList={
        <DropList
          onClickItem={(key) => {
            const option = finalOptions.find((option) => option.label === key)
            if (option !== undefined) {
              if (value === undefined) {
                setFinalInputValue(option.label)
                onInputValueChange?.(option.label)
              }
              if (labelInValue) {
                onChange?.(option)
              } else {
                onChange?.(option.value)
              }
            }
          }}
        >
          {finalOptions?.map((option) => {
            return <DropList.Item key={option.label} title={option.label} />
          })}
          {(!finalOptions || finalOptions.length === 0) && <Empty />}
        </DropList>
      }
      disabled={disabled}
      onVisibleChange={(visible) => {
        if (popupVisible === undefined) {
          setFinalPopupVisible(visible)
        }
        if (visible && showSearch) {
          if (value === undefined) {
            setFinalInputValue("")
          }
          onInputValueChange?.("")
          onChange?.(null)
        }
        onVisibleChange?.(visible)
      }}
      {...dropdownProps}
    >
      <Input
        value={finalShowInputValue}
        readOnly={!showSearch}
        addBefore={addBefore}
        error={error}
        onKeyDown={onKeyDown}
        disabled={disabled}
        colorScheme={colorScheme}
        size={size}
        allowClear={allowClear}
        prefix={prefix}
        placeholder={placeholder}
        onChange={(v) => {
          setFinalInputValue(v)
          onInputValueChange?.(v)
        }}
        ref={ref}
        onClear={() => {
          if (value === undefined) {
            setFinalInputValue("")
            onInputValueChange?.("")
          }
          onClear?.()
          onChange?.(null)
        }}
        onBlur={() => {
          if (
            options?.find((option) => option.label === finalInputValue) ===
            undefined
          ) {
            setFinalInputValue("")
            onInputValueChange?.("")
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
})

Select.displayName = "Select"
