import { forwardRef, useCallback } from "react"
import { InputNumberProps } from "./interface"
import { Input } from "@illa-design/input"
import { DownIcon, MinusIcon, PlusIcon, UpIcon } from "@illa-design/icon"
import { Space } from "@illa-design/space"
import { useMergeValue } from "@illa-design/system"
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
      placeholder,
      mode = "embed",
      prefix,
      suffix,
      defaultValue,
      value,
      icons,
      formatter,
      onChange,
      ...otherProps
    } = props

    const [finalValue, setFinalValue] = useMergeValue<"" | number>("", {
      defaultValue: defaultValue,
      value: value,
    })

    const plusStep = useCallback((): void => {
      if (finalValue === "") {
        if (0 <= max && 0 >= min) {
          if (value === undefined) {
            setFinalValue(0)
          }
          onChange?.(0)
        }
      } else {
        if (finalValue + step <= max && finalValue + step >= min) {
          if (value === undefined) {
            setFinalValue(finalValue + step)
          }
          onChange?.(finalValue + step)
        }
      }
    }, [finalValue, max, min, onChange, setFinalValue, step, value])
    const minusStep = useCallback((): void => {
      if (finalValue === "") {
        if (0 <= max && 0 >= min) {
          if (value === undefined) {
            setFinalValue(0)
          }
          onChange?.(0)
        }
      } else {
        if (finalValue - step <= max && finalValue - step >= min) {
          if (value === undefined) {
            setFinalValue(finalValue - step)
          }
          onChange?.(finalValue - step)
        }
      }
    }, [finalValue, max, min, onChange, setFinalValue, step, value])

    const control = (
      <div className="control" css={controlContainerStyle}>
        <div
          css={applyControlBlockStyle("up", size)}
          onClick={() => {
            plusStep()
          }}
        >
          {icons?.up ?? <UpIcon />}
        </div>
        <div
          css={applyControlBlockStyle("bottom", size)}
          onClick={() => {
            minusStep()
          }}
        >
          {icons?.down ?? <DownIcon />}
        </div>
      </div>
    )

    return (
      <Input
        ref={ref}
        css={hoverControlStyle}
        size={size}
        value={formatter ? formatter(finalValue) : finalValue}
        onChange={(v) => {
          if (isNaN(Number(v))) {
            return
          }
          if (value === undefined) {
            if (v === "") {
              setFinalValue("")
            } else if (precision && precision >= step) {
              setFinalValue(Number(Number(v).toFixed(precision)))
            } else {
              setFinalValue(Number(v))
            }
          }
          if (v === "") {
            onChange?.(undefined)
          } else if (precision && precision >= step) {
            onChange?.(Number(Number(v).toFixed(precision)))
          } else {
            onChange?.(Number(v))
          }
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
