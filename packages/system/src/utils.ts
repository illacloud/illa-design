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
