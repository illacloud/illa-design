import { forwardRef, useContext } from "react"
import { MenuItemProps } from "../interface"
import { MenuContext } from "../menu-context"
import {
  applyHorizontalLine,
  applyHorizontalSubMenuContainer,
  horizontalSubMenuIcon,
  horizontalSubMenuLabel,
} from "./style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export const HorizontalMenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  (props, ref) => {
    const { selected, disabled, icon, label, value, ...otherProps } = props

    const menuContext = useContext(MenuContext)
    const colorScheme = menuContext?.colorScheme ?? "blue"

    return (
      <div
        css={[
          applyHorizontalSubMenuContainer(colorScheme, selected, disabled),
          applyBoxStyle(otherProps),
        ]}
        ref={ref}
        {...deleteCssProps(otherProps)}
      >
        {icon && <span css={horizontalSubMenuIcon}>{icon}</span>}
        {label && <span css={horizontalSubMenuLabel}>{label}</span>}
        <div
          css={applyHorizontalLine(colorScheme, selected, disabled)}
          className="horizontalLine"
        />
      </div>
    )
  },
)

HorizontalMenuItem.displayName = "HorizontalMenuItem"
