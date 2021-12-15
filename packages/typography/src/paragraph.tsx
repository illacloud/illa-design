/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { ParagraphProps } from "./interface"
import { Base } from "./base"
import { applyParagraphContainer } from "./paragraph-style"

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

  return <p css={applyParagraphContainer(indent)} ref={ref} {...otherProps}>
    <Base>{props.children}</Base>
  </p>

})
