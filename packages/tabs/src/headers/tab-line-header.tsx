/** @jsxImportSource @emotion/react */
import React, { forwardRef, useEffect, useMemo, useRef, useState } from "react"
import {
  applyCommonBlueLineCss,
  applyDividerCommonLineCss,
  applyDividerHorizontalLineCss,
  applyHeaderContainerCss,
  applyHorizontalBlueLineCss,
  applyHorizontalPreNextIconCss,
  applyCommonPreNextIconCss,
  containerHideScrollBarCss,
  containerHorizontalHideScrollBarCss,
  tabHeaderContainerCss,
  tabHeaderHorizontalContainerCss,
  tabLineHeaderContainerCss,
  tabLineHeaderHorizontalContainerCss,
} from "../styles"
import { TabHeaderChild } from "./tab-header-child"
import { NextIcon, PreIcon } from "@illa-design/icon"
import useScrolling from "react-use/lib/useScrolling"
import {
  getLeftTargetPosition,
  getTargetPosition,
  isAhead,
  isHorizontalLayout,
} from "../utils"
import { TabHeaderProps } from "../interface"

const PADDING = 16

export const TabLineHeader = forwardRef<HTMLDivElement, TabHeaderProps>(
  (props, ref) => {
    const {
      tabHeaderChild,
      selectedIndex = -1,
      variant,
      size = "medium",
      tabPosition,
      handleSelectTab,
      tabBarSpacing,
    } = props

    const [childrenWidth, setChildrenWidth] = useState<number[]>([])
    const [tabRealWidth, setTabRealWidth] = useState<number>(0)
    const [tabRealHeight, setTabRealHeight] = useState<number>(0)
    const [tabHeight, setTabHeight] = useState<number>(0)
    const [leftDis, setLeftDis] = useState<number>(0)
    const [topDis, setTopDis] = useState<number>(0)
    const [tabWidth, setTabWidth] = useState<number>(0)
    const scrollRef = useRef<HTMLDivElement | null>(null)
    const childRef = useRef<HTMLDivElement | null>(null)
    const scrolling = useScrolling(scrollRef)
    const [preDisable, setPreDisable] = useState(true)
    const [nextDisable, setNextDisable] = useState(false)
    const [needScroll, setNeedScroll] = useState(false)

    const _isHorizontalLayout = isHorizontalLayout(tabPosition)
    const _isAhead = isAhead(tabPosition)

    useEffect(() => {
      setTabWidth(scrollRef?.current?.offsetWidth ?? 0)
      setTabHeight(scrollRef?.current?.offsetHeight ?? 0)
      const children = childRef.current?.children
      const len = children?.length ?? 0
      const widthArr: number[] = []
      let sum = 0
      for (let i = 0; i < len; i++) {
        widthArr.push(children?.item(i)?.clientWidth ?? 0)
        sum += children?.item(i)?.clientWidth ?? 0
      }
      setChildrenWidth(widthArr)
      setTabRealWidth(scrollRef.current?.scrollWidth ?? 0)
      setTabRealHeight(scrollRef.current?.scrollHeight ?? 0)
      setLeftDis(scrollRef.current?.scrollLeft ?? 0)
      setLeftDis(scrollRef.current?.scrollTop ?? 0)
    }, [childRef, scrollRef, needScroll])

    useEffect(() => {
      setNeedScroll(
        !_isHorizontalLayout
          ? tabRealWidth > tabWidth
          : tabRealHeight > tabHeight,
      )
    }, [scrollRef, tabWidth])

    useEffect(() => {
      setPreDisable(_isHorizontalLayout ? topDis === 0 : leftDis === 0)
      if (tabWidth != 0) {
        const realWidth = scrollRef.current?.scrollWidth ?? 0
        const realHeight = scrollRef.current?.scrollHeight ?? 0
        const nextDisable = _isHorizontalLayout
          ? Math.abs(topDis + tabHeight - realHeight) < 1
          : Math.abs(leftDis + tabWidth - realWidth) < 1
        setNextDisable(nextDisable)
      }
    }, [leftDis, topDis])

    useEffect(() => {
      if (!scrolling) {
        setLeftDis(scrollRef.current?.scrollLeft ?? 0)
        setTopDis(scrollRef.current?.scrollTop ?? 0)
      }
    }, [scrolling])

    const [childrenHeight, setChildrenHeight] = useState<number[]>([])

    const linePosition = useMemo(() => {
      let widthSum = 0
      for (let i = 0; i < selectedIndex; i++) {
        widthSum += childrenWidth[i]
      }
      return PADDING + widthSum
    }, [selectedIndex, tabPosition, childrenWidth])

    const lineHorizontalPosition = useMemo(() => {
      let heightSum = 0
      for (let i = 0; i < selectedIndex; i++) {
        heightSum += childrenHeight[i]
      }
      return heightSum
    }, [selectedIndex, tabPosition, childrenHeight])

    const dividerLineWidth = useMemo(() => {
      if (!tabHeaderChild?.length) return 0
      let width = 0
      for (let i = 0; i < tabHeaderChild?.length ?? 0; i++) {
        width += childrenWidth[i]
      }
      return width
    }, [childrenWidth])

    const dividerLineHeight = useMemo(() => {
      let height = 0
      for (let i = 0; i < childrenHeight.length; i++) {
        height += childrenHeight[i]
      }
      return height
    }, [childrenHeight])

    useEffect(() => {
      const children = childRef.current?.children
      const len = children?.length ?? 0
      const widthArr: number[] = []
      const heightArr: number[] = []
      for (let i = 0; i < len; i++) {
        widthArr.push(children?.item(i)?.clientWidth ?? 0)
        heightArr.push(children?.item(i)?.clientHeight ?? 0)
      }
      setChildrenWidth(widthArr)
      setChildrenHeight(heightArr)
    }, [childRef])

    let [
      headerContainer,
      tabsContainerCss,
      applyLineCss,
      applyBlueLineCss,
      scrollContainerCss,
      applyPreNextIconCss,
    ] = _isHorizontalLayout
      ? [
          tabLineHeaderHorizontalContainerCss,
          tabHeaderHorizontalContainerCss,
          applyDividerHorizontalLineCss,
          applyHorizontalBlueLineCss,
          containerHorizontalHideScrollBarCss,
          applyHorizontalPreNextIconCss,
        ]
      : [
          tabLineHeaderContainerCss,
          tabHeaderContainerCss,
          applyDividerCommonLineCss,
          applyCommonBlueLineCss,
          containerHideScrollBarCss,
          applyCommonPreNextIconCss,
        ]

    const [_preIcon, _nextIcon] = useMemo(() => {
      if (_isHorizontalLayout) {
        return [<span>up</span>, <span>down</span>]
      } else {
        return [<PreIcon />, <NextIcon />]
      }
    }, [_isHorizontalLayout])

    return (
      <div css={applyHeaderContainerCss(_isHorizontalLayout)} ref={ref}>
        {needScroll && (
          <span
            onClick={() => {
              if (preDisable || !scrollRef || !scrollRef?.current) return
              let dis
              if (_isHorizontalLayout) {
                dis = getLeftTargetPosition(
                  childrenHeight,
                  tabHeight,
                  scrollRef.current?.scrollTop ?? 0,
                )
                scrollRef &&
                  scrollRef?.current &&
                  scrollRef.current?.scrollTo(0, dis)
              } else {
                dis = getLeftTargetPosition(
                  childrenWidth,
                  tabWidth,
                  scrollRef.current?.scrollLeft ?? 0,
                )
                scrollRef &&
                  scrollRef?.current &&
                  scrollRef.current?.scrollTo(dis, 0)
              }
              _isHorizontalLayout ? setTopDis(dis) : setLeftDis(dis)
            }}
            css={applyPreNextIconCss(true, "line", preDisable, tabPosition)}
          >
            {_preIcon}
          </span>
        )}
        <div ref={scrollRef} css={scrollContainerCss}>
          <div css={headerContainer} ref={ref}>
            {!_isAhead && (
              <div
                css={applyLineCss(
                  isHorizontalLayout(tabPosition)
                    ? dividerLineHeight
                    : dividerLineWidth,
                )}
              >
                <div
                  css={applyBlueLineCss(
                    isHorizontalLayout(tabPosition)
                      ? childrenHeight[selectedIndex]
                      : childrenWidth[selectedIndex],
                    isHorizontalLayout(tabPosition)
                      ? lineHorizontalPosition
                      : linePosition,
                    size,
                  )}
                />
              </div>
            )}
            <div ref={childRef} css={tabsContainerCss}>
              {tabHeaderChild &&
                tabHeaderChild?.map((item, index) => {
                  return (
                    <TabHeaderChild
                      key={item.tabKey}
                      handleSelectTab={handleSelectTab}
                      title={item.title}
                      tabKey={item.tabKey}
                      isSelected={index === selectedIndex}
                      disabled={item.disabled}
                      size={size}
                      tabBarSpacing={tabBarSpacing}
                    />
                  )
                })}
            </div>
            {isAhead(tabPosition) && (
              <div
                css={applyLineCss(
                  isHorizontalLayout(tabPosition)
                    ? dividerLineHeight
                    : dividerLineWidth,
                )}
              >
                <div
                  css={applyBlueLineCss(
                    isHorizontalLayout(tabPosition)
                      ? childrenHeight[selectedIndex]
                      : childrenWidth[selectedIndex],
                    isHorizontalLayout(tabPosition)
                      ? lineHorizontalPosition
                      : linePosition,
                    size,
                  )}
                />
              </div>
            )}
          </div>
        </div>
        {needScroll && (
          <span
            onClick={() => {
              if (nextDisable || !scrollRef || !scrollRef?.current) return
              let dis
              if (_isHorizontalLayout) {
                dis = getTargetPosition(
                  childrenHeight,
                  tabHeight,
                  scrollRef.current?.scrollTop ?? 0,
                )
                scrollRef &&
                  scrollRef?.current &&
                  scrollRef.current?.scrollTo(0, dis)
              } else {
                dis = getTargetPosition(
                  childrenWidth,
                  tabWidth,
                  scrollRef.current?.scrollLeft ?? 0,
                )
                scrollRef &&
                  scrollRef?.current &&
                  scrollRef.current?.scrollTo(dis, 0)
              }
              _isHorizontalLayout ? setTopDis(dis) : setLeftDis(dis)
            }}
            css={applyPreNextIconCss(false, "line", nextDisable, tabPosition)}
          >
            {_nextIcon}
          </span>
        )}
      </div>
    )
  },
)
