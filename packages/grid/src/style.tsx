import { css } from "@emotion/react"
import { SerializedStyles } from "@storybook/theming"
import { ColSizeProps, GridSize, RowAlign, RowJustify } from "./interface"

export function applyRowContainer(
  align?: RowAlign,
  justify?: RowJustify,
): SerializedStyles {
  return css`
    display: flex;
    justify-items: ${align};
    align-items: ${justify};
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
    row-gap: ${horizontalGap}px;
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
    column-gap: ${verticalGap}px;
  `
}

export function applyHorizontalSizeGap(
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number,
  xl?: number,
  xxl?: number,
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

export function applyVerticalSizeGap(
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number,
  xl?: number,
  xxl?: number,
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

export function applyColContainer(order?: number): SerializedStyles {
  if (order != undefined) {
    return css`
      box-sizing: border-box;
      order: ${order};
    `
  } else {
    return css`
      box-sizing: border-box;
    `
  }
}

export interface UnitWidth {
  normal?: string
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
  push: number,
  oneUnitWidth: string,
): SerializedStyles {
  if (oneUnitWidth) {
    return css`
      padding-left: calc(${push} * ${oneUnitWidth});
    `
  } else {
    return css``
  }
}

export function applyColPullStyle(
  pull: number,
  oneUnitWidth: string,
): SerializedStyles {
  if (oneUnitWidth) {
    return css`
      padding-right: calc(${pull} * ${oneUnitWidth});
    `
  } else {
    return css``
  }
}

export function applyColOffsetStyle(
  offset: number,
  oneUnitWidth: string,
): SerializedStyles {
  if (oneUnitWidth) {
    return css`
      margin-left: calc(${offset} * ${oneUnitWidth});
    `
  } else {
    return css``
  }
}

export function applyColWidthStyle(
  span: number,
  oneUnitWidth: string,
): SerializedStyles {
  if (oneUnitWidth) {
    return css`
      width: calc(${span} * ${oneUnitWidth});
    `
  } else {
    return css``
  }
}

// reactive size
export function applyXsStyle(xs: ColSizeProps | number, oneUnitWidth: string) {}
