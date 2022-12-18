import { forwardRef, useMemo } from "react"
import { OptionObject, SelectProps } from "./interface"
import { Input } from "@illa-design/input"
import { Dropdown, DropList } from "@illa-design/dropdown"
import { useMergeValue } from "@illa-design/system"
import { DownIcon, LoadingIcon, UpIcon } from "@illa-design/icon"
import { getColor } from "@illa-design/theme"

export const Select = forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
  const {
    size = "medium",
    allowClear,
    placeholder,
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

  const [finalValue, setFinalValue] = useMergeValue<string | OptionObject>("", {
    defaultValue: defaultValue,
    value: value,
  })

  const [finalPopupVisible, setFinalPopupVisible] = useMergeValue(false, {
    defaultValue: defaultPopupVisible,
    value: popupVisible,
  })

  const finalInputValue =
    typeof finalValue === "string" ? finalValue : finalValue.label

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
                setFinalValue(option.label)
              }
              if (value === undefined) {
                onChange?.(option)
              } else {
                if (typeof value === "string") {
                  onChange?.(option.label)
                } else {
                  onChange?.(option)
                }
              }
            }
          }}
        >
          {finalOptions?.map((option) => {
            return <DropList.Item key={option.label} title={option.label} />
          })}
        </DropList>
      }
      disabled={disabled}
      onVisibleChange={(visible) => {
        if (popupVisible === undefined) {
          setFinalPopupVisible(visible)
        }
        if (visible && showSearch) {
          if (value === undefined) {
            setFinalValue("")
          }
          onInputValueChange?.("")
          onChange?.(null)
        }
        onVisibleChange?.(visible)
      }}
      {...dropdownProps}
    >
      <Input
        value={finalInputValue}
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
          if (value === undefined) {
            setFinalValue(v)
          }
          onInputValueChange?.(v)
        }}
        ref={ref}
        onClear={() => {
          if (value === undefined) {
            setFinalValue("")
          }
          onClear?.()
          onChange?.(null)
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
