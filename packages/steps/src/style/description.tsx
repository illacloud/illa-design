import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { SerializedStyles } from "@emotion/serialize"
import { StepSize } from "../interface"

export function applyDescriptionStyle(size: StepSize): SerializedStyles {
  return css([
    {
      color: globalColor(`--${illaPrefix}-gray-04`),
      marginTop: 4,
    },
    applyDescriptionSize(size),
  ])
}

function applyDescriptionSize(size: StepSize): SerializedStyles {
  let fontSize: number

  switch (size) {
    default:
    case "small":
      fontSize = 12
      break
    case "large":
      fontSize = 14
      break
  }
  return css({ fontSize })
}
