import { css, SerializedStyles } from "@emotion/react"
import { StepsStatus } from "./interface"
import { getColor } from "@illa-design/theme"

export const stepsContainerStyle = css`
  display: inline-flex;
  flex-direction: column;
`

export const stepIconStyle = css`
  width: 24px;
  font-size: 24px;
  height: 24px;
`

export function applyStepDotStyle(status: StepsStatus): SerializedStyles {
  let c: string

  switch (status) {
    case "wait":
      c = getColor("grayBlue", "03")
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
    width: 8px;
    height: 8px;
    background-color: ${c};
  `
}

export function applyStepLineStyle(status: StepsStatus): SerializedStyles {
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
        background-color: ${getColor("blue", "07")};
      `
      break
    case "error":
      c = css`
        color: ${getColor("red", "03")};
        background-color: ${getColor("red", "07")};
      `
      break
  }

  return css`
    width: 24px;
    height: 24px;
    border-radius: 12px;
    ${c};
  `
}
