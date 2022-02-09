/** @jsxImportSource @emotion/react */
import {
  createContext,
  forwardRef,
  ReactText,
  useCallback,
  useState,
} from "react"
import { useMergeValue } from "@illa-design/system"
import { CheckboxGroupContextProps, CheckboxGroupProps } from "./interface"
import { SerializedStyles } from "@emotion/react"
import { Checkbox } from "./checkbox"
import {
  applyCheckboxContainerHorizontal,
  applyCheckboxContainerVertical,
} from "./style"

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
      ...otherProps
    } = props

    const [currentValue, setCurrentValue] = useMergeValue([], {
      defaultValue: "defaultValue" in props ? props.defaultValue || [] : undefined,
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
      (optionValue, checked: boolean, e: Event) => {
        const newVal = currentValue.slice()
        if (checked) {
          newVal.push(optionValue)
        } else {
          newVal.splice(currentValue.indexOf(optionValue), 1)
        }
        setCurrentValue(newVal)
          onChange?.(
          newVal.filter((v) => allOptionValues.indexOf(v) > -1),
          e,
        )
      },
      [currentValue, onChange, allOptionValues],
    )

    const contextProp = {
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
    }

    return (
      <div css={checkboxGroupCss} ref={ref} {...otherProps}>
        <CheckboxGroupContext.Provider value={contextProp}>
          {isArray(options)
            ? options?.map((option, index) => {
                return (
                  <Checkbox
                    key={`check-${index}`}
                    value={option.value || option}
                    disabled={disabled || option?.disabled}
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

CheckboxGroupContext.displayName = "CheckboxGroupContext"

CheckboxGroup.displayName = "CheckboxGroup"
