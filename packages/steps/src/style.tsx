import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { SerializedStyles } from "@emotion/serialize"
import {
  stepSize,
  stepType,
  labelPlacement,
  StepStyleConfig,
} from "./interface"
import React, { CSSProperties } from "react"
export * from "./style/icon"
export * from "./style/steps"
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

export function applyContentStyle({
  type,
  labelPlacement,
  direction,
  hoverable,
}: {
  type: stepType
  labelPlacement: labelPlacement
  direction: labelPlacement
  hoverable: boolean
}): SerializedStyles {
  return css([
    applyContentDisplay({ type, labelPlacement, direction }),
    applyContentWidth({ type, labelPlacement, direction }),
    applyHover(hoverable),
  ])
}

function applyContentDisplay({
  type,
  labelPlacement,
  direction,
}: {
  type: stepType
  labelPlacement: labelPlacement
  direction: labelPlacement
}): SerializedStyles {
  // if type === dot, contents only show beside the icon
  const verticalStyle = css`
    display: block;
    text-align: center;
  `

  if (type === "dot" && direction === "horizontal") {
    return verticalStyle
  }

  if (labelPlacement === "vertical") {
    return verticalStyle
  }

  return css`
    display: inline-block;
  `
}

function applyContentWidth({
  type,
  labelPlacement,
  direction,
}: {
  labelPlacement: labelPlacement
  direction: labelPlacement
  type: stepType
}) {
  const width = 140
  if (
    (type === "dot" && direction === "horizontal") ||
    labelPlacement === "vertical"
  ) {
    return css`
      width: ${width}px;
    `
  }

  return css``
}

function applyHover(hoverable: boolean): SerializedStyles {
  if (!hoverable) {
    return css``
  }

  const hoverColor = globalColor(`--${illaPrefix}-blue-05`)

  return css`
    &:hover > * {
      cursor: pointer;
      color: ${hoverColor};
    }
  `
}

export function applyWrapperStyle({
  labelPlacement,
  direction,
  type,
}: {
  labelPlacement: labelPlacement
  direction: labelPlacement
  type: stepType
}): SerializedStyles {
  const overflow = type === "dot" ? "visible" : "hidden"
  const minHeight = direction === "vertical" ? 90 : "unset"

  return css([
    css({
      flex: 1,
      whiteSpace: "nowrap",
      position: "relative",
      marginRight: 16,
      overflow,
      minHeight,
    }),
  ])
}

export function applyConnctionNodeStyle({
  type,
  direction,
  labelPlacement,
}: Omit<StepStyleConfig, "size">): SerializedStyles {
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
        top: 18, // cal by size
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
