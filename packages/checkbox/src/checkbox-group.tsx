/** @jsxImportSource @emotion/react */
import { ChangeEvent, createContext, forwardRef } from "react"
import { useMergeValue } from "@illa-design/system"
import { CheckboxGroupContextProps, CheckboxGroupProps } from "./interface"
import { SerializedStyles } from "@emotion/react"
import { Checkbox } from "./checkbox"
import { applyRadioContainerHorizontal, applyRadioContainerVertical } from "./style"

function isArray(obj: any) {
  return Object.prototype.toString.call(obj) === "[object Array]"
}

export const CheckboxGroupContext = createContext<CheckboxGroupContextProps>({
  isGroup: false,
  checkboxGroupValue: [],
  onGroupChange: () => {},
  registerValue: () => {},
  unRegisterValue: () => {},
})

export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>((props, ref) => {
  const {
    children,
    options,
    disabled,
    direction = "horizontal",
    spacing = direction === "horizontal" ? "24px" : "16px",
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
    options, disabled, value, spacing,
  }

  return <div css={radioGroupCss} ref={ref} {...otherProps}>
    <CheckboxGroupContext.Provider value={contextProp}>
      {options && isArray(options)
        ? options.map((option, index) => {
          return (
            typeof option === "string" ?
              <Checkbox key={index} value={option} disabled={disabled}>
                {option}
              </Checkbox>
              : <Checkbox
                key={option.value}
                value={option.value}
                disabled={disabled || option.disabled}
              >
                {option.label}
              </Checkbox>
          )
        })
        : children}
    </CheckboxGroupContext.Provider>
  </div>
})

CheckboxGroupContext.displayName = "CheckboxGroupContext"

CheckboxGroup.displayName = "CheckboxGroup"