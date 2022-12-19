import { forwardRef, useMemo, useRef } from "react"
import { InputTagProps, TagObject } from "./interface"
import { useMergeValue } from "@illa-design/system"
import {
  applyAddBeforeAfterStyle,
  applyInputContainerStyle,
  applyInputTagContainerStyle,
  applyInputTagInputStyle,
  applyPrefixSuffixStyle,
  calcSpanStyle,
  tagsListStyle,
  tagStyle,
} from "./style"
import { Tag } from "@illa-design/tag"
import { ClearIcon } from "@illa-design/icon"
import { applyBoxStyle, deleteCssProps, getColor } from "@illa-design/theme"
import useMeasure from "react-use-measure"
import { css } from "@emotion/react"

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
      prefix,
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
      addBefore,
      addAfter,
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
        css={[applyInputContainerStyle(), applyBoxStyle(otherProps)]}
        ref={ref}
        {...deleteCssProps(otherProps)}
      >
        {addBefore && (
          <span
            css={applyAddBeforeAfterStyle(
              size,
              disabled ?? false,
              css`
                margin-right: -1px;
                border-radius: 4px 0 0 4px;
              `,
            )}
          >
            {addBefore}
          </span>
        )}
        <div
          css={[
            applyInputTagContainerStyle(
              size,
              colorScheme,
              error ?? false,
              disabled ?? false,
              addBefore !== undefined,
              addAfter !== undefined,
            ),
          ]}
          onClick={() => {
            inputRef.current?.focus()
          }}
        >
          {prefix && (
            <span
              css={applyPrefixSuffixStyle(
                size,
                disabled ?? false,
                css`
                  margin-right: ${size === "small" ? "8px" : "12px"};
                `,
              )}
            >
              {prefix}
            </span>
          )}
          <span css={tagsListStyle}>
            {tags}
            <input
              disabled={disabled}
              key="inputTagInput"
              ref={inputRef}
              placeholder={placeholder}
              autoFocus={autoFocus}
              readOnly={readOnly}
              css={applyInputTagInputStyle(size, calcBlockBounds.width + 12)}
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
                  const removedTag = newTagList.pop()
                  if (value === undefined) {
                    setFinalValue(newTagList)
                  }
                  if (removedTag) {
                    onRemove?.(removedTag, newTagList.length, e)
                  }
                  onChange?.(newTagList)
                }
              }}
            />
          </span>
          {allowClear && !readOnly && !disabled && finalValue.length > 0 && (
            <ClearIcon
              className="clear"
              flexShrink="0"
              onClick={(e) => {
                e.stopPropagation()
                onClear?.()
                if (value === undefined) {
                  setFinalValue([])
                }
                onChange?.([])
              }}
              cursor="pointer"
              fs="12px"
              ml="4px"
              c={getColor("grayBlue", "06")}
            />
          )}
          {suffix && (
            <span
              css={applyPrefixSuffixStyle(
                size,
                disabled ?? false,
                css`
                  margin-left: ${size === "small" ? "8px" : "12px"};
                `,
              )}
            >
              {suffix}
            </span>
          )}
          <span ref={calcBlockRef} css={calcSpanStyle}>
            {finalInputValue.replace(/\s/g, "\u00A0")}
          </span>
        </div>
        {addAfter && (
          <span
            css={applyAddBeforeAfterStyle(
              size,
              disabled ?? false,
              css`
                margin-left: -1px;
                border-radius: 0 4px 4px 0;
              `,
            )}
          >
            {addAfter}
          </span>
        )}
      </div>
    )
  },
)

InputTag.displayName = "InputTag"
