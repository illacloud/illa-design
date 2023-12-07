import { forwardRef, useRef } from "react"
import { CascaderProps } from "./interface"
import { Input } from "@illa-design/input"
import { useMergeValue } from "@illa-design/system"
import { DownIcon, LoadingIcon, UpIcon } from "@illa-design/icon"
import { getColor } from "@illa-design/theme"
import { Trigger } from "@illa-design/trigger"
import { ListSelector } from "./list-selector"
import { Selector } from "./selector"
import { getLabelListFromValueList } from "./util"

export const SingleCascader = forwardRef<HTMLDivElement, CascaderProps>(
  (props, ref) => {
    const {
      size = "medium",
      allowClear,
      placeholder,
      colorScheme = "blue",
      defaultPopupVisible,
      popupVisible,
      disabled,
      error,
      loading,
      triggerProps,
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
      multiple,
      onBlur,
      trigger = "click",
      ...otherProps
    } = props

    const [finalPopupVisible, setFinalPopupVisible] = useMergeValue(false, {
      defaultValue: defaultPopupVisible,
      value: popupVisible,
    })

    const [finalInputValue, setFinalInputValue] = useMergeValue("", {
      defaultValue:
        defaultValue === undefined
          ? undefined
          : (defaultValue as string[]).join(" / "),
      value:
        value === undefined
          ? undefined
          : getLabelListFromValueList(value as string[], options ?? []),
    })

    const [finalValue, setFinalValue] = useMergeValue([], {
      defaultValue:
        defaultValue === undefined ? undefined : (defaultValue as string[]),
      value: value === undefined ? undefined : (value as string[]),
    })

    const lastChooseRef = useRef<string | null>(finalInputValue)

    const selector = (
      <Selector
        options={options}
        multiple={false}
        colorScheme={colorScheme}
        value={[finalValue]}
        inputValue={finalInputValue}
        filterOption={filterOption}
        onChange={(v) => {
          if (v.length === 1 && options) {
            const inputValue = getLabelListFromValueList(v[0], options)
            if (value === undefined) {
              setFinalInputValue(inputValue)
              onInputValueChange?.(inputValue)
              setFinalValue(v[0])
              lastChooseRef.current = inputValue
            }
            onChange?.(v[0])
            if (popupVisible === undefined) {
              setFinalPopupVisible(false)
            }
            onVisibleChange?.(false)
          }
        }}
      />
    )

    return (
      <Trigger
        withoutPadding
        showArrow={false}
        position="bottom-start"
        colorScheme="white"
        autoAlignPopupWidth={false}
        trigger={trigger}
        closeOnClick={!showSearch}
        popupVisible={finalPopupVisible}
        disabled={disabled}
        content={
          showSearch && filterOption ? (
            finalInputValue !== "" ? (
              <ListSelector
                options={options}
                multiple={false}
                inputValue={finalInputValue}
                filterOption={filterOption}
                value={[finalValue]}
                onChange={(v) => {
                  if (v.length === 1) {
                    if (value === undefined) {
                      if (options) {
                        const inputValue = getLabelListFromValueList(
                          v[0],
                          options,
                        )
                        setFinalInputValue(inputValue)
                        setFinalValue(v[0])
                        lastChooseRef.current = inputValue
                      }
                    }
                    onChange?.(v[0])
                    if (popupVisible === undefined) {
                      setFinalPopupVisible(false)
                    }
                    onVisibleChange?.(false)
                  }
                }}
              />
            ) : (
              selector
            )
          ) : (
            selector
          )
        }
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
        {...triggerProps}
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
              setFinalValue([])
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
      </Trigger>
    )
  },
)

SingleCascader.displayName = "SingleCascader"
