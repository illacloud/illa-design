import {
  forwardRef,
  useRef,
  useState,
  useImperativeHandle,
  KeyboardEvent,
  useEffect,
} from "react"
import { css } from "@emotion/react"
import { omit, isArray } from "@illa-design/system"
import { ErrorIcon } from "@illa-design/icon"
import { RangeInputProps } from "./interface"
import {
  applyInputStyle,
  applyRangeContainer,
  applyRangeInput, applySuffixCls,
  mirrorStyle,
  pointerStyle,
  SeparatorStyle,
} from "./style"

export const RangeInput = forwardRef<HTMLInputElement, RangeInputProps>(
  (props, ref) => {
    const {
      style,
      className,
      inputGroupRef,
      allowClear,
      error,
      disabled,
      placeholder,
      value,
      inputValue,
      boarderColor = "blue",
      size = "medium",
      separator,
      format,
      suffix,
      popupVisible,
      focusedInputIndex,
      // events
      onChange,
      onClear,
      onFocus,
      onBlur,
      onPressEnter,
      onPressTab,
      changeFocusedInputIndex,
      ...otherProps
    } = props

    const disabled0 = isArray(disabled) ? disabled[0] : disabled
    const disabled1 = isArray(disabled) ? disabled[1] : disabled

    const [focus0, setFocus0] = useState(false)
    const [focus1, setFocus1] = useState(false)
    const [currentValue, setValue] = useState(value)

    const inputRef = useRef<HTMLInputElement>(null)
    const input1Ref = useRef<HTMLInputElement>(null)

    if (inputGroupRef) {
      useImperativeHandle(
        inputGroupRef,
        () => ({
          input0: inputRef.current,
          input1: input1Ref.current,
          focus: (index?: number) => {
            const focusedIndex =
              typeof index === "number" ? index : focusedInputIndex
            const focusElement =
              focusedIndex === 0 ? inputRef.current : input1Ref.current
            if (
              (focusedInputIndex === 0 && !disabled0) ||
              (focusedInputIndex === 1 && !disabled1)
            ) {
              focusElement?.focus()
            }
          },
          blur: () => {
            inputRef.current?.blur()
            input1Ref.current?.blur()
          },
        }),
        [],
      )
    }

    const changeFocusedInput = (index: number) => {
      if (focusedInputIndex !== index) {
        changeFocusedInputIndex?.(index)
      }
    }

    const getInputValue = (index: number) => {
      const valueText = currentValue?.[index] ?? '';

      return valueText;
    };

    const stateValue = {
      variant: 'outline',
      boarderColor,
      size,
      error,
      focus: focus0 || focus1,
      disabled: disabled0 && disabled1,
    }

    const inputProps = {
      onChange: (event: any) => {
        const value = event.target?.value
        const arr = currentValue || []
        if (focus0) {
          arr[0] = value
          setValue(arr)
        } else if (focus1) {
          arr[1] = value
          setValue(arr)
        }
        event?.stopPropagation()
        onChange?.(value, event)
      },
      onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => {
        const keyCode = e.keyCode || e.which
        // Enter
        if (keyCode === 13) {
          onPressEnter?.()
        }
        // Tab
        if (keyCode === 9) {
          onPressTab?.(e)
        }
      },
    }
    console.log(value, 'input value')

    return (
      <div ref={ref} css={applyRangeContainer(stateValue)} style={style} className={className}>
        <input
          ref={inputRef}
          css={css(applyInputStyle(), applyRangeInput())}
          value={currentValue?.[0] ?? ''}
          placeholder={placeholder?.[0]}
          disabled={disabled0}
          onFocus={(e) => {
            changeFocusedInput(0)
            setFocus0(true)
            onFocus?.(e)
          }}
          onBlur={(e) => {
            setFocus0(false)
            onBlur?.(e)
          }}
          {...inputProps}
          {...otherProps}
        />
        <span css={css`padding: 0 8px;`}>{separator || <div css={SeparatorStyle} />}</span>
        <input
          ref={input1Ref}
          css={css(applyInputStyle(), applyRangeInput())}
          value={currentValue?.[1] ?? ''}
          placeholder={placeholder?.[1]}
          disabled={disabled1}
          onFocus={(e) => {
            changeFocusedInput(1)
            setFocus1(true)
            onFocus?.(e)
          }}
          onBlur={(e) => {
            setFocus1(false)
            onBlur?.(e)
          }}
          {...inputProps}
          {...otherProps}
        />
        <span css={applySuffixCls(stateValue)}>
          {!disabled && allowClear && value ? (
            <span
              css={pointerStyle}
              onClick={(e) => {
                e.stopPropagation()
                inputRef?.current?.focus?.()
                onClear?.()
              }}
              onMouseDown={(e) => {
                e.preventDefault()
              }}
            >
            <ErrorIcon css={css(`margin-left: 10px;`)} />
          </span>
          ) : null}
          {suffix?.render ?? null}
        </span>
      </div>
    )
  },
)

RangeInput.displayName = "RangeInput"
