/** @jsxImportSource @emotion/react */
import React, { forwardRef, useRef, useEffect, useState, useMemo } from "react"
import { TabHeaderProps } from "../interface"
import {
  cardDividerContainerCss,
  tabHeaderContainerCss,
  tabLineHeaderContainerCss,
} from "../styles"
import { TabHeaderCardChild } from "../tab-header-card-child"

const PADDING = 16

export const TabCardHeader = forwardRef<HTMLDivElement, TabHeaderProps>(
  (props, ref) => {
    const { tabHeaderChild, onSelectTab, selectedIndex } = props

    return (
      <div css={tabLineHeaderContainerCss} ref={ref}>
        <div css={tabHeaderContainerCss}>
          {tabHeaderChild &&
            tabHeaderChild?.map((item, index) => {
              return (
                <TabHeaderCardChild
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
        <div css={cardDividerContainerCss} />
      </div>
    )
  },
)
