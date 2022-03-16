/** @jsxImportSource @emotion/react */
import React, { forwardRef, useEffect, useMemo, useRef, useState } from "react"
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
} from "../styles"
import { TabHeaderChild } from "./tab-header-child"
import { MinusIcon, NextIcon, PreIcon } from "@illa-design/icon"
import useScrolling from "react-use/lib/useScrolling"
import { getLeftTargetPosition, getTargetPosition } from "../utils"

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
      handleDeleteTab,
      handleSelectTab,
      addIcon = <MinusIcon />,
    } = props

    const containerCss = useMemo(() => {
      if (variant == "capsule") {
        return tabCapsuleHeaderContainerCss
      } else if (variant === "card") {
        return tabCardHeaderContainerCss
      }
      return tabLineHeaderContainerCss
    }, [variant])

    const [childrenWidth, setChildrenWidth] = useState<number[]>([])
    const [tabRealWidth, setTabRealWidth] = useState<number>(0)
    const [leftDis, setLeftDis] = useState<number>(0)
    const [tabWidth, setTabWidth] = useState<number>(0)
    const scrollRef = useRef<HTMLDivElement | null>(null)
    const childRef = useRef<HTMLDivElement | null>(null)
    const scrolling = useScrolling(scrollRef)
    const [preDisable, setPreDisable] = useState(true)
    const [nextDisable, setNextDisable] = useState(false)
    const [needScroll, setNeedScroll] = useState(false)

    useEffect(() => {
      setTabWidth(scrollRef?.current?.offsetWidth ?? 0)
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
      setLeftDis(scrollRef.current?.scrollLeft ?? 0)
    }, [childRef, scrollRef, needScroll])

    useEffect(() => {
      setNeedScroll(tabRealWidth > tabWidth)
    }, [tabRealWidth, tabWidth])

    useEffect(() => {
      setPreDisable(leftDis === 0)
      if (tabWidth != 0 && tabRealWidth != 0) {
        const realWidth = scrollRef.current?.scrollWidth ?? 0
        setNextDisable(Math.abs(leftDis + tabWidth - realWidth) < 5)
      }
    }, [leftDis])

    useEffect(() => {
      if (!scrolling) {
        setLeftDis(scrollRef.current?.scrollLeft ?? 0)
      }
    }, [scrolling])

    return (
      <div css={applyHeaderContainerCss(false)} ref={ref}>
        {needScroll && (
          <span
            onClick={() => {
              if (!scrollRef || !scrollRef?.current) return
              const dis = getLeftTargetPosition(
                childrenWidth,
                tabWidth,
                scrollRef.current?.scrollLeft ?? 0,
              )
              scrollRef &&
                scrollRef?.current &&
                scrollRef.current?.scrollTo(dis, 0)
              setLeftDis(dis)
            }}
            css={applyCommonPreNextIconCss(true, variant, preDisable)}
          >
            <PreIcon />
          </span>
        )}
        <div ref={scrollRef} css={containerHideScrollBarCss}>
          <div css={containerCss}>
            <div ref={childRef} css={tabHeaderContainerCss}>
              {tabHeaderChild &&
                tabHeaderChild?.map((item, index) => {
                  const childProps: TabHeaderChildProps = {
                    handleSelectTab: handleSelectTab,
                    title: item.title,
                    tabKey: item.tabKey,
                    isSelected: index == selectedIndex,
                    disabled: item.disabled,
                    size: size,
                    variant: variant,
                    closable: variant === "card" && editable,
                    deleteIcon: deleteIcon,
                    handleDeleteTab: handleDeleteTab,
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
              scrollRef &&
                scrollRef?.current &&
                scrollRef.current?.scrollTo(
                  getTargetPosition(
                    childrenWidth,
                    tabWidth,
                    scrollRef.current?.scrollLeft ?? 0,
                  ),
                  0,
                )
            }}
            css={applyCommonPreNextIconCss(false, variant, nextDisable)}
          >
            <NextIcon />
          </span>
        )}
      </div>
    )
  },
)
