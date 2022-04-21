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
  applyCommonPreNextIconCss,
  cardDividerContainerCss,
  containerHideScrollBarCss,
  tabCapsuleHeaderContainerCss,
  tabCardHeaderContainerCss,
  tabHeaderContainerCss,
  tabLineHeaderContainerCss,
  lineCss,
} from "../style"
import { TabHeaderChild } from "./tab-header-child"
import { AddIcon, NextIcon, PreIcon } from "@illa-design/icon"
import useScrolling from "react-use/lib/useScrolling"
import {
  checkAndAdjustSelectedItemPosition,
  getChildrenWidthArr,
  getLeftTargetPosition,
  getTargetPosition,
} from "../utils"

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

    const scrollRef = useRef<HTMLDivElement | null>(null)
    const childRef = useRef<HTMLDivElement | null>(null)
    const scrolling = useScrolling(scrollRef)
    const [preDisable, setPreDisable] = useState(true)
    const [nextDisable, setNextDisable] = useState(false)
    const [needScroll, setNeedScroll] = useState(false)

    const _handleSelectTab = useCallback((key: string, index: number) => {
      const dist = checkAndAdjustSelectedItemPosition(
        getChildrenWidthArr(childRef.current),
        scrollRef?.current?.offsetWidth ?? 0,
        scrollRef.current?.scrollLeft ?? 0,
        index,
      )
      scrollRef.current?.scrollTo(dist, 0)
      handleSelectTab(key)
    }, [])

    useEffect(() => {
      if (!scrollRef?.current) return
      setNeedScroll(
        scrollRef?.current.scrollWidth > scrollRef?.current.offsetWidth,
      )
    }, [childRef.current, scrollRef.current, needScroll])

    useEffect(() => {
      if (!scrolling && scrollRef?.current) {
        setPreDisable(scrollRef?.current?.scrollLeft === 0)
        const [scrollLeft, offsetWidth, scrollWidth] = [
          scrollRef.current.scrollLeft,
          scrollRef.current.offsetWidth,
          scrollRef.current.scrollWidth,
        ]
        if (offsetWidth != 0 && scrollWidth != 0) {
          setNextDisable(Math.abs(scrollLeft + offsetWidth - scrollWidth) < 1)
        }
      }
    }, [scrolling])

    return (
      <div css={applyHeaderContainerCss(false)} ref={ref}>
        {needScroll && (
          <span
            onClick={() => {
              if (preDisable || !scrollRef?.current || !childRef.current) return
              const childrenWidthArr = getChildrenWidthArr(childRef.current)
              const dis = getLeftTargetPosition(
                childrenWidthArr,
                scrollRef?.current?.offsetWidth ?? 0,
                scrollRef.current?.scrollLeft ?? 0,
              )
              scrollRef.current?.scrollTo(dis, 0)
            }}
            css={applyCommonPreNextIconCss(true, variant, preDisable)}
          >
            <PreIcon />
            {variant === "card" && <span css={lineCss} />}
          </span>
        )}
        <div ref={scrollRef} css={containerHideScrollBarCss}>
          <div css={containerCss}>
            <div ref={childRef} css={tabHeaderContainerCss}>
              {tabHeaderChild &&
                tabHeaderChild?.map((item, index, array) => {
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
                    needDivLine:
                      variant === "text" && index !== array.length - 1,
                    handleDeleteTab: handleDeleteTab,
                    tabBarSpacing: tabBarSpacing,
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
            {variant === "card" && <div css={cardDividerContainerCss} />}
          </div>
        </div>
        {needScroll && (
          <span
            onClick={() => {
              if (nextDisable || !childRef.current || !scrollRef?.current)
                return
              const childrenWidthArr = getChildrenWidthArr(childRef.current)
              scrollRef.current?.scrollTo(
                getTargetPosition(
                  childrenWidthArr,
                  scrollRef?.current?.offsetWidth ?? 0,
                  scrollRef.current?.scrollLeft ?? 0,
                ),
                0,
              )
            }}
            css={applyCommonPreNextIconCss(false, variant, nextDisable)}
          >
            <NextIcon />
            {variant === "card" && <span css={lineCss} />}
          </span>
        )}
      </div>
    )
  },
)
