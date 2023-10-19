import {
  forwardRef,
  SyntheticEvent,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react"
import { InputTagProps, TagObject } from "./interface"
import { useMergeValue } from "@illa-design/system"
import {
  applyAddBeforeAfterStyle,
  applyInputContainerStyle,
  applyInputTagContainerStyle,
  applyInputTagInputStyle,
  applyInputTagPlaceHolderStyle,
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
      onAdd,
      spaceInput,
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
      validate,
      onClear,
      transformValue,
      onInputChange,
      onKeyDown,
      onPressEnter,
      onRemove,
      renderItem,
      addBefore,
      bdRadius,
      inputTagRef,
      addAfter,
      labelInValue,
      ...otherProps
    } = props

    let borderList = bdRadius?.split(" ") ?? ["8px", "8px", "8px", "8px"]
    if (borderList.length == 2) {
      borderList = [borderList[0], borderList[1], borderList[0], borderList[1]]
    } else if (borderList.length == 3) {
      borderList = [borderList[0], borderList[1], borderList[2], borderList[1]]
    }

    const [focusInput, setFocusInput] = useState(false)

    const [finalValue, setFinalValue] = useMergeValue<TagObject[] | string[]>(
      [],
      {
        defaultValue: labelInValue
          ? (defaultValue as TagObject[])
          : (defaultValue as string[]),
        value: labelInValue ? (value as TagObject[]) : (value as string[]),
      },
    )

    const [finalInputValue, setFinalInputValue] = useMergeValue("", {
      defaultValue: "",
      value: inputValue,
    })

    const [calcBlockRef, calcBlockBounds] = useMeasure()

    const inputRef = useRef<HTMLInputElement>(null)
    const inputStateRef = useRef<boolean>(false)

    useImperativeHandle(
      inputTagRef,
      () => {
        return {
          focus: () => inputRef.current?.focus(),
        }
      },
      [],
    )

    const tags = useMemo(() => {
      return (
        <>
          {finalValue.map((v, i) => {
            let closeable: boolean
            if (labelInValue) {
              if ((v as TagObject).closeable === undefined) {
                closeable = !readOnly
              } else {
                closeable = (v as TagObject).closeable!!
              }
            } else {
              closeable = !readOnly
            }

            if (disabled) {
              closeable = false
            }

            return (
              <Tag
                css={tagStyle}
                key={
                  labelInValue
                    ? `${i.toString()}:${(v as TagObject).label}`
                    : `${i.toString()}:${value}`
                }
                visible={true}
                size={size}
                colorScheme="grayBlue"
                variant="light"
                closable={closeable}
                onClose={(e) => {
                  const newTagList = [...finalValue]
                  newTagList.splice(i, 1)
                  if (labelInValue) {
                    if (value === undefined) {
                      setFinalValue(newTagList as TagObject[])
                    }
                    onChange?.(newTagList as TagObject[])
                  } else {
                    if (value === undefined) {
                      setFinalValue(newTagList as string[])
                    }
                    onChange?.(newTagList as string[])
                  }
                  onRemove?.(v, i, e)
                }}
              >
                {renderItem?.(v) ??
                  (labelInValue ? (v as TagObject).label : (v as string))}
              </Tag>
            )
          })}
        </>
      )
    }, [
      finalValue,
      labelInValue,
      disabled,
      value,
      size,
      renderItem,
      readOnly,
      onRemove,
      onChange,
      setFinalValue,
    ])

    const saveInputValue = (e: SyntheticEvent) => {
      if (finalInputValue !== "") {
        let newList
        if (labelInValue) {
          const newTag = {
            label: finalValue.length.toString(),
            value: finalInputValue,
            closeable: true,
          } as TagObject
          newList = [
            ...(finalValue as TagObject[]),
            transformValue ? (transformValue(newTag) as TagObject) : newTag,
          ]
          onAdd?.(newTag, newList.length - 1, e)
        } else {
          newList = [
            ...(finalValue as string[]),
            (transformValue
              ? (transformValue(finalInputValue) as string)
              : finalInputValue) as string,
          ]
          onAdd?.(finalInputValue, newList.length - 1, e)
        }
        if (value === undefined) {
          setFinalValue(newList)
        }
        if (inputValue === undefined) {
          setFinalInputValue("")
        }
        onChange?.(newList)
        onInputChange?.("", e)
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
                border-radius: ${borderList[0]} 0 0 ${borderList[3]};
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
              borderList,
            ),
          ]}
          onClick={() => {
            inputRef.current?.focus()
          }}
        >
          {prefix && (
            <span
              css={applyPrefixSuffixStyle(
                disabled ?? false,
                css`
                  margin-right: ${size === "small" ? "8px" : "12px"};
                `,
              )}
            >
              {prefix}
            </span>
          )}
          <div css={tagsListStyle}>
            {tags}
            <input
              disabled={disabled}
              key="inputTagInput"
              ref={inputRef}
              autoFocus={autoFocus}
              readOnly={readOnly}
              css={applyInputTagInputStyle(size, calcBlockBounds.width + 1)}
              onChange={(e) => {
                if (inputValue === undefined) {
                  setFinalInputValue(e.currentTarget.value)
                }
                onInputChange?.(e.currentTarget.value)
              }}
              onBlur={async (e) => {
                if (saveOnBlur) {
                  const checked = await validate?.(finalInputValue, finalValue)
                  if (checked || validate === undefined) {
                    saveInputValue(e)
                  }
                }
                onBlur?.(e)
                setFocusInput(false)
              }}
              onFocus={(e) => {
                onFocus?.(e)
                setFocusInput(true)
              }}
              value={finalInputValue}
              onCompositionStart={() => {
                inputStateRef.current = true
              }}
              onCompositionEnd={() => {
                inputStateRef.current = false
              }}
              onKeyDown={async (e) => {
                if (inputStateRef.current) {
                  return
                }
                onKeyDown?.(e)
                if (e.key === "Enter" || (e.key === " " && spaceInput)) {
                  inputRef.current?.focus()
                  onPressEnter?.(e)
                  const checked = await validate?.(finalInputValue, finalValue)
                  if (checked || validate === undefined) {
                    saveInputValue(e)
                  }
                }
                if (e.key === "Backspace" && finalInputValue === "") {
                  inputRef.current?.focus()
                  let newTagList
                  if (labelInValue) {
                    newTagList = [...(finalValue as TagObject[])]
                  } else {
                    newTagList = [...(finalValue as string[])]
                  }
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
            {placeholder && finalInputValue.length === 0 && (
              <div css={applyInputTagPlaceHolderStyle(size)}>{placeholder}</div>
            )}
          </div>
          {allowClear && !disabled && finalValue.length > 0 && (
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
                border-radius: 0 ${borderList[1]} ${borderList[2]} 0;
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
