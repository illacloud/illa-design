import {
  Children,
  cloneElement,
  forwardRef,
  PropsWithChildren,
  ReactElement,
} from "react"
import { isArray, useMergeValue } from "@illa-design/system"
import { CheckboxGroupProps, CheckboxOption, CheckboxProps } from "./interface"
import { SerializedStyles } from "@emotion/react"
import { Checkbox } from "./checkbox"
import {
  applyCheckboxContainerHorizontal,
  applyCheckboxContainerVertical,
} from "./style"
import { CheckboxGroupContext } from "./context"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (props, ref) => {
    const {
      children,
      options,
      disabled,
      value,
      defaultValue,
      direction = "horizontal",
      spacing = direction === "horizontal" ? "24px" : "16px",
      onChange,
      colorScheme,
      ...otherProps
    } = props

    const [currentValue, setCurrentValue] = useMergeValue<(string | number)[]>(
      [],
      {
        value: value,
        defaultValue: defaultValue,
      },
    )

    let checkboxGroupCss: SerializedStyles
    switch (direction) {
      case "vertical":
        checkboxGroupCss = applyCheckboxContainerVertical(spacing)
        break
      case "horizontal":
        checkboxGroupCss = applyCheckboxContainerHorizontal(spacing)
        break
    }

    return (
      <div
        css={[checkboxGroupCss, applyBoxStyle(props)]}
        ref={ref}
        {...deleteCssProps(otherProps)}
      >
        <CheckboxGroupContext.Provider value={props}>
          {isArray(options)
            ? options?.map((option, index) => {
                if (typeof option === "string" || typeof option === "number") {
                  return (
                    <Checkbox
                      key={index}
                      value={option}
                      disabled={disabled}
                      colorScheme={colorScheme}
                      onChange={(checked, event) => {
                        let finalValue = []
                        if (checked) {
                          finalValue = [...currentValue, option]
                        } else {
                          finalValue = currentValue.filter((v) => v !== option)
                        }
                        if (value === undefined) {
                          setCurrentValue(finalValue)
                        }
                        onChange?.(finalValue as [], event)
                      }}
                    >
                      {option.toString()}
                    </Checkbox>
                  )
                } else {
                  const optionObject = option as CheckboxOption
                  return (
                    <Checkbox
                      key={`${optionObject.value}-${index}`}
                      value={optionObject.value}
                      disabled={disabled ?? optionObject.disabled}
                      colorScheme={colorScheme}
                      onChange={(checked, event) => {
                        let finalValue = []
                        if (checked) {
                          finalValue = [...currentValue, optionObject.value]
                        } else {
                          finalValue = currentValue.filter(
                            (value) => value !== optionObject.value,
                          )
                        }
                        if (value === undefined) {
                          setCurrentValue(finalValue as [])
                        }
                        onChange?.(finalValue as [], event)
                      }}
                    >
                      {optionObject.label}
                    </Checkbox>
                  )
                }
              })
            : Children.map(children, (child, index) => {
                const item = child as ReactElement<
                  PropsWithChildren<CheckboxProps>
                >
                return cloneElement(item, {
                  ...item.props,
                  onChange: (checked, event) => {
                    item.props.onChange?.(checked, event)
                    let finalValue: (string | number)[] = []
                    if (checked) {
                      if (item.props.value) {
                        finalValue = [...currentValue, item.props.value]
                      }
                    } else {
                      finalValue = currentValue.filter(
                        (value) => value !== item.props.value,
                      )
                    }
                    if (value === undefined) {
                      setCurrentValue(finalValue as [])
                    }
                    onChange?.(finalValue as [], event)
                  },
                } as CheckboxProps)
              })}
        </CheckboxGroupContext.Provider>
      </div>
    )
  },
)

CheckboxGroup.displayName = "CheckboxGroup"
