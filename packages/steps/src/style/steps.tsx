import { css } from "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"
import { labelPlacement } from "../interface"

export function applyStepsStyle({
  direction,
}: {
  direction: labelPlacement
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
  direction: labelPlacement
}): SerializedStyles {
  return direction === "vertical"
    ? css`
        flex-direction: column;
      `
    : css`
        flex-direction: row;
      `
}
