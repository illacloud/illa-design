/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, useRef, useImperativeHandle } from "react"
import { InputElementProps, InputProps } from "./interface"
import { omit } from "@illa-design/system"
import { applyInputContainer, applyInputStyle } from "./style"

export const InputElement = forwardRef<HTMLInputElement, InputElementProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>();

  const {
    allowClear,
    error,
    disabled,
    placeholder,
    showCount,
    ...rest
  } = props

  const otherProps = omit(rest, [
    "prefix",
    "suffix",
    "className",
    "defaultValue",
    "addonBefore",
    "addonAfter",
    "showCount",
  ])

  const inputProps = {
    ...otherProps,
    disabled,
    placeholder,
  }

  return <>
    <input css={applyInputStyle} {...inputProps} />
  </>

})
