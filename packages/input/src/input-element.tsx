import {
  forwardRef,
  useRef,
  useState,
  ChangeEvent,
  useImperativeHandle,
  CompositionEvent,
  KeyboardEvent,
  useEffect,
} from "react"
import { css } from "@emotion/react"
import { omit } from "@illa-design/system"
import { ErrorIcon } from "@illa-design/icon"
import { InputElementProps } from "./interface"
import {
  applyClearStyle,
  applyInputStyle,
  mirrorStyle,
  pointerStyle,
} from "./style"

export const InputElement = forwardRef<HTMLInputElement, InputElementProps>(
  (props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const mirrorInputRef = useRef<HTMLSpanElement>(null)

    const isComposition = useRef(false)
    const [compositionValue, setCompositionValue] = useState<
      string | undefined
    >("")

    const {
      _css,
      allowClear,
      error,
      disabled,
      placeholder,
      showCount,
      onValueChange,
      maxLength,
      value,
      type,
      size,
      onClear,
      autoFitWidth,
      textCenterHorizontal,
      iconAppearWithSuffix,
      readOnly,
      ...rest
    } = props

    const otherProps = omit(rest, [
      "prefix",
      "suffix",
      "defaultValue",
      "addonBefore",
      "addonAfter",
      "showCount",
      "onKeyDown",
      "onPressEnter",
      "borderColor",
    ])

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, [])

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
      e: CompositionEvent & ChangeEvent<HTMLInputElement>,
    ) => {
      if (e.type === "compositionend") {
        isComposition.current = false
        setCompositionValue(undefined)
        onValueChange && onValueChange(e?.target?.value, e)
      } else {
        isComposition.current = true
      }
    }

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      const keyCode = e.keyCode || e.which
      if (isComposition.current) {
        return
      }
      props.onKeyDown?.(e)
      if (keyCode === 13) {
        props.onPressEnter?.(e)
      }
    }

    useEffect(() => {
      if (autoFitWidth && mirrorInputRef.current && inputRef.current) {
        const width = mirrorInputRef.current.offsetWidth
        inputRef.current.style.width = `${width + (width ? 8 : 4)}px`
      }
    }, [compositionValue, value, placeholder])

    const inputProps = {
      ...otherProps,
      value: compositionValue || value || "",
      disabled: disabled,
      readOnly: readOnly,
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
          css={css(applyInputStyle(textCenterHorizontal), _css)}
          {...inputProps}
          {...(type ? { type } : {})}
        />
        {!disabled && allowClear && value ? (
          <span
            title="InputClearIcon"
            css={css(pointerStyle, applyClearStyle(size, iconAppearWithSuffix))}
            onClick={(e) => {
              e.stopPropagation()
              inputRef?.current?.focus?.()
              onClear && onClear()
            }}
            onMouseDown={(e) => {
              e.preventDefault()
            }}
          >
            <ErrorIcon />
          </span>
        ) : null}
        {autoFitWidth ? (
          <span
            css={css(applyInputStyle(textCenterHorizontal), mirrorStyle)}
            ref={mirrorInputRef}
          >
            {mirrorValue && mirrorValue.replace(/\s/g, "\u00A0")}
          </span>
        ) : null}
      </>
    )
  },
)

InputElement.displayName = "InputElement"
