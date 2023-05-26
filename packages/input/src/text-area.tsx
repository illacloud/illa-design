import {
  CSSProperties,
  forwardRef,
  MutableRefObject,
  useRef,
  useState,
} from "react"
import { TextAreaProps } from "./interface"
import {
  applyInputDisabledStyle,
  applyInputStyle,
  applyMaxLengthBeforeStyle,
  applyWordLimitStyle,
  areaLimitStyle,
  textareaContainerStyle,
  textareaStyle,
} from "./style"
import { mergeRefs, useMergeValue } from "@illa-design/system"
import { ClearIcon } from "@illa-design/icon"
import { applyBoxStyle, deleteCssProps, getColor } from "@illa-design/theme"
import autoSizeTextAreaHeight from "./autoSizeTextAreaHeight"
import { useIsomorphicLayoutEffect } from "framer-motion"

export const TextArea = forwardRef<HTMLDivElement, TextAreaProps>(
  (props, ref) => {
    const {
      variant = "outline",
      colorScheme = "blue",
      textAreaRef,
      allowClear,
      disabled,
      error,
      defaultValue,
      placeholder,
      value,
      autoSize,
      maxLength,
      onChange,
      onClear,
      onPressEnter,
      readOnly,
      bdRadius,
      showWordLimit,
      ...otherProps
    } = props

    let borderList = bdRadius?.split("") ?? ["8px", "8px", "8px", "8px"]
    if (borderList.length == 2) {
      borderList = [borderList[0], borderList[1], borderList[0], borderList[1]]
    } else if (borderList.length == 3) {
      borderList = [borderList[0], borderList[1], borderList[2], borderList[1]]
    }

    const [finalError, setFinalError] = useMergeValue(false, {
      defaultValue: false,
      value: error,
    })

    const [finalValue, setFinalValue] = useMergeValue("", {
      defaultValue: defaultValue,
      value: value,
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

    const internalTextAreaRef =
      useRef<HTMLTextAreaElement>() as MutableRefObject<HTMLTextAreaElement>

    const [textAreaStyle, setTextAreaStyle] = useState<CSSProperties>({})

    const resizeTextAreaHeight = () => {
      const textAreaStyle = autoSizeTextAreaHeight(
        props.autoSize,
        internalTextAreaRef.current,
      )
      if (textAreaStyle) {
        setTextAreaStyle(textAreaStyle)
      }
    }

    useIsomorphicLayoutEffect(() => {
      resizeTextAreaHeight()
    }, [finalValue])

    return (
      <div
        ref={ref}
        css={[textareaContainerStyle, applyBoxStyle(otherProps)]}
        {...deleteCssProps(otherProps)}
      >
        <textarea
          disabled={disabled}
          ref={mergeRefs(internalTextAreaRef, textAreaRef)}
          value={finalValue}
          style={textAreaStyle}
          maxLength={finalMaxLengthErrorOnly ? undefined : finalMaxLength}
          onChange={(e) => {
            onChange?.(e.target.value, e)
            if (finalMaxLength && e.target.value.length > finalMaxLength) {
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
              setFinalValue(e.target.value)
            }
          }}
          readOnly={readOnly}
          placeholder={placeholder}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (onPressEnter) {
                onPressEnter?.(e)
                e.preventDefault()
              }
            }
          }}
          css={[
            disabled
              ? applyInputDisabledStyle(
                  "medium",
                  variant,
                  colorScheme,
                  finalError,
                  false,
                  false,
                  borderList,
                )
              : applyInputStyle(
                  "medium",
                  variant,
                  colorScheme,
                  finalError,
                  false,
                  false,
                  borderList,
                ),
            textareaStyle,
          ]}
        />
        {allowClear &&
          !readOnly &&
          !disabled &&
          finalValue &&
          finalValue?.length > 0 && (
            <ClearIcon
              className="clear"
              onClick={(e) => {
                onClear?.()
                if (value === undefined) {
                  setFinalValue("")
                }
                onChange?.("", e)
              }}
              pos="absolute"
              posT="10px"
              posR="5px"
              cursor="pointer"
              fs="12px"
              ml="4px"
              z={3}
              c={getColor("grayBlue", "06")}
            />
          )}
        {showWordLimit && (
          <span css={[applyWordLimitStyle("medium"), areaLimitStyle]}>
            <span css={applyMaxLengthBeforeStyle(finalError)}>
              {finalValue?.length ?? 0}
            </span>
            {`${finalMaxLength !== undefined ? "/" + finalMaxLength : ""}`}
          </span>
        )}
      </div>
    )
  },
)

TextArea.displayName = "TextArea"
