import { HTMLAttributes } from "react"
import { SerializedStyles } from "@emotion/react"

export type colorSchemeType = "techPurple"

export interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
  _css?: SerializedStyles
  colorScheme?: colorSchemeType
}
