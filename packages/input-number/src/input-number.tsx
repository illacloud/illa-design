import { forwardRef } from "react"
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

export const InputNumber = forwardRef<HTMLDivElement, InputNumberProps>(
  (props, ref) => {
    const {
      size = "medium",
      colorScheme = "blue",
      disabled,
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
      onChange,
      ...otherProps
    } = props

    const [finalValue, setFinalValue] = useMergeValue<"" | number>("", {
      defaultValue: defaultValue,
      value: value,
    })

    const plusStep = (): void => {
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
    }
    const minusStep = (): void => {
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
    }

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
        type="number"
        size={size}
        value={finalValue.toString()}
        onChange={(v) => {
          if (value === undefined) {
            setFinalValue(Number(v))
          }
          onChange?.(Number(v))
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
