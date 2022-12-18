import { SpaceAlign, SpaceDirection, SpaceSize } from "./interface"
import { css, SerializedStyles } from "@emotion/react"

export function applyContainer(
  direction: SpaceDirection,
  align: SpaceAlign,
  wrap: boolean,
  size: SpaceSize | SpaceSize[],
): SerializedStyles {
  let cssDirection: SerializedStyles = css``
  switch (direction) {
    case "horizontal":
      cssDirection = css`
        flex-direction: row;
        justify-content: ${align};
      `
      break
    case "vertical":
      cssDirection = css`
        flex-direction: column;
        align-items: ${align};
      `
      break
  }

  let backStyle = css``
  if (wrap) {
    if (typeof size == "string") {
      if (direction == "horizontal") {
        backStyle = css`
          margin-bottom: -${getSpaceSize(size)};
        `
      } else {
        backStyle = css`
          margin-right: -${getSpaceSize(size)};
        `
      }
    } else {
      if (size.length == 1) {
        if (direction == "horizontal") {
          backStyle = css`
            margin-bottom: -${size[0]};
          `
        } else {
          backStyle = css`
            margin-right: -${size[0]};
          `
        }
      }
      if (size.length >= 2) {
        if (direction == "horizontal") {
          backStyle = css`
            margin-bottom: -${size[1]};
          `
        } else {
          backStyle = css`
            margin-right: -${size[0]};
          `
        }
      }
    }
  }

  return css`
    display: inline-flex;
    vertical-align: middle;
    flex-wrap: ${wrap ? "wrap" : "nowrap"};
    ${backStyle};
    ${cssDirection};
  `
}

export function applyDividerSizeSingle(
  size: SpaceSize,
  direction: SpaceDirection,
  wrap: boolean,
  isLast: boolean,
): SerializedStyles {
  let horSpace, verSpace: string
  switch (direction) {
    case "horizontal":
      horSpace =
        direction == "horizontal" && !isLast ? getSpaceSize(size) : "0px"
      verSpace = wrap ? getSpaceSize(size) : "0px"
      break
    case "vertical":
      verSpace = direction == "vertical" && !isLast ? getSpaceSize(size) : "0px"
      horSpace = wrap ? getSpaceSize(size) : "0px"
      break
  }
  return css`
    display: inline-flex;
    margin-right: ${horSpace};
    margin-bottom: ${verSpace};
  `
}

export function applyDividerMultiSize(
  size: SpaceSize[],
  direction: SpaceDirection,
  isLast: boolean,
): SerializedStyles {
  let horSpace, verSpace: string
  switch (direction) {
    case "horizontal":
      horSpace =
        direction == "horizontal" && !isLast ? getSpaceSize(size[0]) : "0px"
      verSpace = getSpaceSize(size[1])
      break
    case "vertical":
      verSpace =
        direction == "vertical" && !isLast ? getSpaceSize(size[1]) : "0px"
      horSpace = getSpaceSize(size[0])
      break
  }
  return css`
    display: inline-flex;
    margin-right: ${horSpace};
    margin-bottom: ${verSpace};
  `
}

export function applyDividerSize(
  size: SpaceSize | SpaceSize[],
  direction: SpaceDirection,
  wrap: boolean,
  isLast: boolean,
): SerializedStyles {
  if (typeof size == "string") {
    return applyDividerSizeSingle(size, direction, wrap, isLast)
  } else {
    if (size.length == 1) {
      return applyDividerSizeSingle(size[0], direction, wrap, isLast)
    }
    if (size.length >= 2) {
      if (wrap) {
        return applyDividerMultiSize(size, direction, isLast)
      } else {
        switch (direction) {
          case "horizontal":
            return applyDividerSizeSingle(size[0], direction, wrap, isLast)
          case "vertical":
            return applyDividerSizeSingle(size[1], direction, wrap, isLast)
        }
      }
    } else {
      return css``
    }
  }
}

export function getSpaceSize(size: SpaceSize): string {
  switch (size) {
    case "mini":
      return "4px"
    case "small":
      return "8px"
    case "medium":
      return "16px"
    case "large":
      return "24px"
    default:
      return size
  }
}
