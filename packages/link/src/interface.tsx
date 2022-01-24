import { AnchorHTMLAttributes, ReactNode } from "react"

export type LinkColorScheme =
  string
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

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  disabled?: boolean
  icon?: boolean | ReactNode
  colorScheme?: LinkColorScheme
  hoverable?: boolean
}
