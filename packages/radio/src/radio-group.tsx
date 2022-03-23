import { ChangeEvent, forwardRef } from "react"
import { RadioGroupProps } from "./interface"
import { SerializedStyles } from "@emotion/react"
import { Radio } from "./radio"
import {
  applyRadioButtonContainer,
  applyRadioContainerHorizontal,
  applyRadioContainerVertical,
} from "./style"
import { useMergeValue } from "./hook"
import { RadioGroupContext } from "./radio-group-context"

function isArray(obj: any) {
  return Object.prototype.toString.call(obj) === "[object Array]"
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps<any>>(
  (props, ref) => {
    const {
      children,
      options,
      disabled,
      colorScheme,
      direction = "horizontal",
      spacing = direction === "horizontal" ? "24px" : "16px",
      type = "radio",
      size = "medium",
      name,
      onChange,
      ...otherProps
    } = props

    const [value, setValue] = useMergeValue(undefined, {
      defaultValue: props.defaultValue,
      value: props.value,
    })

    let radioGroupCss: SerializedStyles

    if (type === "button") {
      radioGroupCss = applyRadioButtonContainer(size)
    } else {
      switch (direction) {
        case "vertical":
          radioGroupCss = applyRadioContainerVertical(spacing)
          break
        case "horizontal":
          radioGroupCss = applyRadioContainerHorizontal(spacing)
          break
      }
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
      type,
      size,
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
                return typeof option === "string" ||
                  typeof option === "number" ? (
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

RadioGroup.displayName = "RadioGroup"
