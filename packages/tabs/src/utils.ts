import { TabPosition } from "./interface"
export const isHorizontalLayout = (tabPosition?: TabPosition) => {
  return tabPosition === "left" || tabPosition === "right"
}

export const isAhead = (tabPosition?: TabPosition) => {
  return tabPosition === "top" || tabPosition === "left"
}

export const getTargetPosition = (
  childrenWidth: number[],
  tabWidth: number,
  currentPosition: number,
) => {
  let position = 0
  const len = childrenWidth.length
  if (currentPosition == 0) {
    for (var i = 0; i < len && position < tabWidth; i++) {
      position += childrenWidth[i]
    }
    return position - childrenWidth[i - 1]
  } else {
    for (var m = 0; m < len && position < currentPosition; m++) {
      position += childrenWidth[m]
    }
    let distance = 0
    for (var n = m + 1; n < len && distance < tabWidth; n++) {
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
  const len = childrenWidth.length
  const target = currentPosition - tabWidth
  let distance = 0
  for (var i = 0; i < len && distance < target; i++) {
    distance += childrenWidth[i]
  }
  return distance - childrenWidth[i - 1]
}
