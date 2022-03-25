import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { SerializedStyles } from "@emotion/serialize"
import {
  stepSize,
  stepType,
  labelPlacement,
  StepStyleConfig,
  stepStatus,
} from "./interface"
import React, { CSSProperties } from "react"
export * from "./style/steps"
export * from "./style/icon"
export * from "./style/content"
export * from "./style/description"
export * from "./style/title"

export const statusColor = {
  finish: {
    color: globalColor(`--${illaPrefix}-blue-03`),
    backgroundColor: globalColor(`--${illaPrefix}-blue-07`),
  },
  wait: {
    color: globalColor(`--${illaPrefix}-gray-04`),
    backgroundColor: globalColor(`--${illaPrefix}-gray-08`),
  },
  process: {
    color: globalColor(`--${illaPrefix}-white-01`),
    backgroundColor: globalColor(`--${illaPrefix}-blue-03`),
  },
  error: {
    color: globalColor(`--${illaPrefix}-red-03`),
    backgroundColor: globalColor(`--${illaPrefix}-red-07`),
  },
}

export function applyWrapperStyle({
  direction,
  type,
  status,
  disabled
}: {
  direction: labelPlacement
  type: stepType
  status: stepStatus
  disabled: boolean
}): SerializedStyles {
  const overflow = type === "dot" ? "visible" : "hidden"
  const minHeight = direction === "vertical" ? 90 : "unset"
  let navigactionProcessIndicator = css``
  let style = css({
    marginRight: 16,
    minHeight,
  })

  if (type === "navigation") {
    style = css({
      paddingLeft: 20,
      paddingRight: 10,
      marginRight: 32,
    })

    if (status === "process") {
      navigactionProcessIndicator = css`
        &:after {
          content: "";
          position: absolute;
          diplay: block;
          height: 2px;
          bottom: 0;
          left: 0;
          right: 30px;
          background-color: ${statusColor.process.backgroundColor};
        }
      `
    }
  }

  return css([
    css({
      flex: 1,
      whiteSpace: "nowrap",
      position: "relative",
      overflow,
    }),
    style,
    navigactionProcessIndicator,
    applyWrapperCursor(disabled)
  ])
}

function applyWrapperCursor(disabled: boolean): SerializedStyles {
  return disabled ? css`cursor: not-allowed` : css``;
}

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
        top: 18, // TODO: cal by size
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
      top: 28, // cal by size
      bottom: 5,
      backgroundColor: color,
    })
  }

  return css``
}
