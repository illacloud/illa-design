import { HTMLAttributes, ReactNode } from "react"
import { BoxProps } from "@illa-design/theme"

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
  | "techPink"
  | "techPurple"
  | string

export type BadgeStatus =
  | "default"
  | "processing"
  | "success"
  | "warning"
  | "error"

export interface BadgeProps extends HTMLAttributes<HTMLElement>, BoxProps {
  count?: number | ReactNode
  text?: string
  dot?: boolean
  maxCount?: number
  offset?: [number, number]
  colorScheme?: BadgeColorScheme
  status?: BadgeStatus
  children?: ReactNode
}

export interface CountProps extends HTMLAttributes<HTMLElement>, BoxProps {
  count?: string | number
  color?: string
  hasChildren?: boolean
}
