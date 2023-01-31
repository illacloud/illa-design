import { forwardRef } from "react"
import { MenuProps } from "./interface"
import { HorizontalMenu } from "./horizontal/horizontal-menu"
import { VerticalMenu } from "./vertical/vertical-menu"

export const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  const { mode = "horizontal" } = props

  switch (mode) {
    case "horizontal":
      return <HorizontalMenu ref={ref} {...props} />
    case "vertical":
      return <VerticalMenu ref={ref} {...props} />
  }
  return <></>
})

Menu.displayName = "Menu"
