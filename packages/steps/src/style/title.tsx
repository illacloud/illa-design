import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { SerializedStyles } from "@emotion/serialize"
import {
  labelPlacement,
  stepSize,
  stepStatus,
  StepStyleConfig,
  stepType,
} from "../interface"
import { statusColor } from "../style"

export function applyTitleStyle({
  size,
  type,
  lastStep,
  lineless,
  nextStepError,
  direction,
  labelPlacement,
  status,
}: {
  lastStep: boolean
  nextStepError: boolean
  lineless: boolean
  status: stepStatus
} & StepStyleConfig): SerializedStyles {
  return css([
    applyTitleSize({ size, direction, type, labelPlacement }),
    applyTitleColor(status),
    !lastStep &&
    !lineless &&
    direction !== "vertical" &&
    applyConnectionStyle({ type, status, nextStepError }),
  ])
}

function applyTitleSize({
  size,
  type,
  direction,
  labelPlacement,
}: StepStyleConfig): SerializedStyles {
  let sizeCss: SerializedStyles
  let padding = 16

  if (
    (type === "dot" && direction === "horizontal") ||
    labelPlacement === "vertical"
  ) {
    padding = 0
  }

  switch (size) {
    default:
    case "small":
      sizeCss = css`
        line-height: 24px;
        font-size: 16px;
        padding-right: ${padding}px;
      `
      break
    case "large":
      sizeCss = css`
        line-height: 24px;
        font-size: 16px;
        padding-right: ${padding}px;
      `
      break
  }
  return sizeCss
}

function applyTitleColor(status: stepStatus) {
  let color = globalColor(`--${illaPrefix}-gray-02`)

  if (status === "wait") {
    color = globalColor(`--${illaPrefix}-gray-04`)
  }

  return css`
    color: ${color};
  `
}

function applyConnectionStyle({
  type,
  status,
  nextStepError = false,
}: {
  type: stepType
  status?: stepStatus
  nextStepError: boolean
}): SerializedStyles {
  let pseudoStyle: SerializedStyles = css``
  let position: SerializedStyles = css``
  let color = globalColor(`--${illaPrefix}-gray-08`)

  if (nextStepError) {
    color = statusColor.error.color
  } else if (status === "finish") {
    color = statusColor.finish.color
  }

  if (type === "line") {
    position = css`
      position: relative;
    `
    pseudoStyle = css({
      height: 1,
      width: 9999,
      left: "100%",
      top: 10,
      backgroundColor: color,
    })
  } else if (type === "navigation") {
    pseudoStyle = css({
      width: 8,
      height: 8,
      border: `3px solid ${color}`,
      borderLeft: "none",
      borderBottom: "none",
      transform: "rotate(45deg)",
      top: 8,
      right: 20,
    })
  }

  return css`
    ${position}
    &::after {
      content: "";
      position: absolute;
      display: block;
      ${pseudoStyle};
    }
  `
}
