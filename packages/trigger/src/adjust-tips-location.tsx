import { ReactNode } from "react"
import { render } from "react-dom"
import { TriggerPosition, customPositionType } from "./interface"

export interface AdjustResult {
  readonly transX: number
  readonly transY: number
  readonly opposite: boolean
  readonly childrenWidth: number
}

export async function adjustLocation(
  tipsNode: ReactNode,
  childrenRef: HTMLElement,
  position: TriggerPosition,
  autoFitPosition: boolean,
  customPosition: customPositionType,
) {
  let computeElement: HTMLElement
  computeElement = document.createElement(HTMLDivElement.name)
  document.body.appendChild(computeElement)

  let adjustResult = {
    transY: 0,
    transX: 0,
    opposite: false,
    childrenWidth: childrenRef.getBoundingClientRect().width,
  }

  await render(
    <div style={{ display: "inline-flex" }}>{tipsNode}</div>,
    computeElement,
  )

  const tipsDom = computeElement.children.item(0)!!.getBoundingClientRect()
  const childrenDom = childrenRef.getBoundingClientRect()

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
  // custom position
  if (customPosition.x) {
    adjustResult.transX = customPosition.x
  }
  if (customPosition.y) {
    adjustResult.transY = customPosition.y
  }
  computeElement.remove()
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
function adjustTop(tipsDom: DOMRect, childrenDom: DOMRect): [number, number] {
  return [
    (childrenDom.width - tipsDom.width) / 2 + childrenDom.left + window.scrollX,
    childrenDom.top + window.scrollY - tipsDom.height,
  ]
}

function adjustTl(tipsDom: DOMRect, childrenDom: DOMRect): [number, number] {
  return [
    childrenDom.left + window.scrollX,
    childrenDom.top + window.scrollY - tipsDom.height,
  ]
}

function adjustTr(tipsDom: DOMRect, childrenDom: DOMRect): [number, number] {
  return [
    childrenDom.left + window.scrollX + childrenDom.width - tipsDom.width,
    childrenDom.top + window.scrollY - tipsDom.height,
  ]
}

function fitTop(tipsDom: DOMRect, childrenDom: DOMRect): boolean {
  return childrenDom.top >= tipsDom.height
}

function fitTl(tipsDom: DOMRect, childrenDom: DOMRect): boolean {
  return childrenDom.top >= tipsDom.height
}

function fitTr(tipsDom: DOMRect, childrenDom: DOMRect): boolean {
  return childrenDom.top >= tipsDom.height
}

// bottom
function adjustBottom(
  tipsDom: DOMRect,
  childrenDom: DOMRect,
): [number, number] {
  return [
    (childrenDom.width - tipsDom.width) / 2 + childrenDom.left + window.scrollX,
    childrenDom.bottom + window.scrollY,
  ]
}

function adjustBl(tipsDom: DOMRect, childrenDom: DOMRect): [number, number] {
  return [
    childrenDom.left + window.scrollX,
    childrenDom.bottom + window.scrollY,
  ]
}

function adjustBr(tipsDom: DOMRect, childrenDom: DOMRect): [number, number] {
  return [
    childrenDom.left + window.scrollX + childrenDom.width - tipsDom.width,
    childrenDom.bottom + window.scrollY,
  ]
}

function fitBottom(tipsDom: DOMRect, childrenDom: DOMRect): boolean {
  return (
    window.document.documentElement.clientHeight - childrenDom.bottom >=
    tipsDom.height
  )
}

function fitBl(tipsDom: DOMRect, childrenDom: DOMRect): boolean {
  return (
    window.document.documentElement.clientHeight - childrenDom.bottom >=
    tipsDom.height
  )
}

function fitBr(tipsDom: DOMRect, childrenDom: DOMRect): boolean {
  return (
    window.document.documentElement.clientHeight - childrenDom.bottom >=
    tipsDom.height
  )
}

// left
function adjustLeft(tipsDom: DOMRect, childrenDom: DOMRect): [number, number] {
  return [
    childrenDom.left + window.scrollX - tipsDom.width,
    childrenDom.top +
      window.scrollY -
      (tipsDom.height - childrenDom.height) / 2,
  ]
}

function adjustLt(tipsDom: DOMRect, childrenDom: DOMRect): [number, number] {
  return [
    childrenDom.left + window.scrollX - tipsDom.width,
    childrenDom.top + window.scrollY,
  ]
}

function adjustLb(tipsDom: DOMRect, childrenDom: DOMRect): [number, number] {
  return [
    childrenDom.left + window.scrollX - tipsDom.width,
    childrenDom.bottom + window.scrollY - tipsDom.height,
  ]
}

function fitLeft(tipsDom: DOMRect, childrenDom: DOMRect): boolean {
  return childrenDom.left >= tipsDom.width
}

function fitLt(tipsDom: DOMRect, childrenDom: DOMRect): boolean {
  return childrenDom.left >= tipsDom.width
}

function fitLb(tipsDom: DOMRect, childrenDom: DOMRect): boolean {
  return childrenDom.left >= tipsDom.width
}

// right
function adjustRight(tipsDom: DOMRect, childrenDom: DOMRect): [number, number] {
  return [
    childrenDom.right + window.scrollX,
    childrenDom.top +
      window.scrollY -
      (tipsDom.height - childrenDom.height) / 2,
  ]
}

function adjustRt(tipsDom: DOMRect, childrenDom: DOMRect): [number, number] {
  return [childrenDom.right + window.scrollX, childrenDom.top + window.scrollY]
}

function adjustRb(tipsDom: DOMRect, childrenDom: DOMRect): [number, number] {
  return [
    childrenDom.right + window.scrollX,
    childrenDom.bottom + window.scrollY - tipsDom.height,
  ]
}

function fitRight(tipsDom: DOMRect, childrenDom: DOMRect): boolean {
  return (
    window.document.documentElement.clientWidth - childrenDom.right >=
    tipsDom.width
  )
}

function fitRt(tipsDom: DOMRect, childrenDom: DOMRect): boolean {
  return (
    window.document.documentElement.clientWidth - childrenDom.right >=
    tipsDom.width
  )
}

function fitRb(tipsDom: DOMRect, childrenDom: DOMRect): boolean {
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
