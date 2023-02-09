import { HTMLAttributes } from "react"
import { SerializedStyles } from "@emotion/react"
import { BoxProps } from "@illa-design/theme"

export type LoadingSize = "small" | "medium" | "large"

export type LoadingColorScheme =
  | string
  | "white"
  | "blackAlpha"
  | "gray"
  | "grayBlue"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "cyan"
  | "purple"
  | "techPink"
  | "techPurple"

export interface LoadingProps extends HTMLAttributes<HTMLDivElement>, BoxProps {
  size?: LoadingSize
  colorScheme?: LoadingColorScheme
}
