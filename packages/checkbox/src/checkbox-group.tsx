import {
  forwardRef,
  ReactText,
  SyntheticEvent,
  useCallback,
  useState,
} from "react"
import { isArray, useMergeValue } from "@illa-design/system"
import { CheckboxGroupProps } from "./interface"
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

    const [currentValue, setCurrentValue] = useMergeValue([], {
      defaultValue:
        "defaultValue" in props ? props.defaultValue || [] : undefined,
      value: "value" in props ? value || [] : undefined,
    })
    const [allOptionValues, setAllOptionValues] = useState<ReactText[]>([])

    let checkboxGroupCss: SerializedStyles
    switch (direction) {
      case "vertical":
        checkboxGroupCss = applyCheckboxContainerVertical(spacing)
        break
      case "horizontal":
        checkboxGroupCss = applyCheckboxContainerHorizontal(spacing)
        break
    }

    const onGroupChange = useCallback(
      (optionValue: any, checked: boolean, e: SyntheticEvent) => {
        const newVal = currentValue.slice()
        if (checked) {
          newVal.push(optionValue)
        } else {
          newVal.splice(currentValue?.indexOf(optionValue), 1)
        }
        setCurrentValue(newVal)
        onChange?.(
          newVal.filter((v) => allOptionValues?.indexOf(v) > -1),
          e,
        )
      },
      [currentValue, onChange, allOptionValues],
    )

    return (
      <div
        css={[checkboxGroupCss, applyBoxStyle(props)]}
        ref={ref}
        {...deleteCssProps(otherProps)}
      >
        <CheckboxGroupContext.Provider
          value={{
            isGroup: true,
            checkboxGroupValue: currentValue,
            onGroupChange,
            disabled,
            registerValue: (v: ReactText) => {
              setAllOptionValues((allOptionValues) => {
                return Array.from(new Set([...allOptionValues, v]))
              })
            },
            unRegisterValue: (v: ReactText) => {
              setAllOptionValues((allOptionValues) => {
                return allOptionValues.filter((x) => x !== v)
              })
            },
          }}
        >
          {isArray(options)
            ? options?.map((option, index) => {
                return (
                  <Checkbox
                    key={`check-${index}`}
                    value={option.value || option}
                    disabled={disabled || option?.disabled}
                    colorScheme={colorScheme}
                  >
                    {option.label || option}
                  </Checkbox>
                )
              })
            : children}
        </CheckboxGroupContext.Provider>
      </div>
    )
  },
)

CheckboxGroup.displayName = "CheckboxGroup"
