import * as React from "react"
import { unmountComponentAtNode } from "react-dom"

let computeElement: HTMLElement

function inRange(maxHeight: number, lastLineContentMaxWidth: number) {
  const currentHeight =
    Math.round(computeElement.getBoundingClientRect().height * 100) / 100
  const rectList = computeElement.getClientRects()
  return currentHeight - .1 <= maxHeight && rectList.length > 0 && rectList.item(rectList.length - 1)!!.width <= lastLineContentMaxWidth // -.1 for firefox
}

function measureText(textNode: Text, fullText: string, maxHeight: number, lastLineContentMaxWidth: number, start: number = 0, end: number = fullText.length) {
  if (start >= end - 1) {
    return
  }
  const mid = (start + end) / 2
  textNode.textContent = fullText.slice(0, mid)
  if (inRange(maxHeight, lastLineContentMaxWidth)) {
    measureText(textNode, fullText, maxHeight, lastLineContentMaxWidth, mid, end)
  } else {
    measureText(textNode, fullText, maxHeight, lastLineContentMaxWidth, start, mid)
  }
}

export function needMeasure(
  contentRef: HTMLSpanElement,
  operationRef: HTMLSpanElement,
  rows: number,
): boolean {
  const contentHeight = contentRef.getBoundingClientRect().height
  const lineHeight = contentRef.getClientRects().item(0)?.height ?? 0
  const maxHeight = lineHeight * rows
  return maxHeight < contentHeight
}

export function measureElement(
  contentRef: HTMLSpanElement,
  operationRef: HTMLSpanElement,
  rows: number,
): string {

  const operationWidth = operationRef.getBoundingClientRect().width * 100 / 100
  const contentWidth = contentRef.getBoundingClientRect().width * 100 / 100
  const lastLineContentMaxWidth = contentWidth - operationWidth
  const lineHeight = contentRef.getClientRects().item(0)?.height ?? 0
  const maxHeight = lineHeight * rows

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

  measureText(textNode, fullText, maxHeight, lastLineContentMaxWidth)
  const finalString = computeElement.textContent ?? ""
  console.log(finalString)
  computeElement.innerHTML = ""
  unmountComponentAtNode(computeElement)

  return finalString
}
