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
import {
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
      handleDeleteTab,
      handleSelectTab,
      tabBarSpacing,
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

    const scrollRef = useRef<HTMLDivElement | null>(null)
    const childRef = useRef<HTMLDivElement | null>(null)
    const scrolling = useScrolling(scrollRef)
    const [preDisable, setPreDisable] = useState(true)
    const [nextDisable, setNextDisable] = useState(false)
    const [needScroll, setNeedScroll] = useState(false)
    const [leftDis, setLeftDis] = useState<number>(0)

    useEffect(() => {
      if (!scrollRef?.current) return
      setNeedScroll(
        scrollRef?.current.scrollWidth > scrollRef?.current.offsetWidth,
      )
      setLeftDis(scrollRef?.current.scrollLeft ?? 0)
    }, [childRef, scrollRef, needScroll])

    useEffect(() => {
      setPreDisable(leftDis === 0)
      const offsetWidth = scrollRef?.current?.offsetWidth ?? 0
      const scrollWidth = scrollRef.current?.scrollWidth ?? 0
      if (offsetWidth != 0 && scrollWidth != 0) {
        setNextDisable(Math.abs(leftDis + offsetWidth - scrollWidth) < 1)
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
              if (preDisable || !scrollRef?.current || !childRef.current) return
              const childrenWidthArr = getChildrenWidthArr(childRef.current)
              const dis = getLeftTargetPosition(
                childrenWidthArr,
                scrollRef?.current?.offsetWidth ?? 0,
                scrollRef.current?.scrollLeft ?? 0,
              )
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
          </span>
        )}
      </div>
    )
  },
)
