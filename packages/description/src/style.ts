import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import {
  DescriptionLayout,
  DescriptionSize,
  DescriptionTableLayout,
} from "./interface"

export const applyDescContainerStyle = css`
  padding: 24px;
  display: inline-flex;
  flex-direction: column;
  vertical-align: center;
  min-width: 372px;
  max-width: 100%;
`

export function applyTitleStyle(size: DescriptionSize): SerializedStyles {
  let marginBottom

  switch (size) {
    case "small":
      marginBottom = "12px"
      break
    case "medium":
      marginBottom = "16px"
      break
    case "large":
      marginBottom = "24px"
      break
  }

  return css`
    font-weight: bold;
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
    font-size: 16px;
    line-height: 24px;
    margin-bottom: ${marginBottom};
  `
}

export const applyInlineHorizontalStyle = css`
  display: inline-flex;
  flex-direction: row;
`

export const applyInlineVerticalStyle = css`
  display: inline-flex;
  flex-direction: column;
`

export function applyLabelStyle(
  bordered: boolean,
  layout: DescriptionLayout,
): SerializedStyles {
  switch (layout) {
    case "horizontal":
      if (bordered) {
        return css`
          line-height: 22px;
          font-size: 14px;
          color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
          background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
        `
      } else {
        return css`
          line-height: 22px;
          font-size: 14px;
          color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
        `
      }
    case "vertical":
      if (bordered) {
        return css`
          line-height: 22px;
          font-size: 14px;
          background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
          color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
        `
      } else {
        return css`
          line-height: 22px;
          font-size: 14px;
          color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
        `
      }
    case "inline-horizontal":
      return css`
        line-height: 22px;
        font-size: 14px;
        color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
        margin-right: 16px;
      `
    case "inline-vertical":
      return css`
        line-height: 22px;
        font-size: 14px;
        color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
        margin-bottom: 4px;
      `
  }
}

export function applyValueStyle(): SerializedStyles {
  return css`
    line-height: 22px;
    font-size: 14px;
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
  `
}

export function applyBlockStyle(
  size: DescriptionSize,
  bordered: boolean,
  column: number,
): SerializedStyles {
  let padding

  switch (size) {
    case "small":
      if (bordered) {
        padding = "5px 24px"
      } else {
        if (column > 1) {
          padding = "5px 48px 5px 0px"
        } else {
          padding = "5px 40px 5px 0px"
        }
      }
      break
    case "medium":
      if (bordered) {
        padding = "7px 24px"
      } else {
        if (column > 1) {
          padding = "7px 48px 7px 0px"
        } else {
          padding = "7px 40px 7px 0px"
        }
      }
      break
    case "large":
      if (bordered) {
        padding = "9px 24px"
      } else {
        if (column > 1) {
          padding = "9px 48px 9px 0px"
        } else {
          padding = "9px 40px 9px 0px"
        }
      }
      break
  }

  const commonStyle = css`
    box-sizing: border-box;
    padding: ${padding};
    margin: 0;
    min-width: 115px;
  `

  const borderStyle = css`
    border: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
  `

  if (bordered) {
    return css`
      ${commonStyle};
      ${borderStyle};
    `
  } else {
    return css`
      ${commonStyle};
    `
  }
}

export function applyTableStyle(
  tableLayout: DescriptionTableLayout,
  bordered: boolean,
): SerializedStyles {
  const border = css`
    border: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
  `

  const commonStyle = css`
    width: 100%;
    box-sizing: border-box;
    border-collapse: collapse;
    table-layout: ${tableLayout};
  `

  if (bordered) {
    return css`
      ${border};
      ${commonStyle};
    `
  } else {
    return css`
      ${commonStyle};
    `
  }
}
