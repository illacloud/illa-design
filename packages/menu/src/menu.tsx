import { forwardRef } from "react"
import { MenuProps } from "./interface"

export const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  return <div ref={ref} />
})

Menu.displayName = "Menu"
