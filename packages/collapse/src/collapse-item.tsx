import { forwardRef } from "react"
import { CollapseItemProps } from "./interface"

export const CollapseItem = forwardRef<HTMLDivElement, CollapseItemProps>(
  (props, ref) => {
    const {
      children,
      name,
      header,
      extra,
      disabled,
      destroyOnHide,
      expandIcon,
      showExpandIcon = true,
      ...otherProps
    } = props
    return <></>
  },
)

CollapseItem.displayName = "CollapseItem"
