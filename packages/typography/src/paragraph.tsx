/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { ParagraphProps } from "./interface"
import { Base } from "./base"
import { applyParagraphContainer } from "./paragraph-style"
import * as React from "react"
import mergedToString from "./measure-element"
import { Tooltip } from "@illa-design/tooltip"

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>((props, ref) => {

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
    fontSize = "14px",
    indent = false,
    ...otherProps
  } = props

  return <Tooltip content={mergedToString(React.Children.toArray(props.children))}
                  disabled={disabled}><p css={applyParagraphContainer(indent)} ref={ref} {...otherProps}>
    <Base colorScheme={colorScheme} ellipsis={ellipsis} bold={bold} disabled={disabled} mark={mark}
          underline={underline} deleted={deleted} code={code} copyable={copyable}>
      {props.children}
    </Base>
  </p></Tooltip>
})
