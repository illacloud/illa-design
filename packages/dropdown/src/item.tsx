import { forwardRef, useContext } from "react"
import { DropListItemProps } from "./interface"
import { DropListContext } from "./droplist"
import { applyItemCss } from "./style"

export const DropListItem = forwardRef<HTMLDivElement, DropListItemProps>(
  (props, ref) => {
    const {
      _key = "",
      title,
      children,
      disabled,
      fontColor,
      onClick,
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
          onClickItem?.(_key, event)
        }}
        {...otherProps}
      >
        {title ? title : children}
      </div>
    )
  },
)

DropListItem.displayName = "DropListItem"
