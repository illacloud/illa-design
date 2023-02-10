import { HTMLAttributes, ReactNode } from "react"
import { BoxProps } from "@illa-design/theme"

export interface BackTopProps extends HTMLAttributes<HTMLDivElement>, BoxProps {
  visibleHeight?: number
  target?: () => HTMLElement | Window
  onClick?: () => void
  easing?: string
  duration?: number
  children?: ReactNode
}
