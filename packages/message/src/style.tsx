import { css, SerializedStyles } from "@emotion/react"
import { MessagePosition } from "@illa-design/notification"
import { zIndex } from "@illa-design/theme"

export function applyMessageWrapper(
  position: MessagePosition,
): SerializedStyles {
  return css`
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    align-items: center;
    position: fixed;
    z-index: ${zIndex.message};
    ${position === "top" ? "top" : "bottom"}:20px;
    box-sizing: border-box;
    pointer-events: none;
    width: 100%;
    text-align: center;
  `
}

export const applyMessageSlide = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      opacity: { duration: 0.2, ease: "linear" },
    },
  },
}
