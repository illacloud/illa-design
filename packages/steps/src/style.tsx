import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { SerializedStyles } from "@emotion/serialize"
import { stepSize, stepStatus, stepType, labelPlacement } from "./interface"
import React, { CSSProperties } from "react"

export function applyIconStyle({
  size,
  status,
  type,
}: {
  size: stepSize
  status: stepStatus
  type: stepType
}) {
  return css(
    css`
      display: inline-block;
      vertical-align: top;
      border-radius: 50%;
      box-sizing: border-box;
      text-align: center;
      margin-right: 16px;
    `,
    applyIconSize(size, type),
    applyIconColor(status),
  )
}

function applyIconColor(status: stepStatus) {
  let color, backgroundColor

  switch (status) {
    case "wait":
      color = globalColor(`--${illaPrefix}-gray-04`)
      backgroundColor = globalColor(`--${illaPrefix}-gray-08`)
      break

    case "process":
      color = globalColor(`--${illaPrefix}-white-01`)
      backgroundColor = globalColor(`--${illaPrefix}-blue-03`)
      break

    case "finish":
      color = globalColor(`--${illaPrefix}-blue-03`)
      backgroundColor = globalColor(`--${illaPrefix}-blue-07`)
      break

    case "error":
      color = globalColor(`--${illaPrefix}-red-03`)
      backgroundColor = globalColor(`--${illaPrefix}-red-07`)
      break
  }

  return css({ background: backgroundColor, color })
}

function applyIconSize(size: stepSize, type: stepType) {
  let sizeCss: SerializedStyles

  if (type !== "dot") {
    switch (size) {
      default:
      case "small":
        sizeCss = css`
          width: 24px;
          height: 24px;
          line-height: 24px;
          font-size: 14px;

          & svg {
            font-size: 10px;
          }
        `
        break
      case "large":
        sizeCss = css`
          width: 20px;
          height: 20px;
        `
        break
    }
  } else {
    switch (size) {
      default:
      case "small":
        sizeCss = css`
          width: 8px;
          height: 8px;
        `
        break
      case "large":
        sizeCss = css`
          width: 10px;
          height: 10px;
        `
        break
    }
  }

  return sizeCss
}

export function applyTitleStyle(size: stepSize, status: stepStatus) {
  return css(applyTitleSize(size))
}

function applyTitleSize(size: stepSize): SerializedStyles {
  let sizeCss: SerializedStyles
  switch (size) {
    default:
    case "small":
      sizeCss = css`
        line-height: 24px;
        font-size: 16px;
      `
      break
    case "large":
      sizeCss = css`
        line-height: 24px;
        font-size: 16px;
      `
      break
  }
  return sizeCss
}

export const applyDescriptionStyle = (size: stepSize) => {
  return css([
    {
      color: globalColor(`--${illaPrefix}-gray-06`),
    },
    applyDescriptionSize(size),
  ])
}

function applyDescriptionSize(size: stepSize) {
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

export function applyContentStyle({ type, labelPlacement }) {
  return css([applyContentDisplay({ type, labelPlacement })])
}

function applyContentDisplay({
  type,
  labelPlacement,
}: {
  type: stepType
  labelPlacement: labelPlacement
}): SerializedStyles {
  // if type === dot, contents only show beside the icon
  const verticalStyle = css`display: block; text-align: center`;

  if (type === "dot") {
    return verticalStyle;
  }

  if (labelPlacement === "vertical") {
    return verticalStyle;
  }

  return css`
    display: inline-block;
  `
}

export const stepDescriptionStyle = css({})

export function applySteps() { }

export const stepWrapperStyle = css`
  white-space: nowrap;
  overflow: hidden;
  position: relative;
`
