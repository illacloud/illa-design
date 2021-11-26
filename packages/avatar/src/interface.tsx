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
  shape?: AvatarShape
  text?: string
  src?: string
  icon?: ReactNode
}

export interface AvatarGroupProps extends Omit<AvatarProps, "text" | "src" | "icon" | "shape"> {
  zIndexAscend?: boolean
  maxCount?: number
}

export interface AvatarGroupContextProps extends Pick<AvatarGroupProps, "zIndexAscend" | "maxCount" | "colorScheme" | "size" | "style"> {
}