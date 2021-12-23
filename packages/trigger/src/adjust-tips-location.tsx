import { ReactNode } from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { TriggerPosition } from "./interface"

export interface AdjustResult {
  readonly transX: number,
  readonly transY: number
}

export async function adjustLocation(tipsNode: ReactNode, childrenRef: HTMLElement, position: TriggerPosition) {

  let computeElement: HTMLElement
  computeElement = document.createElement(HTMLDivElement.name)
  document.body.appendChild(computeElement)

  let adjustResult: AdjustResult = {
    transY: 0,
    transX: 0,
  }

  await render(<div style={{ display: "inline-flex" }}>{tipsNode}</div>, computeElement, async () => {
  })

  const tipsDom = computeElement.children.item(0)!!.getBoundingClientRect()
  const childrenDom = childrenRef.getBoundingClientRect()

  switch (position) {
    case "top":
      adjustResult = {
        transY: -(tipsDom.height + childrenDom.height + 16),
        transX: (childrenDom.width - tipsDom.width) / 2,
      }
      break
    case "tl":
      adjustResult = {
        transY: -(tipsDom.height + childrenDom.height + 16),
        transX: 0,
      }
      break
    case "tr":
      adjustResult = {
        transY: -(tipsDom.height + childrenDom.height + 16),
        transX: childrenDom.width - tipsDom.width,
      }
      break
    case "left":
      adjustResult = {
        transY: -(tipsDom.height + childrenDom.height) / 2,
        transX: -(tipsDom.width + 16),
      }
      break
    case "lt":
      adjustResult = {
        transY: -childrenDom.height,
        transX: -(tipsDom.width + 16),
      }
      break
    case "lb":
      adjustResult = {
        transY: -tipsDom.height,
        transX: -(tipsDom.width + 16),
      }
      break
    case "bottom":
      adjustResult = {
        transY: 16,
        transX: (childrenDom.width - tipsDom.width) / 2,
      }
      break
    case "bl":
      adjustResult = {
        transY: 16,
        transX: 0,
      }
      break
    case "br":
      adjustResult = {
        transY: 16,
        transX: childrenDom.width - tipsDom.width,
      }
      break
    case "right":
      adjustResult = {
        transY: -(tipsDom.height + childrenDom.height) / 2,
        transX: childrenDom.width + 16,
      }
      break
    case "rt":
      adjustResult = {
        transY: -childrenDom.height,
        transX: childrenDom.width + 16,
      }
      break
    case "rb":
      adjustResult = {
        transY: -tipsDom.height,
        transX: childrenDom.width + 16,
      }
      break
  }

  unmountComponentAtNode(computeElement)
  computeElement.innerHTML = ""
  return adjustResult
}

function inWindowRange(): boolean {
  return true
}

// top
function adjustTop(tipsDom: DOMRect, childrenDom: DOMRect): AdjustResult {
  return {
    transY: -(tipsDom.height + childrenDom.height + 16),
    transX: (childrenDom.width - tipsDom.width) / 2,
  }
}

// function adjustTl(): AdjustResult {
//
// }
//
// function adjustTr(): AdjustResult {
//
// }
//
// // bottom
// function adjustBottom(): AdjustResult {
//
// }
//
// function adjustBl(): AdjustResult {
//
// }
//
// function adjustBr(): AdjustResult {
//
// }
//
// // left
// function adjustLeft(): AdjustResult {
//
// }
//
// function adjustLt(): AdjustResult {
//
// }
//
// function adjustLb(): AdjustResult {
//
// }
//
// // right
// function adjustRight(): AdjustResult {
//
// }
//
// function adjustRt(): AdjustResult {
//
// }
//
// function adjustRb(): AdjustResult {
//
// }

