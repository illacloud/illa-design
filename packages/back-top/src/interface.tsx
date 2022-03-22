import { HTMLAttributes, ReactNode } from "react"

export interface BackTopProps extends HTMLAttributes<HTMLDivElement> {
  visibleHeight?: number
  target?: () => HTMLElement | Window
  onClick?: () => void
  easing?: string
  duration?: number
  children?: ReactNode
}
