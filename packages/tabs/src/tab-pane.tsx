/** @jsxImportSource @emotion/react */
import { forwardRef, ReactNode } from "react"
import { TabPaneProps, TabsProps } from "./interface"
import { tabPaneContainerCss } from "./styles"

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
