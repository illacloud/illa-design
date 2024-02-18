import {
  forwardRef,
  MutableRefObject,
  useCallback,
  useMemo,
  useRef,
  useState,
  FocusEvent,
} from "react"
import { InputNumberProps } from "./interface"
import { Input } from "@illa-design/input"
import { DownIcon, MinusIcon, PlusIcon, UpIcon } from "@illa-design/icon"
import { Space } from "@illa-design/space"
import { isNumber, mergeRefs } from "@illa-design/system"
import {
  applyActionIconStyle,
  applyControlBlockStyle,
  controlContainerStyle,
  hoverControlStyle,
} from "./style"
import { BigIntDecimal, getDecimal, NumberDecimal } from "./Decimal"

export const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  (props, ref) => {
    const {
      size = "medium",
      colorScheme = "blue",
      disabled,
      precision,
      error,
      hideControl,
      readOnly,
      max = Number.MAX_SAFE_INTEGER,
      min = Number.MIN_SAFE_INTEGER,
      step = 1,
      onBlur,
      onFocus,
      placeholder,
      mode = "embed",
      prefix,
      suffix,
      defaultValue,
      icons,
      inputRef,
      formatter,
      parser,
      onChange,
      onInput,
      ...otherProps
    } = props

    const mergedPrecision = (() => {
      if (isNumber(precision)) {
        const decimal = `${step}`.split(".")[1]
        const stepPrecision = (decimal && decimal.length) || 0
        return Math.max(stepPrecision, precision)
      }
      return null
    })()

    const [innerValue, setInnerValue] = useState(() => {
      return getDecimal(
        "value" in props
          ? props.value!
          : "defaultValue" in props
          ? defaultValue!
          : "",
      )
    })

    const [isUserTyping, setIsUserTyping] = useState(false)

    const [inputValue, setInputValue] = useState("")

    const value = useMemo(() => {
      return "value" in props ? getDecimal(props.value!) : innerValue
    }, [props, innerValue])

    const [maxDecimal, minDecimal] = useMemo(() => {
      return [getDecimal(max), getDecimal(min)]
    }, [max, min])

    const setValue = useCallback(
      (newValue: BigIntDecimal | NumberDecimal) => {
        setInnerValue(newValue)
        // @ts-ignore
        if (!newValue.equals(value) && onChange) {
          const newValueStr = newValue.toString({
            safe: true,
            precision: mergedPrecision ?? undefined,
          })
          onChange(
            newValue.isEmpty
              ? undefined
              : newValue.isNaN
              ? NaN
              : Number(newValueStr),
          )
        }
      },
      [mergedPrecision, onChange, value],
    )

    const getLegalValue = useCallback<
      (value: BigIntDecimal | NumberDecimal) => BigIntDecimal | NumberDecimal
    >(
      (changedValue) => {
        let finalValue = changedValue

        // @ts-ignore
        if (finalValue.less(minDecimal)) {
          finalValue = minDecimal
          // @ts-ignore
        } else if (maxDecimal.less(finalValue)) {
          finalValue = maxDecimal
        }

        return finalValue
      },
      [minDecimal, maxDecimal],
    )

    const currentInputRef =
      useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>

    const plusStep = useCallback((): void => {
      const finalValue = value.isInvalid
        ? getDecimal(min === -Infinity || (min <= 0 && max >= 0) ? 0 : min)
        : value.add(step)

      setValue(getLegalValue(finalValue))
      currentInputRef.current && currentInputRef.current.focus()
    }, [getLegalValue, max, min, setValue, step, value])

    const minusStep = useCallback((): void => {
      const finalValue = value.isInvalid
        ? getDecimal(min === -Infinity || (min <= 0 && max >= 0) ? 0 : min)
        : value.add(-step)

      setValue(getLegalValue(finalValue))
      currentInputRef.current && currentInputRef.current.focus()
    }, [getLegalValue, max, min, setValue, step, value])

    const control = (
      <div className="control" css={controlContainerStyle}>
        <div css={applyControlBlockStyle("up", size)} onClick={plusStep}>
          {icons?.up ?? <UpIcon />}
        </div>
        <div css={applyControlBlockStyle("bottom", size)} onClick={minusStep}>
          {icons?.down ?? <DownIcon />}
        </div>
      </div>
    )

    const handleOnChange = (v: string) => {
      setIsUserTyping(true)
      const rawText = v.trim().replace(/。/g, ".")
      const parsedValue = parser ? parser(rawText) : rawText
      if (
        isNumber(+parsedValue) ||
        parsedValue === "-" ||
        !parsedValue ||
        parsedValue === "."
      ) {
        setInputValue(rawText)
        setValue(getLegalValue(getDecimal(parsedValue)))
      }
    }

    const displayedInputValue = useMemo<string>(() => {
      let _value: string
      if (isUserTyping) {
        _value = parser ? `${parser(inputValue)}` : inputValue
      } else if (isNumber(mergedPrecision)) {
        _value = value.toString({ safe: true, precision: mergedPrecision })
      } else if (value.isInvalid) {
        _value = ""
      } else {
        _value = value.toString()
      }

      return formatter ? `${formatter(_value)}` : _value
    }, [value, inputValue, isUserTyping, mergedPrecision, parser, formatter])

    const handleOnBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
      setValue(getLegalValue(value))
      setIsUserTyping(false)
      onBlur?.(e)
    }

    return (
      <Input
        ref={ref}
        {...otherProps}
        inputRef={mergeRefs(currentInputRef, inputRef)}
        _css={hoverControlStyle}
        size={size}
        value={displayedInputValue}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        onFocus={(e) => {
          setInputValue(currentInputRef.current?.value)
          onFocus?.(e)
        }}
        onPressEnter={() => {
          currentInputRef.current && currentInputRef.current.blur()
        }}
        readOnly={readOnly}
        placeholder={placeholder}
        prefix={prefix}
        suffix={
          <Space mr="-8px">
            {suffix}
            {!hideControl &&
              !readOnly &&
              !disabled &&
              mode === "embed" &&
              control}
          </Space>
        }
        addBefore={
          mode === "button" ? (
            <span css={applyActionIconStyle(size)} onClick={minusStep}>
              {icons?.minus ?? <MinusIcon />}
            </span>
          ) : undefined
        }
        addAfter={
          mode === "button" ? (
            <span css={applyActionIconStyle(size)} onClick={plusStep}>
              {icons?.plus ?? <PlusIcon />}
            </span>
          ) : undefined
        }
        colorScheme={colorScheme}
        disabled={disabled}
        error={error}
      />
    )
  },
)

InputNumber.displayName = "InputNumber"
