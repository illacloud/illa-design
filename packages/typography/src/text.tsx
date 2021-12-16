/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef } from "react"
import { TextProps } from "./interface"
import { Base } from "./base"
import { applyTextContainer } from "./text-style"

export const Text = forwardRef<HTMLSpanElement, TextProps>((props, ref) => {

  // get props
  const {
    colorScheme = "blackAlpha",
    ellipsis,
    bold = false,
    disabled = false,
    mark = false,
    underline = false,
    deleted = false,
    code = false,
    copyable = false,
    fontSize = "12px",
    ...otherProps
  } = props

  return <span css={applyTextContainer(fontSize)} ref={ref} {...otherProps}>
    <Base colorScheme={colorScheme} ellipsis={ellipsis} bold={bold} disabled={disabled} mark={mark}
          underline={underline} deleted={deleted} code={code} copyable={copyable}>
          {props.children}
        </Base>
  </span>

})
