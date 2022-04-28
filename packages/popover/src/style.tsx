import { css } from "@emotion/react"
import { TriggerColorScheme } from "@illa-design/trigger"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const applyTypographyContainer = css`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
`

export function applyTitleColor(colorScheme: TriggerColorScheme) {
  const textColor =
    colorScheme == "white"
      ? globalColor(`--${illaPrefix}-grayBlue-02`)
      : globalColor(`--${illaPrefix}-white-02`)
  return css`
    color: ${textColor};
  `
}

export const applyCloseButton = css`
  margin-top: 4px;
  align-self: end;
`
