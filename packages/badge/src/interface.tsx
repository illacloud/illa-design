import { HTMLAttributes, ReactNode } from "react"

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
  | string

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
  maxCount?: number
  offset?: [number, number]
  colorScheme?: BadgeColorScheme
  status?: BadgeStatus
  children?: ReactNode
}

export interface CountProps extends HTMLAttributes<HTMLElement> {
  count?: string | number
  color?: string
  hasChildren?: boolean
}
