import { css } from "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"
import { StepSize, StepStatus, StepType, StepStyleConfig } from "../interface"
import { statusColor } from "../style"

export function applyIconStyle({
  size,
  status,
  type,
  labelPlacement,
  direction,
}: {
  status: StepStatus
} & StepStyleConfig): SerializedStyles {
  return css(
    css`
      display: inline-block;
      vertical-align: top;
      border-radius: 50%;
      box-sizing: border-box;
      text-align: center;
      margin-right: 16px;
    `,
    applyIconSize({ size, type, status }),
    applyIconColor({ type, status }),
    applyIconOffset({ type, labelPlacement, direction }),
  )
}

function applyIconColor({
  type,
  status,
}: {
  type: StepType
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

  if (type === "dot") {
    backgroundColor = dotColor
  }

  return css({ background: backgroundColor, color })
}

function applyIconSize({
  size,
  type,
  status,
}: {
  size: StepSize
  type: StepType
  status: StepStatus
}): SerializedStyles {
  let sizeCss: SerializedStyles

  if (type !== "dot") {
    let width: number
    let fontSize: number
    let svgIconSize: number

    switch (size) {
      default:
      case "small":
        width = 24
        fontSize = 14
        svgIconSize = 10

        break
      case "large":
        width = 32
        fontSize = 20
        svgIconSize = 14
        break
    }

    sizeCss = css`
      width: ${width}px;
      height: ${width}px;
      line-height: ${width}px;
      font-size: ${fontSize}px;

      & svg {
        font-size: ${svgIconSize}px;
      }
    `
  } else {
    // enlarge dot if is `process` status
    let dotSize = status === "process" ? 2 : 0
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
  type,
  labelPlacement,
  direction,
}: Omit<StepStyleConfig, "size">): SerializedStyles {
  if (type === "dot") {
    return direction === "horizontal"
      ? css`
          margin-left: 66px;
        `
      : css`
          margin-top: 8px;
        `
  }

  if (labelPlacement === "vertical") {
    return css`
      margin-left: 56px;
    `
  }

  return css``
}
