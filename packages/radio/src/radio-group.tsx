/** @jsxImportSource @emotion/react */
import { ChangeEvent, createContext, forwardRef } from "react"
import { RadioGroupContextProps, RadioGroupProps } from "./interface"
import { SerializedStyles } from "@emotion/react"
import { Radio } from "./radio"
import { globalColor } from "@illa-design/theme"
import { applyRadioContainerVertical, applyRadioContainerHorizontal } from "./style"
import { useMergeValue } from "./hook"

function isArray(obj: any) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

export const RadioGroupContext = createContext<RadioGroupContextProps | undefined>(undefined)

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>((props, ref) => {
  const {
    children, options, disabled,
    direction = "horizontal",
  } = props

  const [value, setValue] = useMergeValue(undefined, {
    defaultValue: props.defaultValue,
    value: props.value,
  })

  let radioGroupCss: SerializedStyles
  switch (direction) {
    case "vertical":
      radioGroupCss = applyRadioContainerVertical()
      break
    case "horizontal":
      radioGroupCss = applyRadioContainerHorizontal()
      break
  }

  const onChangeValue = (v: any, event: ChangeEvent): void => {
    const { onChange } = props;
    if (v !== value) {
      if (!('value' in props)) {
        setValue(v);
      }
      onChange && onChange(v, event);
    }
  };

  const name = new Date().valueOf().toString()

  const contextProp = {
    onChangeValue,
    name, options, disabled, value
  };

  return <RadioGroupContext.Provider value={contextProp}>
    <div css={radioGroupCss} ref={ref}>
      {options && isArray(options)
        ? options.map((option, index) => {
          if (typeof option === "string") {
            return (
              <Radio key={index} value={option} disabled={disabled}>
                {option}
              </Radio>
            );
          }
          return (
            <Radio
              key={option.value}
              disabled={disabled || option.disabled}
              value={option.value}
            >
              {option.label}
            </Radio>
          );
        })
        : children}
    </div>
  </RadioGroupContext.Provider>
})