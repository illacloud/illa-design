/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { TabContentProps } from "./interface"
import {
  applyTabContentWrapperCss,
  tabCardContentContainerCss,
  tabContentContainerCss,
} from "./styles"

export const TabContent = forwardRef<HTMLDivElement, TabContentProps>(
  (props, ref) => {
    const { tabPanes, animated, selectedIndex = 0, variant } = props

    return (
      <div
        css={
          variant === "card"
            ? tabCardContentContainerCss
            : tabContentContainerCss
        }
        ref={ref}
      >
        <div css={applyTabContentWrapperCss(selectedIndex, animated)}>
          {tabPanes && tabPanes?.map((item) => item)}
        </div>
      </div>
    )
  },
)
