import { HTMLAttributes, CSSProperties, ReactNode } from "react"

export type BadgeColorScheme =
  | "white"
  | "blackAlpha"
  | "gray"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "cyan"
  | "purple"
  | "grayBlue"

export type BadgeStatus =
  | "default"
  | "processing"
  | "success"
  | "warning"
  | "error"

export interface BadgeProps extends HTMLAttributes<HTMLElement> {
  count?: number | ReactNode
  text?: string
  dot?: boolean
  dotStyle?: CSSProperties
  maxCount?: number
  offset?: [number, number]
  colorScheme?: BadgeColorScheme
  status?: BadgeStatus
  children?: ReactNode
}

export interface CountProps {
  count?: string | number
  dotStyle?: CSSProperties
  color?: string
  hasChildren?: boolean
}
