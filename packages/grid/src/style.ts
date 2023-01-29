import { css, SerializedStyles } from "@emotion/react"
import { ColSize, GridSize, RowAlign, RowJustify } from "./interface"

export function applyRowContainer(
  align?: RowAlign,
  justify?: RowJustify,
): SerializedStyles {
  return css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: ${justify};
    align-items: ${align};
  `
}

export function applyHorizontalGap(
  horizontalGap?: GridSize | string,
): SerializedStyles {
  if (typeof horizontalGap == "object") {
    const { xs, sm, md, lg, xl, xxl } = horizontalGap
    return applyHorizontalSizeGap(xs, sm, md, lg, xl, xxl)
  }
  return css`
    column-gap: ${horizontalGap};
  `
}

export function applyVerticalGap(
  verticalGap?: GridSize | string,
): SerializedStyles {
  if (typeof verticalGap == "object") {
    const { xs, sm, md, lg, xl, xxl } = verticalGap
    return applyVerticalSizeGap(xs, sm, md, lg, xl, xxl)
  }
  return css`
    row-gap: ${verticalGap};
  `
}

export function applyHorizontalSizeGap(
  xs?: string,
  sm?: string,
  md?: string,
  lg?: string,
  xl?: string,
  xxl?: string,
): SerializedStyles {
  return css`
    @media (min-width: 0px) {
      column-gap: ${xs};
    }
    @media (min-width: 576px) {
      column-gap: ${sm};
    }
    @media (min-width: 768px) {
      column-gap: ${md};
    }
    @media (min-width: 992px) {
      column-gap: ${lg};
    }
    @media (min-width: 1200px) {
      column-gap: ${xl};
    }
    @media (min-width: 1600px) {
      column-gap: ${xxl};
    }
  `
}

export function applyVerticalSizeGap(
  xs?: string,
  sm?: string,
  md?: string,
  lg?: string,
  xl?: string,
  xxl?: string,
): SerializedStyles {
  return css`
    @media (min-width: 0px) {
      row-gap: ${xs};
    }
    @media (min-width: 576px) {
      row-gap: ${sm};
    }
    @media (min-width: 768px) {
      row-gap: ${md};
    }
    @media (min-width: 992px) {
      row-gap: ${lg};
    }
    @media (min-width: 1200px) {
      row-gap: ${xl};
    }
    @media (min-width: 1600px) {
      row-gap: ${xxl};
    }
  `
}

export function applyColContainer(order?: number): SerializedStyles {
  if (order != undefined) {
    return css`
      box-sizing: border-box;
      position: relative;
      order: ${order};
    `
  } else {
    return css`
      position: relative;
      box-sizing: border-box;
    `
  }
}

export interface UnitWidth {
  normal: string
  xs?: string
  sm?: string
  md?: string
  lg?: string
  xl?: string
  xxl?: string
}

export function getOneUnitWidth(
  childCount: number,
  horizontalGap?: GridSize | string,
): UnitWidth {
  if (typeof horizontalGap == "string") {
    return {
      normal: `calc((100% - ${horizontalGap} * (${childCount} - 1)) / 24)`,
    }
  } else if (typeof horizontalGap == "object") {
    return {
      normal: `calc(100% / 24)`,
      xs: `calc((100% - ${
        horizontalGap.xs ?? "0px"
      } * (${childCount} - 1)) / 24)`,
      sm: `calc((100% - ${
        horizontalGap.sm ?? "0px"
      } * (${childCount} - 1)) / 24)`,
      md: `calc((100% - ${
        horizontalGap.md ?? "0px"
      } * (${childCount} - 1)) / 24)`,
      lg: `calc((100% - ${
        horizontalGap.lg ?? "0px"
      } * (${childCount} - 1)) / 24)`,
      xl: `calc((100% - ${
        horizontalGap.xl ?? "0px"
      } * (${childCount} - 1)) / 24)`,
      xxl: `calc((100% - ${
        horizontalGap.xxl ?? "0px"
      } * (${childCount} - 1)) / 24)`,
    }
  } else {
    return {
      normal: `calc(100% / 24)`,
    }
  }
}

// reactive
export function applyColPushStyle(
  oneUnitWidth: string,
  push?: number,
): SerializedStyles {
  if (push) {
    return css`
      left: calc(${push} * ${oneUnitWidth});
    `
  } else {
    return css``
  }
}

export function applyColPullStyle(
  oneUnitWidth: string,
  pull?: number,
): SerializedStyles {
  if (pull) {
    return css`
      right: calc(${pull} * ${oneUnitWidth});
    `
  } else {
    return css``
  }
}

export function applyColOffsetStyle(
  oneUnitWidth: string,
  offset?: number,
): SerializedStyles {
  if (offset) {
    return css`
      margin-left: calc(${offset} * ${oneUnitWidth});
    `
  } else {
    return css``
  }
}

export function applyColWidthStyle(
  oneUnitWidth: string,
  span?: number,
): SerializedStyles {
  if (span) {
    return css`
      width: calc(${span} * ${oneUnitWidth});
    `
  } else {
    return css``
  }
}

// reactive size
export function applyReactiveStyle(
  minWidth: string,
  oneUnitWidth: string,
  size?: ColSize | number,
): SerializedStyles {
  if (size != undefined) {
    if (typeof size == "number") {
      return css`
        @media (min-width: ${minWidth}) {
          ${applyColWidthStyle(oneUnitWidth, size)};
        }
      `
    } else {
      return css`
        @media (min-width: ${minWidth}) {
          ${applyColPushStyle(oneUnitWidth, size?.push)};
          ${applyColPullStyle(oneUnitWidth, size?.pull)};
          ${applyColOffsetStyle(oneUnitWidth, size?.offset)};
          ${applyColWidthStyle(oneUnitWidth, size?.span)};
        }
      `
    }
  } else {
    return css``
  }
}
