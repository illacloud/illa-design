import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { SerializedStyles } from "@emotion/serialize"
import { StepType, LabelPlacement, StepStatus } from "../interface"
import { statusColor } from "../style";

export function applyWrapperStyle({
  direction,
  type,
  status,
  disabled,
}: {
  direction: LabelPlacement
  type: StepType
  status: StepStatus
  disabled: boolean
}): SerializedStyles {
  const overflow = type === "dot" ? "visible" : "hidden"
  const minHeight = direction === "vertical" ? 90 : "unset"
  let navigactionProcessIndicator = css``
  let style = css({
    marginRight: 16,
    minHeight,
  })

  if (type === "navigation") {
    style = css({
      paddingLeft: 20,
      paddingRight: 10,
      marginRight: 32,
    })

    if (status === "process") {
      navigactionProcessIndicator = css`
        &:after {
          content: "";
          position: absolute;
          diplay: block;
          height: 2px;
          bottom: 0;
          left: 0;
          right: 30px;
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
    style,
    navigactionProcessIndicator,
    applyWrapperCursor(disabled),
  ])
}

function applyWrapperCursor(disabled: boolean): SerializedStyles {
  return disabled
    ? css`
        cursor: not-allowed;
      `
    : css``
}
