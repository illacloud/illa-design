/** @jsxImportSource @emotion/react */
import * as React from "react"
import {
  forwardRef,
  useState,
  useRef,
  useCallback,
  useEffect,
  useImperativeHandle,
} from "react"
import NP from "number-precision"
import { InputNumberProps } from "./interface"
import { Input } from "@illa-design/input"
import { UpIcon, DownIcon, MinusIcon, PlusIcon } from "@illa-design/icon"
import { isNumber } from "@illa-design/system"
import {
  applyAddonCss,
  applyInputNumber,
  applyStepEmbed,
  applyStepEmbedContainer,
} from "./style"

type StepMethods = "minus" | "plus"

const getPrecision = (precision?: number, step?: number) => {
  if (isNumber(precision)) {
    const decimal = `${step}`.split(".")[1]
    const stepPrecision = (decimal && decimal.length) || 0
    return Math.max(stepPrecision, precision)
  }
  return null
}

export const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  (props, ref) => {
    const {
      style,
      className,
      inputRef,
      defaultValue,
      value,
      error,
      disabled,
      readOnly,
      hideControl,
      placeholder,
      suffix,
      prefix,
      icons,
      precision,
      size = "medium",
      step = 1,
      mode = "embed",
      min = -Infinity,
      max = Infinity,
      parser = (input) => input?.replace(/[^\w\.-]+/g, ""),
      formatter,
      onBlur,
      onFocus,
      onChange,
      onKeyDown,
      ...rest
    } = props

    const refInput = useRef<HTMLInputElement>(null)
    const timerRef = useRef<any>(null)
    const hasOperateRef = useRef(false)

    const renderStepEmbed = !hideControl && !readOnly && mode === "embed"
    const renderStepButton = !hideControl && mode === "button"
    const [inputValue, setInputValue] = useState<string>("")
    const [displayValue, setDisplayValue] = useState<string>("")
    const [isOutOfRange, setIsOutOfRange] = useState(false)
    const [isUserInputting, setIsUserInputting] = useState(false)
    const [currentValue, setCurrentValue] = useState<InputNumberProps["value"]>(
      "defaultValue" in props ? defaultValue : undefined,
    )
    const mergedValue = (() => {
      const val = "value" in props ? value : currentValue
      return typeof val === "string" && val !== "" ? +val : val
    })()

    const isEmptyValue =
      mergedValue === "" || mergedValue === undefined || mergedValue === null

    const mergedPrecision = getPrecision(precision, step)

    const getLegalValue = useCallback(
      (changedValue) => {
        let finalValue: string | number | undefined = Number(changedValue)
        if (!changedValue && changedValue !== 0) {
          finalValue = undefined
        } else if (!isNumber(finalValue)) {
          finalValue = changedValue === "-" ? changedValue : ""
        }
        if (finalValue !== undefined) {
          if (finalValue < min) {
            finalValue = min
          }
          if (finalValue > max) {
            finalValue = max
          }
        }
        return isNumber(finalValue)
          ? isNumber(mergedPrecision)
            ? Number(finalValue.toFixed(mergedPrecision))
            : finalValue
          : undefined
      },
      [min, max, mergedPrecision],
    )

    const setValue = (val?: number) => {
      setCurrentValue(val)
      const plusVal = val ? +val : undefined
      const newValue = isNumber(plusVal) ? plusVal : undefined
      if (newValue !== mergedValue) {
        onChange && onChange(newValue)
      }
    }

    const handleArrowKey = (
      event: any,
      method: StepMethods,
      needRepeat = false,
    ) => {
      event.persist()
      event.preventDefault()
      setIsUserInputting(false)

      if (disabled) {
        return
      }

      let finalValue = min === -Infinity ? 0 : min

      if (!isEmptyValue) {
        finalValue = NP[method](mergedValue, step)
      }

      setValue(getLegalValue(finalValue))
      refInput?.current?.focus?.()

      // auto change while holding
      if (needRepeat) {
        const isFirstRepeat = timerRef.current === null
        timerRef.current = setTimeout(
          () => event.target.dispatchEvent(event.nativeEvent),
          isFirstRepeat ? 1000 : 200,
        )
      }
    }

    const stop = () => {
      timerRef.current && clearTimeout(timerRef.current)
      timerRef.current = null
    }

    const stepEvents = (method: StepMethods) => {
      return readOnly
        ? {}
        : {
            onMouseDown: (e: any) => handleArrowKey(e, method, true),
            onMouseLeave: stop,
            onMouseUp: stop,
          }
    }

    useEffect(() => {
      let val: string | number
      if (isUserInputting) {
        val = inputValue
      } else if (isNumber(mergedValue) && isNumber(mergedPrecision)) {
        val = mergedValue.toFixed(mergedPrecision)
      } else if (mergedValue == null) {
        val = ""
      } else {
        val = mergedValue?.toString()
      }
      val = formatter ? formatter(val) : val
      setDisplayValue(val)
    }, [inputValue, isUserInputting, mergedValue, value])

    useEffect(() => {
      hasOperateRef.current = false
    }, [value])

    useEffect(() => {
      const outOfRange = isNumber(mergedValue)
        ? (isNumber(min) && mergedValue < min) ||
          (isNumber(max) && mergedValue > max)
        : false
      // Don't correct the illegal value caused by prop value. Wait for user to take actions.
      if (outOfRange && hasOperateRef.current) {
        setValue(getLegalValue(mergedValue))
      }
      setIsOutOfRange(outOfRange)
    }, [min, max, mergedValue, getLegalValue])

    useImperativeHandle(
      inputRef,
      () => refInput.current as HTMLInputElement,
      [],
    )

    const stateValue = {
      size,
    }

    return (
      <Input
        css={applyInputNumber}
        size={size}
        ref={ref}
        inputRef={refInput}
        style={style}
        className={className}
        error={error}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        value={displayValue}
        prefix={{ render: prefix }}
        suffix={{
          render: (
            <>
              {renderStepEmbed ? (
                <div
                  css={applyStepEmbedContainer(stateValue)}
                  title="inputStepEmbed"
                >
                  <span css={applyStepEmbed} {...stepEvents("plus")}>
                    {icons && icons.up ? icons.up : <UpIcon />}
                  </span>
                  <span css={applyStepEmbed} {...stepEvents("minus")}>
                    {icons && icons.down ? icons.down : <DownIcon />}
                  </span>
                </div>
              ) : null}
              {suffix && <span>{suffix}</span>}
            </>
          ),
          custom: true,
        }}
        addonBefore={{
          render: renderStepButton ? (
            <span css={applyAddonCss(stateValue)} {...stepEvents("minus")}>
              {icons && icons.plus ? icons.plus : <MinusIcon />}
            </span>
          ) : null,
          custom: true,
        }}
        addonAfter={{
          render: renderStepButton ? (
            <span css={applyAddonCss(stateValue)} {...stepEvents("plus")}>
              {icons && icons.minus ? icons.minus : <PlusIcon />}
            </span>
          ) : null,
          custom: true,
        }}
        onChange={(value: any) => {
          setIsUserInputting(true)
          let targetValue = value?.trim()?.replace?.(/。/g, ".")
          targetValue = parser ? parser(targetValue) : targetValue
          if (isNumber(+targetValue) || targetValue === "-" || !targetValue) {
            const formatValue = getLegalValue(targetValue)
            setInputValue(targetValue)
            setValue(formatValue)
          }
        }}
        onKeyDown={(e) => {
          e.stopPropagation()
          const key = e.key
          if (key === "ArrowDown") {
            handleArrowKey(e, "minus")
          } else if (key === "ArrowUp") {
            handleArrowKey(e, "plus")
          }
          stop()
          onKeyDown && onKeyDown(e)
        }}
        onFocus={(e) => {
          hasOperateRef.current = true
          setInputValue(refInput?.current?.value as string)
          onFocus && onFocus(e)
        }}
        onBlur={(e) => {
          setValue(getLegalValue(mergedValue))
          setIsUserInputting(false)
          onBlur && onBlur(e)
        }}
        {...rest}
      />
    )
  },
)

InputNumber.displayName = "InputNumber"
