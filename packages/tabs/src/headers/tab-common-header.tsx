import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { TabHeaderChildProps, TabHeaderProps } from "../interface"
import {
  addButtonCss,
  applyHeaderContainerCss,
  tabCapsuleHeaderContainerCss,
  tabCardHeaderContainerCss,
  tabLineHeaderContainerCss,
  tabsContentCss,
  applyTabHeaderContainerCss,
  applyScrollContainerCss,
  applyPreNextIconCss,
} from "../style"
import { TabHeaderChild } from "./tab-header-child"
import { AddIcon, DownIcon, NextIcon, PreIcon, UpIcon } from "@illa-design/icon"
import useScrolling from "react-use/lib/useScrolling"
import {
  checkAndAdjustSelectedItemPosition,
  getOffsetSize,
  getScrollDist,
  getScrollSize,
  isHorizontalLayout,
  scrollTabList,
} from "../utils"
import { getChildrenSize } from "./tab-line-header"
import useMeasure from "react-use-measure"

export const TabCommonHeader = forwardRef<HTMLDivElement, TabHeaderProps>(
  (props, ref) => {
    const {
      tabHeaderChild,
      selectedIndex,
      variant,
      editable,
      onAddTab,
      deleteIcon,
      size = "medium",
      handleSelectTab,
      handleDeleteTab,
      tabBarSpacing,
      prefix,
      suffix,
      tabPosition,
      align,
      colorScheme = "blue",
      addIcon = <AddIcon />,
    } = props

    const containerCss = useMemo(() => {
      if (variant == "capsule") {
        return tabCapsuleHeaderContainerCss
      } else if (variant === "card") {
        return tabCardHeaderContainerCss
      }
      return tabLineHeaderContainerCss
    }, [variant])

    const isHorizontal = useMemo(() => {
      return isHorizontalLayout(tabPosition)
    }, [tabPosition])

    const scrollRef = useRef<HTMLDivElement | null>(null)
    const childRef = useRef<HTMLDivElement | null>(null)
    const scrolling = useScrolling(scrollRef)
    const [resizeRef, { width, height }] = useMeasure({
      polyfill: ResizeObserver,
    })
    const [preDisable, setPreDisable] = useState(true)
    const [nextDisable, setNextDisable] = useState(false)
    const [needScroll, setNeedScroll] = useState(false)

    const _handleSelectTab = useCallback(
      (key: string, index: number) => {
        const dist = checkAndAdjustSelectedItemPosition(
          getChildrenSize(isHorizontal, childRef.current),
          getOffsetSize(isHorizontal, scrollRef),
          getScrollDist(isHorizontal, scrollRef),
          index,
        )
        isHorizontal
          ? scrollRef.current?.scrollTo(0, dist)
          : scrollRef.current?.scrollTo(dist, 0)
        handleSelectTab(key)
      },
      [isHorizontal, handleSelectTab],
    )

    const checkPreAndNextDisable = () => {
      if (!scrollRef.current) return
      setPreDisable(getScrollDist(isHorizontal, scrollRef) === 0)
      setNextDisable(
        Math.abs(
          getScrollDist(isHorizontal, scrollRef) +
            getOffsetSize(isHorizontal, scrollRef) -
            getScrollSize(isHorizontal, scrollRef),
        ) < 1,
      )
    }

    useEffect(() => {
      if (!scrolling) {
        checkPreAndNextDisable()
      }
    }, [scrolling, needScroll])

    useEffect(() => {
      if (!scrollRef?.current) return
      const childrenSize = getChildrenSize(
        isHorizontal,
        childRef.current,
      )?.reduce((a, b) => a + b, 0)
      const offsetSize = getOffsetSize(isHorizontal, scrollRef)

      setNeedScroll(childrenSize > offsetSize)
    }, [isHorizontal, width, height, tabHeaderChild?.length])

    const [preIcon, nextIcon] = useMemo(() => {
      if (isHorizontal) {
        return [<UpIcon key="upIcon" />, <DownIcon key="downIcon" />]
      } else {
        return [<PreIcon key="preIcon" />, <NextIcon key="nextIcon" />]
      }
    }, [isHorizontal])

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
                  isHorizontal,
                  scrollRef,
                  childRef,
                )
              }}
              css={applyPreNextIconCss(isHorizontal)(
                true,
                variant,
                preDisable,
                tabPosition,
              )}
            >
              {preIcon}
            </span>
          )}

          <div ref={scrollRef} css={applyScrollContainerCss(isHorizontal)}>
            <div css={containerCss}>
              <div
                ref={childRef}
                css={applyTabHeaderContainerCss(variant, tabPosition)}
              >
                {tabHeaderChild &&
                  tabHeaderChild?.map((item, index) => {
                    const childProps: TabHeaderChildProps = {
                      handleSelectTab: (key) => _handleSelectTab(key, index),
                      title: item.title,
                      tabKey: item.tabKey,
                      isSelected: index == selectedIndex,
                      disabled: item.disabled,
                      size: size,
                      variant: variant,
                      closable: variant === "card" && editable,
                      deleteIcon: deleteIcon,
                      handleDeleteTab: handleDeleteTab,
                      tabBarSpacing: tabBarSpacing,
                      colorScheme: colorScheme,
                      tabPosition,
                    }
                    return <TabHeaderChild key={item.tabKey} {...childProps} />
                  })}
                {variant === "card" && editable && (
                  <span
                    css={addButtonCss}
                    onClick={() => {
                      onAddTab && onAddTab()
                    }}
                  >
                    {addIcon}
                  </span>
                )}
              </div>
            </div>
          </div>
          {needScroll && (
            <span
              onClick={() => {
                scrollTabList(
                  false,
                  nextDisable,
                  isHorizontal,
                  scrollRef,
                  childRef,
                )
              }}
              css={applyPreNextIconCss(isHorizontal)(
                false,
                variant,
                nextDisable,
                tabPosition,
              )}
            >
              {nextIcon}
            </span>
          )}
        </div>
        {suffix}
      </div>
    )
  },
)

TabCommonHeader.displayName = "TabCommonHeader"
