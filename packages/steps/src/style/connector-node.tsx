import { css } from "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"
import {
  LabelPlacement,
  StepSize,
  StepStyleConfig,
  StepStatus,
} from "../interface"
import { getConnectorColor } from "../style"

export function applyConnectionNodeStyle({
  size,
  variant,
  direction,
  labelPlacement,
  status,
  nextStepError = false,
}: StepStyleConfig & {
  status: StepStatus
  nextStepError?: boolean
}): SerializedStyles {
  const color = getConnectorColor({ nextStepError, status })

  if (variant === "dot") {
    return generateDotConnnector({ direction, size, color })
  } else if (variant === "line") {
    return generateLineConnector({ direction, labelPlacement, size, color })
  }

  return css``
}

function generateDotConnnector({
  direction,
  size,
  color,
}: {
  direction: LabelPlacement
  size: StepSize
  color: string
}): SerializedStyles {
  if (direction === "vertical") {
    const positionMap = {
      small: {
        left: 3.5,
        top: 24,
        bottom: 0,
      },
      large: {
        left: 4.5,
        top: 24,
        bottom: -8,
      },
    }
    return css({
      position: "absolute",
      display: "block",
      width: 1,
      ...positionMap[size],
      backgroundColor: color,
    })
  } else if (direction === "horizontal") {
    const topMap = {
      small: 4,
      large: 4.5,
    }
    return css(
      {
        position: "absolute",
        display: "block",
        height: 1,
        width: "100%",
        left: 90,
        paddingRight: 24,
        boxSizing: "border-box",
        top: topMap[size],
      },
      css`
        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          background-color: ${color};
        }
      `,
    )
  }

  return css``
}

function generateLineConnector({
  direction,
  labelPlacement,
  size,
  color,
}: {
  direction: LabelPlacement
  labelPlacement: LabelPlacement
  size: StepSize
  color: string
}): SerializedStyles {
  if (direction === "vertical") {
    const positionMap = {
      small: {
        left: 12,
        top: 32,
        bottom: 8,
      },
      large: {
        left: 16,
        top: 36,
        bottom: 5,
      },
    }
    return css({
      position: "absolute",
      display: "block",
      width: 1,
      ...positionMap[size],
      backgroundColor: color,
    })
  } else if (labelPlacement === "vertical") {
    const positionMap = {
      small: {
        top: 12,
        left: 96,
        paddingRight: 40,
      },
      large: {
        top: 16,
        left: 100,
        paddingRight: 40,
      },
    }

    return css(
      {
        position: "absolute",
        display: "block",
        height: 1,
        width: "100%",
        boxSizing: "border-box",
        ...positionMap[size],
      },
      css`
        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          background-color: ${color};
        }
      `,
    )
  }

  return css``
}
