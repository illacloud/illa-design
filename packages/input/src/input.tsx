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
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

const inputAddon = (
  node?: ReactNode,
  custom?: boolean,
  style?: SerializedStyles,
): ReactNode | null => {
  return node ? custom ? <>{node}</> : <span css={style}>{node}</span> : null
}

export const Input = forwardRef<HTMLDivElement, InputProps>((props, ref) => {
  const {
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
    bdRadius: borderRadius,
    borderColor = "blue",
    size = "medium",
    variant = "outline",
    requirePadding = true,
    textCenterHorizontal,
    iconAppearWithSuffix,
    onClear,
    onChange,
    onFocus,
    onBlur,
    onPressEnter,
    withoutNormalBorder,
    highlight,
    readOnly,
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
    focus: highlight ?? focus,
    variant,
    size,
    borderColor,
    borderRadius,
    iconAppearWithSuffix,
    withoutNormalBorder,
  }

  if (showCount) {
    suffix.render = (
      <span css={applyCountLimitStyle}>
        <span css={applyLengthErrorStyle(lengthError)}>{valueLength}</span>
        {maxLength ? <span>/{maxLength}</span> : null}
      </span>
    )
  }

  return (
    <div ref={ref} css={[applyContainerCss(size), applyBoxStyle(rest)]}>
      {inputAddon(
        addonBefore?.render,
        addonBefore?.custom,
        applyAddonCss(variant, size),
      )}
      <span css={applyInputContainer(stateValue, requirePadding)}>
        {inputAddon(prefix?.render, prefix?.custom, applyPrefixCls(size))}
        <InputElement
          ref={inputRef}
          value={value}
          size={size}
          error={error}
          disabled={disabled}
          maxLength={maxLength}
          placeholder={placeholder}
          allowClear={allowClear}
          textCenterHorizontal={textCenterHorizontal}
          iconAppearWithSuffix={iconAppearWithSuffix}
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
          readOnly={readOnly}
          {...deleteCssProps(rest)}
        />
        {inputAddon(suffix?.render, suffix?.custom, applySuffixCls(size))}
      </span>
      {inputAddon(
        addonAfter?.render,
        addonAfter?.custom,
        applyAddonCss(variant, size),
      )}
    </div>
  )
})

Input.displayName = "Input"
