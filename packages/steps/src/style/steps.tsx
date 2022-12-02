import { css, SerializedStyles } from "@emotion/react"
import { LabelPlacement } from "../interface"

export function applyStepsStyle({
  direction,
}: {
  direction: LabelPlacement
}): SerializedStyles {
  return css([
    css`
      display: flex;
    `,
    applyDirection({ direction }),
  ])
}

function applyDirection({
  direction,
}: {
  direction: LabelPlacement
}): SerializedStyles {
  const flexDirection = direction === "vertical" ? "column" : "row"
  return css`
    flex-direction: ${flexDirection};
  `
}
