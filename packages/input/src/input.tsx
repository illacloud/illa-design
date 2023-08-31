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
    onFocus,
    showWordLimit,
    defaultValue,
    placeholder,
    value,
    size = "medium",
    addAfter,
    bdRadius,
    addBefore,
    prefix,
    inputRef,
    suffix,
    maxLength,
    onChange,
    type,
    onClear,
    onClick,
    onPressEnter,
    variant = "outline",
    onBlur,
    ...otherProps
  } = props

  let borderList = bdRadius?.split(" ") ?? ["8px", "8px", "8px", "8px"]
  if (borderList.length == 2) {
    borderList = [borderList[0], borderList[1], borderList[0], borderList[1]]
  } else if (borderList.length == 3) {
    borderList = [borderList[0], borderList[1], borderList[2], borderList[1]]
  }

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
      onClick={onClick}
    >
      {addBefore && (
        <span
          css={applyAddBeforeStyle(
            size,
            variant,
            disabled ?? false,
            borderList,
          )}
        >
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
                !!addBefore,
                !!addAfter,
                borderList,
              )
            : applyInputStyle(
                size,
                variant,
                colorScheme,
                finalError,
                !!addBefore,
                !!addAfter,
                borderList,
              )
        }
      >
        {prefix && (
          <span css={applyPrefixStyle(size, disabled ?? false)}>{prefix}</span>
        )}
        {typeof finalValue !== "object" && (
          <input
            onFocus={onFocus}
            ref={inputRef}
            type={type}
            disabled={disabled}
            onBlur={onBlur}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onPressEnter?.(e)
              }
            }}
            maxLength={finalMaxLengthErrorOnly ? undefined : finalMaxLength}
            readOnly={readOnly}
            value={
              typeof finalValue === "string" || typeof finalValue === "number"
                ? finalValue
                : ""
            }
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
            {...deleteCssProps(otherProps)}
          />
        )}
        {typeof finalValue === "object" && (
          <div css={applyLabelDomElementStyle(size)}>{finalValue}</div>
        )}
        {allowClear &&
          !disabled &&
          (typeof finalValue === "string" || typeof finalValue === "number") &&
          finalValue.toString().length > 0 && (
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
              c={getColor("grayBlue", "06")}
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
        <span
          css={applyAddAfterStyle(size, variant, disabled ?? false, borderList)}
        >
          {addAfter}
        </span>
      )}
    </div>
  )
})

Input.displayName = "Input"
