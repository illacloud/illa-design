import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { SerializedStyles } from "@emotion/serialize"
import { StepStyleConfig } from "../interface"

export function applyConnctionNodeStyle({
  type,
  direction,
}: Omit<StepStyleConfig, "size" | "labelPlacement">): SerializedStyles {
  let color = globalColor(`--${illaPrefix}-gray-08`)

  if (type === "dot") {
    if (direction === "horizontal") {
      return css({
        position: "absolute",
        display: "block",
        height: 1,
        width: "100%",
        left: 78,
        top: 4,
        backgroundColor: color,
      })
    } else if (direction === "vertical") {
      return css({
        position: "absolute",
        display: "block",
        width: 1,
        left: 3.5,
        top: 18,
        bottom: -5,
        backgroundColor: color,
      })
    }
  }

  if (direction === "vertical") {
    return css({
      position: "absolute",
      display: "block",
      width: 1,
      left: 12,
      top: 28,
      bottom: 5,
      backgroundColor: color,
    })
  }

  return css``
}
