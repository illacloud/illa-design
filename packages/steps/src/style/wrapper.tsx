// wrapper container that contains icon & title & description
import { css } from "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { StepVariant, LabelPlacement, StepStatus } from "../interface"
import { statusColor, isVerticalLabel } from "../style"

export function applyWrapperStyle({
  direction,
  variant,
  status,
  disabled,
  labelPlacement,
  hoverable,
}: {
  direction: LabelPlacement
  variant: StepVariant
  status: StepStatus
  disabled: boolean
  labelPlacement: LabelPlacement
  hoverable: boolean
}): SerializedStyles {
  const overflow = isVerticalLabel({ variant, direction, labelPlacement })
    ? "visible"
    : "hidden"
  const minHeight = direction === "vertical" ? 90 : "unset"
  let navigactionProcessStatusIndicator = css``
  let boxStyle = css({
    marginRight: 16,
    minHeight,
  })

  if (variant === "navigation") {
    boxStyle = css({
      paddingLeft: 20,
      paddingRight: 10,
      marginRight: 32,
    })

    if (status === "process") {
      const right = isVerticalLabel({ variant, direction, labelPlacement }) ? 10 : 30;
      navigactionProcessStatusIndicator = css`
        &:after {
          content: "";
          position: absolute;
          diplay: block;
          height: 2px;
          bottom: 0;
          left: 20px;
          right: ${right}px;
          background-color: ${statusColor.process.backgroundColor};
        }
      `
    }
  }

  return css([
    css({
      flex: 1,
      whiteSpace: "nowrap",
      position: "relative",
      overflow,
    }),
    boxStyle,
    navigactionProcessStatusIndicator,
    applyWrapperCursor(disabled),
    applyHover(hoverable),
  ])
}

function applyWrapperCursor(disabled: boolean): SerializedStyles {
  return disabled
    ? css`
        cursor: not-allowed;
      `
    : css``
}

function applyHover(hoverable: boolean): SerializedStyles {
  if (!hoverable) {
    return css``
  }

  const hoverColor = globalColor(`--${illaPrefix}-blue-03`)

  return css`
    & > div:last-child > div {
      transition: all 0.12s ease-in-out;
      &:first-child {
        transition-duration: 0.2s;
      }
    }

    &:hover {
      cursor: pointer;
    }

    &:hover > div:last-child > div {
      transition: all 0.2s ease-in-out;

      &:first-child {
        transition-duration: 0.12s;
      }

      cursor: pointer;
      color: ${hoverColor};
    }
  `
}
