import { HTMLAttributes, MouseEvent, ReactNode } from "react"
import { BoxProps } from "@illa-design/theme"
import { TriggerPosition } from "@illa-design/trigger"

export type SpecialSliderProps = "defaultValue" | "onChange"
export interface SliderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, SpecialSliderProps>,
    BoxProps {
  disabled?: boolean
  showTicks?: boolean
  reverse?: boolean
  tooltipVisible?: boolean
  max?: number
  min?: number
  step?: number
  tooltipPosition?: TriggerPosition
  defaultValue?: number | number[]
  isRange?: boolean | { draggableBar: boolean }
  value?: number | number[]
  startMarkShow?: boolean
  endMarkShow?: boolean
  formatTooltip?: (value: number) => string | ReactNode
  onAfterChange?: (val: number | number[]) => void
  onChange?: (val: number | number[]) => void
}

export interface SliderBar {
  isRange: boolean | { draggableBar: boolean }
  dragBar: (
    e: MouseEvent,
    origin: number,
    startValue: number[],
    isEnd?: boolean,
  ) => void
  value: number[]
  left: number
  width: number
  disabled: boolean
}

export interface SliderMarkBar {
  isBoundMark?: boolean
  isRightMark?: boolean
  left?: number
  right?: number
  drag?: (
    e: MouseEvent,
    origin: number,
    startValue: number | number[],
    barLocation: string,
    isEnd?: boolean,
  ) => void
  value?: number | number[]
  location?: string
  disabled?: boolean
  mouseOut?: () => void
  mouseEnter?: () => void
}

export interface SliderTick {
  left: number
  leftValue: number
  rightValue: number
  currentWidth: number
  reverse: boolean
  isRange: boolean
  disabled: boolean
  tickClick: (v: number) => void
  value: number
}
