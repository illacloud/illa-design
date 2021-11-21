import { HTMLAttributes, ReactNode } from "react"

export type AvatarColorScheme =
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

export type AvatarShape = "circle" | "square"

export type AvatarSize = "small" | "medium" | "large"

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  colorScheme?: AvatarColorScheme
  size?: AvatarSize
  text?: string
  shape?: AvatarShape
  src?: string
  icon?: ReactNode
}