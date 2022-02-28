/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, ChangeEvent, useContext } from "react"
import { OptionProps, SelectProps } from "./interface"
import { applyMergeCss, applyOptionStyle, applyRadioSize } from "./style"
import { omit, useMergeValue } from "@illa-design/system"

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
    <li css={applyOptionStyle(size)} ref={ref} {...optionProps}>
      {children}
    </li>
  )
})

Option.defaultProps = {
  isSelectOption: true,
}

Option.displayName = "Option"
