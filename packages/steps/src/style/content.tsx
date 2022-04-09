// content that contains title and description
import { css } from "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"
import { StepVariant, LabelPlacement } from "../interface"
import { isVerticalLabel } from "../style"

export function applyContentStyle({
  variant,
  labelPlacement,
  direction,
}: {
  variant: StepVariant
  labelPlacement: LabelPlacement
  direction: LabelPlacement
}): SerializedStyles {
  return css([
    applyContentDisplay({ variant, labelPlacement, direction }),
    applyContentSize({ variant, labelPlacement, direction }),
  ])
}

function applyContentDisplay({
  variant,
  labelPlacement,
  direction,
}: {
  variant: StepVariant
  labelPlacement: LabelPlacement
  direction: LabelPlacement
}): SerializedStyles {
  const verticalStyle = css`
    display: block;
    text-align: center;
  `

  if (isVerticalLabel({ variant, direction, labelPlacement })) {
    return verticalStyle
  }

  return css`
    display: inline-block;
  `
}

function applyContentSize({
  variant,
  labelPlacement,
  direction,
}: {
  labelPlacement: LabelPlacement
  direction: LabelPlacement
  variant: StepVariant
}) {
  let width = css``
  let margin = css``

  if (isVerticalLabel({ variant, direction, labelPlacement })) {
    width = css`
      width: ${140}px;
    `
  }

  // add some margin between content and navigationProcessStatusIndicator
  if (variant === "navigation") {
    margin = css`
      margin-bottom: 16px;
    `
  }

  return css([width, margin])
}
