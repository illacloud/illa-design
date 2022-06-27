import { css } from "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"
import { PositionValue, SizeValue, AffixFixedValue } from "./interface"

export function applyFixedPosition(
  positionValue: PositionValue,
): SerializedStyles {
  return css`
    position: fixed;
    ${positionValue.type}: ${positionValue.offset}px
  `
}

export function applySize(sizeValue: SizeValue): SerializedStyles {
  return css`
    width: ${sizeValue.width}px;
    height: ${sizeValue.height}px;
  `
}

export function applyAffixFixedStyle(
  affixFixedValue: AffixFixedValue,
): SerializedStyles {
  if (affixFixedValue.isFixed) {
    return css`
      ${applyFixedPosition(affixFixedValue.position)};
      ${applySize(affixFixedValue.size)}
    `
  }

  return css``
}
