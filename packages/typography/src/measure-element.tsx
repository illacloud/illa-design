import * as React from "react"
import { ReactNode } from "react"

function inRange(computeElement: HTMLElement, maxHeight: number, lastLineMaxWidth: number, rows: number) {
  const lines = computeElement.getClientRects().length
  if (lines > rows) {
    return false
  }
  if (lines < rows) {
    return true
  }
  const lastLineWidth = computeElement.getClientRects()[rows - 1]?.width ?? 0
  return lastLineWidth <= lastLineMaxWidth
}

function measureText(computeElement: HTMLElement, textNode: Text, fullText: string, maxHeight: number, lastLineMaxWidth: number, rows: number, start: number = 0, end: number = fullText.length) {
  if (start >= end - 1 && inRange(computeElement, maxHeight, lastLineMaxWidth, rows)) {
    return
  }
  const mid = Math.floor((start + end) / 2)
  textNode.textContent = fullText.slice(0, mid).trim()
  if (inRange(computeElement, maxHeight, lastLineMaxWidth, rows)) {
    measureText(computeElement, textNode, fullText, maxHeight, lastLineMaxWidth, rows, mid, end)
  } else {
    measureText(computeElement, textNode, fullText, maxHeight, lastLineMaxWidth, rows, start, mid)
  }
}

function getContentHeight(contentRef: HTMLSpanElement): number {
  let height = 0
  for (let c of contentRef.getClientRects()) {
    height += c.height
  }
  return height
}

function getContentWidth(contentRef: HTMLSpanElement): number {
  let width = 0
  const list = contentRef.getClientRects()
  for (let i = 0; i < list.length; i++) {
    width += list[i].width
  }
  return width
}

function getMaxLineWidth(contentRef: HTMLSpanElement): number {
  return contentRef.getBoundingClientRect().width
}

export interface MeasureResult {
  fullText: string
  screenString: string
  isClip: boolean
}

export function measureElement(
  contentRef: HTMLElement,
  operationRef: HTMLSpanElement,
  rows: number,
  children: ReactNode,
): MeasureResult {
  const lineHeight = contentRef.getClientRects()[0]?.height ?? 0
  const operationWidth = getContentWidth(operationRef)

  let computeElement = document.createElement(contentRef.tagName)
  document.body.appendChild(computeElement)


  // create text node
  const fullText = mergedToString(React.Children.toArray(children))
  const textNode = document.createTextNode(fullText)

  // deal css
  const originStyle = window.getComputedStyle(contentRef)
  const styleNames: string[] = Array.prototype.slice.apply(originStyle)
  const styleString = styleNames
    .map((name) => `${name}: ${originStyle.getPropertyValue(name)};`)
    .join("")

  computeElement.setAttribute("style", styleString)
  computeElement.insertBefore(textNode, computeElement.firstChild)

  const maxHeight = lineHeight * rows

  if (getContentHeight(computeElement) <= maxHeight) {
    computeElement.remove()
    return {
      fullText: fullText,
      screenString: fullText,
      isClip: false,
    } as MeasureResult
  }

  const lastLineMaxWidth = getMaxLineWidth(computeElement) - operationWidth
  measureText(computeElement, textNode, fullText, maxHeight, lastLineMaxWidth, rows)
  const finalString = computeElement.textContent ?? ""
  computeElement.remove()
  return {
    fullText: fullText,
    screenString: finalString,
    isClip: true,
  } as MeasureResult
}

/** merge multiple children to a string node */
const isSingleNode = (child: React.ReactNode) => {
  return isString(child) || isNumber(child)
}

export function isString(obj: any): obj is string {
  return Object.prototype.toString.call(obj) === "[object String]"
}

export function isNumber(obj: any): obj is number {
  return Object.prototype.toString.call(obj) === "[object Number]" && obj === obj // eslint-disable-line
}

export default function mergedToString(children: any): string {
  const mergedResult = [""]
  React.Children.forEach(children, (child) => {
    const prevIndex = mergedResult.length - 1
    const prevChild = mergedResult[prevIndex]

    if (isSingleNode(child) && isSingleNode(prevChild)) {
      mergedResult[prevIndex] = `${prevChild}${child}`
    } else if (child && child.props && child.props.children) {
      mergedResult.push(mergedToString(child.props.children))
    }
  })

  return mergedResult.join("")
}
