import { ReactNode } from "react"
import { render, unmountComponentAtNode } from "react-dom"
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

  let adjustResult: AdjustResult = {
    transY: 0,
    transX: 0,
    opposite: false,
  }

  await render(<div style={{ display: "inline-flex" }}>{tipsNode}</div>, computeElement, async () => {
  })

  const tipsDom = computeElement.children.item(0)!!.getBoundingClientRect()
  const childrenDom = childrenRef.getBoundingClientRect()

  switch (position) {
    case "top":
      adjustResult = adjustTop(tipsDom, childrenDom, autoFitPosition)
      break
    case "tl":
      adjustResult = adjustTl(tipsDom, childrenDom, autoFitPosition)
      break
    case "tr":
      adjustResult = adjustTr(tipsDom, childrenDom, autoFitPosition)
      break
    case "left":
      adjustResult = adjustLeft(tipsDom, childrenDom, autoFitPosition)
      break
    case "lt":
      adjustResult = adjustLt(tipsDom, childrenDom, autoFitPosition)
      break
    case "lb":
      adjustResult = adjustLb(tipsDom, childrenDom, autoFitPosition)
      break
    case "bottom":
      adjustResult = adjustBottom(tipsDom, childrenDom, autoFitPosition)
      break
    case "bl":
      adjustResult = adjustBl(tipsDom, childrenDom, autoFitPosition)
      break
    case "br":
      adjustResult = adjustBr(tipsDom, childrenDom, autoFitPosition)
      break
    case "right":
      adjustResult = adjustRight(tipsDom, childrenDom, autoFitPosition)
      break
    case "rt":
      adjustResult = adjustRt(tipsDom, childrenDom, autoFitPosition)
      break
    case "rb":
      adjustResult = adjustRb(tipsDom, childrenDom, autoFitPosition)
      break
  }

  unmountComponentAtNode(computeElement)
  computeElement.innerHTML = ""
  return adjustResult
}

function adjustTop(tipsDom: DOMRect, childrenDom: DOMRect, autoFitPosition: boolean, opposite: boolean = false): AdjustResult {
  if (autoFitPosition) {
    if (childrenDom.top < tipsDom.height + 16) {
      return adjustBottom(tipsDom, childrenDom, false, true)
    }
  }
  return {
    transY: -(tipsDom.height + childrenDom.height + 16),
    transX: (childrenDom.width - tipsDom.width) / 2,
    opposite: opposite,
  }
}

function adjustTl(tipsDom: DOMRect, childrenDom: DOMRect, autoFitPosition: boolean, opposite: boolean = false): AdjustResult {
  if (autoFitPosition) {
    if (childrenDom.top < tipsDom.height + 16) {
      return adjustBl(tipsDom, childrenDom, false, true)
    }
  }
  return {
    transY: -(tipsDom.height + childrenDom.height + 16),
    transX: 0,
    opposite: opposite,
  }
}

function adjustTr(tipsDom: DOMRect, childrenDom: DOMRect, autoFitPosition: boolean, opposite: boolean = false): AdjustResult {
  if (autoFitPosition) {
    if (childrenDom.top < tipsDom.height + 16) {
      return adjustBr(tipsDom, childrenDom, false, true)
    }
  }
  return {
    transY: -(tipsDom.height + childrenDom.height + 16),
    transX: childrenDom.width - tipsDom.width,
    opposite: opposite,
  }
}

// bottom
function adjustBottom(tipsDom: DOMRect, childrenDom: DOMRect, autoFitPosition: boolean, opposite: boolean = false): AdjustResult {
  if (autoFitPosition) {
    if (window.innerHeight - childrenDom.bottom < tipsDom.height + 16) {
      return adjustTop(tipsDom, childrenDom, false, true)
    }
  }
  return {
    transY: 16,
    transX: (childrenDom.width - tipsDom.width) / 2,
    opposite: opposite,
  }
}

function adjustBl(tipsDom: DOMRect, childrenDom: DOMRect, autoFitPosition: boolean, opposite: boolean = false): AdjustResult {
  if (autoFitPosition) {
    if (window.innerHeight - childrenDom.bottom < tipsDom.height + 16) {
      return adjustTl(tipsDom, childrenDom, false, true)
    }
  }
  return {
    transY: 16,
    transX: 0,
    opposite: opposite,
  }
}

function adjustBr(tipsDom: DOMRect, childrenDom: DOMRect, autoFitPosition: boolean, opposite: boolean = false): AdjustResult {
  if (autoFitPosition) {
    if (window.innerHeight - childrenDom.bottom < tipsDom.height + 16) {
      return adjustTr(tipsDom, childrenDom, false, true)
    }
  }
  return {
    transY: 16,
    transX: childrenDom.width - tipsDom.width,
    opposite: opposite,
  }
}

// left
function adjustLeft(tipsDom: DOMRect, childrenDom: DOMRect, autoFitPosition: boolean, opposite: boolean = false): AdjustResult {
  if (autoFitPosition) {
    if (childrenDom.left < tipsDom.width + 16) {
      return adjustRight(tipsDom, childrenDom, false, true)
    }
  }
  return {
    transY: -(tipsDom.height + childrenDom.height) / 2,
    transX: -(tipsDom.width + 16),
    opposite: opposite,
  }
}

function adjustLt(tipsDom: DOMRect, childrenDom: DOMRect, autoFitPosition: boolean, opposite: boolean = false): AdjustResult {
  if (autoFitPosition) {
    if (childrenDom.left < tipsDom.width + 16) {
      return adjustRt(tipsDom, childrenDom, false, true)
    }
  }
  return {
    transY: -childrenDom.height,
    transX: -(tipsDom.width + 16),
    opposite: opposite,
  }
}

function adjustLb(tipsDom: DOMRect, childrenDom: DOMRect, autoFitPosition: boolean, opposite: boolean = false): AdjustResult {
  if (autoFitPosition) {
    if (childrenDom.left < tipsDom.width + 16) {
      return adjustRb(tipsDom, childrenDom, false, true)
    }
  }
  return {
    transY: -tipsDom.height,
    transX: -(tipsDom.width + 16),
    opposite: opposite,
  }
}

// right
function adjustRight(tipsDom: DOMRect, childrenDom: DOMRect, autoFitPosition: boolean, opposite: boolean = false): AdjustResult {
  if (autoFitPosition) {
    if (window.innerWidth - childrenDom.right < tipsDom.width + 16) {
      return adjustLeft(tipsDom, childrenDom, false, true)
    }
  }
  return {
    transY: -(tipsDom.height + childrenDom.height) / 2,
    transX: childrenDom.width + 16,
    opposite: opposite,
  }
}

function adjustRt(tipsDom: DOMRect, childrenDom: DOMRect, autoFitPosition: boolean, opposite: boolean = false): AdjustResult {
  if (autoFitPosition) {
    if (window.innerWidth - childrenDom.right < tipsDom.width + 16) {
      return adjustLt(tipsDom, childrenDom, false, true)
    }
  }
  return {
    transY: -childrenDom.height,
    transX: childrenDom.width + 16,
    opposite: opposite,
  }
}

function adjustRb(tipsDom: DOMRect, childrenDom: DOMRect, autoFitPosition: boolean, opposite: boolean = false): AdjustResult {
  if (autoFitPosition) {
    if (window.innerWidth - childrenDom.right < tipsDom.width + 16) {
      return adjustLb(tipsDom, childrenDom, false, true)
    }
  }
  return {
    transY: -tipsDom.height,
    transX: childrenDom.width + 16,
    opposite: opposite,
  }
}

