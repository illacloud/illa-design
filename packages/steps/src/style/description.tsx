import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { SerializedStyles } from "@emotion/serialize"
import { StepSize } from "../interface"

export function applyDescriptionStyle(size: StepSize): SerializedStyles {
  return css([
    {
      color: globalColor(`--${illaPrefix}-gray-06`),
    },
    applyDescriptionSize(size),
  ])
}

function applyDescriptionSize(size: StepSize): SerializedStyles {
  let sizeCss: SerializedStyles
  switch (size) {
    default:
    case "small":
      sizeCss = css`
        font-size: 12px;
      `
      break
    case "large":
      sizeCss = css`
        font-size: 12px;
      `
      break
  }
  return sizeCss
}
