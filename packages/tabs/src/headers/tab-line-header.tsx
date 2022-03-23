import { forwardRef, useEffect, useMemo, useRef, useState } from "react"
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
import { DownIcon, NextIcon, PreIcon, UpIcon } from "@illa-design/icon"
import useScrolling from "react-use/lib/useScrolling"
import {
  getChildrenHeightArr,
  getChildrenWidthArr,
  getLeftTargetPosition,
  getTargetPosition,
  isAhead,
  isHorizontalLayout,
} from "../utils"
import { TabHeaderProps } from "../interface"

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
    } = props

    const scrollRef = useRef<HTMLDivElement | null>(null)
    const childRef = useRef<HTMLDivElement | null>(null)
    const scrolling = useScrolling(scrollRef)
    const [preDisable, setPreDisable] = useState(true)
    const [nextDisable, setNextDisable] = useState(false)
    const [needScroll, setNeedScroll] = useState(false)
    const [leftDis, setLeftDis] = useState<number>(0)
    const [topDis, setTopDis] = useState<number>(0)

    const [_isHorizontalLayout, _isAhead] = useMemo(() => {
      return [isHorizontalLayout(tabPosition), isAhead(tabPosition)]
    }, [tabPosition])

    useEffect(() => {
      setLeftDis(scrollRef.current?.scrollLeft ?? 0)
      setTopDis(scrollRef.current?.scrollTop ?? 0)
    }, [scrollRef])

    useEffect(() => {
      if (!scrollRef?.current) return
      const dom = scrollRef?.current
      setNeedScroll(
        !_isHorizontalLayout
          ? dom.scrollWidth > dom?.offsetWidth
          : dom?.scrollHeight > dom?.offsetHeight,
      )
    }, [scrollRef])

    useEffect(() => {
      setPreDisable(_isHorizontalLayout ? topDis === 0 : leftDis === 0)
      if (!scrollRef.current) return
      const nextDisable = _isHorizontalLayout
        ? Math.abs(
            topDis +
              scrollRef.current?.offsetHeight -
              scrollRef.current?.scrollHeight,
          ) < 1
        : Math.abs(
            leftDis +
              scrollRef.current?.offsetWidth -
              scrollRef.current?.scrollWidth,
          ) < 1
      setNextDisable(nextDisable)
    }, [leftDis, topDis])

    useEffect(() => {
      if (!scrolling) {
        setLeftDis(scrollRef.current?.scrollLeft ?? 0)
        setTopDis(scrollRef.current?.scrollTop ?? 0)
      }
    }, [scrolling])

    const linePosition = useMemo(() => {
      if (!scrollRef?.current) return 0
      const sizeArr = getChildrenSize(_isHorizontalLayout, childRef.current)
      let sum = 0
      for (let i = 0; i < selectedIndex; i++) {
        sum += sizeArr[i]
      }
      return _isHorizontalLayout ? sum : sum + PADDING
    }, [selectedIndex, tabPosition, childRef, needScroll])

    const dividerSize = useMemo(() => {
      const sizeArr = getChildrenSize(_isHorizontalLayout, childRef.current)
      let size = 0
      const len = sizeArr?.length
      for (let i = 0; i < len; i++) {
        size += sizeArr[i]
      }
      return size
    }, [selectedIndex, tabPosition, childRef, needScroll])

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
        return [<UpIcon />, <DownIcon />]
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
                  getChildrenSize(_isHorizontalLayout, childRef.current),
                  scrollRef.current?.offsetHeight,
                  scrollRef.current?.scrollTop ?? 0,
                )
                scrollRef &&
                  scrollRef?.current &&
                  scrollRef.current?.scrollTo(0, dis)
              } else {
                dis = getLeftTargetPosition(
                  getChildrenSize(_isHorizontalLayout, childRef.current),
                  scrollRef.current?.offsetWidth,
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
              <div css={applyLineCss(childRef && dividerSize)}>
                <div
                  css={applyBlueLineCss(
                    getChildrenSize(_isHorizontalLayout, childRef.current)[
                      selectedIndex
                    ],
                    linePosition,
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
              <div css={applyLineCss(childRef && dividerSize)}>
                <div
                  css={applyBlueLineCss(
                    getChildrenSize(_isHorizontalLayout, childRef.current)[
                      selectedIndex
                    ],
                    linePosition,
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
                  getChildrenSize(_isHorizontalLayout, childRef.current),
                  scrollRef.current?.offsetWidth,
                  scrollRef.current?.scrollTop ?? 0,
                )
                scrollRef &&
                  scrollRef?.current &&
                  scrollRef.current?.scrollTo(0, dis)
              } else {
                dis = getTargetPosition(
                  getChildrenSize(_isHorizontalLayout, childRef.current),
                  scrollRef.current?.offsetWidth,
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
