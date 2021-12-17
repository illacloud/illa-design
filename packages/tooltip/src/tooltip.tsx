/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { TooltipProps } from "./interface"
import { css } from "@emotion/react"

const applyOuterCss = css`
  position: relative;
  display: inline-flex;
`

const tipsContainer = css`
  position: absolute;
  visibility: hidden;

  .css-${applyOuterCss.name}:hover & {
    visibility: visible;
  }
`

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
  return <div ref={ref} css={applyOuterCss}>
    {props.children}
    <div css={tipsContainer}>优秀</div>
  </div>
})
