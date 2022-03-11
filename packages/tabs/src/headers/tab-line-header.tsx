/** @jsxImportSource @emotion/react */
import React, { forwardRef, useRef, useEffect, useState, useMemo } from "react"
import { TabHeaderProps } from "../interface"
import {
  applyBlueLineCss,
  dividerLineCss,
  tabHeaderContainerCss,
  tabLineHeaderContainerCss,
} from "../styles"
import { TabHeaderChild } from "../tab-header-child"

const PADDING = 16

export const TabLineHeader = forwardRef<HTMLDivElement, TabHeaderProps>(
  (props, ref) => {
    const { tabHeaderChild, onSelectTab, selectedIndex } = props

    const [childrenWidth, setChildrenWidth] = useState<number[]>([])

    const childRef = useRef<HTMLDivElement | null>(null)

    const linePosition = useMemo(() => {
      let widthSum = 0
      for (let i = 0; i < selectedIndex; i++) {
        widthSum += childrenWidth[i]
      }
      return PADDING + widthSum
    }, [selectedIndex])

    useEffect(() => {
      const children = childRef.current?.children
      const len = children?.length ?? 0
      const widthArr: number[] = []
      for (let i = 0; i < len; i++) {
        widthArr.push(children?.item(i)?.clientWidth ?? 0)
      }
      setChildrenWidth(widthArr)
    }, [childRef])

    return (
      <div css={tabLineHeaderContainerCss} ref={ref}>
        <div ref={childRef} css={tabHeaderContainerCss}>
          {tabHeaderChild &&
            tabHeaderChild?.map((item, index) => {
              return (
                <TabHeaderChild
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
        <div css={dividerLineCss}>
          <div
            css={applyBlueLineCss(childrenWidth[selectedIndex], linePosition)}
          />
        </div>
      </div>
    )
  },
)
