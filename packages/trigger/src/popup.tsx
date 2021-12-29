import { FC, useEffect } from "react"
import { createPortal } from "react-dom"

function createPopupContainer(): HTMLDivElement {
  const popupContainer = document.createElement("div")
  popupContainer.style.display = "inline-flex"
  popupContainer.style.position = "absolute"
  popupContainer.style.top = "0"
  popupContainer.style.left = "0"
  return popupContainer
}

export const Popup: FC = ((props) => {

  const container = createPopupContainer()
  document.body.append(container)

  useEffect(() => {
    return () => {
      document.body.removeChild(container)
    }
  })
  return createPortal(props.children, container)
})