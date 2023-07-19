import { forwardRef, useContext } from "react"
import { DropListItemProps } from "./interface"
import { DropListContext } from "./droplist"
import { applyItemCss } from "./style"
import { deleteCssProps } from "@illa-design/theme"

export const DropListItem = forwardRef<HTMLDivElement, DropListItemProps>(
  (props, ref) => {
    const {
      title,
      children,
      disabled,
      onClick,
      colorScheme = "blue",
      hoverColorScheme,
      deleted,
      selected,
      value,
      isSelectOption = true,
      ...otherProps
    } = props

    const {
      onClickItem,
      hoverColorScheme: contextHoverColorScheme = "grayBlue",
    } = useContext(DropListContext)
    const finalHoverColorScheme = hoverColorScheme ?? contextHoverColorScheme

    return (
      <div
        ref={ref}
        css={applyItemCss(
          colorScheme,
          finalHoverColorScheme,
          disabled,
          selected,
          deleted,
        )}
        onClick={(event) => {
          if (disabled) return
          onClick?.(event)
          if (isSelectOption) {
            onClickItem?.(value, title ? title : children, event)
          }
        }}
        {...deleteCssProps(otherProps)}
      >
        {title ? title : children}
      </div>
    )
  },
)

DropListItem.displayName = "DropListItem"
