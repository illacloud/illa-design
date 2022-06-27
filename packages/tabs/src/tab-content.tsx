import { FC } from "react"
import { TabContentProps } from "./interface"
import {
  applyTabContentWrapperCss,
  tabCardContentContainerCss,
  tabContentContainerCss,
} from "./style"

export const TabContent: FC<TabContentProps> = (props) => {
  const { tabPanes, animated, selectedIndex = 0, variant } = props

  return (
    <div
      css={
        variant === "card" ? tabCardContentContainerCss : tabContentContainerCss
      }
    >
      <div css={applyTabContentWrapperCss(selectedIndex, animated)}>
        {tabPanes && tabPanes?.map((item) => item)}
      </div>
    </div>
  )
}
