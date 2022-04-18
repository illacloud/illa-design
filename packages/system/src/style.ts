interface StyleObj extends CSSStyleDeclaration {
  [index: string]: any
}

/**
 * Get element style value, e.g. width, margin-left..
 *
 */
export function getStyle(
  element: HTMLElement,
  prop: string,
  pseudoElement: string | null = null,
): string {
  if (!element || !prop) {
    return ""
  }

  let style = (element.style as StyleObj)[prop]

  try {
    if (document.defaultView) {
      const computedStyles = document.defaultView.getComputedStyle(
        element,
        pseudoElement,
      )
      return style || (computedStyles as StyleObj)[prop] || ""
    }
  } catch (e) {
    return style
  }

  return ""
}
