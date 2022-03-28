// content that contains title and description
import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { SerializedStyles } from "@emotion/serialize"
import { StepType, LabelPlacement } from "../interface"
import { isVerticalLabel } from "../style"

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
  const verticalStyle = css`
    display: block;
    text-align: center;
  `

  if (isVerticalLabel({ type, direction, labelPlacement })) {
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

  if (isVerticalLabel({ type, direction, labelPlacement })) {
    width = css`
      width: ${140}px;
    `
  }

  // add some margin between content and navigationProcessStatusIndicator
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
      transition: all 0.1s linear;
      cursor: pointer;
      color: ${hoverColor};
    }
  `
}
