import { forwardRef, useRef, useState } from "react"
import { CascaderProps } from "./interface"
import { useMergeValue } from "@illa-design/system"
import { DownIcon, LoadingIcon, UpIcon } from "@illa-design/icon"
import { getColor } from "@illa-design/theme"
import { Trigger } from "@illa-design/trigger"
import { ListSelector } from "./list-selector"
import { Selector } from "./selector"
import { InputTag, TagObject } from "@illa-design/input-tag"
import { getLabelListFromValueList } from "./util"
import { InputTagRefHandler } from "@illa-design/input-tag/src"

export const MultipleCascader = forwardRef<HTMLDivElement, CascaderProps>(
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
      options = [],
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

    const inputTagRef = useRef<InputTagRefHandler | undefined>()

    const [finalPopupVisible, setFinalPopupVisible] = useMergeValue(false, {
      defaultValue: defaultPopupVisible,
      value: popupVisible,
    })

    const [finalValue, setFinalValue] = useMergeValue<string[][]>([], {
      defaultValue:
        defaultValue !== undefined ? (defaultValue as string[][]) : undefined,
      value: value !== undefined ? (value as string[][]) : undefined,
    })

    const [finalInputValue, setFinalInputValue] = useState("")

    const selector = (
      <Selector
        onClick={() => {
          inputTagRef.current?.focus()
        }}
        options={options}
        colorScheme={colorScheme}
        multiple={true}
        value={finalValue}
        inputValue={finalInputValue}
        filterOption={filterOption}
        onChange={(v) => {
          if (value === undefined) {
            setFinalValue(v)
          }
          onChange?.(v)
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
                onClick={() => {
                  inputTagRef.current?.focus()
                }}
                colorScheme={colorScheme}
                options={options}
                multiple={true}
                inputValue={finalInputValue}
                filterOption={filterOption}
                value={finalValue}
                onChange={(v) => {
                  if (value === undefined) {
                    setFinalValue(v)
                  }
                  onChange?.(v)
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
          onVisibleChange?.(visible)
        }}
        {...triggerProps}
      >
        <InputTag
          onFocus={onFocus}
          onBlur={onBlur}
          inputTagRef={inputTagRef}
          value={finalValue.map((list) => {
            return {
              label: getLabelListFromValueList(list, options),
              value: list.join(" / "),
              closeable: true,
            } as TagObject
          })}
          labelInValue
          onRemove={(v) => {
            const index = finalValue.findIndex(
              (item) => item.join(" / ") === (v as TagObject).value,
            )
            let newList = [...finalValue]
            newList.splice(index, 1)
            if (value === undefined) {
              setFinalValue(newList)
            }
            onChange?.(newList)
          }}
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
          onInputChange={(v) => {
            setFinalInputValue(v)
            onInputValueChange?.(v)
          }}
          ref={ref}
          onClear={() => {
            if (value === undefined) {
              setFinalInputValue("")
              onInputValueChange?.("")
              setFinalValue([])
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

MultipleCascader.displayName = "MultipleCascader"
