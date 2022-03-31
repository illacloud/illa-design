import { forwardRef, ReactNode, useMemo, useState } from "react"
import { useMergeValue } from "@illa-design/system"
import { InputProps } from "./interface"
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
import { SerializedStyles } from "@emotion/react"

const inputAddon = (
  node?: ReactNode,
  custom?: boolean,
  style?: SerializedStyles,
): ReactNode | null => {
  return node ? custom ? <>{node}</> : <span css={style}>{node}</span> : null
}

export const Input = forwardRef<HTMLDivElement, InputProps>((props, ref) => {
  const {
    style,
    className,
    inputRef,
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
    size = "medium",
    variant = "outline",
    requirePadding = true,
    textCenterHorizontal = false,
    onClear,
    onChange,
    onFocus,
    onBlur,
    onPressEnter,
    ...rest
  } = props

  const [focus, setFocus] = useState(false)
  const [value, setValue] = useMergeValue("", {
    defaultValue: defaultValue
      ? formatForRule(defaultValue, maxLength)
      : undefined,
    value: props.value ? formatForRule(props.value, maxLength) : undefined,
  })
  const valueLength = value ? value.length : 0
  let suffix = props.suffix ?? {}

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

  if (maxLength && showCount) {
    suffix.render = (
      <span css={applyCountLimitStyle}>
        <span css={applyLengthErrorStyle(lengthError)}>{valueLength}</span>
        <span>/{maxLength}</span>
      </span>
    )
  }

  return (
    <div
      ref={ref}
      css={applyContainerCss(stateValue)}
      style={style}
      className={className}
    >
      {inputAddon(
        addonBefore?.render,
        addonBefore?.custom,
        applyAddonCss(stateValue),
      )}
      <span css={applyInputContainer(stateValue, requirePadding)}>
        {inputAddon(prefix?.render, prefix?.custom, applyPrefixCls(stateValue))}
        <InputElement
          ref={inputRef}
          {...rest}
          value={value}
          size={size}
          error={error}
          disabled={disabled}
          placeholder={placeholder}
          allowClear={allowClear}
          textCenterHorizontal={textCenterHorizontal}
          onFocus={(e) => {
            setFocus(true)
            onFocus?.(e)
          }}
          onBlur={(e) => {
            setFocus(false)
            onBlur?.(e)
          }}
          onClear={() => {
            if (!("value" in props) || !props.value) {
              setValue("")
            }
            onClear?.()
          }}
          onValueChange={(value, event) => {
            if (!("value" in props)) {
              setValue(value)
            }
            onChange?.(value, event)
          }}
          onPressEnter={(e) => {
            onPressEnter?.(e)
          }}
        />
        {inputAddon(suffix?.render, suffix?.custom, applySuffixCls(stateValue))}
      </span>
      {inputAddon(
        addonAfter?.render,
        addonAfter?.custom,
        applyAddonCss(stateValue),
      )}
    </div>
  )
})

Input.displayName = "Input"
