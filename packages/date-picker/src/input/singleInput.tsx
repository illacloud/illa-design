import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  KeyboardEvent,
  useCallback,
} from "react"
import { ClearIcon } from "@illa-design/icon"
import { omit } from "@illa-design/system"
import { DateInputHandler, DateInputProps } from "./interface"
import {
  applyInputWrapperStyle,
  applyPrefixStyle,
  applyRealInputStyle,
  baseSuffixStyle,
  clearIconStyle,
  inputStyle,
  suffixIconStyle,
} from "./style"

export const DateInput = forwardRef<DateInputHandler, DateInputProps>(
  (props, ref) => {
    const {
      style,
      className,
      prefixCls: propPrefixCls,
      allowClear,
      error,
      disabled,
      placeholder,
      format,
      size = "medium",
      onClear,
      editable,
      value,
      inputValue,
      onPressEnter,
      suffixIcon,
      prefix,
      onChange,
      popupVisible,
      isPlaceholder,
      colorScheme = "blue",
      ...rest
    } = props

    const readOnlyProps = editable ? {} : { readOnly: true }

    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus?.()
      },
      blur: () => {
        inputRef.current?.blur?.()
      },
    }))

    const showValue = useMemo(() => {
      if (inputValue !== undefined) {
        return inputValue
      } else if (value && !Array.isArray(value)) {
        return typeof format === "function"
          ? format(value)
          : value.format(format)
      }
      return ""
    }, [format, inputValue, value])

    const onKeyDown = useCallback(
      (e: KeyboardEvent<HTMLInputElement>) => {
        const keyCode = e.code
        if (keyCode === "Enter") {
          onPressEnter?.()
        }
      },
      [onPressEnter],
    )

    return (
      <div
        {...omit(rest, ["onChange", "onPressEnter"])}
        css={applyInputWrapperStyle(
          size,
          colorScheme,
          disabled,
          error,
          allowClear && !!showValue,
        )}
      >
        {prefix && <div css={applyPrefixStyle(size)}>{prefix}</div>}
        <div css={inputStyle}>
          <input
            ref={inputRef}
            disabled={disabled}
            placeholder={placeholder}
            value={showValue}
            onKeyDown={onKeyDown}
            onChange={onChange}
            {...readOnlyProps}
            css={applyRealInputStyle(size)}
          />
        </div>
        <div css={baseSuffixStyle}>
          {allowClear && showValue && (
            <span onClick={onClear} css={clearIconStyle} className="clear-icon">
              <ClearIcon />
            </span>
          )}
          <span className="suffix-icon" css={suffixIconStyle}>
            {suffixIcon}
          </span>
        </div>
      </div>
    )
  },
)

DateInput.displayName = "DateInput"
