import * as React from "react"
import { unmountComponentAtNode } from "react-dom"
import { leftIcon } from "@illa-design/tag/dist/types/style"

let computeElement: HTMLElement

function inRange(maxHeight: number, lastLineMaxWidth: number, rows: number) {
  const lines = computeElement.getClientRects().length
  if (lines > rows) {
    return false
  }
  if (lines < rows) {
    return true
  }
  const lastLineWidth = computeElement.getClientRects().item(rows - 1)?.width ?? 0
  return lastLineWidth <= lastLineMaxWidth
}

function measureText(textNode: Text, fullText: string, maxHeight: number, lastLineMaxWidth: number, rows: number, start: number = 0, end: number = fullText.length) {
  if (start >= end - 1 && inRange(maxHeight, lastLineMaxWidth, rows)) {
    return
  }
  const mid = (start + end) / 2
  textNode.textContent = fullText.slice(0, mid)
  if (inRange(maxHeight, lastLineMaxWidth, rows)) {
    measureText(textNode, fullText, maxHeight, lastLineMaxWidth, rows, mid, end)
  } else {
    measureText(textNode, fullText, maxHeight, lastLineMaxWidth, rows, start, mid)
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
  for (let c of contentRef.getClientRects()) {
    width += c.width
  }
  return width
}

function getMaxLineWidth(contentRef: HTMLSpanElement): number {
  let maxWidth = 0
  for (let c of contentRef.getClientRects()) {
    maxWidth = Math.max(maxWidth, c.width)
  }
  return maxWidth
}

export function measureElement(
  contentRef: HTMLElement,
  operationRef: HTMLSpanElement,
  rows: number,
): [string, boolean] {
  const lineHeight = contentRef.getClientRects().item(0)?.height ?? 0
  const operationWidth = getContentWidth(operationRef)
  const lastLineMaxWidth = getMaxLineWidth(contentRef) - operationWidth

  if (computeElement == undefined) {
    computeElement = document.createElement(contentRef.tagName)
    document.body.appendChild(computeElement)
  }

  // create text node
  const fullText = contentRef.textContent ?? ""
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

  if (getContentHeight(contentRef) <= maxHeight) {
    unmountComponentAtNode(computeElement)
    computeElement.innerText = ""
    return [fullText, false]
  }

  measureText(textNode, fullText, maxHeight, lastLineMaxWidth, rows)
  const finalString = computeElement.textContent ?? ""
  unmountComponentAtNode(computeElement)
  computeElement.innerText = ""

  return [finalString, true]
}
