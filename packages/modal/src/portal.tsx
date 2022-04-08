import { FC } from "react"
import { createPortal } from "react-dom"
import { PortalProps } from "./interface"

export const Portal: FC<PortalProps> = (props) => {
  const { container = document.body, children } = props
  return createPortal(<div>{children}</div>, container as Element)
}
