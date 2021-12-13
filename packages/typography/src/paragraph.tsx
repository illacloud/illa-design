/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { ParagraphProps } from "./interface"

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>((props, ref) => {

  return <p ref={ref}>
    Hello Template
  </p>

})
