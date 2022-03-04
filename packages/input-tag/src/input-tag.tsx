/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, ElementRef, useState, useRef } from "react"
import { useMergeValue } from "@illa-design/system"
import { InputElement } from "@illa-design/input"
import { ErrorIcon } from "@illa-design/icon"
import { InputTagProps, ObjectValueType } from "./interface"
import {
  applyInputContainer,
  applyInputInnerCss,
  applySuffixCls,
  pointerStyle,
} from "./style"
import { formatValue } from "./utils"
import { RenderTags } from "./render-tag"

export interface StateValue {
  disabled?: boolean
  error?: boolean
  focus?: boolean
  size?: InputTagProps["size"]
}

// default validate func
const defaultValidate = (inputValue: string, values: ObjectValueType[]) =>
  inputValue && values?.every((item) => item?.value !== inputValue)

export const InputTag = forwardRef<HTMLDivElement, InputTagProps>(
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
      validate = defaultValidate,
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
    const inputRef = useRef<ElementRef<typeof InputElement>>(null)

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

    const tryAddInputValueToTag = async () => {
      try {
        const isLegal =
          typeof validate === "function"
            ? await validate(currentInputValue, currentValue)
            : true
        if (isLegal) {
          valueChangeHandler(
            currentValue?.concat({
              value: currentInputValue,
              label: currentInputValue,
            }),
          )
          setInputValue("")
        }
      } catch (error) {
        throw new Error(`Cannot add inputValue to tag: ${error}`)
      }
    }

    return (
      <div
        css={applyInputContainer(stateValue)}
        style={style}
        className={className}
        ref={ref}
        onClick={(e) => {
          !focus && inputRef?.current?.focus?.()
          onClick?.(e)
        }}
        {...rest}
      >
        <span css={applyInputInnerCss(stateValue)}>
          <RenderTags
            value={currentValue}
            size={size}
            disabled={disabled}
            readOnly={readOnly}
            labelInValue={labelInValue}
            onRemove={onRemove}
            valueChangeHandler={valueChangeHandler}
          />
          <InputElement
            ref={inputRef}
            size={size}
            value={currentInputValue}
            disabled={disabled}
            readOnly={readOnly}
            autoFitWidth
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
        {allowClear && !disabled && currentValue?.length ? (
          <span
            css={pointerStyle}
            onClick={(e) => {
              e.stopPropagation()
              valueChangeHandler([])
              if (!focus) {
                inputRef?.current?.focus?.()
              }
              onClear?.()
            }}
            onMouseDown={(e: any) => {
              e?.target?.tagName !== "INPUT" && e.preventDefault()
            }}
          >
            <ErrorIcon />
          </span>
        ) : null}
      </div>
    )
  },
)

InputTag.displayName = "InputTag"
