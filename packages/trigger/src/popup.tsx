import { forwardRef, HTMLAttributes } from "react"
import { createPortal } from "react-dom"
import { css, SerializedStyles } from "@emotion/react"

function applyPopupContainer(top: string, left: string): SerializedStyles {
  return css`
    display: inline-flex;
    position: absolute;
    left: ${left};
    top: ${top};
    pointer-events: none;
  `
}

export interface PopupProps extends HTMLAttributes<HTMLDivElement> {
  top: string
  left: string
}

export const Popup = forwardRef<HTMLDivElement, PopupProps>((props, ref) => {
  const { top, left, children, ...otherProps } = props
  return createPortal(
    <div ref={ref} css={applyPopupContainer(top, left)} {...otherProps}>
      {children}
    </div>,
    document.body,
  )
})
