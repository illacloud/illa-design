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
    applyIconColor(status),
    applyIconOffset({ type, labelPlacement, direction }),
  )
}

function applyIconColor(status: StepStatus): SerializedStyles {
  let color, backgroundColor

  switch (status) {
    case "wait":
      ; ({ color, backgroundColor } = statusColor.wait)
      break

    case "process":
      ; ({ color, backgroundColor } = statusColor.process)
      break

    case "finish":
      ; ({ color, backgroundColor } = statusColor.finish)
      break

    case "error":
      ; ({ color, backgroundColor } = statusColor.error)
      break
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
