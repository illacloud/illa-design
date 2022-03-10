/** @jsxImportSource @emotion/react */
import * as React from "react"
import {
  ChangeEvent,
  forwardRef,
  useState,
  useMemo,
  useRef,
  useImperativeHandle,
  ForwardRefExoticComponent,
} from "react"
import { useMergeValue } from "@illa-design/system"
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

export type InputRef = ForwardRefExoticComponent<
  InputProps & React.RefAttributes<InputRefType>
>
export const Input: InputRef = forwardRef<InputRefType, InputProps>(
  (props, ref) => {
    const {
      style,
      className,
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
      boarderColor = "blue",
      onClear,
      size = "medium",
      variant = "outline",
      requirePadding = true,
      textCenterHorizontal = false,
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
      boarderColor,
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

    return (
      <div style={style} className={className}>
        <span css={applyContainerCss(variant)}>
          {addonBefore ? (
            <span css={applyAddonCss(stateValue)}>{addonBefore}</span>
          ) : null}
          <span css={applyInputContainer(stateValue, requirePadding)}>
            {prefix ? (
              <span css={applyPrefixCls(stateValue)}>{prefix}</span>
            ) : null}
            <InputElement
              ref={inputRef}
              {...rest}
              value={value}
              error={error}
              disabled={disabled}
              placeholder={placeholder}
              allowClear={allowClear}
              textCenterHorizontal={textCenterHorizontal}
              onFocus={(e) => {
                setFocus(true)
                props.onFocus && props.onFocus(e)
              }}
              onBlur={(e) => {
                setFocus(false)
                props.onBlur && props.onBlur(e)
              }}
              onClear={() => {
                if (!("value" in props) || !props.value) {
                  setValue("")
                }
                onClear?.()
              }}
              onValueChange={onValueChange}
              onPressEnter={(e: React.KeyboardEvent<HTMLInputElement>) => {
                props.onPressEnter?.(e)
              }}
            />
            {suffix ? (
              <span css={applySuffixCls(stateValue)}>{suffix}</span>
            ) : null}
          </span>
          {addonAfter ? (
            <span css={applyAddonCss(stateValue)}>{addonAfter}</span>
          ) : null}
        </span>
      </div>
    )
  },
)

Input.displayName = "Input"
