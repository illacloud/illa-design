import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { SerializedStyles } from "@emotion/serialize"
import { StepStatus, StepStyleConfig, StepType } from "../interface"
import { statusColor, isVerticalLabel } from "../style"

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
  status: StepStatus
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
  let lineHeight: string
  let fontSize: number
  let padding = 16

  if (isVerticalLabel({ type, direction, labelPlacement })) {
    padding = 0
  }

  switch (size) {
    default:
    case "small":
      lineHeight = `${24}px`
      fontSize = 16
      break
    case "large":
      lineHeight = `${32}px`
      fontSize = 20
      break
  }

  return css({
    lineHeight,
    fontSize,
    paddingRight: padding,
  })
}

function applyTitleColor(status: StepStatus) {
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
  type: StepType
  status?: StepStatus
  nextStepError: boolean
}): SerializedStyles {
  let pseudoStyle: SerializedStyles = css``
  let position: SerializedStyles = css``
  const defaultColor = globalColor(`--${illaPrefix}-gray-08`)
  let color = defaultColor

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
      border: `3px solid ${defaultColor} `,
      borderLeft: "none",
      borderBottom: "none",
      transform: "rotate(45deg)",
      top: 6,
      right: 10,
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
