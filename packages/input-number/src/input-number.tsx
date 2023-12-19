import { forwardRef, MutableRefObject, useCallback, useRef } from "react"
import { InputNumberProps } from "./interface"
import { Input } from "@illa-design/input"
import { DownIcon, MinusIcon, PlusIcon, UpIcon } from "@illa-design/icon"
import { Space } from "@illa-design/space"
import { isNumber, useMergeValue } from "@illa-design/system"
import {
  applyActionIconStyle,
  applyControlBlockStyle,
  controlContainerStyle,
  hoverControlStyle,
} from "./style"

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
      value,
      icons,
      formatter,
      parser,
      onChange,
      ...otherProps
    } = props

    const [finalValue, setFinalValue] = useMergeValue<string | number>("", {
      value,
      defaultValue,
    })

    const inputRef =
      useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>

    const plusStep = useCallback((): void => {
      const currentNumber = Number(finalValue)

      if (!isNumber(currentNumber)) {
        if (0 <= max && 0 >= min) {
          if (value === undefined) {
            setFinalValue(0)
          }
          onChange?.(0)
        } else {
          if (value === undefined) {
            setFinalValue(min)
          }
          onChange?.(min)
        }
        return
      }

      if (currentNumber + step <= max && currentNumber + step >= min) {
        if (value === undefined) {
          setFinalValue(currentNumber + step)
        }
        onChange?.(currentNumber + step)
      }
    }, [finalValue, max, min, onChange, setFinalValue, step, value])
    const minusStep = useCallback((): void => {
      const currentNumber = Number(finalValue)

      if (!isNumber(currentNumber)) {
        if (0 <= max && 0 >= min) {
          if (value === undefined) {
            setFinalValue(0)
          }
          onChange?.(0)
        } else {
          if (value === undefined) {
            setFinalValue(min)
          }
          onChange?.(min)
        }
        return
      }

      if (currentNumber - step <= max && currentNumber - step >= min) {
        if (value === undefined) {
          setFinalValue(currentNumber - step)
        }
        onChange?.(currentNumber - step)
      }
    }, [finalValue, max, min, onChange, setFinalValue, step, value])

    const control = (
      <div className="control" css={controlContainerStyle}>
        <div
          css={applyControlBlockStyle("up", size)}
          onClick={() => {
            inputRef.current.focus()
            plusStep()
          }}
        >
          {icons?.up ?? <UpIcon />}
        </div>
        <div
          css={applyControlBlockStyle("bottom", size)}
          onClick={() => {
            inputRef.current.focus()
            minusStep()
          }}
        >
          {icons?.down ?? <DownIcon />}
        </div>
      </div>
    )

    const dealNumber = useCallback(
      (num: string | number) => {
        if (!isNumber(Number(num))) {
          if (0 <= max && 0 >= min) {
            return 0
          } else {
            return min
          }
        }
        if (precision !== undefined) {
          let formatNum = Number(Number(num).toFixed(precision))
          formatNum = Math.max(formatNum, min)
          formatNum = Math.min(formatNum, max)
          return formatNum
        } else {
          let formatNum = Number(num)
          formatNum = Math.max(formatNum, min)
          formatNum = Math.min(formatNum, max)
          return formatNum
        }
      },
      [max, min, precision],
    )

    return (
      <Input
        ref={ref}
        inputRef={inputRef}
        _css={hoverControlStyle}
        size={size}
        value={finalValue}
        onChange={(e) => {
          const rawValue = parser ? parser(e) : e
          if (isNumber(Number(rawValue))) {
            if (value === undefined) {
              setFinalValue(formatter ? formatter(rawValue) : rawValue)
            }
          } else {
            if (value === undefined) {
              setFinalValue(e)
            }
          }
          onChange?.(dealNumber(rawValue))
        }}
        onPressEnter={() => {
          const rawValue = parser
            ? parser(inputRef.current.value)
            : inputRef.current.value

          const dealNum = dealNumber(rawValue)

          if (value === undefined) {
            setFinalValue(formatter ? formatter(dealNum) : dealNum)
          }
          onChange?.(dealNum)
        }}
        onBlur={(e) => {
          const rawValue = parser ? parser(e.target.value) : e.target.value
          const dealNum = dealNumber(rawValue)
          if (value === undefined) {
            setFinalValue(formatter ? formatter(dealNum) : dealNum)
          }
          onChange?.(dealNum)
          onBlur?.(e)
        }}
        onFocus={(e) => {
          onFocus?.(e)
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
            <span
              css={applyActionIconStyle(size)}
              onClick={() => {
                minusStep()
              }}
            >
              {icons?.minus ?? <MinusIcon />}
            </span>
          ) : undefined
        }
        addAfter={
          mode === "button" ? (
            <span
              css={applyActionIconStyle(size)}
              onClick={() => {
                plusStep()
              }}
            >
              {icons?.plus ?? <PlusIcon />}
            </span>
          ) : undefined
        }
        colorScheme={colorScheme}
        disabled={disabled}
        error={error}
        {...otherProps}
      />
    )
  },
)

InputNumber.displayName = "InputNumber"
