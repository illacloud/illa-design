/** @jsxImportSource @emotion/react */
import { Children, createContext, CSSProperties, forwardRef, ReactNode } from "react"
import { RadioGroupContextProps, RadioGroupProps } from "./interface"
import { css, SerializedStyles } from "@emotion/react"
import { Radio } from "./radio"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { applyRadioContainerVertical, applyRadioContainerHorizontal } from "./style"
import * as events from "events"
import { useMergeValue } from "./hook"

function isArray(obj: any) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

export const RadioGroupContext = createContext<RadioGroupContextProps | undefined>(undefined)

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>((props, ref) => {
  const {
    children, options, disabled,
    direction = "horizontal",
    ...otherProps
  } = props

  // const [value, setValue] = useMergeValue(undefined, {
  //   defaultValue: props.defaultValue,
  //   value: props.value,
  // });

  let radioGroupCss: SerializedStyles
  switch (direction) {
    case "vertical":
      radioGroupCss = applyRadioContainerVertical()
      break
    case "horizontal":
      radioGroupCss = applyRadioContainerHorizontal()
      break
  }

  const onChangeValue = (v: any, event: events): void => {
    console.log(event, props, 'onChangeValue')
  };

  const name = "uuid"

  return <RadioGroupContext.Provider value={{ name, options, disabled, ...otherProps }}>
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