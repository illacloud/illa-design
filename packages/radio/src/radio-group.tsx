/** @jsxImportSource @emotion/react */
import { ChangeEvent, createContext, forwardRef } from "react"
import { RadioGroupContextProps, RadioGroupProps } from "./interface"
import { SerializedStyles } from "@emotion/react"
import { Radio } from "./radio"
import {
  applyRadioContainerHorizontal,
  applyRadioContainerVertical,
} from "./style"
import { useMergeValue } from "./hook"

function isArray(obj: any) {
  return Object.prototype.toString.call(obj) === "[object Array]"
}

interface extraProps {
  onChangeValue?: (value: any, event: ChangeEvent) => void
}

export const RadioGroupContext = createContext<
  (RadioGroupContextProps<any> & extraProps) | undefined
>(undefined)

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps<any>>(
  (props, ref) => {
    const {
      children,
      options,
      disabled,
      colorScheme,
      direction = "horizontal",
      spacing = direction === "horizontal" ? "24px" : "16px",
      name,
      onChange,
      ...otherProps
    } = props

    const [value, setValue] = useMergeValue(undefined, {
      defaultValue: props.defaultValue,
      value: props.value,
    })

    let radioGroupCss: SerializedStyles
    switch (direction) {
      case "vertical":
        radioGroupCss = applyRadioContainerVertical(spacing)
        break
      case "horizontal":
        radioGroupCss = applyRadioContainerHorizontal(spacing)
        break
    }

    function onChangeValue<T>(v: T, event: ChangeEvent): void {
      const { onChange } = props
      if (v !== value) {
        if (!("value" in props)) {
          setValue(v)
        }
        onChange && onChange(true, event)
      }
    }

    const contextProp = {
      onChangeValue,
      name,
      options,
      disabled,
      value,
      spacing,
      colorScheme,
    }

    return (
      <div css={radioGroupCss} ref={ref} {...otherProps}>
        <RadioGroupContext.Provider value={contextProp}>
          {options && isArray(options)
            ? options.map((option, index) => {
                return typeof option === "string" ? (
                  <Radio key={index} value={option} disabled={disabled}>
                    {option}
                  </Radio>
                ) : (
                  <Radio
                    key={option.value}
                    value={option.value}
                    disabled={disabled || option.disabled}
                  >
                    {option.label}
                  </Radio>
                )
              })
            : children}
        </RadioGroupContext.Provider>
      </div>
    )
  },
)

RadioGroupContext.displayName = "RadioGroupContext"

RadioGroup.displayName = "RadioGroup"
