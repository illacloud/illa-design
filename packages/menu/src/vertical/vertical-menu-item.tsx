import { forwardRef, useContext } from "react"
import { MenuItemProps } from "../interface"
import { MenuContext } from "../menu-context"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"
import {
  applyVerticalSubMenuContainer,
  verticalSubMenuIcon,
  verticalSubMenuLabel,
} from "./style"

export const VerticalMenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  (props, ref) => {
    const { selected, disabled, icon, label, value, ...otherProps } = props

    const menuContext = useContext(MenuContext)
    const colorScheme = menuContext?.colorScheme ?? "blue"

    return (
      <div
        css={[
          applyVerticalSubMenuContainer(colorScheme, selected, disabled),
          applyBoxStyle(otherProps),
        ]}
        ref={ref}
        {...deleteCssProps(otherProps)}
      >
        {icon && <span css={verticalSubMenuIcon}>{icon}</span>}
        {label && <span css={verticalSubMenuLabel}>{label}</span>}
      </div>
    )
  },
)

VerticalMenuItem.displayName = "VerticalMenuItem"
