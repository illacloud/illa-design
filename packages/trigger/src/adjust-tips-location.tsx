import { CustomPositionType, TriggerPosition } from "./interface"

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
      if (fitTop(tipsDom, childrenDom, customPosition) || !autoFitPosition) {
        adjustResult = mergeResult(
          adjustTop(tipsDom, childrenDom, customPosition),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      } else if (fitBottom(tipsDom, childrenDom, customPosition)) {
        adjustResult = mergeResult(
          adjustBottom(tipsDom, childrenDom, customPosition),
          true,
          childrenRef.getBoundingClientRect().width,
        )
      } else {
        adjustResult = mergeResult(
          adjustTop(tipsDom, childrenDom, customPosition),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      }
      break
    }
    case "tl": {
      if (fitTl(tipsDom, childrenDom, customPosition) || !autoFitPosition) {
        adjustResult = mergeResult(
          adjustTl(tipsDom, childrenDom, customPosition),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      } else if (fitBl(tipsDom, childrenDom, customPosition)) {
        adjustResult = mergeResult(
          adjustBl(tipsDom, childrenDom, customPosition),
          true,
          childrenRef.getBoundingClientRect().width,
        )
      } else {
        adjustResult = mergeResult(
          adjustTl(tipsDom, childrenDom, customPosition),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      }
      break
    }
    case "tr": {
      if (fitTr(tipsDom, childrenDom, customPosition) || !autoFitPosition) {
        adjustResult = mergeResult(
          adjustTr(tipsDom, childrenDom, customPosition),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      } else if (fitBr(tipsDom, childrenDom, customPosition)) {
        adjustResult = mergeResult(
          adjustBr(tipsDom, childrenDom, customPosition),
          true,
          childrenRef.getBoundingClientRect().width,
        )
      } else {
        adjustResult = mergeResult(
          adjustTr(tipsDom, childrenDom, customPosition),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      }
      break
    }
    case "bottom": {
      if (fitBottom(tipsDom, childrenDom, customPosition) || !autoFitPosition) {
        adjustResult = mergeResult(
          adjustBottom(tipsDom, childrenDom, customPosition),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      } else if (fitTop(tipsDom, childrenDom, customPosition)) {
        adjustResult = mergeResult(
          adjustTop(tipsDom, childrenDom, customPosition),
          true,
          childrenRef.getBoundingClientRect().width,
        )
      } else {
        adjustResult = mergeResult(
          adjustBottom(tipsDom, childrenDom, customPosition),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      }
      break
    }
    case "bl": {
      if (fitBl(tipsDom, childrenDom, customPosition) || !autoFitPosition) {
        adjustResult = mergeResult(
          adjustBl(tipsDom, childrenDom, customPosition),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      } else if (fitTl(tipsDom, childrenDom, customPosition)) {
        adjustResult = mergeResult(
          adjustTl(tipsDom, childrenDom, customPosition),
          true,
          childrenRef.getBoundingClientRect().width,
        )
      } else {
        adjustResult = mergeResult(
          adjustBl(tipsDom, childrenDom, customPosition),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      }
      break
    }
    case "br": {
      if (fitBr(tipsDom, childrenDom, customPosition) || !autoFitPosition) {
        adjustResult = mergeResult(
          adjustBr(tipsDom, childrenDom, customPosition),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      } else if (fitTr(tipsDom, childrenDom, customPosition)) {
        adjustResult = mergeResult(
          adjustTr(tipsDom, childrenDom, customPosition),
          true,
          childrenRef.getBoundingClientRect().width,
        )
      } else {
        adjustResult = mergeResult(
          adjustBr(tipsDom, childrenDom, customPosition),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      }
      break
    }
    case "left": {
      if (fitLeft(tipsDom, childrenDom, customPosition) || !autoFitPosition) {
        adjustResult = mergeResult(
          adjustLeft(tipsDom, childrenDom, customPosition),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      } else if (fitRight(tipsDom, childrenDom, customPosition)) {
        adjustResult = mergeResult(
          adjustRight(tipsDom, childrenDom, customPosition),
          true,
          childrenRef.getBoundingClientRect().width,
        )
      } else {
        adjustResult = mergeResult(
          adjustLeft(tipsDom, childrenDom, customPosition),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      }
      break
    }
    case "lt": {
      if (fitLt(tipsDom, childrenDom, customPosition) || !autoFitPosition) {
        adjustResult = mergeResult(
          adjustLt(tipsDom, childrenDom, customPosition),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      } else if (fitRt(tipsDom, childrenDom, customPosition)) {
        adjustResult = mergeResult(
          adjustRt(tipsDom, childrenDom, customPosition),
          true,
          childrenRef.getBoundingClientRect().width,
        )
      } else {
        adjustResult = mergeResult(
          adjustLt(tipsDom, childrenDom, customPosition),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      }
      break
    }
    case "lb": {
      if (fitLb(tipsDom, childrenDom, customPosition) || !autoFitPosition) {
        adjustResult = mergeResult(
          adjustLb(tipsDom, childrenDom, customPosition),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      } else if (fitRb(tipsDom, childrenDom, customPosition)) {
        adjustResult = mergeResult(
          adjustRb(tipsDom, childrenDom, customPosition),
          true,
          childrenRef.getBoundingClientRect().width,
        )
      } else {
        adjustResult = mergeResult(
          adjustLb(tipsDom, childrenDom, customPosition),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      }
      break
    }
    case "right": {
      if (fitRight(tipsDom, childrenDom, customPosition) || !autoFitPosition) {
        adjustResult = mergeResult(
          adjustRight(tipsDom, childrenDom, customPosition),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      } else if (fitLeft(tipsDom, childrenDom, customPosition)) {
        adjustResult = mergeResult(
          adjustLeft(tipsDom, childrenDom, customPosition),
          true,
          childrenRef.getBoundingClientRect().width,
        )
      } else {
        adjustResult = mergeResult(
          adjustRight(tipsDom, childrenDom, customPosition),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      }
      break
    }
    case "rt": {
      if (fitRt(tipsDom, childrenDom, customPosition) || !autoFitPosition) {
        adjustResult = mergeResult(
          adjustRt(tipsDom, childrenDom, customPosition),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      } else if (fitLt(tipsDom, childrenDom, customPosition)) {
        adjustResult = mergeResult(
          adjustLt(tipsDom, childrenDom, customPosition),
          true,
          childrenRef.getBoundingClientRect().width,
        )
      } else {
        adjustResult = mergeResult(
          adjustRt(tipsDom, childrenDom, customPosition),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      }
      break
    }
    case "rb": {
      if (fitRb(tipsDom, childrenDom, customPosition) || !autoFitPosition) {
        adjustResult = mergeResult(
          adjustRb(tipsDom, childrenDom, customPosition),
          false,
          childrenRef.getBoundingClientRect().width,
        )
      } else if (fitLb(tipsDom, childrenDom, customPosition)) {
        adjustResult = mergeResult(
          adjustLb(tipsDom, childrenDom, customPosition),
          true,
          childrenRef.getBoundingClientRect().width,
        )
      } else {
        adjustResult = mergeResult(
          adjustRb(tipsDom, childrenDom, customPosition),
          false,
          childrenRef.getBoundingClientRect().width,
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
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
  customPosition: CustomPositionType,
): [number, number] {
  let x = childrenDom.left + (childrenDom.width - tipsDom.width) / 2

  if (customPosition.x) {
    x = customPosition.x - tipsDom.width / 2
  }

  return [
    x + window.scrollX,
    (customPosition.y ?? childrenDom.top) + window.scrollY - tipsDom.height,
  ]
}

function adjustTl(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
  customPosition: CustomPositionType,
): [number, number] {
  let x = childrenDom.left

  if (customPosition.x) {
    x = customPosition.x - tipsDom.width
  }
  return [
    x + window.scrollX,
    (customPosition.y ?? childrenDom.top) + window.scrollY - tipsDom.height,
  ]
}

function adjustTr(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
  customPosition: CustomPositionType,
): [number, number] {
  let x = childrenDom.left + childrenDom.width - tipsDom.width

  if (customPosition.x) {
    x = customPosition.x
  }
  return [
    x + window.scrollX,
    (customPosition.y ?? childrenDom.top) + window.scrollY - tipsDom.height,
  ]
}

function fitTop(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
  customPosition: CustomPositionType,
): boolean {
  return (customPosition.y ?? childrenDom.top) >= tipsDom.height
}

function fitTl(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
  customPosition: CustomPositionType,
): boolean {
  return (customPosition.y ?? childrenDom.top) >= tipsDom.height
}

function fitTr(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
  customPosition: CustomPositionType,
): boolean {
  return (customPosition.y ?? childrenDom.top) >= tipsDom.height
}

// bottom
function adjustBottom(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
  customPosition: CustomPositionType,
): [number, number] {
  let x = (childrenDom.width - tipsDom.width) / 2 + childrenDom.left

  if (customPosition.x) {
    x = customPosition.x - tipsDom.width / 2
  }

  return [
    x + window.scrollX,
    (customPosition.y ?? childrenDom.bottom) + window.scrollY,
  ]
}

function adjustBl(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
  customPosition: CustomPositionType,
): [number, number] {
  let x = childrenDom.left

  if (customPosition.x) {
    x = customPosition.x - tipsDom.width
  }

  return [
    x + window.scrollX,
    (customPosition.y ?? childrenDom.bottom) + window.scrollY,
  ]
}

function adjustBr(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
  customPosition: CustomPositionType,
): [number, number] {
  let x = childrenDom.left + childrenDom.width - tipsDom.width

  if (customPosition.x) {
    x = customPosition.x
  }

  return [
    x + window.scrollX,
    (customPosition.y ?? childrenDom.bottom) + window.scrollY,
  ]
}

function fitBottom(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
  customPosition: CustomPositionType,
): boolean {
  return (
    window.document.documentElement.clientHeight -
      (customPosition.y ?? childrenDom.bottom) >=
    tipsDom.height
  )
}

function fitBl(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
  customPosition: CustomPositionType,
): boolean {
  return (
    window.document.documentElement.clientHeight -
      (customPosition.y ?? childrenDom.bottom) >=
    tipsDom.height
  )
}

function fitBr(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
  customPosition: CustomPositionType,
): boolean {
  return (
    window.document.documentElement.clientHeight -
      (customPosition.y ?? childrenDom.bottom) >=
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
  customPosition: CustomPositionType,
): [number, number] {
  let y = childrenDom.top - (tipsDom.height - childrenDom.height) / 2

  if (customPosition.y) {
    y = customPosition.y - tipsDom.height / 2
  }

  return [
    (customPosition.x ?? childrenDom.left) + window.scrollX - tipsDom.width,
    y + window.scrollY,
  ]
}

function adjustLt(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
  customPosition: CustomPositionType,
): [number, number] {
  let y = childrenDom.top

  if (customPosition.y) {
    y = customPosition.y - tipsDom.height
  }

  return [
    (customPosition.x ?? childrenDom.left) + window.scrollX - tipsDom.width,
    y + window.scrollY,
  ]
}

function adjustLb(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
  customPosition: CustomPositionType,
): [number, number] {
  let y = childrenDom.bottom - tipsDom.height

  if (customPosition.y) {
    y = customPosition.y
  }

  return [
    (customPosition.x ?? childrenDom.left) + window.scrollX - tipsDom.width,
    y + window.scrollY,
  ]
}

function fitLeft(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
  customPosition: CustomPositionType,
): boolean {
  return (customPosition.x ?? childrenDom.left) >= tipsDom.width
}

function fitLt(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
  customPosition: CustomPositionType,
): boolean {
  return (customPosition.x ?? childrenDom.left) >= tipsDom.width
}

function fitLb(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
  customPosition: CustomPositionType,
): boolean {
  return (customPosition.x ?? childrenDom.left) >= tipsDom.width
}

// right
function adjustRight(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
  customPosition: CustomPositionType,
): [number, number] {
  let y = childrenDom.top - (tipsDom.height - childrenDom.height) / 2

  if (customPosition.y) {
    y = customPosition.y - tipsDom.height / 2
  }

  return [
    (customPosition.x ?? childrenDom.right) + window.scrollX,
    y + window.scrollY,
  ]
}

function adjustRt(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
  customPosition: CustomPositionType,
): [number, number] {
  let y = childrenDom.top

  if (customPosition.y) {
    y = customPosition.y - tipsDom.height
  }

  return [
    (customPosition.x ?? childrenDom.right) + window.scrollX,
    y + window.scrollY,
  ]
}

function adjustRb(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
  customPosition: CustomPositionType,
): [number, number] {
  let y = childrenDom.bottom - tipsDom.height

  if (customPosition.y) {
    y = customPosition.y
  }
  return [
    (customPosition.x ?? childrenDom.right) + window.scrollX,
    y + window.scrollY,
  ]
}

function fitRight(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
  customPosition: CustomPositionType,
): boolean {
  return (
    window.document.documentElement.clientWidth -
      (customPosition.x ?? childrenDom.right) >=
    tipsDom.width
  )
}

function fitRt(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
  customPosition: CustomPositionType,
): boolean {
  return (
    window.document.documentElement.clientWidth -
      (customPosition.x ?? childrenDom.right) >=
    tipsDom.width
  )
}

function fitRb(
  tipsDom: {
    width: number
    height: number
  },
  childrenDom: DOMRect,
  customPosition: CustomPositionType,
): boolean {
  return (
    window.document.documentElement.clientWidth -
      (customPosition.x ?? childrenDom.right) >=
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
