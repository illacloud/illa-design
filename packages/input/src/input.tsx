/** @jsxImportSource @emotion/react */
import * as React from "react"
import { ChangeEvent, forwardRef, useState, useMemo, useRef, useImperativeHandle } from "react"
import { omit, useMergeValue } from "@illa-design/system"
import { InputProps, InputRefType, InputSize } from "./interface"
import {
  applyAddonCss,
  applyContainerCss,
  applyCountLimitStyle,
  applyInputContainer,
  applyLengthErrorStyle,
  applyPrefixCls,
  applySuffixCls,
} from "./style"
import { InputElement } from "./input-element"
import { formatForRule } from "./utils"

export interface StateValue {
  disabled?: boolean
  error?: boolean
  focus?: boolean
  variant?: string
  size?: InputSize
}

export const Input = forwardRef<InputRefType, InputProps>((props, ref) => {
  const {
    allowClear,
    error,
    disabled,
    placeholder,
    maxLength,
    showCount,
    prefix,
    addonAfter,
    addonBefore,
    defaultValue,
    size = "medium",
    variant = "outline",
    ...rest
  } = props

  const inputRef = useRef<InputRefType>({} as InputRefType)
  const [focus, setFocus] = useState(false)
  const [value, setValue] = useMergeValue("", {
    defaultValue: defaultValue
      ? formatForRule(defaultValue, maxLength)
      : undefined,
    value: props.value ? formatForRule(props.value, maxLength) : undefined,
  })
  const valueLength = value ? value.length : 0
  let suffix = props.suffix

  const lengthError = useMemo(() => {
    if (maxLength) {
      return valueLength > maxLength
    }
    return false
  }, [valueLength, maxLength])

  const stateValue = {
    error: error || lengthError,
    disabled,
    focus,
    variant,
    size,
  }

  useImperativeHandle(ref, () => inputRef?.current, [])

  if (maxLength && showCount) {
    suffix = (
      <span css={applyCountLimitStyle}>
        <span css={applyLengthErrorStyle(lengthError)}>{valueLength}</span>
        <span>/{maxLength}</span>
      </span>
    )
  }

  const onValueChange = (v: string, e: ChangeEvent<HTMLInputElement>) => {
    if (!("value" in props) || !props.value) {
      setValue(v)
    }
    props.onChange && props.onChange(e)
  }

  const onClear = () => {
    if (!("value" in props) || !props.value) {
      setValue("")
    }
    props.onClear?.()
  }

  const otherProps = omit(rest, [
    "prefix",
    "suffix",
    "className",
    "defaultValue",
    "addonBefore",
    "addonAfter",
    "onClear",
    "onChange",
    "onFocus",
    "onBlur",
  ])

  const inputProps = {
    ...otherProps,
    onClear,
    allowClear,
    error,
    disabled,
    placeholder,
  }

  return (
    <div {...otherProps}>
      <span css={applyContainerCss(variant)}>
        {addonBefore ? (
          <span css={applyAddonCss(stateValue)}>{addonBefore}</span>
        ) : null}
        <span css={applyInputContainer(stateValue)}>
          {prefix ? <span css={applyPrefixCls}>{prefix}</span> : null}
          <InputElement
            ref={inputRef}
            {...inputProps}
            onFocus={(e) => {
              setFocus(true)
              props.onFocus && props.onFocus(e)
            }}
            onBlur={(e) => {
              setFocus(false)
              props.onBlur && props.onBlur(e)
            }}
            value={value}
            onValueChange={onValueChange}
            onPressEnter={(e: React.KeyboardEvent<HTMLInputElement>) => {
              props.onPressEnter?.(e)
            }}
          />
          {suffix ? <span css={applySuffixCls}>{suffix}</span> : null}
        </span>
        {addonAfter ? (
          <span css={applyAddonCss(stateValue)}>{addonAfter}</span>
        ) : null}
      </span>
    </div>
  )
})

Input.displayName = "Input"