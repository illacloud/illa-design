import { HTMLAttributes } from "react"
import { EllipsisConfig } from "./ellipsis-config"

export type TypographyColorScheme =
  "white"
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

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export interface TextProps extends HTMLAttributes<HTMLDivElement> {

}

export interface ParagraphProps extends HTMLAttributes<HTMLDivElement> {

}

export interface HeadingProps extends HTMLAttributes<HTMLDivElement> {
  colorScheme?: TypographyColorScheme
  level?: HeadingLevel
  ellipsis?: boolean | EllipsisConfig
  bold?: boolean
  disabled?: boolean
  mark?: boolean
  underline?: boolean
  deleted?: boolean
  code?: boolean
  copyable?: boolean
}