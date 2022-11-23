import { forwardRef, SyntheticEvent } from "react"
import { SelectOptionProps } from "./interface"
import { applyOptionStyle, optionLabelStyle } from "./style"
import { omit } from "@illa-design/system"
import { Checkbox } from "@illa-design/checkbox"

export const Option = forwardRef<HTMLLIElement, SelectOptionProps>(
  (props, ref) => {
    const {
      children,
      value,
      defaultValue,
      size = "medium",
      disabled,
      valueActive,
      valueSelect,
      multiple,
      // events
      onChange,
      onMouseEnter,
      onMouseLeave,
      onClickOption,
      colorScheme = "blue",
      ...otherProps
    } = props

    const currentValue = "value" in props ? value : children?.toString()
    const isChecked = multiple
      ? (valueSelect as any[])?.indexOf(currentValue) !== -1
      : valueSelect === currentValue

    const optionProps = {
      onMouseEnter: () => onMouseEnter?.(currentValue),
      onMouseLeave: () => onMouseLeave?.(),
      onClick: (event: SyntheticEvent) => {
        onClickOption && onClickOption(currentValue, disabled)
        otherProps.onClick?.(event)
      },
      ...omit(otherProps, ["_key", "extra", "isSelectOption", "onClick"]),
    }

    const stateValue = {
      size,
      multiple,
      isChecked,
      colorScheme,
      disabled,
    }

    return (
      <>
        {multiple ? (
          <li css={applyOptionStyle(stateValue)} ref={ref} {...optionProps}>
            <Checkbox
              checked={isChecked}
              disabled={disabled}
              onChange={(_, event: SyntheticEvent) => {
                onClickOption && onClickOption(currentValue, disabled)
                otherProps.onClick?.(event)
              }}
            />
            <span css={optionLabelStyle}>{children}</span>
          </li>
        ) : (
          <li css={applyOptionStyle(stateValue)} ref={ref} {...optionProps}>
            {children}
          </li>
        )}
      </>
    )
  },
)

Option.defaultProps = {
  isSelectOption: true,
}

Option.displayName = "Option"
