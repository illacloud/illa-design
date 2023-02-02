import { forwardRef, useContext } from "react"
import { DropListItemProps } from "./interface"
import { DropListContext } from "./droplist"
import { applyItemCss } from "./style"

export const DropListItem = forwardRef<HTMLDivElement, DropListItemProps>(
  (props, ref) => {
    const {
      title,
      children,
      disabled,
      fontColor,
      onClick,
      value,
      isSelectOption = true,
      ...otherProps
    } = props

    const { onClickItem } = useContext(DropListContext)

    return (
      <div
        ref={ref}
        css={applyItemCss(fontColor, disabled)}
        onClick={(event) => {
          if (disabled) return
          onClick?.(event)
          if (isSelectOption) {
            onClickItem?.(value, title ? title : children, event)
          }
        }}
        {...otherProps}
      >
        {title ? title : children}
      </div>
    )
  },
)

DropListItem.displayName = "DropListItem"
