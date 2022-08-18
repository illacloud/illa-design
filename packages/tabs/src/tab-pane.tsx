import { forwardRef } from "react"
import { TabPaneProps } from "./interface"
import { tabPaneContainerCss } from "./style"

export const TabPane = forwardRef<HTMLDivElement, TabPaneProps>(
  (props, ref) => {
    const { children } = props
    return (
      <div css={tabPaneContainerCss} ref={ref}>
        {children}
      </div>
    )
  },
)

TabPane.displayName = "TabPane"
