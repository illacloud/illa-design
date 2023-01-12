import { forwardRef, useImperativeHandle, useRef, useState } from "react"
import { useMergeValue } from "@illa-design/system"
import { InputElement } from "@illa-design/input"
import { ErrorIcon } from "@illa-design/icon"
import { InputTagProps, ObjectValueType } from "./interface"
import {
  applyFilterInput,
  applyInputContainer,
  applyInputInnerCss,
  applySuffixCls,
  pointerStyle,
} from "./style"
import { formatValue } from "./utils"
import { RenderTags } from "./render-tag"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

// default validate func
const defaultValidate = (inputValue: string, values: ObjectValueType[]) =>
  inputValue && values?.every((item) => item?.value !== inputValue)

export const InputTag = forwardRef<HTMLDivElement, InputTagProps>(
  (props, ref) => {
    const {
      inputRef,
      value,
      defaultValue,
      inputValue,
      placeholder,
      allowClear,
      borderColor = "blue",
      error,
      disabled,
      readOnly,
      disableInput,
      suffix,
      icon,
      _css,
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
    const refInput = useRef<HTMLInputElement>(null)

    const stateValue = {
      error,
      disabled,
      focus,
      size,
      borderColor,
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

    useImperativeHandle(
      inputRef,
      () => refInput.current as HTMLInputElement,
      [],
    )

    return (
      <div
        ref={ref}
        css={[applyInputContainer(stateValue), applyBoxStyle(props)]}
        onClick={(e) => {
          !focus && refInput?.current?.focus?.()
          onClick?.(e)
        }}
        {...deleteCssProps(rest)}
      >
        <span css={applyInputInnerCss(size)}>
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
            ref={refInput}
            _css={applyFilterInput(stateValue)}
            size={size}
            value={currentInputValue}
            disabled={disabled || disableInput}
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
        </span>
        {suffix ? <span css={applySuffixCls(size)}>{suffix}</span> : null}
        {allowClear && !disabled && currentValue?.length ? (
          <span
            css={pointerStyle}
            onClick={(e) => {
              e.stopPropagation()
              valueChangeHandler([])
              if (!focus) {
                refInput?.current?.focus?.()
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
