import { forwardRef, HTMLAttributes } from "react"
import { createPortal } from "react-dom"
import { css, SerializedStyles } from "@emotion/react"
import { BoxProps, deleteCssProps } from "@illa-design/theme"

function applyPopupContainer(
  top: string,
  left: string,
  zIndex: number | "auto",
  isInViewport?: boolean,
): SerializedStyles {
  return css`
    display: inline-flex;
    position: absolute;
    left: ${left};
    top: ${top};
    z-index: ${zIndex};
    pointer-events: none;
    opacity: ${isInViewport ? "1" : "0"};
  `
}

export interface PopupProps extends HTMLAttributes<HTMLDivElement>, BoxProps {
  top: string
  left: string
  zIndex: number | "auto"
  isInViewport: boolean
}

export const Popup = forwardRef<HTMLDivElement, PopupProps>((props, ref) => {
  const { top, left, zIndex, children, isInViewport, ...otherProps } = props

  return (
    <>
      {createPortal(
        <div
          ref={ref}
          css={applyPopupContainer(top, left, zIndex, isInViewport)}
          {...deleteCssProps(otherProps)}
        >
          {children}
        </div>,
        document.body,
      )}
    </>
  )
})

Popup.displayName = "Popup"
