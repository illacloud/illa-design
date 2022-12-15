import { forwardRef, useMemo, useRef } from "react"
import { InputTagProps, TagObject } from "./interface"
import { useMergeValue } from "@illa-design/system"
import {
  applyInputTagContainerStyle,
  applyInputTagInputStyle,
  applySuffixStyle,
  calcSpanStyle,
  tagsListStyle,
  tagStyle,
} from "./style"
import { Tag } from "@illa-design/tag"
import { ClearIcon } from "@illa-design/icon"
import { applyBoxStyle, deleteCssProps, getColor } from "@illa-design/theme"
import useMeasure from "react-use-measure"

export const InputTag = forwardRef<HTMLDivElement, InputTagProps>(
  (props, ref) => {
    const {
      colorScheme = "blue",
      autoFocus,
      allowClear,
      disabled,
      error,
      readOnly,
      saveOnBlur,
      placeholder,
      inputValue,
      size = "medium",
      suffix,
      defaultValue,
      value,
      onBlur,
      onFocus,
      onChange,
      onClear,
      onInputChange,
      onKeyDown,
      onPressEnter,
      onRemove,
      renderItem,
      ...otherProps
    } = props

    const [finalValue, setFinalValue] = useMergeValue<TagObject[]>([], {
      defaultValue,
      value,
    })

    const [finalInputValue, setFinalInputValue] = useMergeValue("", {
      defaultValue: "",
      value: inputValue,
    })

    const [calcBlockRef, calcBlockBounds] = useMeasure()

    const inputRef = useRef<HTMLInputElement>(null)

    const tags = useMemo(() => {
      return finalValue.map((v, i) => {
        return (
          <Tag
            css={tagStyle}
            key={v.label}
            size={size}
            colorScheme="blackAlpha"
            variant="light"
            closable={readOnly ? false : v.closeable}
            onClose={(e) => {
              const newTagList = [...finalValue]
              newTagList.splice(i, 1)
              if (value === undefined) {
                setFinalValue(newTagList)
              }
              onRemove?.(v, i, e)
              onChange?.(newTagList)
            }}
          >
            {renderItem?.(v) ?? v?.value?.toString()}
          </Tag>
        )
      })
    }, [
      finalValue,
      onChange,
      onRemove,
      readOnly,
      renderItem,
      setFinalValue,
      size,
      value,
    ])

    const saveInputValue = () => {
      if (finalInputValue !== "") {
        let newList = [
          ...finalValue,
          {
            label: finalValue.length.toString(),
            value: finalInputValue,
            closeable: true,
          },
        ]
        if (value === undefined) {
          setFinalValue(newList)
        }
        if (inputValue === undefined) {
          setFinalInputValue("")
        }
        onChange?.(newList)
      }
    }

    return (
      <div
        css={[
          applyInputTagContainerStyle(
            size,
            colorScheme,
            error ?? false,
            disabled ?? false,
          ),
          applyBoxStyle(otherProps),
        ]}
        onClick={() => {
          inputRef.current?.focus()
        }}
        ref={ref}
        {...deleteCssProps(otherProps)}
      >
        {
          <span css={tagsListStyle}>
            {tags}
            <input
              disabled={disabled}
              key="inputTagInput"
              ref={inputRef}
              placeholder={placeholder}
              autoFocus={autoFocus}
              readOnly={readOnly}
              css={applyInputTagInputStyle(calcBlockBounds.width + 12)}
              onChange={(e) => {
                if (inputValue === undefined) {
                  setFinalInputValue(e.currentTarget.value)
                }
                onInputChange?.(e.currentTarget.value)
              }}
              onBlur={(e) => {
                if (saveOnBlur) {
                  saveInputValue()
                }
                onBlur?.(e)
              }}
              onFocus={(e) => {
                onFocus?.(e)
              }}
              value={finalInputValue}
              onKeyDown={(e) => {
                onKeyDown?.(e)
                if (e.key === "Enter") {
                  inputRef.current?.focus()
                  onPressEnter?.(e)
                  saveInputValue()
                }
                if (e.key === "Backspace" && finalInputValue === "") {
                  inputRef.current?.focus()
                  const newTagList = [...finalValue]
                  newTagList.pop()
                  if (value === undefined) {
                    setFinalValue(newTagList)
                  }
                  onChange?.(newTagList)
                }
              }}
            />
          </span>
        }
        {allowClear && !readOnly && !disabled && finalValue.length > 0 && (
          <ClearIcon
            flexShrink="0"
            onClick={() => {
              onClear?.()
              if (value === undefined) {
                setFinalValue([])
              }
            }}
            cursor="pointer"
            fs="12px"
            ml="4px"
            c={getColor("grayBlue", "06")}
          />
        )}
        {suffix && (
          <span css={applySuffixStyle(size, disabled ?? false)}>{suffix}</span>
        )}
        <span ref={calcBlockRef} css={calcSpanStyle}>
          {finalInputValue.replace(/\s/g, "\u00A0")}
        </span>
      </div>
    )
  },
)

InputTag.displayName = "InputTag"
