import { forwardRef, useContext } from "react"
import { SubMenuProps } from "../interface"
import { MenuContext } from "../menu-context"
import {
  applyVerticalListContainer,
  applyVerticalSubMenuContentContainer,
  verticalDivider,
  verticalSubMenuIcon,
  verticalSubMenuLabel,
} from "./style"
import { deleteCssProps } from "@illa-design/theme"
import { DownIcon, UpIcon } from "@illa-design/icon"
import { AnimatePresence, motion } from "framer-motion"

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
      <>
        <div
          css={applyVerticalSubMenuContentContainer(
            colorScheme,
            selected,
            disabled,
          )}
          ref={ref}
          {...deleteCssProps(otherProps)}
        >
          {icon && <span css={verticalSubMenuIcon}>{icon}</span>}
          {label && <span css={verticalSubMenuLabel}>{label}</span>}
          <div css={verticalDivider} />
          {children && opened ? (
            <UpIcon ml="8px" fs="14px" />
          ) : (
            <DownIcon ml="8px" fs="14px" />
          )}
        </div>
        <AnimatePresence>
          {opened && (
            <motion.div
              css={applyVerticalListContainer()}
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              transition={{ duration: 0.2 }}
              exit={{ height: 0 }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </>
    )
  },
)

VerticalSubMenu.displayName = "VerticalSubMenu"
