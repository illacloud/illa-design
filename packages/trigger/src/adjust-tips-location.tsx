import { CustomPositionType, TriggerPosition } from "./interface"
import { useEffect, useMemo, useState } from "react"

export interface AdjustResult {
  readonly transX: number
  readonly transY: number
  readonly opposite: boolean
  readonly childrenWidth: number
}

export function adjustLocation(
  tipsDomWidth: number,
  tipsDomHeight: number,
  childrenRef: HTMLElement,
  position: TriggerPosition,
  autoFitPosition: boolean,
  customPosition: CustomPositionType,
) {
  let adjustResult = {
    transY: 0,
    transX: 0,
    opposite: false,
    childrenWidth: childrenRef.getBoundingClientRect().width,
  }

  const childrenDom = childrenRef.getBoundingClientRect()

  const tipsDom = {
    width: tipsDomWidth,
    height: tipsDomHeight,
  }

  switch (position) {
    case "top": {
      if (fitTop(tipsDom, childrenDom) || !autoFitPosition) {
        adjustResult = mergeResult(
          adjustTop(tipsDom, childrenDom),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      } else if (fitBottom(tipsDom, childrenDom)) {
        adjustResult = mergeResult(
          adjustBottom(tipsDom, childrenDom),
          true,
          childrenRef.getBoundingClientRect().width,
        )
      } else {
        adjustResult = mergeResult(
          adjustTop(tipsDom, childrenDom),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      }
      break
    }
    case "tl": {
      if (fitTl(tipsDom, childrenDom) || !autoFitPosition) {
        adjustResult = mergeResult(
          adjustTl(tipsDom, childrenDom),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      } else if (fitBl(tipsDom, childrenDom)) {
        adjustResult = mergeResult(
          adjustBl(tipsDom, childrenDom),
          true,
          childrenRef.getBoundingClientRect().width,
        )
      } else {
        adjustResult = mergeResult(
          adjustTl(tipsDom, childrenDom),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      }
      break
    }
    case "tr": {
      if (fitTr(tipsDom, childrenDom) || !autoFitPosition) {
        adjustResult = mergeResult(
          adjustTr(tipsDom, childrenDom),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      } else if (fitBr(tipsDom, childrenDom)) {
        adjustResult = mergeResult(
          adjustBr(tipsDom, childrenDom),
          true,
          childrenRef.getBoundingClientRect().width,
        )
      } else {
        adjustResult = mergeResult(
          adjustTr(tipsDom, childrenDom),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      }
      break
    }
    case "bottom": {
      if (fitBottom(tipsDom, childrenDom) || !autoFitPosition) {
        adjustResult = mergeResult(
          adjustBottom(tipsDom, childrenDom),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      } else if (fitTop(tipsDom, childrenDom)) {
        adjustResult = mergeResult(
          adjustTop(tipsDom, childrenDom),
          true,
          childrenRef.getBoundingClientRect().width,
        )
      } else {
        adjustResult = mergeResult(
          adjustBottom(tipsDom, childrenDom),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      }
      break
    }
    case "bl": {
      if (fitBl(tipsDom, childrenDom) || !autoFitPosition) {
        adjustResult = mergeResult(
          adjustBl(tipsDom, childrenDom),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      } else if (fitTl(tipsDom, childrenDom)) {
        adjustResult = mergeResult(
          adjustTl(tipsDom, childrenDom),
          true,
          childrenRef.getBoundingClientRect().width,
        )
      } else {
        adjustResult = mergeResult(
          adjustBl(tipsDom, childrenDom),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      }
      break
    }
    case "br": {
      if (fitBr(tipsDom, childrenDom) || !autoFitPosition) {
        adjustResult = mergeResult(
          adjustBr(tipsDom, childrenDom),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      } else if (fitTr(tipsDom, childrenDom)) {
        adjustResult = mergeResult(
          adjustTr(tipsDom, childrenDom),
          true,
          childrenRef.getBoundingClientRect().width,
        )
      } else {
        adjustResult = mergeResult(
          adjustBr(tipsDom, childrenDom),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      }
      break
    }
    case "left": {
      if (fitLeft(tipsDom, childrenDom) || !autoFitPosition) {
        adjustResult = mergeResult(
          adjustLeft(tipsDom, childrenDom),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      } else if (fitRight(tipsDom, childrenDom)) {
        adjustResult = mergeResult(
          adjustRight(tipsDom, childrenDom),
          true,
          childrenRef.getBoundingClientRect().width,
        )
      } else {
        adjustResult = mergeResult(
          adjustLeft(tipsDom, childrenDom),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      }
      break
    }
    case "lt": {
      if (fitLt(tipsDom, childrenDom) || !autoFitPosition) {
        adjustResult = mergeResult(
          adjustLt(tipsDom, childrenDom),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      } else if (fitRt(tipsDom, childrenDom)) {
        adjustResult = mergeResult(
          adjustRt(tipsDom, childrenDom),
          true,
          childrenRef.getBoundingClientRect().width,
        )
      } else {
        adjustResult = mergeResult(
          adjustLt(tipsDom, childrenDom),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      }
      break
    }
    case "lb": {
      if (fitLb(tipsDom, childrenDom) || !autoFitPosition) {
        adjustResult = mergeResult(
          adjustLb(tipsDom, childrenDom),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      } else if (fitRb(tipsDom, childrenDom)) {
        adjustResult = mergeResult(
          adjustRb(tipsDom, childrenDom),
          true,
          childrenRef.getBoundingClientRect().width,
        )
      } else {
        adjustResult = mergeResult(
          adjustLb(tipsDom, childrenDom),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      }
      break
    }
    case "right": {
      if (fitRight(tipsDom, childrenDom) || !autoFitPosition) {
        adjustResult = mergeResult(
          adjustRight(tipsDom, childrenDom),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      } else if (fitLeft(tipsDom, childrenDom)) {
        adjustResult = mergeResult(
          adjustLeft(tipsDom, childrenDom),
          true,
          childrenRef.getBoundingClientRect().width,
        )
      } else {
        adjustResult = mergeResult(
          adjustRight(tipsDom, childrenDom),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      }
      break
    }
    case "rt": {
      if (fitRt(tipsDom, childrenDom) || !autoFitPosition) {
        adjustResult = mergeResult(
          adjustRt(tipsDom, childrenDom),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      } else if (fitLt(tipsDom, childrenDom)) {
        adjustResult = mergeResult(
          adjustLt(tipsDom, childrenDom),
          true,
          childrenRef.getBoundingClientRect().width,
        )
      } else {
        adjustResult = mergeResult(
          adjustRt(tipsDom, childrenDom),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      }
      break
    }
    case "rb": {
      if (fitRb(tipsDom, childrenDom) || !autoFitPosition) {
        adjustResult = mergeResult(
          adjustRb(tipsDom, childrenDom),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      } else if (fitLb(tipsDom, childrenDom)) {
        adjustResult = mergeResult(
          adjustLb(tipsDom, childrenDom),
          true,
          childrenRef.getBoundingClientRect().width,
        )
      } else {
        adjustResult = mergeResult(
          adjustRb(tipsDom, childrenDom),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      }
      break
    }
  }

  if (customPosition.x) {
    adjustResult.transX = customPosition.x
    adjustResult.opposite = false
  }
  if (customPosition.y) {
    adjustResult.transY = customPosition.y
    adjustResult.opposite = false
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
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
): [number, number] {
  return [
    (childrenDom.width - tipsDom.width) / 2 + childrenDom.left + window.scrollX,
    childrenDom.top + window.scrollY - tipsDom.height,
  ]
}

function adjustTl(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
): [number, number] {
  return [
    childrenDom.left + window.scrollX,
    childrenDom.top + window.scrollY - tipsDom.height,
  ]
}

function adjustTr(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
): [number, number] {
  return [
    childrenDom.left + window.scrollX + childrenDom.width - tipsDom.width,
    childrenDom.top + window.scrollY - tipsDom.height,
  ]
}

function fitTop(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
): boolean {
  return childrenDom.top >= tipsDom.height
}

function fitTl(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
): boolean {
  return childrenDom.top >= tipsDom.height
}

function fitTr(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
): boolean {
  return childrenDom.top >= tipsDom.height
}

// bottom
function adjustBottom(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
): [number, number] {
  return [
    (childrenDom.width - tipsDom.width) / 2 + childrenDom.left + window.scrollX,
    childrenDom.bottom + window.scrollY,
  ]
}

function adjustBl(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
): [number, number] {
  return [
    childrenDom.left + window.scrollX,
    childrenDom.bottom + window.scrollY,
  ]
}

function adjustBr(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
): [number, number] {
  return [
    childrenDom.left + window.scrollX + childrenDom.width - tipsDom.width,
    childrenDom.bottom + window.scrollY,
  ]
}

function fitBottom(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
): boolean {
  return (
    window.document.documentElement.clientHeight - childrenDom.bottom >=
    tipsDom.height
  )
}

function fitBl(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
): boolean {
  return (
    window.document.documentElement.clientHeight - childrenDom.bottom >=
    tipsDom.height
  )
}

function fitBr(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
): boolean {
  return (
    window.document.documentElement.clientHeight - childrenDom.bottom >=
    tipsDom.height
  )
}

// left
function adjustLeft(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
): [number, number] {
  return [
    childrenDom.left + window.scrollX - tipsDom.width,
    childrenDom.top +
      window.scrollY -
      (tipsDom.height - childrenDom.height) / 2,
  ]
}

function adjustLt(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
): [number, number] {
  return [
    childrenDom.left + window.scrollX - tipsDom.width,
    childrenDom.top + window.scrollY,
  ]
}

function adjustLb(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
): [number, number] {
  return [
    childrenDom.left + window.scrollX - tipsDom.width,
    childrenDom.bottom + window.scrollY - tipsDom.height,
  ]
}

function fitLeft(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
): boolean {
  return childrenDom.left >= tipsDom.width
}

function fitLt(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
): boolean {
  return childrenDom.left >= tipsDom.width
}

function fitLb(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
): boolean {
  return childrenDom.left >= tipsDom.width
}

// right
function adjustRight(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
): [number, number] {
  return [
    childrenDom.right + window.scrollX,
    childrenDom.top +
      window.scrollY -
      (tipsDom.height - childrenDom.height) / 2,
  ]
}

function adjustRt(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
): [number, number] {
  return [childrenDom.right + window.scrollX, childrenDom.top + window.scrollY]
}

function adjustRb(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
): [number, number] {
  return [
    childrenDom.right + window.scrollX,
    childrenDom.bottom + window.scrollY - tipsDom.height,
  ]
}

function fitRight(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
): boolean {
  return (
    window.document.documentElement.clientWidth - childrenDom.right >=
    tipsDom.width
  )
}

function fitRt(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
): boolean {
  return (
    window.document.documentElement.clientWidth - childrenDom.right >=
    tipsDom.width
  )
}

function fitRb(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
): boolean {
  return (
    window.document.documentElement.clientWidth - childrenDom.right >=
    tipsDom.width
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

export const useIsInViewport = (element?: Element) => {
  const [isInViewport, setIsInViewport] = useState(false)

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsInViewport(entry.isIntersecting),
      ),
    [],
  )

  useEffect(() => {
    if (element) {
      observer.observe(element)
    }

    return () => {
      observer.disconnect()
    }
  }, [element, observer])
  console.log(isInViewport, element,'isInViewport')
  return isInViewport
}
