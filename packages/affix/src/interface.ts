import { HTMLAttributes } from "react"
import { BoxProps } from "@illa-design/theme"

export interface AffixProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange">,
    BoxProps {
  offsetTop?: number
  offsetBottom?: number
  target?: () => HTMLElement | null | Window
  targetContainer?: () => HTMLElement | null | Window
  onChange?: (isFixed: boolean) => void
}

export interface AffixFixedValue {
  isFixed: boolean
  position: PositionValue
}

export interface PositionValue {
  type: "top" | "bottom"
  offset: number
}
