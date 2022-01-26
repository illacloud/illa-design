/** @jsxImportSource @emotion/react */
import * as React from "react"
import {
  ChangeEvent,
  CSSProperties,
  forwardRef,
  useState,
  useMemo,
  useEffect,
  ReactNode,
  useRef,
  useImperativeHandle,
} from "react"
import { css } from "@emotion/react"
import { omit, useMergeValue } from "@illa-design/system"
import { ErrorIcon } from "@illa-design/icon"
import { globalColor, illaPrefix } from "@illa-design/theme"
import autoSizeTextAreaHeight from "./autoSizeTextAreaHeight"
import { applyLengthErrorStyle, applyCountLimitStyle } from "./style"
import { InputSize, TextAreaProps, TextAreaType } from "./interface"
import {
  applyContainerCss,
  applyTextAreaContainer,
  applyTextAreaStyle,
  applyPrefixCls,
  clearStyle,
} from "./textarea-style"

import { formatForRule } from "./utils"

export interface TextAreaState {
  disabled?: boolean
  error?: boolean
  focus?: boolean
  variant?: string
  size?: InputSize
}

export const TextArea = forwardRef<TextAreaType, TextAreaProps>(
  (props, ref) => {
    const {
      allowClear,
      error,
      disabled,
      placeholder,
      maxLength,
      showCount,
      autoSize,
      defaultValue,
      variant = "outline",
      ...rest
    } = props

    const otherProps = omit(rest, [
      "className",
      "onChange",
      "onClear",
      "onFocus",
      "onBlur",
    ])

    const textAreaRef = useRef<HTMLTextAreaElement | null>(null)
    const [autoSizeStyle, setAutoSizeStyle] = useState<CSSProperties>({})

    const isComposition = useRef(false)
    const [focus, setFocus] = useState(false)
    const [value, setValue] = useMergeValue("", {
      defaultValue: defaultValue
        ? formatForRule(defaultValue, maxLength)
        : undefined,
      value: props.value ? formatForRule(props.value, maxLength) : undefined,
    })
    const [composValue, setComposValue] = useState<string | undefined>()
    const valueLength = value ? value.length : 0
    let suffix: ReactNode

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
    }

    if (maxLength && showCount) {
      suffix = (
        <span css={applyCountLimitStyle}>
          <span css={applyLengthErrorStyle(lengthError)}>{valueLength}</span>
          <span>/{maxLength}</span>
        </span>
      )
    }

    if (disabled) {
      autoSizeStyle.resize = "none"
    }
    const onValueChange = (v: string, e: ChangeEvent<HTMLTextAreaElement>) => {
      if (!("value" in props)) {
        setValue(v)
      }
      props.onChange && props.onChange(e)
    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target?.value
      if (!isComposition.current) {
        onValueChange(newValue, e)
      } else {
        setComposValue(newValue)
      }
    }

    // Handle Chinese keyboard input
    const onComposition = (
      e: React.CompositionEvent & React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
      if (e.type === "compositionend") {
        isComposition.current = false
        setComposValue(undefined)
        onValueChange && onValueChange(e.target.value, e)
      } else {
        isComposition.current = true
      }
    }

    useImperativeHandle(
      ref,
      () => ({
        dom: textAreaRef.current,
        focus: () => {
          textAreaRef.current &&
            textAreaRef.current.focus &&
            textAreaRef.current.focus()
        },
        blur: () => {
          textAreaRef.current &&
            textAreaRef.current.blur &&
            textAreaRef.current.blur()
        },
      }),
      [],
    )

    useEffect(() => {
      if (textAreaRef?.current && autoSize) {
        const autoStyle = autoSizeTextAreaHeight(
          props.autoSize,
          textAreaRef.current,
        )
        autoStyle ? setAutoSizeStyle(autoStyle) : null
      }
    }, [value])

    const onClear = () => {
      if (!("value" in props) || !props.value) {
        setValue("")
      }
      props.onClear && props.onClear()
    }

    const textAreaProps = {
      ...otherProps,
      disabled,
      placeholder,
      value: composValue || value || "",
      onCompositionStart: onComposition,
      onCompositionUpdate: onComposition,
      onCompositionEnd: onComposition,
    }

    return (
      <>
        <span css={applyContainerCss} {...otherProps}>
          <span css={applyTextAreaContainer(stateValue)}>
            <textarea
              style={{ ...autoSizeStyle }}
              ref={textAreaRef}
              css={applyTextAreaStyle}
              {...textAreaProps}
              onChange={onChange}
              onFocus={(e) => {
                setFocus(true)
                props.onFocus && props.onFocus(e)
              }}
              onBlur={(e) => {
                setFocus(false)
                props.onBlur && props.onBlur(e)
              }}
            />
            {!disabled && allowClear && value ? (
              <span
                css={clearStyle}
                onClick={(e) => {
                  e.stopPropagation()
                  onClear && onClear()
                }}
                onMouseDown={(e) => {
                  e.preventDefault()
                }}
              >
                <ErrorIcon
                  css={css`
                    color: ${globalColor(`--${illaPrefix}-gray-07`)};
                    width: 12px;
                    height: 12px;
                  `}
                />
              </span>
            ) : null}
          </span>
          {suffix ? <span css={applyPrefixCls}>{suffix}</span> : null}
        </span>
      </>
    )
  },
)

TextArea.displayName = "TextArea"
