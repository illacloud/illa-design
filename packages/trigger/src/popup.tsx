import { FC, useEffect } from "react"
import { createPortal } from "react-dom"

function createPopupContainer(top: string, left: string): HTMLDivElement {
  const popupContainer = document.createElement("div")
  popupContainer.style.display = "inline-flex"
  popupContainer.style.position = "absolute"
  popupContainer.style.left = left
  popupContainer.style.top = top
  popupContainer.style.pointerEvents = "none"
  return popupContainer
}

export interface PopupProps {
  top: string
  left: string
}

export const Popup: FC<PopupProps> = ((props) => {
  const container = createPopupContainer(props.top, props.left)
  document.body.append(container)
  useEffect(() => {
    return () => {
      container.remove()
    }
  })
  return createPortal(props.children, container)
})