import { ReactNode } from "react"
import { render } from "react-dom"
import { TriggerPosition } from "./interface"

export interface AdjustResult {
  readonly transX: number,
  readonly transY: number,
  readonly opposite: boolean
}

export async function adjustLocation(tipsNode: ReactNode, childrenRef: HTMLElement, position: TriggerPosition, autoFitPosition: boolean) {

  let computeElement: HTMLElement
  computeElement = document.createElement(HTMLDivElement.name)
  document.body.appendChild(computeElement)

  let adjustResult = {
    transY: 0,
    transX: 0,
    opposite: false,
  }

  await render(<div style={{ display: "inline-flex" }}>{tipsNode}</div>, computeElement, async () => {})

  const tipsDom = computeElement.children.item(0)!!.getBoundingClientRect()
  const childrenDom = childrenRef.getBoundingClientRect()

  switch (position) {
    case "top": {
      if (fitTop(tipsDom, childrenDom) || !autoFitPosition) {
        adjustResult = mergeResult(adjustTop(tipsDom, childrenDom), false)
      } else if (fitBottom(tipsDom, childrenDom)) {
        adjustResult = mergeResult(adjustBottom(tipsDom, childrenDom), true)
      } else {
        adjustResult = mergeResult(adjustTop(tipsDom, childrenDom), false)
      }
      break
    }
    case "tl": {
      if (fitTl(tipsDom, childrenDom) || !autoFitPosition) {
        adjustResult = mergeResult(adjustTl(tipsDom, childrenDom), false)
      } else if (fitBl(tipsDom, childrenDom)) {
        adjustResult = mergeResult(adjustBl(tipsDom, childrenDom), true)
      } else {
        adjustResult = mergeResult(adjustTl(tipsDom, childrenDom), false)
      }
      break
    }
    case "tr": {
      if (fitTr(tipsDom, childrenDom) || !autoFitPosition) {
        adjustResult = mergeResult(adjustTr(tipsDom, childrenDom), false)
      } else if (fitBr(tipsDom, childrenDom)) {
        adjustResult = mergeResult(adjustBr(tipsDom, childrenDom), true)
      } else {
        adjustResult = mergeResult(adjustTr(tipsDom, childrenDom), false)
      }
      break
    }
    case "bottom": {
      if (fitBottom(tipsDom, childrenDom) || !autoFitPosition) {
        adjustResult = mergeResult(adjustBottom(tipsDom, childrenDom), false)
      } else if (fitTop(tipsDom, childrenDom)) {
        adjustResult = mergeResult(adjustTop(tipsDom, childrenDom), true)
      } else {
        adjustResult = mergeResult(adjustBottom(tipsDom, childrenDom), false)
      }
      break
    }
    case "bl": {
      if (fitBl(tipsDom, childrenDom) || !autoFitPosition) {
        adjustResult = mergeResult(adjustBl(tipsDom, childrenDom), false)
      } else if (fitTl(tipsDom, childrenDom)) {
        adjustResult = mergeResult(adjustTl(tipsDom, childrenDom), true)
      } else {
        adjustResult = mergeResult(adjustBl(tipsDom, childrenDom), false)
      }
      break
    }
    case "br": {
      if (fitBr(tipsDom, childrenDom) || !autoFitPosition) {
        adjustResult = mergeResult(adjustBr(tipsDom, childrenDom), false)
      } else if (fitTr(tipsDom, childrenDom)) {
        adjustResult = mergeResult(adjustTr(tipsDom, childrenDom), true)
      } else {
        adjustResult = mergeResult(adjustBr(tipsDom, childrenDom), false)
      }
      break
    }
    case "left": {
      if (fitLeft(tipsDom, childrenDom) || !autoFitPosition) {
        adjustResult = mergeResult(adjustLeft(tipsDom, childrenDom), false)
      } else if (fitRight(tipsDom, childrenDom)) {
        adjustResult = mergeResult(adjustRight(tipsDom, childrenDom), true)
      } else {
        adjustResult = mergeResult(adjustLeft(tipsDom, childrenDom), false)
      }
      break
    }
    case "lt": {
      if (fitLt(tipsDom, childrenDom) || !autoFitPosition) {
        adjustResult = mergeResult(adjustLt(tipsDom, childrenDom), false)
      } else if (fitRt(tipsDom, childrenDom)) {
        adjustResult = mergeResult(adjustRt(tipsDom, childrenDom), true)
      } else {
        adjustResult = mergeResult(adjustLt(tipsDom, childrenDom), false)
      }
      break
    }
    case "lb": {
      if (fitLb(tipsDom, childrenDom) || !autoFitPosition) {
        adjustResult = mergeResult(adjustLb(tipsDom, childrenDom), false)
      } else if (fitRb(tipsDom, childrenDom)) {
        adjustResult = mergeResult(adjustRb(tipsDom, childrenDom), true)
      } else {
        adjustResult = mergeResult(adjustLb(tipsDom, childrenDom), false)
      }
      break
    }
    case "right": {
      if (fitRight(tipsDom, childrenDom) || !autoFitPosition) {
        adjustResult = mergeResult(adjustRight(tipsDom, childrenDom), false)
      } else if (fitLeft(tipsDom, childrenDom)) {
        adjustResult = mergeResult(adjustLeft(tipsDom, childrenDom), true)
      } else {
        adjustResult = mergeResult(adjustRight(tipsDom, childrenDom), false)
      }
      break
    }
    case "rt": {
      if (fitRt(tipsDom, childrenDom) || !autoFitPosition) {
        adjustResult = mergeResult(adjustRt(tipsDom, childrenDom), false)
      } else if (fitLt(tipsDom, childrenDom)) {
        adjustResult = mergeResult(adjustLt(tipsDom, childrenDom), true)
      } else {
        adjustResult = mergeResult(adjustRt(tipsDom, childrenDom), false)
      }
      break
    }
    case "rb": {
      if (fitRb(tipsDom, childrenDom) || !autoFitPosition) {
        adjustResult = mergeResult(adjustRb(tipsDom, childrenDom), false)
      } else if (fitLb(tipsDom, childrenDom)) {
        adjustResult = mergeResult(adjustLb(tipsDom, childrenDom), true)
      } else {
        adjustResult = mergeResult(adjustRb(tipsDom, childrenDom), false)
      }
      break
    }
  }
  computeElement.remove()
  return adjustResult
}

function mergeResult(result: [number, number], finalOppositeState: boolean): AdjustResult {
  return {
    transX: result[0],
    transY: result[1],
    opposite: finalOppositeState,
  } as AdjustResult
}

// top
function adjustTop(tipsDom: DOMRect, childrenDom: DOMRect): [number, number] {
  return [(childrenDom.width - tipsDom.width) / 2 + childrenDom.left + window.scrollX, (childrenDom.top + window.scrollY) - 16 - tipsDom.height]
}

function adjustTl(tipsDom: DOMRect, childrenDom: DOMRect): [number, number] {
  return [childrenDom.left + window.scrollX, (childrenDom.top + window.scrollY) - 16 - tipsDom.height]
}

function adjustTr(tipsDom: DOMRect, childrenDom: DOMRect): [number, number] {
  return [childrenDom.left + window.scrollX + childrenDom.width - tipsDom.width, (childrenDom.top + window.scrollY) - 16 - tipsDom.height]
}

function fitTop(tipsDom: DOMRect, childrenDom: DOMRect): boolean {
  return childrenDom.top >= tipsDom.height + 16
}

function fitTl(tipsDom: DOMRect, childrenDom: DOMRect): boolean {
  return childrenDom.top >= tipsDom.height + 16
}

function fitTr(tipsDom: DOMRect, childrenDom: DOMRect): boolean {
  return childrenDom.top >= tipsDom.height + 16
}

// bottom
function adjustBottom(tipsDom: DOMRect, childrenDom: DOMRect): [number, number] {
  return [(childrenDom.width - tipsDom.width) / 2 + childrenDom.left + window.scrollX, (childrenDom.bottom + window.scrollY) + 16]
}

function adjustBl(tipsDom: DOMRect, childrenDom: DOMRect): [number, number] {
  return [childrenDom.left + window.scrollX, (childrenDom.bottom + window.scrollY) + 16]
}

function adjustBr(tipsDom: DOMRect, childrenDom: DOMRect): [number, number] {
  return [childrenDom.left + window.scrollX + childrenDom.width - tipsDom.width, (childrenDom.bottom + window.scrollY) + 16]
}

function fitBottom(tipsDom: DOMRect, childrenDom: DOMRect): boolean {
  return window.document.documentElement.clientHeight - childrenDom.bottom >= tipsDom.height + 16
}

function fitBl(tipsDom: DOMRect, childrenDom: DOMRect): boolean {
  return window.document.documentElement.clientHeight - childrenDom.bottom >= tipsDom.height + 16
}

function fitBr(tipsDom: DOMRect, childrenDom: DOMRect): boolean {
  return window.document.documentElement.clientHeight - childrenDom.bottom >= tipsDom.height + 16
}

// left
function adjustLeft(tipsDom: DOMRect, childrenDom: DOMRect): [number, number] {
  return [childrenDom.left + window.scrollX - (tipsDom.width + 16), (childrenDom.top + window.scrollY) - (tipsDom.height - childrenDom.height) / 2]
}

function adjustLt(tipsDom: DOMRect, childrenDom: DOMRect): [number, number] {
  return [childrenDom.left + window.scrollX - (tipsDom.width + 16), (childrenDom.top + window.scrollY)]
}

function adjustLb(tipsDom: DOMRect, childrenDom: DOMRect): [number, number] {
  return [childrenDom.left + window.scrollX - (tipsDom.width + 16), (childrenDom.bottom + window.scrollY) - tipsDom.height]
}

function fitLeft(tipsDom: DOMRect, childrenDom: DOMRect): boolean {
  return childrenDom.left >= tipsDom.width + 16
}

function fitLt(tipsDom: DOMRect, childrenDom: DOMRect): boolean {
  return childrenDom.left >= tipsDom.width + 16
}

function fitLb(tipsDom: DOMRect, childrenDom: DOMRect): boolean {
  return childrenDom.left >= tipsDom.width + 16
}

// right
function adjustRight(tipsDom: DOMRect, childrenDom: DOMRect): [number, number] {
  return [(childrenDom.right + window.scrollX) + 16, (childrenDom.top + window.scrollY) - (tipsDom.height - childrenDom.height) / 2]
}

function adjustRt(tipsDom: DOMRect, childrenDom: DOMRect): [number, number] {
  return [(childrenDom.right + window.scrollX) + 16, (childrenDom.top + window.scrollY)]
}

function adjustRb(tipsDom: DOMRect, childrenDom: DOMRect): [number, number] {
  return [(childrenDom.right + window.scrollX) + 16, (childrenDom.bottom + window.scrollY) - tipsDom.height]
}

function fitRight(tipsDom: DOMRect, childrenDom: DOMRect): boolean {
  return window.document.documentElement.clientWidth - childrenDom.right >= tipsDom.width + 16
}

function fitRt(tipsDom: DOMRect, childrenDom: DOMRect): boolean {
  return window.document.documentElement.clientWidth - childrenDom.right >= tipsDom.width + 16
}

function fitRb(tipsDom: DOMRect, childrenDom: DOMRect): boolean {
  return window.document.documentElement.clientWidth - childrenDom.right >= tipsDom.width + 16
}

export function getFinalPosition(opposite: boolean, position: TriggerPosition): TriggerPosition {
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
