import { forwardRef, HTMLAttributes } from "react"
import { createPortal } from "react-dom"
import { css, SerializedStyles } from "@emotion/react"

function applyPopupContainer(
  top: string,
  left: string,
  zIndex: number | "auto",
): SerializedStyles {
  return css`
    display: inline-flex;
    position: absolute;
    left: ${left};
    top: ${top};
    z-index: ${zIndex};
    pointer-events: none;
  `
}

export interface PopupProps extends HTMLAttributes<HTMLDivElement> {
  top: string
  left: string
  zIndex: number | "auto"
}

export const Popup = forwardRef<HTMLDivElement, PopupProps>((props, ref) => {
  const { top, left, zIndex, children, ...otherProps } = props
  return createPortal(
    <div ref={ref} css={applyPopupContainer(top, left, zIndex)} {...otherProps}>
      {children}
    </div>,
    document.body,
  )
})
