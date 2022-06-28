import { HTMLAttributes } from "react"

export interface AffixProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  offsetTop?: number
  offsetBottom?: number
  target?: () => HTMLElement | null | Window
  targetContainer?: () => HTMLElement | null | Window
  onChange?: (isFixed: boolean) => void
}

export interface AffixFixedValue {
  isFixed: boolean
  position: PositionValue
  size: SizeValue
}

export interface PositionValue {
  type: "top" | "bottom"
  offset: number
}

export interface SizeValue {
  width: number
  height: number
}
