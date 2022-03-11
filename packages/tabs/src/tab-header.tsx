/** @jsxImportSource @emotion/react */
import React, { forwardRef, ReactNode } from "react"
import { TabHeaderProps, TabPaneProps, TabsProps } from "./interface"
import { tabHeaderContainerCss } from "./styles"
import { TabHeaderChild } from "./tab-header-child"
import { TabChildren } from "./tabs"

export const TabHeader = forwardRef<HTMLDivElement, TabHeaderProps>(
  (props, ref) => {
    const { tabHeaderChild, defaultActiveKey, onSelectTab } = props

    return (
      <div css={tabHeaderContainerCss} ref={ref}>
        {tabHeaderChild &&
          tabHeaderChild?.map((item, index, array) => {
            console.log("tabHeaderChild", item.tabKey)
            return (
              <TabHeaderChild
                onSelectTab={onSelectTab}
                title={item.title}
                tabKey={item.tabKey}
                isSelected={item.tabKey === defaultActiveKey}
                disabled={item.disabled}
                size={item.size}
              />
            )
          })}
      </div>
    )
  },
)
