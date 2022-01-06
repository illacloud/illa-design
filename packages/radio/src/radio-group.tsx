/** @jsxImportSource @emotion/react */
import { ChangeEvent, createContext, forwardRef } from "react"
import { RadioGroupContextProps, RadioGroupProps } from "./interface"
import { SerializedStyles } from "@emotion/react"
import { Radio } from "./radio"
import { applyRadioContainerHorizontal, applyRadioContainerVertical } from "./style"
import { useMergeValue } from "./hook"

function isArray(obj: any) {
  return Object.prototype.toString.call(obj) === "[object Array]"
}

interface extraProps {
  onChangeValue?: (value: any, event: ChangeEvent) => void;
}

export const RadioGroupContext = createContext<(RadioGroupContextProps & extraProps) | undefined>(undefined)

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>((props, ref) => {
  const {
    children,
    options,
    disabled,
    onChange,
    colorScheme,
    direction = "horizontal",
    spacing = direction === "horizontal" ? "24px" : "16px",
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

  const onChangeValue = (v: any, event: ChangeEvent): void => {
    const { onChange } = props
    if (v !== value) {
      if (!("value" in props)) {
        setValue(v)
      }
      onChange && onChange(true, event)
    }
  }

  const name = new Date().valueOf().toString()

  const contextProp = {
    onChangeValue,
    name, options, disabled, value, spacing, colorScheme
  }

  return <div css={radioGroupCss} ref={ref} {...otherProps}>
    <RadioGroupContext.Provider value={contextProp}>
      {options && isArray(options)
        ? options.map((option, index) => {
          if (typeof option === "string") {
            return (
              <Radio key={index} value={option} disabled={disabled}>
                {option}
              </Radio>
            )
          }
          return (
            <Radio
              key={option.value}
              disabled={disabled || option.disabled}
              value={option.value}
            >
              {option.label}
            </Radio>
          )
        })
        : children}
    </RadioGroupContext.Provider>
  </div>
})