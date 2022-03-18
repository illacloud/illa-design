import { ReactNode } from "react"

export interface AffixProps {
  offsetTop?: number
  offsetBottom?: number
  target?: () => HTMLElement | null | Window
  targetContainer?: () => HTMLElement | null | Window
  children?: ReactNode
  onChange?: (isFixed: boolean) => void
}
