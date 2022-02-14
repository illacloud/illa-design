import { css } from "@emotion/react"
import { TriggerColorScheme } from "@illa-design/trigger"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const applyTypographyContainer = css`
  padding: 4px;
`

export function applyTitleColor(colorScheme: TriggerColorScheme) {
  const textColor =
    colorScheme == "white"
      ? globalColor(`--${illaPrefix}-gray-02`)
      : globalColor(`--${illaPrefix}-white-02`)
  return css`
    color: ${textColor};
    margin-bottom: 4px;
  `
}
