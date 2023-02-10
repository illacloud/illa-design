import { HTMLAttributes, ReactNode } from "react"
import { BoxProps } from "@illa-design/theme"

export interface RateProps
  extends Omit<HTMLAttributes<HTMLElement>, "onChange">,
    BoxProps {
  defaultValue?: number
  character?: ReactNode | ((index: number) => ReactNode)
  count?: number
  value?: number
  tooltips?: string[]
  allowHalf?: boolean
  allowClear?: boolean
  readonly?: boolean
  disabled?: boolean
  heart?: boolean
  onChange?: (value: number) => void
  onHoverChange?: (value: number) => void
}
