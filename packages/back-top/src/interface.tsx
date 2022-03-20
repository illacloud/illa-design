import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react"

export interface BackTopProps extends ButtonHTMLAttributes<HTMLBaseElement> {
  visibleHeight?: number
  target?: () => HTMLElement | Window
  onClick?: () => void
  easing?: string
  duration?: number
}
