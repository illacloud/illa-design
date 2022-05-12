import { forwardRef, SyntheticEvent } from "react"
import { OptionProps } from "./interface"
import { applyOptionStyle } from "./style"
import { omit } from "@illa-design/system"
import { Checkbox } from "@illa-design/checkbox"

export const Option = forwardRef<HTMLLIElement, OptionProps>((props, ref) => {
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

  return (
    <>
      {multiple ? (
        <li css={applyOptionStyle(size, multiple, isChecked)} ref={ref} {...optionProps}>
          <Checkbox
            checked={isChecked}
            disabled={disabled}
            onChange={(_, event: SyntheticEvent) => {
              onClickOption && onClickOption(currentValue, disabled)
              otherProps.onClick?.(event)
            }}
          />
          <span css={{ "margin-left": "8px" }}>{children}</span>
        </li>
      ) : (
        <li css={applyOptionStyle(size, multiple, isChecked)} ref={ref} {...optionProps}>
          {children}
        </li>
      )}
    </>
  )
})

Option.defaultProps = {
  isSelectOption: true,
}

Option.displayName = "Option"
