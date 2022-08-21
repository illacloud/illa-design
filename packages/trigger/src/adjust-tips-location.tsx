import { RefObject, useEffect, useMemo, useState } from "react"
import { CustomPositionType, TriggerPosition } from "./interface"
import { ARROW_TIP_OFFSET } from "./style"
import { RectReadOnly } from "react-use-measure/src/web"

export interface AdjustResult {
  readonly transX: number
  readonly transY: number
  readonly opposite: boolean
  readonly childrenWidth: number
}

export function adjustLocation(
  measureInfo: RectReadOnly,
  tipsMeasureInfo: RectReadOnly,
  position: TriggerPosition,
  autoFitPosition: boolean,
  customPosition: CustomPositionType,
  showArrow: boolean,
) {
  let adjustResult = {
    transY: 0,
    transX: 0,
    opposite: false,
    childrenWidth: measureInfo.width,
  }

  switch (position) {
    case "top": {
      if (
        fitTop(tipsMeasureInfo, measureInfo, customPosition) ||
        !autoFitPosition
      ) {
        adjustResult = mergeResult(
          adjustTop(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          false,
          measureInfo.width,
        )
      } else if (fitBottom(tipsMeasureInfo, measureInfo, customPosition)) {
        adjustResult = mergeResult(
          adjustBottom(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          true,
          measureInfo.width,
        )
      } else {
        adjustResult = mergeResult(
          adjustTop(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          false,
          measureInfo.width,
        )
      }
      break
    }
    case "tl": {
      if (
        fitTl(tipsMeasureInfo, measureInfo, customPosition) ||
        !autoFitPosition
      ) {
        adjustResult = mergeResult(
          adjustTl(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          false,
          measureInfo.width,
        )
      } else if (fitBl(tipsMeasureInfo, measureInfo, customPosition)) {
        adjustResult = mergeResult(
          adjustBl(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          true,
          measureInfo.width,
        )
      } else {
        adjustResult = mergeResult(
          adjustTl(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          false,
          measureInfo.width,
        )
      }
      break
    }
    case "tr": {
      if (
        fitTr(tipsMeasureInfo, measureInfo, customPosition) ||
        !autoFitPosition
      ) {
        adjustResult = mergeResult(
          adjustTr(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          false,
          measureInfo.width,
        )
      } else if (fitBr(tipsMeasureInfo, measureInfo, customPosition)) {
        adjustResult = mergeResult(
          adjustBr(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          true,
          measureInfo.width,
        )
      } else {
        adjustResult = mergeResult(
          adjustTr(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          false,
          measureInfo.width,
        )
      }
      break
    }
    case "bottom": {
      if (
        fitBottom(tipsMeasureInfo, measureInfo, customPosition) ||
        !autoFitPosition
      ) {
        adjustResult = mergeResult(
          adjustBottom(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          false,
          measureInfo.width,
        )
      } else if (fitTop(tipsMeasureInfo, measureInfo, customPosition)) {
        adjustResult = mergeResult(
          adjustTop(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          true,
          measureInfo.width,
        )
      } else {
        adjustResult = mergeResult(
          adjustBottom(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          false,
          measureInfo.width,
        )
      }
      break
    }
    case "bl": {
      if (
        fitBl(tipsMeasureInfo, measureInfo, customPosition) ||
        !autoFitPosition
      ) {
        adjustResult = mergeResult(
          adjustBl(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          false,
          measureInfo.width,
        )
      } else if (fitTl(tipsMeasureInfo, measureInfo, customPosition)) {
        adjustResult = mergeResult(
          adjustTl(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          true,
          measureInfo.width,
        )
      } else {
        adjustResult = mergeResult(
          adjustBl(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          false,
          measureInfo.width,
        )
      }
      break
    }
    case "br": {
      if (
        fitBr(tipsMeasureInfo, measureInfo, customPosition) ||
        !autoFitPosition
      ) {
        adjustResult = mergeResult(
          adjustBr(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          false,
          measureInfo.width,
        )
      } else if (fitTr(tipsMeasureInfo, measureInfo, customPosition)) {
        adjustResult = mergeResult(
          adjustTr(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          true,
          measureInfo.width,
        )
      } else {
        adjustResult = mergeResult(
          adjustBr(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          false,
          measureInfo.width,
        )
      }
      break
    }
    case "left": {
      if (
        fitLeft(tipsMeasureInfo, measureInfo, customPosition) ||
        !autoFitPosition
      ) {
        adjustResult = mergeResult(
          adjustLeft(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          false,
          measureInfo.width,
        )
      } else if (fitRight(tipsMeasureInfo, measureInfo, customPosition)) {
        adjustResult = mergeResult(
          adjustRight(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          true,
          measureInfo.width,
        )
      } else {
        adjustResult = mergeResult(
          adjustLeft(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          false,
          measureInfo.width,
        )
      }
      break
    }
    case "lt": {
      if (
        fitLt(tipsMeasureInfo, measureInfo, customPosition) ||
        !autoFitPosition
      ) {
        adjustResult = mergeResult(
          adjustLt(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          false,
          measureInfo.width,
        )
      } else if (fitRt(tipsMeasureInfo, measureInfo, customPosition)) {
        adjustResult = mergeResult(
          adjustRt(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          true,
          measureInfo.width,
        )
      } else {
        adjustResult = mergeResult(
          adjustLt(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          false,
          measureInfo.width,
        )
      }
      break
    }
    case "lb": {
      if (
        fitLb(tipsMeasureInfo, measureInfo, customPosition) ||
        !autoFitPosition
      ) {
        adjustResult = mergeResult(
          adjustLb(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          false,
          measureInfo.width,
        )
      } else if (fitRb(tipsMeasureInfo, measureInfo, customPosition)) {
        adjustResult = mergeResult(
          adjustRb(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          true,
          measureInfo.width,
        )
      } else {
        adjustResult = mergeResult(
          adjustLb(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          false,
          measureInfo.width,
        )
      }
      break
    }
    case "right": {
      if (
        fitRight(tipsMeasureInfo, measureInfo, customPosition) ||
        !autoFitPosition
      ) {
        adjustResult = mergeResult(
          adjustRight(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          false,
          measureInfo.width,
        )
      } else if (fitLeft(tipsMeasureInfo, measureInfo, customPosition)) {
        adjustResult = mergeResult(
          adjustLeft(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          true,
          measureInfo.width,
        )
      } else {
        adjustResult = mergeResult(
          adjustRight(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          false,
          measureInfo.width,
        )
      }
      break
    }
    case "rt": {
      if (
        fitRt(tipsMeasureInfo, measureInfo, customPosition) ||
        !autoFitPosition
      ) {
        adjustResult = mergeResult(
          adjustRt(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          false,
          measureInfo.width,
        )
      } else if (fitLt(tipsMeasureInfo, measureInfo, customPosition)) {
        adjustResult = mergeResult(
          adjustLt(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          true,
          measureInfo.width,
        )
      } else {
        adjustResult = mergeResult(
          adjustRt(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          false,
          measureInfo.width,
        )
      }
      break
    }
    case "rb": {
      if (
        fitRb(tipsMeasureInfo, measureInfo, customPosition) ||
        !autoFitPosition
      ) {
        adjustResult = mergeResult(
          adjustRb(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          false,
          measureInfo.width,
        )
      } else if (fitLb(tipsMeasureInfo, measureInfo, customPosition)) {
        adjustResult = mergeResult(
          adjustLb(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          true,
          measureInfo.width,
        )
      } else {
        adjustResult = mergeResult(
          adjustRb(tipsMeasureInfo, measureInfo, customPosition, showArrow),
          false,
          measureInfo.width,
        )
      }
      break
    }
  }

  return adjustResult
}

function mergeResult(
  result: [number, number],
  finalOppositeState: boolean,
  childrenWidth: number,
): AdjustResult {
  return {
    transX: result[0],
    transY: result[1],
    opposite: finalOppositeState,
    childrenWidth: childrenWidth,
  } as AdjustResult
}

// top
function adjustTop(
  tipsMeasureInfo: {
    width: number
    height: number
  },
  measureInfo: RectReadOnly,
  customPosition: CustomPositionType,
  showArrow: boolean,
): [number, number] {
  let x = measureInfo.left + (measureInfo.width - tipsMeasureInfo.width) / 2

  if (customPosition.x) {
    x = customPosition.x - tipsMeasureInfo.width / 2
  }

  return [
    x + window.scrollX,
    (customPosition.y ?? measureInfo.top) +
      window.scrollY -
      tipsMeasureInfo.height,
  ]
}

function adjustTl(
  tipsMeasureInfo: {
    width: number
    height: number
  },
  measureInfo: RectReadOnly,
  customPosition: CustomPositionType,
  showArrow: boolean,
): [number, number] {
  let x = measureInfo.left

  if (customPosition.x) {
    x =
      customPosition.x -
      tipsMeasureInfo.width +
      (showArrow ? ARROW_TIP_OFFSET : 0)
  }
  return [
    x + window.scrollX,
    (customPosition.y ?? measureInfo.top) +
      window.scrollY -
      tipsMeasureInfo.height,
  ]
}

function adjustTr(
  tipsMeasureInfo: {
    width: number
    height: number
  },
  measureInfo: RectReadOnly,
  customPosition: CustomPositionType,
  showArrow: boolean,
): [number, number] {
  let x = measureInfo.left + measureInfo.width - tipsMeasureInfo.width

  if (customPosition.x) {
    x = customPosition.x - (showArrow ? ARROW_TIP_OFFSET : 0)
  }
  return [
    x + window.scrollX,
    (customPosition.y ?? measureInfo.top) +
      window.scrollY -
      tipsMeasureInfo.height,
  ]
}

function fitTop(
  tipsMeasureInfo: RectReadOnly,
  measureInfo: RectReadOnly,
  customPosition: CustomPositionType,
): boolean {
  return (customPosition.y ?? measureInfo.top) >= tipsMeasureInfo.height
}

function fitTl(
  tipsMeasureInfo: {
    width: number
    height: number
  },
  measureInfo: RectReadOnly,
  customPosition: CustomPositionType,
): boolean {
  return (customPosition.y ?? measureInfo.top) >= tipsMeasureInfo.height
}

function fitTr(
  tipsMeasureInfo: {
    width: number
    height: number
  },
  measureInfo: RectReadOnly,
  customPosition: CustomPositionType,
): boolean {
  return (customPosition.y ?? measureInfo.top) >= tipsMeasureInfo.height
}

// bottom
function adjustBottom(
  tipsMeasureInfo: {
    width: number
    height: number
  },
  measureInfo: RectReadOnly,
  customPosition: CustomPositionType,
  showArrow: boolean,
): [number, number] {
  let x = (measureInfo.width - tipsMeasureInfo.width) / 2 + measureInfo.left

  if (customPosition.x) {
    x = customPosition.x - tipsMeasureInfo.width / 2
  }

  return [
    x + window.scrollX,
    (customPosition.y ?? measureInfo.bottom) + window.scrollY,
  ]
}

function adjustBl(
  tipsMeasureInfo: {
    width: number
    height: number
  },
  measureInfo: RectReadOnly,
  customPosition: CustomPositionType,
  showArrow: boolean,
): [number, number] {
  let x = measureInfo.left

  if (customPosition.x) {
    x =
      customPosition.x -
      tipsMeasureInfo.width +
      (showArrow ? ARROW_TIP_OFFSET : 0)
  }

  return [
    x + window.scrollX,
    (customPosition.y ?? measureInfo.bottom) + window.scrollY,
  ]
}

function adjustBr(
  tipsMeasureInfo: {
    width: number
    height: number
  },
  measureInfo: RectReadOnly,
  customPosition: CustomPositionType,
  showArrow: boolean,
): [number, number] {
  let x = measureInfo.left + measureInfo.width - tipsMeasureInfo.width

  if (customPosition.x) {
    x = customPosition.x - (showArrow ? ARROW_TIP_OFFSET : 0)
  }

  return [
    x + window.scrollX,
    (customPosition.y ?? measureInfo.bottom) + window.scrollY,
  ]
}

function fitBottom(
  tipsMeasureInfo: {
    width: number
    height: number
  },
  measureInfo: RectReadOnly,
  customPosition: CustomPositionType,
): boolean {
  return (
    window.document.documentElement.clientHeight -
      (customPosition.y ?? measureInfo.bottom) >=
    tipsMeasureInfo.height
  )
}

function fitBl(
  tipsMeasureInfo: {
    width: number
    height: number
  },
  measureInfo: RectReadOnly,
  customPosition: CustomPositionType,
): boolean {
  return (
    window.document.documentElement.clientHeight -
      (customPosition.y ?? measureInfo.bottom) >=
    tipsMeasureInfo.height
  )
}

function fitBr(
  tipsMeasureInfo: {
    width: number
    height: number
  },
  measureInfo: RectReadOnly,
  customPosition: CustomPositionType,
): boolean {
  return (
    window.document.documentElement.clientHeight -
      (customPosition.y ?? measureInfo.bottom) >=
    tipsMeasureInfo.height
  )
}

// left
function adjustLeft(
  tipsMeasureInfo: {
    width: number
    height: number
  },
  measureInfo: RectReadOnly,
  customPosition: CustomPositionType,
  showArrow: boolean,
): [number, number] {
  let y = measureInfo.top - (tipsMeasureInfo.height - measureInfo.height) / 2

  if (customPosition.y) {
    y = customPosition.y - tipsMeasureInfo.height / 2
  }

  return [
    (customPosition.x ?? measureInfo.left) +
      window.scrollX -
      tipsMeasureInfo.width,
    y + window.scrollY,
  ]
}

function adjustLt(
  tipsMeasureInfo: {
    width: number
    height: number
  },
  measureInfo: RectReadOnly,
  customPosition: CustomPositionType,
  showArrow: boolean,
): [number, number] {
  let y = measureInfo.top

  if (customPosition.y) {
    y =
      customPosition.y -
      tipsMeasureInfo.height +
      (showArrow ? ARROW_TIP_OFFSET : 0)
  }

  return [
    (customPosition.x ?? measureInfo.left) +
      window.scrollX -
      tipsMeasureInfo.width,
    y + window.scrollY,
  ]
}

function adjustLb(
  tipsMeasureInfo: {
    width: number
    height: number
  },
  measureInfo: RectReadOnly,
  customPosition: CustomPositionType,
  showArrow: boolean,
): [number, number] {
  let y = measureInfo.bottom - tipsMeasureInfo.height

  if (customPosition.y) {
    y = customPosition.y - (showArrow ? ARROW_TIP_OFFSET : 0)
  }

  return [
    (customPosition.x ?? measureInfo.left) +
      window.scrollX -
      tipsMeasureInfo.width,
    y + window.scrollY,
  ]
}

function fitLeft(
  tipsMeasureInfo: {
    width: number
    height: number
  },
  measureInfo: RectReadOnly,
  customPosition: CustomPositionType,
): boolean {
  return (customPosition.x ?? measureInfo.left) >= tipsMeasureInfo.width
}

function fitLt(
  tipsMeasureInfo: {
    width: number
    height: number
  },
  measureInfo: RectReadOnly,
  customPosition: CustomPositionType,
): boolean {
  return (customPosition.x ?? measureInfo.left) >= tipsMeasureInfo.width
}

function fitLb(
  tipsMeasureInfo: {
    width: number
    height: number
  },
  measureInfo: RectReadOnly,
  customPosition: CustomPositionType,
): boolean {
  return (customPosition.x ?? measureInfo.left) >= tipsMeasureInfo.width
}

// right
function adjustRight(
  tipsMeasureInfo: {
    width: number
    height: number
  },
  measureInfo: RectReadOnly,
  customPosition: CustomPositionType,
  showArrow: boolean,
): [number, number] {
  let y = measureInfo.top - (tipsMeasureInfo.height - measureInfo.height) / 2

  if (customPosition.y) {
    y = customPosition.y - tipsMeasureInfo.height / 2
  }

  return [
    (customPosition.x ?? measureInfo.right) + window.scrollX,
    y + window.scrollY,
  ]
}

function adjustRt(
  tipsMeasureInfo: {
    width: number
    height: number
  },
  measureInfo: RectReadOnly,
  customPosition: CustomPositionType,
  showArrow: boolean,
): [number, number] {
  let y = measureInfo.top

  if (customPosition.y) {
    y =
      customPosition.y -
      tipsMeasureInfo.height +
      (showArrow ? ARROW_TIP_OFFSET : 0)
  }

  return [
    (customPosition.x ?? measureInfo.right) + window.scrollX,
    y + window.scrollY,
  ]
}

function adjustRb(
  tipsMeasureInfo: {
    width: number
    height: number
  },
  measureInfo: RectReadOnly,
  customPosition: CustomPositionType,
  showArrow: boolean,
): [number, number] {
  let y = measureInfo.bottom - tipsMeasureInfo.height

  if (customPosition.y) {
    y = customPosition.y - (showArrow ? ARROW_TIP_OFFSET : 0)
  }
  return [
    (customPosition.x ?? measureInfo.right) + window.scrollX,
    y + window.scrollY,
  ]
}

function fitRight(
  tipsMeasureInfo: {
    width: number
    height: number
  },
  measureInfo: RectReadOnly,
  customPosition: CustomPositionType,
): boolean {
  return (
    window.document.documentElement.clientWidth -
      (customPosition.x ?? measureInfo.right) >=
    tipsMeasureInfo.width
  )
}

function fitRt(
  tipsMeasureInfo: {
    width: number
    height: number
  },
  measureInfo: RectReadOnly,
  customPosition: CustomPositionType,
): boolean {
  return (
    window.document.documentElement.clientWidth -
      (customPosition.x ?? measureInfo.right) >=
    tipsMeasureInfo.width
  )
}

function fitRb(
  tipsMeasureInfo: {
    width: number
    height: number
  },
  measureInfo: RectReadOnly,
  customPosition: CustomPositionType,
): boolean {
  return (
    window.document.documentElement.clientWidth -
      (customPosition.x ?? measureInfo.right) >=
    tipsMeasureInfo.width
  )
}

export function getFinalPosition(
  opposite: boolean,
  position: TriggerPosition,
): TriggerPosition {
  if (!opposite) {
    return position
  }
  switch (position) {
    case "top":
      return "bottom"
    case "tl":
      return "bl"
    case "tr":
      return "br"
    case "bottom":
      return "top"
    case "bl":
      return "tl"
    case "br":
      return "tr"
    case "left":
      return "right"
    case "lt":
      return "rt"
    case "lb":
      return "rb"
    case "right":
      return "left"
    case "rt":
      return "lt"
    case "rb":
      return "lb"
  }
}

export const useIsInViewport = (ref?: RefObject<HTMLElement>) => {
  const [isInViewport, setIsInViewport] = useState(false)

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsInViewport(entry.isIntersecting),
      ),
    [],
  )

  useEffect(() => {
    if (ref?.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [ref, observer])

  return isInViewport
}
