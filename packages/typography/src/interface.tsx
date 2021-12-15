import { HTMLAttributes } from "react"
import { Ellipsis } from "./ellipsis-config"
import { Copyable } from "./copyable-config"

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

export interface TextProps extends BaseProps, HTMLAttributes<HTMLSpanElement> {
  fontSize?: string
}

export interface ParagraphProps extends BaseProps, HTMLAttributes<HTMLParagraphElement> {
  fontSize?: string
  indent?: boolean
}

export interface HeadingProps extends BaseProps, HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel
}

export interface BaseProps {
  colorScheme?: TypographyColorScheme
  ellipsis?: boolean | Ellipsis
  bold?: boolean
  disabled?: boolean
  mark?: boolean | TypographyColorScheme
  underline?: boolean
  deleted?: boolean
  code?: boolean
  copyable?: boolean | Copyable
}