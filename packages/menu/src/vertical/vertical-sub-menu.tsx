import { forwardRef, useContext } from "react"
import { SubMenuProps } from "../interface"
import { MenuContext } from "../menu-context"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"
import {
  applyVerticalSubMenuContainer,
  verticalDivider,
  verticalSubMenuIcon,
  verticalSubMenuLabel,
} from "./style"
import { DownIcon } from "@illa-design/icon"
import { Dropdown } from "@illa-design/dropdown"

export const VerticalSubMenu = forwardRef<HTMLDivElement, SubMenuProps>(
  (props, ref) => {
    const {
      children,
      opened,
      selected,
      disabled,
      icon,
      label,
      onVisibleChange,
      ...otherProps
    } = props

    const menuContext = useContext(MenuContext)
    const colorScheme = menuContext?.colorScheme ?? "blue"

    return (
      <Dropdown
        trigger="hover"
        position="right-start"
        popupVisible={opened}
        autoAlignPopupWidth={true}
        disabled={disabled}
        onVisibleChange={onVisibleChange}
        dropList={children}
      >
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
          <div css={verticalDivider} />
          {children && <DownIcon ml="8px" fs="14px" />}
        </div>
      </Dropdown>
    )
  },
)

VerticalSubMenu.displayName = "VerticalSubMenu"
