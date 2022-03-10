/** @jsxImportSource @emotion/react */
import { FC } from "react"
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

export interface PopupProps {
  top: string
  left: string
}

export const Popup: FC<PopupProps> = (props) => {
  return createPortal(
    <div css={applyPopupContainer(props.top, props.left)}>
      {props.children}
    </div>,
    document.body,
  )
}
