/** @jsxImportSource @emotion/react */
import React, { forwardRef } from "react"
import { TabHeaderProps } from "../interface"
import { tabCapsuleHeaderContainerCss, tabHeaderContainerCss } from "../styles"
import { TabHeaderCapsuleChild } from "../tab-header-capsule-child"

export const TabCapsuleHeader = forwardRef<HTMLDivElement, TabHeaderProps>(
  (props, ref) => {
    const { tabHeaderChild, onSelectTab, selectedIndex } = props

    return (
      <div css={tabCapsuleHeaderContainerCss} ref={ref}>
        <div css={tabHeaderContainerCss}>
          {tabHeaderChild &&
            tabHeaderChild?.map((item, index, array) => {
              return (
                <TabHeaderCapsuleChild
                  onSelectTab={onSelectTab}
                  title={item.title}
                  tabKey={item.tabKey}
                  isSelected={index === selectedIndex}
                  disabled={item.disabled}
                  size={item.size}
                />
              )
            })}
        </div>
      </div>
    )
  },
)
