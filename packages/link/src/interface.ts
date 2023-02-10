import { AnchorHTMLAttributes, ReactNode } from "react"
import { BoxProps } from "@illa-design/theme"

export type LinkColorScheme =
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

export interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    BoxProps {
  disabled?: boolean
  icon?: boolean | ReactNode
  colorScheme?: LinkColorScheme
  hoverable?: boolean
}
