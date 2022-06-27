import { isString } from "@illa-design/system"

// thx arco
export function findNode(
  dom: HTMLElement | Document,
  selector: string,
): HTMLElement | null {
  const s =
    // https://stackoverflow.com/questions/20306204/using-queryselector-with-ids-that-are-numbers
    isString(selector) && selector[0] === "#"
      ? `[id='${selector.replace("#", "")}']`
      : selector
  try {
    return dom.querySelector(s)
  } catch (e) {
    console.error(e)
    return null
  }
}

export function getContainer(targetContainer?: string | HTMLElement | Window) {
  if (isString(targetContainer)) {
    return findNode(document, targetContainer)
  }
  return targetContainer || window
}

export function getContainerElement(scrollContainer: HTMLElement | Window) {
  return scrollContainer === window
    ? document.documentElement || document.body
    : scrollContainer
}
