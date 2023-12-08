import { css, SerializedStyles } from "@emotion/react"
import { StepsDirection, StepsStatus } from "./interface"
import { getColor } from "@illa-design/theme"

export function applyStepsContainerStyle(
  direction: StepsDirection,
): SerializedStyles {
  return css`
    display: flex;
    width: ${direction === "vertical" ? "auto" : "100%"};
    flex-direction: ${direction === "vertical" ? "column" : "row"};
  `
}

export const stepIconStyle = css`
  width: 24px;
  height: 24px;
  font-size: 24px;
`

export function applyStepDotStyle(status: StepsStatus): SerializedStyles {
  let c: string

  switch (status) {
    case "wait":
      c = getColor("grayBlue", "06")
      break
    case "process":
    case "finish":
      c = getColor("blue", "03")
      break
    case "error":
      c = getColor("red", "03")
      break
  }

  return css`
    border-radius: 4px;
    flex-shrink: 0;
    width: 8px;
    height: 8px;
    background-color: ${c};
  `
}

export function applyIndexStyle(status: StepsStatus): SerializedStyles {
  let c = css``

  switch (status) {
    case "wait":
      c = css`
        color: ${getColor("grayBlue", "04")};
        background-color: ${getColor("gray", "08")};
      `
      break
    case "process":
      c = css`
        color: ${getColor("white", "01")};
        background-color: ${getColor("blue", "03")};
      `
      break
    case "finish":
      c = css`
        color: ${getColor("blue", "03")};
        background-color: ${getColor("blue", "08")};
      `
      break
    case "error":
      c = css`
        color: ${getColor("red", "03")};
        background-color: ${getColor("red", "08")};
      `
      break
  }

  return css`
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    font-size: 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    ${c};
  `
}
