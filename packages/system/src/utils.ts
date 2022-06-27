import { Children } from "react"
import { isSingleNode } from "./is"

export function padStart(string: string, length: number, char = " "): string {
  const s = String(string)
  if (!length) {
    return s
  }
  const newString = s.length < length ? `${char}${s}` : s
  return newString.length < length
    ? padStart(newString, length, char)
    : newString
}

export function mergedToString(children: any): string {
  const mergedResult = [""]
  Children.forEach(children, (child) => {
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

export const isScrollElement = (element: HTMLElement) => {
  return (
    element.scrollHeight > element.offsetHeight ||
    element.scrollWidth > element.offsetWidth
  )
}

export const getScrollElements = (
  container: HTMLElement,
  top: HTMLElement = document.documentElement,
): HTMLElement[] => {
  const scrollElements: HTMLElement[] = []
  let element: HTMLElement | null = container
  while (element && element !== top) {
    if (isScrollElement(element)) {
      scrollElements.push(element)
    }
    element = element.parentElement
  }
  return scrollElements
}
