import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  Fragment,
} from "react"
import {
  applyCommonBlueLineCss,
  applyHorizontalBlueLineCss,
  applyHorizontalPreNextIconCss,
  applyCommonPreNextIconCss,
  containerHideScrollBarCss,
  containerHorizontalHideScrollBarCss,
  tabHeaderContainerCss,
  tabHeaderHorizontalContainerCss,
  tabLineHeaderContainerCss,
  tabLineHeaderHorizontalContainerCss,
  applyHorizontalIconLineCss,
  applyCommonIconLineCss,
  applyLineHeaderContainerCss,
  tabsContentCss,
} from "../style"
import { TabHeaderChild } from "./tab-header-child"
import { DownIcon, NextIcon, PreIcon, UpIcon } from "@illa-design/icon"
import useScrolling from "react-use/lib/useScrolling"
import {
  checkAndAdjustSelectedItemPosition,
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
      suffix,
      prefix,
      colorScheme = "blue",
    } = props

    const scrollRef = useRef<HTMLDivElement | null>(null)
    const childRef = useRef<HTMLDivElement | null>(null)
    const scrolling = useScrolling(scrollRef)
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
      if (!scrollRef?.current) return
      const sizeArr = getChildrenSize(_isHorizontalLayout, childRef.current)
      let target = 0
      for (let i = 0; i < selectedIndex; i++) {
        target += sizeArr[i]
      }
      target = _isHorizontalLayout ? target : target + PADDING
      setBlueLinePosition(target)
    }, [selectedIndex, tabBarSpacing, childRef, tabHeaderChild])

    const getOffsetSize = () =>
      (_isHorizontalLayout
        ? scrollRef?.current?.offsetHeight
        : scrollRef?.current?.offsetWidth) ?? 0
    const getScrollSize = () =>
      (_isHorizontalLayout
        ? scrollRef?.current?.scrollHeight
        : scrollRef?.current?.scrollWidth) ?? 0
    const getScrollDist = () =>
      (_isHorizontalLayout
        ? scrollRef?.current?.scrollTop
        : scrollRef?.current?.scrollLeft) ?? 0

    const _handleSelectTab = useCallback((key: string, index: number) => {
      const dist = checkAndAdjustSelectedItemPosition(
        getChildrenSize(_isHorizontalLayout, childRef.current),
        getOffsetSize() ?? 0,
        getScrollDist() ?? 0,
        index,
      )
      _isHorizontalLayout
        ? scrollRef.current?.scrollTo(0, dist)
        : scrollRef.current?.scrollTo(dist, 0)
      handleSelectTab(key)
    }, [])

    useEffect(() => {
      checkPreAndNextDisable()
      if (!scrollRef?.current) return
      setNeedScroll(getScrollSize() > getOffsetSize())
    }, [scrollRef.current, childRef.current])

    const checkPreAndNextDisable = () => {
      if (!scrollRef.current) return
      setPreDisable(getScrollDist() === 0)
      setNextDisable(
        Math.abs(getScrollDist() + getOffsetSize() - getScrollSize()) < 1,
      )
    }

    useEffect(() => {
      setBlueLineWidth(
        () =>
          getChildrenSize(_isHorizontalLayout, childRef.current)[selectedIndex],
      )
    }, [childRef.current])

    useEffect(() => {
      if (!scrolling) {
        checkPreAndNextDisable()
      }
    }, [scrolling])

    let [
      headerContainer,
      tabsContainerCss,
      applyBlueLineCss,
      scrollContainerCss,
      applyPreNextIconCss,
    ] = _isHorizontalLayout
      ? [
          tabLineHeaderHorizontalContainerCss,
          tabHeaderHorizontalContainerCss,
          applyHorizontalBlueLineCss,
          containerHorizontalHideScrollBarCss,
          applyHorizontalPreNextIconCss,
          applyHorizontalIconLineCss(tabPosition === "left"),
        ]
      : [
          tabLineHeaderContainerCss,
          tabHeaderContainerCss,
          applyCommonBlueLineCss,
          containerHideScrollBarCss,
          applyCommonPreNextIconCss,
          applyCommonIconLineCss(tabPosition === "top"),
        ]

    const [_preIcon, _nextIcon] = useMemo(() => {
      if (_isHorizontalLayout) {
        return [<UpIcon />, <DownIcon />]
      } else {
        return [<PreIcon />, <NextIcon />]
      }
    }, [_isHorizontalLayout])

    return (
      <div
        css={applyLineHeaderContainerCss(_isHorizontalLayout, tabPosition)}
        ref={ref}
      >
        <Fragment key="prefix">{prefix}</Fragment>
        <div css={tabsContentCss}>
          {needScroll && (
            <span
              onClick={() => {
                if (preDisable || !scrollRef || !scrollRef?.current) return
                let dis = getLeftTargetPosition(
                  getChildrenSize(_isHorizontalLayout, childRef.current),
                  getOffsetSize(),
                  getScrollDist(),
                )
                _isHorizontalLayout
                  ? scrollRef.current?.scrollTo(0, dis)
                  : scrollRef.current?.scrollTo(dis, 0)
                checkPreAndNextDisable()
              }}
              css={applyPreNextIconCss(true, "line", preDisable)}
            >
              {_preIcon}
            </span>
          )}
          <div ref={scrollRef} css={scrollContainerCss}>
            <div css={headerContainer} ref={ref}>
              {!_isAhead && (
                <div
                  css={applyBlueLineCss(
                    blueLineWidth,
                    blueLinePosition,
                    colorScheme,
                    size,
                  )}
                />
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
                <div
                  css={applyBlueLineCss(
                    blueLineWidth,
                    blueLinePosition,
                    colorScheme,
                    size,
                  )}
                />
              )}
            </div>
          </div>
          {needScroll && (
            <span
              onClick={() => {
                if (nextDisable || !scrollRef || !scrollRef?.current) return
                const dis = getTargetPosition(
                  getChildrenSize(_isHorizontalLayout, childRef.current),
                  getOffsetSize(),
                  getScrollDist() ?? 0,
                )
                _isHorizontalLayout
                  ? scrollRef.current?.scrollTo(0, dis)
                  : scrollRef.current?.scrollTo(dis, 0)
                checkPreAndNextDisable()
              }}
              css={applyPreNextIconCss(false, "line", nextDisable)}
            >
              {_nextIcon}
            </span>
          )}
        </div>
        <Fragment key="suffix">{suffix}</Fragment>
      </div>
    )
  },
)
