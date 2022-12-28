import { forwardRef, ReactNode } from "react"
import { InputProps } from "./interface"
import {
  applyAddAfterStyle,
  applyAddBeforeStyle,
  applyInputContainerStyle,
  applyInputDisabledStyle,
  applyInputElementStyle,
  applyInputStyle,
  applyLabelDomElementStyle,
  applyMaxLengthBeforeStyle,
  applyPrefixStyle,
  applySuffixStyle,
  applyWordLimitStyle,
} from "./style"
import { useMergeValue } from "@illa-design/system"
import { ClearIcon } from "@illa-design/icon"
import { applyBoxStyle, deleteCssProps, getColor } from "@illa-design/theme"

export const Input = forwardRef<HTMLDivElement, InputProps>((props, ref) => {
  const {
    colorScheme = "blue",
    allowClear,
    disabled,
    error,
    readOnly,
    showWordLimit,
    defaultValue,
    placeholder,
    value,
    size = "medium",
    addAfter,
    addBefore,
    prefix,
    suffix,
    maxLength,
    onChange,
    type,
    onClear,
    onPressEnter,
    variant = "outline",
    ...otherProps
  } = props

  const [finalValue, setFinalValue] = useMergeValue<
    string | number | ReactNode
  >("", {
    defaultValue: defaultValue,
    value: value,
  })

  const [finalError, setFinalError] = useMergeValue(false, {
    defaultValue: false,
    value: error,
  })

  const finalMaxLength = maxLength
    ? typeof maxLength === "number"
      ? maxLength
      : maxLength.length
    : undefined

  const finalMaxLengthErrorOnly = maxLength
    ? typeof maxLength === "number"
      ? false
      : maxLength.errorOnly
    : undefined

  return (
    <div
      css={[applyInputContainerStyle(), applyBoxStyle(otherProps)]}
      ref={ref}
      {...deleteCssProps(otherProps)}
    >
      {addBefore && (
        <span css={applyAddBeforeStyle(size, variant, disabled ?? false)}>
          {addBefore}
        </span>
      )}
      <div
        aria-disabled={disabled}
        css={
          disabled
            ? applyInputDisabledStyle(
                size,
                variant,
                colorScheme,
                finalError,
                addBefore !== undefined,
                addAfter !== undefined,
              )
            : applyInputStyle(
                size,
                variant,
                colorScheme,
                finalError,
                addBefore !== undefined,
                addAfter !== undefined,
              )
        }
      >
        {prefix && (
          <span css={applyPrefixStyle(size, disabled ?? false)}>{prefix}</span>
        )}
        {typeof finalValue !== "object" && (
          <input
            type={type}
            disabled={disabled}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onPressEnter?.()
              }
            }}
            maxLength={finalMaxLengthErrorOnly ? undefined : finalMaxLength}
            readOnly={readOnly}
            value={typeof finalValue === "string" ? finalValue : ""}
            css={applyInputElementStyle(size)}
            placeholder={placeholder}
            onChange={(event) => {
              onChange?.(event.target.value, event)
              if (
                finalMaxLength &&
                event.target.value.length > finalMaxLength
              ) {
                if (finalMaxLengthErrorOnly) {
                  if (error === undefined) {
                    setFinalError(true)
                  }
                }
              } else {
                if (error === undefined) {
                  setFinalError(false)
                }
              }
              if (value === undefined) {
                setFinalValue(event.target.value)
              }
            }}
          />
        )}
        {typeof finalValue === "object" && (
          <div css={applyLabelDomElementStyle(size)}>{finalValue}</div>
        )}
        {allowClear &&
          !disabled &&
          typeof finalValue === "string" &&
          finalValue.length > 0 && (
            <ClearIcon
              className="clear"
              onClick={(e) => {
                e.stopPropagation()
                onClear?.()
                if (value === undefined) {
                  setFinalValue("")
                }
                onChange?.("", e)
              }}
              v="hidden"
              cursor="pointer"
              fs="12px"
              ml="4px"
              c={getColor("grayBlue", "05")}
            />
          )}
        {!showWordLimit && suffix && (
          <span css={applySuffixStyle(size, disabled ?? false)}>{suffix}</span>
        )}
        {showWordLimit && (
          <span css={applyWordLimitStyle(size)}>
            <span css={applyMaxLengthBeforeStyle(finalError)}>
              {typeof finalValue === "string" ? finalValue.length : 0}
            </span>
            {`${finalMaxLength !== undefined ? "/" + finalMaxLength : ""}`}
          </span>
        )}
      </div>
      {addAfter && (
        <span css={applyAddAfterStyle(size, variant, disabled ?? false)}>
          {addAfter}
        </span>
      )}
    </div>
  )
})

Input.displayName = "Input"
