import { forwardRef, useContext } from "react"
import { MenuItemProps, VerticalMenuItemProps } from "../interface"
import { MenuContext } from "../menu-context"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"
import {
  applyVerticalMenuItemContainer,
  verticalSubMenuIcon,
  verticalSubMenuLabel,
} from "./style"

export const VerticalMenuItem = forwardRef<
  HTMLDivElement,
  VerticalMenuItemProps
>((props, ref) => {
  const { selected, disabled, icon, label, value, sub, hidden, ...otherProps } =
    props

  const menuContext = useContext(MenuContext)
  const colorScheme = menuContext?.colorScheme ?? "blue"
  const hoverColorScheme = menuContext?.hoverColorScheme ?? "grayBlue"

  if (hidden) {
    return null
  }

  return (
    <div
      css={[
        applyVerticalMenuItemContainer(
          colorScheme,
          hoverColorScheme,
          selected,
          disabled,
          sub,
        ),
        applyBoxStyle(otherProps),
      ]}
      ref={ref}
      {...deleteCssProps(otherProps)}
    >
      {icon && <span css={verticalSubMenuIcon}>{icon}</span>}
      {label && <span css={verticalSubMenuLabel}>{label}</span>}
    </div>
  )
})

VerticalMenuItem.displayName = "VerticalMenuItem"
