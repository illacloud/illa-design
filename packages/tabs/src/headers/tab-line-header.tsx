import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import {
  applyCommonBlueLineCss,
  applyDividerCommonLineCss,
  applyDividerHorizontalLineCss,
  applyHorizontalBlueLineCss,
  applyHorizontalPreNextIconCss,
  applyCommonPreNextIconCss,
  tabHeaderContainerCss,
  tabHeaderHorizontalContainerCss,
  tabLineHeaderContainerCss,
  tabLineHeaderHorizontalContainerCss,
  applyHorizontalIconLineCss,
  applyCommonIconLineCss,
  tabsContentCss,
  applyScrollContainerCss,
  applyHeaderContainerCss,
} from "../style"
import { TabHeaderChild } from "./tab-header-child"
import { DownIcon, NextIcon, PreviousIcon, UpIcon } from "@illa-design/icon"
import useScrolling from "react-use/lib/useScrolling"
import {
  checkAndAdjustSelectedItemPosition,
  getChildrenHeightArr,
  getChildrenWidthArr,
  getOffsetSize,
  getScrollDist,
  getScrollSize,
  isAhead,
  isHorizontalLayout,
  scrollTabList,
} from "../utils"
import { TabHeaderProps } from "../interface"
import useMeasure from "react-use-measure"

const PADDING = 16

export function getChildrenSize(
  isHorizontalLayout?: boolean,
  parent?: HTMLDivElement | null,
) {
  if (!parent) return []
  let childrenSizeArr: number[]
  if (isHorizontalLayout) {
    childrenSizeArr = parent ? getChildrenHeightArr(parent) : []
  } else {
    childrenSizeArr = parent ? getChildrenWidthArr(parent) : []
  }
  return childrenSizeArr
}

export const TabLineHeader = forwardRef<HTMLDivElement, TabHeaderProps>(
  (props, ref) => {
    const {
      tabHeaderChild,
      selectedIndex = -1,
      size = "medium",
      tabPosition,
      handleSelectTab,
      tabBarSpacing,
      suffix,
      prefix,
      variant,
      align,
      colorScheme = "blue",
    } = props

    const scrollRef = useRef<HTMLDivElement>(null)
    const childRef = useRef<HTMLDivElement | null>(null)
    const scrolling = useScrolling(scrollRef)
    const [resizeRef, { width, height }] = useMeasure({
      polyfill: ResizeObserver,
    })
    const [preDisable, setPreDisable] = useState(true)
    const [nextDisable, setNextDisable] = useState(false)
    const [needScroll, setNeedScroll] = useState(false)
    const [blueLineWidth, setBlueLineWidth] = useState(0)
    const [blueLinePosition, setBlueLinePosition] = useState(PADDING)

    const [_isHorizontalLayout, _isAhead] = useMemo(() => {
      return [isHorizontalLayout(tabPosition), isAhead(tabPosition)]
    }, [tabPosition])

    useEffect(() => {
      setBlueLineWidth(
        () =>
          getChildrenSize(_isHorizontalLayout, childRef.current)[selectedIndex],
      )
      if (!scrollRef?.current) {
        return
      }
      const sizeArr = getChildrenSize(_isHorizontalLayout, childRef.current)
      let target = 0
      for (let i = 0; i < selectedIndex; i++) {
        target += sizeArr[i]
      }
      target = _isHorizontalLayout ? target : target + PADDING
      setBlueLinePosition(target)
    }, [
      selectedIndex,
      tabBarSpacing,
      childRef,
      tabHeaderChild,
      _isHorizontalLayout,
    ])

    const _handleSelectTab = useCallback(
      (key: string, index: number) => {
        const dist = checkAndAdjustSelectedItemPosition(
          getChildrenSize(_isHorizontalLayout, childRef.current),
          getOffsetSize(_isHorizontalLayout, scrollRef),
          getScrollDist(_isHorizontalLayout, scrollRef),
          index,
        )
        _isHorizontalLayout
          ? scrollRef.current?.scrollTo(0, dist)
          : scrollRef.current?.scrollTo(dist, 0)
        handleSelectTab(key)
      },
      [_isHorizontalLayout, handleSelectTab],
    )

    const checkPreAndNextDisable = useCallback(() => {
      if (!scrollRef.current) return
      setPreDisable(getScrollDist(_isHorizontalLayout, scrollRef) === 0)
      setNextDisable(
        Math.abs(
          getScrollDist(_isHorizontalLayout, scrollRef) +
            getOffsetSize(_isHorizontalLayout, scrollRef) -
            getScrollSize(_isHorizontalLayout, scrollRef),
        ) < 1,
      )
    }, [_isHorizontalLayout])

    useEffect(() => {
      if (!scrolling) {
        checkPreAndNextDisable()
      }
    }, [scrolling, needScroll, checkPreAndNextDisable])

    useEffect(() => {
      if (!scrollRef?.current) {
        return
      }
      const childrenSize = getChildrenSize(
        _isHorizontalLayout,
        childRef.current,
      )?.reduce((a, b) => a + b, 0)
      const offsetSize = getOffsetSize(_isHorizontalLayout, scrollRef)
      setNeedScroll(childrenSize > offsetSize)
    }, [_isHorizontalLayout, width, height, tabHeaderChild?.length])

    useEffect(() => {
      setBlueLineWidth(
        () =>
          getChildrenSize(_isHorizontalLayout, childRef.current)[selectedIndex],
      )
    }, [_isHorizontalLayout, selectedIndex])

    const dividerSize = useMemo(() => {
      const sizeArr = getChildrenSize(_isHorizontalLayout, childRef.current)
      let size = 0
      const len = sizeArr?.length
      for (let i = 0; i < len; i++) {
        size += sizeArr[i]
      }
      return size > getOffsetSize(_isHorizontalLayout, scrollRef)
        ? size
        : getOffsetSize(_isHorizontalLayout, scrollRef)
    }, [_isHorizontalLayout])

    let [
      headerContainer,
      tabsContainerCss,
      applyLineCss,
      applyBlueLineCss,
      applyPreNextIconCss,
    ] = _isHorizontalLayout
      ? [
          tabLineHeaderHorizontalContainerCss,
          tabHeaderHorizontalContainerCss,
          applyDividerHorizontalLineCss,
          applyHorizontalBlueLineCss,
          applyHorizontalPreNextIconCss,
          applyHorizontalIconLineCss(tabPosition === "left"),
        ]
      : [
          tabLineHeaderContainerCss,
          tabHeaderContainerCss,
          applyDividerCommonLineCss,
          applyCommonBlueLineCss,
          applyCommonPreNextIconCss,
          applyCommonIconLineCss(tabPosition === "top"),
        ]

    const [_preIcon, _nextIcon] = useMemo(() => {
      if (_isHorizontalLayout) {
        return [<UpIcon key="upIcon" />, <DownIcon key="downIcon" />]
      } else {
        return [<PreviousIcon key="preIcon" />, <NextIcon key="nextIcon" />]
      }
    }, [_isHorizontalLayout])

    return (
      <div css={applyHeaderContainerCss(variant, tabPosition, align)} ref={ref}>
        {prefix}
        <div css={tabsContentCss} ref={resizeRef}>
          {needScroll && (
            <span
              onClick={() => {
                scrollTabList(
                  true,
                  preDisable,
                  _isHorizontalLayout,
                  scrollRef,
                  childRef,
                  checkPreAndNextDisable,
                )
              }}
              css={applyPreNextIconCss(true, "line", preDisable)}
            >
              {_preIcon}
            </span>
          )}
          <div
            ref={scrollRef}
            css={applyScrollContainerCss(_isHorizontalLayout)}
          >
            <div css={headerContainer} ref={ref}>
              {!_isAhead && (
                <div css={applyLineCss(childRef && dividerSize)}>
                  <div
                    css={applyBlueLineCss(
                      blueLineWidth,
                      blueLinePosition,
                      colorScheme,
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
                        handleSelectTab={(key) => {
                          _handleSelectTab(key, index)
                        }}
                        title={item.title}
                        tabKey={item.tabKey}
                        isSelected={index === selectedIndex}
                        disabled={item.disabled}
                        size={size}
                        tabBarSpacing={tabBarSpacing}
                        colorScheme={colorScheme}
                      />
                    )
                  })}
              </div>
              {isAhead(tabPosition) && (
                <div css={applyLineCss(childRef && dividerSize)}>
                  <div
                    css={applyBlueLineCss(
                      blueLineWidth,
                      blueLinePosition,
                      colorScheme,
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
                scrollTabList(
                  false,
                  nextDisable,
                  _isHorizontalLayout,
                  scrollRef,
                  childRef,
                  checkPreAndNextDisable,
                )
              }}
              css={applyPreNextIconCss(false, "line", nextDisable)}
            >
              {_nextIcon}
            </span>
          )}
        </div>
        {suffix}
      </div>
    )
  },
)

TabLineHeader.displayName = "TabLineHeader"
