import { CSSProperties, HTMLAttributes, ReactNode } from "react"

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
  shape?: AvatarShape
  text?: string
  src?: string
  icon?: ReactNode
}

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement>, AvatarGroupContextProps {
}

export interface AvatarGroupContextProps {
  zIndexAscend?: boolean
  maxCount?: number
  colorScheme?: AvatarColorScheme
  size?: AvatarSize
  style?: CSSProperties
}