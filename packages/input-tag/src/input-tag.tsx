/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, useState, useMemo, useRef } from "react"
import { motion } from "framer-motion"
import { useMergeValue } from "@illa-design/system"
import { InputElement } from "@illa-design/input"
import { Tag } from "@illa-design/tag"
import { InputTagProps } from "./interface"
import { applyInputContainer, applySuffixCls } from "./style"
import { formatValue, ObjectValueType } from "./utils"
import { css } from "@emotion/react"

export interface StateValue {
  disabled?: boolean
  error?: boolean
  focus?: boolean
  size?: InputTagProps["size"]
}

export const InputTag = forwardRef<HTMLDivElement, InputTagProps<any>>(
  (props, ref) => {
    const {
      style,
      className,
      value,
      defaultValue,
      inputValue,
      placeholder,
      allowClear,
      error,
      disabled,
      readOnly,
      suffix,
      icon,
      validate,
      labelInValue,
      size = "medium",
      // events
      onClear,
      onRemove,
      onFocus,
      onBlur,
      onClick,
      onPaste,
      onChange,
      onPressEnter,
      onInputChange,
      ...rest
    } = props

    const [focus, setFocus] = useState(false)
    const [currentValue, setValue] = useMergeValue<ObjectValueType[]>([], {
      defaultValue: defaultValue ? formatValue(defaultValue) : undefined,
      value: value ? formatValue(value) : undefined,
    })
    const [currentInputValue, setInputValue] = useMergeValue("", {
      value: inputValue,
    })

    const stateValue = {
      error,
      disabled,
      focus,
      size,
    }
    const valueChangeHandler = (value: ObjectValueType[]) => {
      if (disabled || readOnly) {
        return
      }
      if (!("value" in props)) {
        setValue(value)
      }
      onChange?.(labelInValue ? value : value?.map((item) => item.value))
    }

    const tagCloseHandler = (itemValue: ObjectValueType, index: number) => {
      onRemove?.(itemValue, index)
      valueChangeHandler([...currentValue?.slice(0, index), ...currentValue?.slice(index + 1)])
    }

    const mergedRenderTag = (item: ObjectValueType, index: number) => {
      const { value: itemValue, label } = item
      const closable = !readOnly && !disabled && item.closable !== false

      return (
        <Tag
          visible
          closable={closable}
          onClose={() => {
            tagCloseHandler(item, index)
          }}
        >
        <span>
          {typeof label === "string" ? label.replace(/\s/g, "\u00A0") : label}
        </span>
        </Tag>
      )
    }

    const tryAddInputValueToTag = async () => {
      try {
        const isLegal = typeof validate === "function" ? await validate(currentInputValue, currentValue) : true
        if (isLegal) {
          valueChangeHandler(currentValue?.concat({ value: currentInputValue, label: currentInputValue }))
          setInputValue("")
        }
      } catch (error) {
        console.error(error)
      }
    }

    return (
      <div style={style} className={className} ref={ref} {...rest}>
          <span css={applyInputContainer(stateValue)}>
            <>
              {currentValue?.map((tag, index) => {
                const isRepeat = currentValue?.findIndex((item) => item.value === tag.value) !== index
                return (
                  <motion.div
                    css={css`margin-right: 8px;`} initial="initial" animate={"show"} exit={"hidden"} key={index}>
                    {mergedRenderTag(tag, index)}
                  </motion.div>
                )
              })}
            </>
            <InputElement
              size={size}
              value={currentInputValue}
              disabled={disabled}
              readOnly={readOnly}
              placeholder={!currentValue?.length ? placeholder : ""}
              onFocus={(event) => {
                if (!disabled && !readOnly) {
                  setFocus(true)
                  onFocus?.(event)
                }
              }}
              onBlur={(event) => {
                setFocus(false)
                onBlur?.(event)
                setInputValue("")
              }}
              onValueChange={(value, event) => {
                setInputValue(value)
                onInputChange?.(value, event)
              }}
              onPressEnter={async (event) => {
                onPressEnter?.(event)
                await tryAddInputValueToTag()
              }}
            />
            {suffix ? (
              <span css={applySuffixCls(stateValue)}>{suffix}</span>
            ) : null}
          </span>
      </div>
    )
  },
)

InputTag.displayName = "InputTag"
