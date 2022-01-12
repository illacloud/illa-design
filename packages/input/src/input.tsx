/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, useState } from "react"
import { InputProps } from "./interface"
import { omit } from "@illa-design/system"
import { applyInputContainer, applyInputStyle } from "./style"
import { InputElement } from "./input-element"

export interface StateValue {
  disabled?: boolean
  error?: boolean
  focus?: boolean
  variant?: string
}

export const Input = forwardRef<HTMLDivElement, InputProps>((props, ref) => {

  const {
    allowClear,
    error,
    disabled,
    placeholder,
    variant = "outline",
    ...rest
  } = props

  const otherProps = omit(rest, [
    "prefix",
    "suffix",
    "className",
    "defaultValue",
    "addonBefore",
    "addonAfter",
  ])

  const [focus, setFocus] = useState(false);

  const stateValue = {
    disabled,
    error,
    focus,
    variant,
  }

  return <div css={applyInputContainer(stateValue)} ref={ref} {...otherProps}>
    <InputElement
      {...props}
      onFocus={(e) => {
        console.log('11');
        setFocus(true);
        props.onFocus && props.onFocus(e);
      }}
      onBlur={(e) => {
        console.log('22');
        setFocus(false);
        props.onBlur && props.onBlur(e);
      }}
    />
    {props.children}
  </div>

})
