import { css, SerializedStyles } from "@emotion/react"
import { AffixFixedValue, PositionValue } from "./interface"

export function applyFixedPosition(
  positionValue: PositionValue,
): SerializedStyles {
  return css`
    position: fixed;
    ${positionValue.type}: ${positionValue.offset}px
  `
}

export function applySize(w: number, h: number): SerializedStyles {
  return css`
    width: ${w}px;
    height: ${h}px;
  `
}

export function applyAffixFixedStyle(
  affixFixedValue: AffixFixedValue,
  w: number,
  h: number,
): SerializedStyles {
  if (affixFixedValue.isFixed) {
    return css`
      ${applyFixedPosition(affixFixedValue.position)};
      ${applySize(w, h)}
    `
  }

  return css``
}
