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
import { applyInputStyle, mirrorStyle, pointerStyle } from "./style"

export const RangeInput = forwardRef<HTMLInputElement, RangeInputProps>(
  (props, ref) => {
    const {
      InputGroupRef,
      allowClear,
      error,
      disabled,
      placeholder,
      value,
      type,
      separator,
      focusedInputIndex,
      // events
      onChange,
      onClear,
      onPressEnter,
      onPressTab,
      ...otherProps
    } = props

    const disabled0 = isArray(disabled) ? disabled[0] : disabled
    const disabled1 = isArray(disabled) ? disabled[1] : disabled

    const inputRef = useRef<HTMLInputElement>(null)
    const input1Ref = useRef<HTMLInputElement>(null)
    const mirrorInputRef = useRef<HTMLSpanElement>(null)

    const isComposition = useRef(false)
    const [compositionValue, setCompositionValue] = useState<
      string | undefined
    >("")

    if (InputGroupRef) {
      useImperativeHandle(
        InputGroupRef,
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

    const inputProps = {
      onChange: (e: any) => {
        e?.stopPropagation()
        onChange?.(e)
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

    return (
      <div {...otherProps}>
        <input
          ref={inputRef}
          css={applyInputStyle()}
          placeholder={placeholder?.[0]}
          disabled={isArray(disabled) ? disabled[0] : disabled}
          {...inputProps}
          {...(type ? { type } : {})}
        />
        <span>{separator || "-"}</span>
        <input
          ref={input1Ref}
          css={applyInputStyle()}
          placeholder={placeholder?.[1]}
          disabled={isArray(disabled) ? disabled[1] : disabled}
          {...inputProps}
          {...(type ? { type } : {})}
        />
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
      </div>
    )
  },
)

RangeInput.displayName = "RangeInput"
