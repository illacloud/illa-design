/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, useState, useMemo, useRef } from "react"
import { useMergeValue } from "@illa-design/system"
import { InputElement } from "@illa-design/input"
import { InputTagProps } from "./interface"
import { applyInputContainer, applySuffixCls } from "./style"
import { formatValue, ObjectValueType } from "./utils"

export interface StateValue {
  disabled?: boolean
  error?: boolean
  focus?: boolean
  size?: InputTagProps["size"]
}

export const InputTag = forwardRef<HTMLDivElement, InputTagProps<any>>(
  (props, ref) => {
    const {
      style,
      className,
      value,
      defaultValue,
      inputValue,
      placeholder,
      allowClear,
      error,
      disabled,
      readOnly,
      suffix,
      size = "medium",
      // events
      onClear,
      onRemove,
      onFocus,
      onBlur,
      onClick,
      onPaste,
      onPressEnter,
      onInputChange,
      ...rest
    } = props

    const [focus, setFocus] = useState(false)
    const [currentValue, setValue] = useMergeValue<ObjectValueType[]>([], {
      defaultValue: defaultValue ? formatValue(defaultValue) : undefined,
      value: value ? formatValue(value) : undefined,
    })
    const [currentInputValue, setInputValue] = useMergeValue("", {
      value: inputValue,
    })

    const stateValue = {
      error,
      disabled,
      focus,
      size,
    }

    return (
      <div style={style} className={className} ref={ref} {...rest}>
        <span>
          <span css={applyInputContainer(stateValue)}>
            <InputElement
              size={size}
              value={inputValue}
              disabled={disabled}
              readOnly={readOnly}
              placeholder={!currentValue.length ? placeholder : ""}
              onFocus={(event) => {
                if (!disabled && !readOnly) {
                  setFocus(true)
                  onFocus?.(event)
                }
              }}
              onBlur={(event) => {
                setFocus(false)
                onBlur?.(event)
              }}
              onValueChange={(value, event) => {
                setInputValue(value)
                onInputChange?.(value, event)
              }}
              onPressEnter={(event) => {
                onPressEnter?.(event)
              }}
            />
            {suffix ? (
              <span css={applySuffixCls(stateValue)}>{suffix}</span>
            ) : null}
          </span>
        </span>
      </div>
    )
  },
)

InputTag.displayName = "InputTag"
