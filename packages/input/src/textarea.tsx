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
import {
  applyBoxStyle,
  deleteCssProps,
  globalColor,
  illaPrefix,
} from "@illa-design/theme"
import autoSizeTextAreaHeight from "./autoSizeTextAreaHeight"
import { applyLengthErrorStyle, applyCountLimitStyle } from "./style"
import { TextAreaProps } from "./interface"
import {
  applyTextAreaContainer,
  applyTextAreaStyle,
  applyPrefixCls,
  clearStyle,
} from "./textarea-style"
import { formatForRule } from "./utils"

export const TextArea = forwardRef<HTMLSpanElement, TextAreaProps>(
  (props, ref) => {
    const {
      textAreaRef,
      allowClear,
      error,
      disabled,
      placeholder,
      maxLength,
      showCount,
      autoSize,
      defaultValue,
      bdRadius: borderRadius = "8px",
      borderColor = "blue",
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

    const refTextArea = useRef<HTMLTextAreaElement>(null)
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
      borderColor,
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

    const onChange = (e: any) => {
      const newValue = e.target?.value
      if (!isComposition.current) {
        onValueChange(newValue, e)
      } else {
        setComposValue(newValue)
      }
    }

    // Handle Chinese keyboard input
    const onComposition = (e: any) => {
      if (e.type === "compositionend") {
        isComposition.current = false
        setComposValue(undefined)
        onValueChange && onValueChange(e.target.value, e)
      } else {
        isComposition.current = true
      }
    }

    useImperativeHandle(
      textAreaRef,
      () => refTextArea.current as HTMLTextAreaElement,
      [],
    )

    useEffect(() => {
      if (refTextArea?.current && autoSize) {
        const autoStyle = autoSizeTextAreaHeight(
          props.autoSize,
          refTextArea.current,
        )
        autoStyle ? setAutoSizeStyle(autoStyle) : null
      }
    }, [value, defaultValue, placeholder, autoSize, props.autoSize])

    const onClear = () => {
      if (!("value" in props) || !props.value) {
        setValue("")
      }
      props.onClear && props.onClear()
    }

    const textAreaProps = {
      ...deleteCssProps(otherProps),
      disabled,
      placeholder,
      value: composValue || value || "",
      onCompositionStart: onComposition,
      onCompositionUpdate: onComposition,
      onCompositionEnd: onComposition,
    }

    return (
      <span
        ref={ref}
        css={[applyTextAreaContainer(stateValue), applyBoxStyle(props)]}
      >
        <textarea
          style={{ ...autoSizeStyle }}
          ref={refTextArea}
          css={applyTextAreaStyle(borderRadius)}
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
                color: ${globalColor(`--${illaPrefix}-grayBlue-07`)};
                width: 12px;
                height: 12px;
              `}
            />
          </span>
        ) : null}
        {suffix ? <span css={applyPrefixCls}>{suffix}</span> : null}
      </span>
    )
  },
)

TextArea.displayName = "TextArea"
