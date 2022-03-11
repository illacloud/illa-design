/** @jsxImportSource @emotion/react */
import React, { forwardRef } from "react"
import { TabHeaderProps } from "../interface"
import { tabHeaderContainerCss } from "../styles"
import { TabHeaderChild } from "../tab-header-child"

export const TabTextHeader = forwardRef<HTMLDivElement, TabHeaderProps>(
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
                needDivLine={index == array.length - 1}
                disabled={item.disabled}
                size={item.size}
              />
            )
          })}
      </div>
    )
  },
)
