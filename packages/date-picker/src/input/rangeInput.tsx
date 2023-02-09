import {
  forwardRef,
  useImperativeHandle,
  useRef,
  KeyboardEvent,
  useCallback,
  ChangeEvent,
} from "react"
import { ClearIcon } from "@illa-design/icon"
import { omit } from "@illa-design/system"
import { DateInputRangeHandler, DateInputRangeProps } from "./interface"
import {
  applyInputWrapperStyle,
  applyPrefixStyle,
  applyRangeInputStyle,
  applyRealInputStyle,
  baseSuffixStyle,
  clearIconStyle,
  separatorStyle,
  suffixIconStyle,
} from "./style"

export const RangeDateInput = forwardRef<
  DateInputRangeHandler,
  DateInputRangeProps
>((props, ref) => {
  const {
    allowClear,
    error,
    disabled,
    placeholder = [],
    value = [],
    popupVisible,
    format,
    size = "medium",
    colorScheme = "blue",
    onClear,
    editable,
    inputValue,
    onPressEnter,
    onPressTab,
    onChange,
    separator,
    suffixIcon,
    changeFocusedInputIndex,
    focusedInputIndex,
    isPlaceholder,
    prefix,
    ...rest
  } = props

  const input0 = useRef<HTMLInputElement>(null)
  const input1 = useRef<HTMLInputElement>(null)

  const disabled1 = Array.isArray(disabled) ? disabled[0] : disabled
  const disabled2 = Array.isArray(disabled) ? disabled[1] : disabled

  const readOnlyProps = editable ? {} : { readOnly: true }

  useImperativeHandle(ref, () => ({
    focus: (index?: number) => {
      const focusedIndex = typeof index === "number" ? index : focusedInputIndex
      const focusElement = focusedIndex === 0 ? input0 : input1
      if (
        (focusedInputIndex === 0 && !disabled1) ||
        (focusedInputIndex === 1 && !disabled2)
      ) {
        focusElement.current &&
          focusElement.current.focus &&
          focusElement.current.focus()
      }
    },
    blur: () => {
      if (focusedInputIndex === 0) {
        input0.current && input0.current.blur && input0.current.blur()
      }
      if (focusedInputIndex === 1) {
        input1.current && input1.current.blur && input1.current.blur()
      }
    },
  }))

  const changeFocusedInput = useCallback(
    (index: number) => {
      if (focusedInputIndex !== index) {
        changeFocusedInputIndex?.(index)
      }
    },
    [changeFocusedInputIndex, focusedInputIndex],
  )

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      const keyCode = e.code
      if (keyCode === "Enter") {
        onPressEnter?.()
      }
      if (keyCode === "Tab") {
        changeFocusedInput(Number(!focusedInputIndex))
        onPressTab?.(e)
      }
    },
    [changeFocusedInput, focusedInputIndex, onPressEnter, onPressTab],
  )

  function onChangeInput(e: ChangeEvent<HTMLInputElement>) {
    e.stopPropagation()
    onChange?.(e)
  }

  const getInputValue = useCallback(
    (index: number) => {
      const valueText = value[index] ? value[index].format(format) : ""
      if (inputValue) {
        return index === focusedInputIndex ? inputValue : valueText
      }
      return valueText
    },
    [focusedInputIndex, format, inputValue, value],
  )

  return (
    <div
      {...omit(rest, ["onChange", "onPressEnter"])}
      css={applyInputWrapperStyle(
        size,
        colorScheme,
        disabled1 && disabled2,
        error,
        allowClear && value.length === 2,
      )}
    >
      {prefix && <div css={applyPrefixStyle(size)}>{prefix}</div>}
      <div
        css={applyRangeInputStyle(!!popupVisible && focusedInputIndex === 0)}
      >
        <input
          ref={input0}
          disabled={disabled1}
          placeholder={placeholder[0]}
          value={getInputValue(0)}
          onChange={onChangeInput}
          onKeyDown={onKeyDown}
          onClick={() => changeFocusedInput(0)}
          {...readOnlyProps}
          css={applyRealInputStyle(size)}
        />
      </div>
      <span css={separatorStyle}>{separator || "-"}</span>
      <div
        css={applyRangeInputStyle(!!popupVisible && focusedInputIndex === 1)}
      >
        <input
          ref={input1}
          disabled={disabled2}
          placeholder={placeholder[1]}
          value={getInputValue(1)}
          onChange={onChangeInput}
          onKeyDown={onKeyDown}
          onClick={() => changeFocusedInput(1)}
          {...readOnlyProps}
          css={applyRealInputStyle(size)}
        />
      </div>
      <div css={baseSuffixStyle}>
        {allowClear && value.length === 2 && (
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
})

RangeDateInput.displayName = "RangeDateInput"
