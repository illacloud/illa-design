/** @jsxImportSource @emotion/react */
import * as React from "react"
import {
  forwardRef,
  useRef,
  useState,
  ChangeEvent,
  useImperativeHandle,
  useEffect,
} from "react"
import { css } from "@emotion/react"
import { omit } from "@illa-design/system"
import { ErrorIcon } from "@illa-design/icon"
import { InputElementProps, InputRefType } from "./interface"
import { applyInputStyle, mirrorStyle, pointerStyle } from "./style"

export const InputElement = forwardRef<InputRefType, InputElementProps>(
  (props, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const mirrorInputRef = useRef<HTMLSpanElement>(null)

    const isComposition = useRef(false)
    const [compositionValue, setCompositionValue] = useState<
      string | undefined
    >("")

    const {
      allowClear,
      error,
      disabled,
      placeholder,
      showCount,
      onValueChange,
      maxLength,
      value,
      type,
      onClear,
      autoFitWidth,
      textCenterHorizontal,
      ...rest
    } = props

    const otherProps = omit(rest, [
      "prefix",
      "suffix",
      "className",
      "defaultValue",
      "addonBefore",
      "addonAfter",
      "showCount",
      "onKeyDown",
      "onPressEnter",
    ])

    useImperativeHandle(
      ref,
      () => {
        return {
          dom: inputRef.current,
          focus: () => {
            inputRef?.current?.focus?.()
          },
          blur: () => {
            inputRef?.current?.blur?.()
          },
        }
      },
      [],
    )

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target?.value
      if (!isComposition.current) {
        onValueChange && onValueChange(newValue, e)
      } else {
        setCompositionValue(newValue)
      }
    }

    // Handle Chinese keyboard input
    const onComposition = (
      e: React.CompositionEvent & React.ChangeEvent<HTMLInputElement>,
    ) => {
      if (e.type === "compositionend") {
        isComposition.current = false
        setCompositionValue(undefined)
        onValueChange && onValueChange(e?.target?.value, e)
      } else {
        isComposition.current = true
      }
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      const keyCode = e.keyCode || e.which
      if (isComposition.current) {
        return
      }
      props.onKeyDown?.(e)
      if (keyCode === 13) {
        props.onPressEnter?.(e)
      }
    }

    if (autoFitWidth) {
      useEffect(() => {
        if (mirrorInputRef.current && inputRef.current) {
          const width = mirrorInputRef.current.offsetWidth;
          inputRef.current.style.width = `${width + (width ? 8 : 4)}px`;
        }
      },[compositionValue, value, placeholder])
    }

    const inputProps = {
      ...otherProps,
      value: compositionValue || value || "",
      disabled,
      placeholder,
      onChange,
      onKeyDown,
      onCompositionStart: onComposition,
      onCompositionUpdate: onComposition,
      onCompositionEnd: onComposition,
    }

    const mirrorValue = inputProps.value || placeholder

    return (
      <>
        <input
          ref={inputRef}
          css={applyInputStyle(textCenterHorizontal)}
          {...inputProps}
          {...(type ? { type } : {})}
        />
        {!disabled && allowClear && value ? (
          <span
            css={pointerStyle}
            onClick={(e) => {
              e.stopPropagation()
              inputRef?.current?.focus?.()
              onClear && onClear()
            }}
            onMouseDown={(e) => {
              e.preventDefault()
            }}
          >
            <ErrorIcon css={css(`margin-left: 10px;`)} />
          </span>
        ) : null}
        {autoFitWidth ? (
          <span css={css(applyInputStyle(textCenterHorizontal), mirrorStyle)} ref={mirrorInputRef}>
            {mirrorValue && mirrorValue.replace(/\s/g, "\u00A0")}
          </span>
        ) : null}
      </>
    )
  },
)
