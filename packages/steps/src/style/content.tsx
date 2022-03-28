import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { SerializedStyles } from "@emotion/serialize"
import { StepType, LabelPlacement } from "../interface"

export function applyContentStyle({
  type,
  labelPlacement,
  direction,
  hoverable,
}: {
  type: StepType
  labelPlacement: LabelPlacement
  direction: LabelPlacement
  hoverable: boolean
}): SerializedStyles {
  return css([
    applyContentDisplay({ type, labelPlacement, direction }),
    applyContentSize({ type, labelPlacement, direction }),
    applyHover(hoverable),
  ])
}

function applyContentDisplay({
  type,
  labelPlacement,
  direction,
}: {
  type: StepType
  labelPlacement: LabelPlacement
  direction: LabelPlacement
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

function applyContentSize({
  type,
  labelPlacement,
  direction,
}: {
  labelPlacement: LabelPlacement
  direction: LabelPlacement
  type: StepType
}) {
  let width = css``
  let margin = css``

  if (
    (type === "dot" && direction === "horizontal") ||
    labelPlacement === "vertical"
  ) {
    width = css`
      width: ${140}px;
    `
  }

  if (type === "navigation") {
    margin = css`
      margin-bottom: 16px;
    `
  }

  return css([width, margin])
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
