/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, ChangeEvent, useContext } from "react"
import { OptionProps, SelectProps } from "./interface"
import { applyMergeCss, applyOptionStyle, applyRadioSize } from "./style"
import { omit, useMergeValue } from "@illa-design/system"

export const Option = forwardRef<HTMLLIElement, OptionProps>((props, ref) => {
  const {
    children,
    disabled,
    value,
    defaultValue,
    onChange,
    onMouseEnter,
    onMouseLeave,
    onClickOption,
    ...otherProps
  } = props

  const [currentValue, setCurrentValue] = useMergeValue(undefined, {
    value: value,
    defaultValue: defaultValue,
  })

  const optionProps = {
    onMouseEnter: () => onMouseEnter?.(value),
    onMouseLeave: () => onMouseLeave?.(),
    onClick: (event: any) => {
      console.log(props, onClickOption, 'e')
      onClickOption && onClickOption(value, disabled);
      otherProps.onClick?.(event);
    },
    ...omit(otherProps, ['_key', 'extra', 'isSelectOption', 'onClick']),
  };

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist()
  }

  return (
    <li css={applyOptionStyle} ref={ref} {...optionProps}>
      {children}
    </li>
  )
})

Option.defaultProps = {
  isSelectOption: true,
};

Option.displayName = "Option"
