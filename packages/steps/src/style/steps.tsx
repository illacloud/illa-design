import { css } from "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"
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
  return direction === "vertical"
    ? css`
        flex-direction: column;
      `
    : css`
        flex-direction: row;
      `
}
