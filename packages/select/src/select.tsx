/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, ChangeEvent, useContext } from "react"
import { SelectProps } from "./interface"
import { applyMergeCss, applyRadioSize } from "./style"
import { omit, useMergeValue } from "@illa-design/system"

export const Select = forwardRef<HTMLLabelElement, SelectProps>(
  (props, ref) => {
    const mergeProps = { ...props }
    const { children, disabled, value, defaultValue, onChange, ...otherProps } =
      mergeProps

    const [currentValue, setCurrentValue] = useMergeValue(undefined, {
      value: value,
      defaultValue: defaultValue,
    })

    const onChangeValue = (event: ChangeEvent<HTMLInputElement>): void => {
      event.persist()
    }

    return (
      <label
        css={applyMergeCss(props)}
        ref={ref}
        {...omit(otherProps, ["colorScheme"])}
      >
        <input
          css={applyRadioSize}
          disabled={disabled}
          onChange={onChangeValue}
        />
        {children}
      </label>
    )
  },
)

Select.displayName = "Select"
