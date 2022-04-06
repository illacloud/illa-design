import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { SerializedStyles } from "@emotion/serialize"
import {
  StepSize,
  StepStatus,
  StepStyleConfig,
  StepVariant,
} from "../interface"
import { statusColor, isVerticalLabel, getConnectorColor } from "../style"

export function applyTitleStyle({
  size,
  variant,
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
    applyTitleSize({ size, direction, variant, labelPlacement }),
    applyTitleColor(status),
    !lastStep &&
    !lineless &&
    direction !== "vertical" &&
    labelPlacement !== "vertical" &&
    applyConnectionStyle({ variant, status, nextStepError, size }),
  ])
}

function applyTitleSize({
  size,
  variant,
  direction,
  labelPlacement,
}: StepStyleConfig): SerializedStyles {
  let lineHeight: string
  let fontSize: number
  let padding = 16

  if (isVerticalLabel({ variant, direction, labelPlacement })) {
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
    fontWeight: 500,
    lineHeight,
    fontSize,
    paddingRight: padding,
  })
}

function applyTitleColor(status: StepStatus): SerializedStyles {
  let color = globalColor(`--${illaPrefix}-gray-02`)

  if (status === "wait") {
    color = globalColor(`--${illaPrefix}-gray-02`)
  }

  return css`
    color: ${color};
  `
}

function applyConnectionStyle({
  variant,
  status,
  nextStepError = false,
  size,
}: {
  variant: StepVariant
  status: StepStatus
  nextStepError: boolean
  size: StepSize
}): SerializedStyles {
  let pseudoStyle: SerializedStyles = css``
  let position: SerializedStyles = css``
  const color = getConnectorColor({ nextStepError, status })

  if (variant === "line") {
    const topMap = {
      small: 10,
      large: 14,
    }
    position = css`
      position: relative;
    `
    pseudoStyle = css({
      height: 1,
      width: 9999,
      left: "100%",
      top: topMap[size],
      backgroundColor: color,
    })
  } else if (variant === "navigation") {
    const topMap = {
      small: 6,
      large: 10,
    }
    pseudoStyle = css({
      width: 6,
      height: 6,
      border: `2px solid ${globalColor(`--${illaPrefix}-gray-06`)} `,
      borderLeft: "none",
      borderBottom: "none",
      transform: "rotate(45deg)",
      top: topMap[size],
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
