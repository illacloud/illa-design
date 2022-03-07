/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, ChangeEvent, useContext } from "react"
import { OptionProps, SelectProps } from "./interface"
import { applyOptionStyle } from "./style"
import { omit, useMergeValue } from "@illa-design/system"
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
    isMultipleMode,
    //
    onChange,
    onMouseEnter,
    onMouseLeave,
    onClickOption,
    ...otherProps
  } = props

  const currentValue = "value" in props ? value : children?.toString()
  const isChecked = isMultipleMode
    ? (valueSelect as any[]).indexOf(value) !== -1
    : valueSelect === value

  const optionProps = {
    onMouseEnter: () => onMouseEnter?.(value),
    onMouseLeave: () => onMouseLeave?.(),
    onClick: (event: any) => {
      console.log(props, value, disabled, "e")
      onClickOption && onClickOption(currentValue, disabled)
      otherProps.onClick?.(event)
    },
    ...omit(otherProps, ["_key", "extra", "isSelectOption", "onClick"]),
  }

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist()
  }

  return (
    <>
      {isMultipleMode ? (
        <li css={applyOptionStyle(size)} ref={ref}>
          <Checkbox
            checked={isChecked}
            disabled={disabled}
            onChange={optionProps.onClick}
          />
          <span {...optionProps}>{children}</span>
        </li>
      ) : (
        <li css={applyOptionStyle(size)} ref={ref} {...optionProps}>
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
