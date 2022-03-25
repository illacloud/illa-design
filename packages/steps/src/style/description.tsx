import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { SerializedStyles } from "@emotion/serialize"
import {
  stepSize,
  stepType,
  labelPlacement,
  StepStyleConfig,
} from "../interface"
import React, { CSSProperties } from "react"

export function applyDescriptionStyle(size: stepSize): SerializedStyles {
  return css([
    {
      color: globalColor(`--${illaPrefix}-gray-06`),
    },
    applyDescriptionSize(size),
  ])
}

function applyDescriptionSize(size: stepSize): SerializedStyles {
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
