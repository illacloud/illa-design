import { HTMLAttributes, ReactNode } from "react"
import { Ellipsis } from "./ellipsis-config"
import { Copyable } from "./copyable-config"
import { BoxProps } from "@illa-design/theme"

export type TypographyColorScheme =
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

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export interface TypographyProps
  extends HTMLAttributes<HTMLElement>,
    BoxProps {}

export interface TextProps
  extends BaseProps,
    HTMLAttributes<HTMLSpanElement>,
    BoxProps {
  code?: boolean
}

export interface ParagraphProps
  extends BaseProps,
    HTMLAttributes<HTMLParagraphElement>,
    BoxProps {
  indent?: boolean
}

export interface HeadingProps
  extends BaseProps,
    HTMLAttributes<HTMLHeadingElement>,
    BoxProps {
  level?: HeadingLevel
}

export interface BaseProps {
  children?: ReactNode
  colorScheme?: TypographyColorScheme
  ellipsis?: boolean | Ellipsis
  bold?: boolean
  disabled?: boolean
  mark?: boolean | TypographyColorScheme
  underline?: boolean
  deleted?: boolean
  copyable?: boolean | Copyable
}
