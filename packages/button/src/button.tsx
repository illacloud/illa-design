/** @jsxImportSource @emotion/react */
import {forwardRef} from "react"
import {ButtonProps} from "./interface"
import {css} from "@emotion/react"

const applyOuterCss = css`
  vertical-align: middle;
  display: inline-flex;
`

export const Button = forwardRef<HTMLDivElement, ButtonProps>((props, ref) => {

    return <div ref={ref} css={applyOuterCss}>
        Hello Template
    </div>

})
