/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { TabContentProps } from "./interface"
import { applyTabContentWrapperCss, tabContentContainerCss } from "./styles"

// lazy load ?

export const TabContent = forwardRef<HTMLDivElement, TabContentProps>(
  (props, ref) => {
    const { tabPanes, animated, defaultActiveKey } = props
    const selectedIndex = tabPanes?.findIndex(
      (item) => item.key === defaultActiveKey,
    )

    return (
      <div css={tabContentContainerCss} ref={ref}>
        <div css={applyTabContentWrapperCss(selectedIndex ?? 0, animated)}>
          {tabPanes && tabPanes?.map((item, index) => item)}
        </div>
      </div>
    )
  },
)
