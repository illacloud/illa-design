import { FC } from "react"
import { TabContentProps } from "./interface"
import {
  applyCardContentContainerCss,
  applyTabContentWrapperCss,
  tabContentContainerCss,
} from "./style"

export const TabContent: FC<TabContentProps> = (props) => {
  const { tabPanes, animated, selectedIndex = 0, variant, tabPosition } = props

  return (
    <div
      css={
        variant === "card"
          ? applyCardContentContainerCss(tabPosition)
          : tabContentContainerCss
      }
    >
      <div css={applyTabContentWrapperCss(selectedIndex, animated)}>
        {tabPanes && tabPanes?.map((item) => item)}
      </div>
    </div>
  )
}
