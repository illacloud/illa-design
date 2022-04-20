import { css } from "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"
import {
  StepSize,
  StepStatus,
  StepVariant,
  StepStyleConfig,
} from "../interface"
import { isVerticalLabel, statusColor } from "../style"

export function applyIconStyle({
  size,
  status,
  variant,
  labelPlacement,
  direction,
}: {
  status: StepStatus
} & StepStyleConfig): SerializedStyles {
  return css(
    css`
      display: inline-flex;
      vertical-align: top;
      border-radius: 50%;
      box-sizing: border-box;
      text-align: center;
      margin-right: 16px;
      justify-content: center;
      align-items: center;
    `,
    applyIconSize({ size, variant, status }),
    applyIconColor({ variant, status }),
    applyIconOffset({ variant, labelPlacement, direction }),
  )
}

function applyIconColor({
  variant,
  status,
}: {
  variant: StepVariant
  status: StepStatus
}): SerializedStyles {
  let color, backgroundColor, dotColor

  switch (status) {
    case "wait":
      ;({ color, backgroundColor, dotColor } = statusColor.wait)
      break

    case "process":
      ;({ color, backgroundColor, dotColor } = statusColor.process)
      break

    case "finish":
      ;({ color, backgroundColor, dotColor } = statusColor.finish)
      break

    case "error":
      ;({ color, backgroundColor, dotColor } = statusColor.error)
      break
  }

  if (variant === "dot") {
    backgroundColor = dotColor
  }

  return css({ background: backgroundColor, color })
}

function applyIconSize({
  size,
  variant,
  status,
}: {
  size: StepSize
  variant: StepVariant
  status: StepStatus
}): SerializedStyles {
  let sizeCss: SerializedStyles

  if (variant !== "dot") {
    let width: number
    let fontSize: number

    switch (size) {
      default:
      case "small":
        width = 24
        fontSize = 14

        break
      case "large":
        width = 32
        fontSize = 20
        break
    }

    sizeCss = css`
      width: ${width}px;
      height: ${width}px;
      line-height: ${width}px;
      font-size: ${fontSize}px;
    `
  } else {
    let dotSize = 0
    switch (size) {
      default:
      case "small":
        dotSize += 8
        sizeCss = css`
          width: ${dotSize}px;
          height: ${dotSize}px;
        `
        break
      case "large":
        dotSize += 10
        sizeCss = css`
          width: ${dotSize}px;
          height: ${dotSize}px;
        `
        break
    }
  }

  return sizeCss
}

// center align icon
function applyIconOffset({
  variant,
  labelPlacement,
  direction,
}: Omit<StepStyleConfig, "size">): SerializedStyles {
  if (variant === "dot") {
    return direction === "horizontal"
      ? css`
          margin-left: 66px;
        `
      : css`
          margin-top: 8px;
        `
  }

  if (isVerticalLabel({ variant, labelPlacement, direction })) {
    return css`
      margin-left: 56px;
    `
  }

  return css``
}
