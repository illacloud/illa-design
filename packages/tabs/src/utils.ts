import { TabPosition } from "./interface"
import { RefObject } from "react"
import { getChildrenSize } from "./headers/tab-line-header"

export const isHorizontalLayout = (tabPosition?: TabPosition) => {
  return tabPosition === "left" || tabPosition === "right"
}

export const isAhead = (tabPosition?: TabPosition) => {
  return tabPosition === "top" || tabPosition === "left"
}

export function getChildrenHeightArr(parent: HTMLDivElement) {
  const children = parent.children
  const len = children?.length ?? 0
  const heightArr: number[] = []
  for (let i = 0; i < len; i++) {
    heightArr.push(children?.item(i)?.clientHeight ?? 0)
  }
  return heightArr
}

export function getChildrenWidthArr(parent: HTMLDivElement | null) {
  if (!parent) return []
  const children = parent.children
  const len = children?.length ?? 0
  const widthArr: number[] = []
  for (let i = 0; i < len; i++) {
    widthArr.push(children?.item(i)?.clientWidth ?? 0)
  }
  return widthArr
}

export const getTargetPosition = (
  childrenWidth: number[],
  tabWidth: number,
  currentPosition: number,
) => {
  let position = 0
  const len = childrenWidth.length
  if (currentPosition == 0) {
    let i
    for (i = 0; i < len && position < tabWidth; i++) {
      position += childrenWidth[i]
    }
    return position - childrenWidth[i - 1]
  } else {
    let m
    let n
    for (m = 0; m < len && position < currentPosition; m++) {
      position += childrenWidth[m]
    }
    let distance = 0
    for (n = m + 1; n < len && distance < tabWidth; n++) {
      distance += childrenWidth[n]
    }
    return position + distance - childrenWidth[n - 1]
  }
}

export const getLeftTargetPosition = (
  childrenWidth: number[],
  tabWidth: number,
  currentPosition: number,
) => {
  let i
  const len = childrenWidth.length
  const target = currentPosition - tabWidth
  let distance = 0
  for (i = 0; i < len && distance < target; i++) {
    distance += childrenWidth[i]
  }
  return distance - childrenWidth[i - 1]
}

export const checkAndAdjustSelectedItemPosition = (
  childrenWidth: number[],
  tabWidth: number,
  currentPosition: number,
  selectedIndex: number,
) => {
  let selectedIndexPosition = 0
  let i = 0
  for (; i < selectedIndex; i++) {
    selectedIndexPosition += childrenWidth[i]
  }
  if (selectedIndexPosition + childrenWidth[i] > currentPosition + tabWidth) {
    return selectedIndexPosition + childrenWidth[i] - tabWidth
  }
  if (selectedIndexPosition < currentPosition) {
    return selectedIndexPosition
  }
  return currentPosition
}

export const getOffsetSize = (
  isHorizontalLayout: boolean,
  scrollRef: RefObject<HTMLDivElement>,
) =>
  (isHorizontalLayout
    ? scrollRef?.current?.offsetHeight
    : scrollRef?.current?.offsetWidth) ?? 0

export const getScrollSize = (
  isHorizontalLayout: boolean,
  scrollRef: RefObject<HTMLDivElement>,
) =>
  (isHorizontalLayout
    ? scrollRef?.current?.scrollHeight
    : scrollRef?.current?.scrollWidth) ?? 0

export const getScrollDist = (
  isHorizontalLayout: boolean,
  scrollRef: RefObject<HTMLDivElement>,
) =>
  (isHorizontalLayout
    ? scrollRef?.current?.scrollTop
    : scrollRef?.current?.scrollLeft) ?? 0

export const getDividerSize = (
  isHorizontalLayout: boolean,
  scrollRef: RefObject<HTMLDivElement>,
  childRef: RefObject<HTMLDivElement>,
) => {
  const sizeArr = getChildrenSize(isHorizontalLayout, childRef.current)
  let size = 0
  const len = sizeArr?.length
  for (let i = 0; i < len; i++) {
    size += sizeArr[i]
  }
  return size > getOffsetSize(isHorizontalLayout, scrollRef)
    ? size
    : getOffsetSize(isHorizontalLayout, scrollRef)
}

export const scrollTabList = (
  isLeft: boolean,
  preDisable: boolean,
  isHorizontalLayout: boolean,
  scrollRef: RefObject<HTMLDivElement>,
  childRef: RefObject<HTMLDivElement>,
  callBack?: () => void,
) => {
  if (preDisable || !scrollRef || !scrollRef?.current) return
  const getPosition = isLeft ? getLeftTargetPosition : getTargetPosition
  let dis = getPosition(
    getChildrenSize(isHorizontalLayout, childRef.current),
    getOffsetSize(isHorizontalLayout, scrollRef),
    getScrollDist(isHorizontalLayout, scrollRef),
  )

  isHorizontalLayout
    ? scrollRef.current?.scrollTo(0, dis)
    : scrollRef.current?.scrollTo(dis, 0)
  callBack?.()
}
