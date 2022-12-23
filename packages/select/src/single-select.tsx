import { forwardRef, useMemo, useRef } from "react"
import { SelectOptionObject, SelectProps } from "./interface"
import { Input } from "@illa-design/input"
import { Dropdown, DropList } from "@illa-design/dropdown"
import { useMergeValue } from "@illa-design/system"
import { DownIcon, LoadingIcon, UpIcon } from "@illa-design/icon"
import { getColor } from "@illa-design/theme"
import { Empty } from "@illa-design/empty"

export const SingleSelect = forwardRef<HTMLDivElement, SelectProps>(
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
      onFocus,
      onDeselect,
      multiple,
      onBlur,
      trigger = "click",
      autoAlignPopupWidth = true,
      ...otherProps
    } = props

    const [finalPopupVisible, setFinalPopupVisible] = useMergeValue(false, {
      defaultValue: defaultPopupVisible,
      value: popupVisible,
    })

    const [finalInputValue, setFinalInputValue] = useMergeValue("", {
      defaultValue:
        value === undefined
          ? ""
          : labelInValue
          ? options?.find(
              (option) => option.value === (value as SelectOptionObject).value,
            )?.label || ""
          : options?.find((option) => option.value === value)?.label || "",
      value: undefined,
    })

    const lastChooseRef = useRef<string | null>(finalInputValue)

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
        popupVisible={finalPopupVisible}
        dropList={
          <DropList
            onClickItem={(key) => {
              const option = finalOptions.find((option) => option.label === key)
              if (option !== undefined) {
                if (value === undefined) {
                  lastChooseRef.current = option.label
                }
                setFinalInputValue(lastChooseRef.current ?? "")
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
          if (showSearch) {
            if (visible) {
              setFinalInputValue("")
              onInputValueChange?.("")
            } else {
              setFinalInputValue(lastChooseRef.current ?? "")
              onInputValueChange?.("")
            }
          }
          onVisibleChange?.(visible)
        }}
        {...dropdownProps}
      >
        <Input
          onFocus={onFocus}
          onBlur={onBlur}
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

SingleSelect.displayName = "SingleSelect"
