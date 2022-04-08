import { CSSProperties, HTMLAttributes, MouseEvent, ReactNode } from "react"
import { TriggerPosition } from "@illa-design/trigger"

export interface SliderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange"> {
  tooltipVisible?: boolean
  tooltipPosition?: TriggerPosition
  reverse?: boolean
  marks?: Record<number, string>
  showInput?: boolean
  showTicks?: boolean
  vertical?: boolean
  disabled?: boolean
  min?: number
  max?: number
  range?: boolean | { draggableBar: boolean }
  step?: number
  onlyMarkValue?: boolean
  defaultValue?: number | number[]
  value?: number | number[]
  formatTooltip?: (value: number) => string | ReactNode
  onAfterChange?: (val: number | number[]) => void
  onChange?: (val: number | number[]) => void
}

export interface TicksProps {
  step: number
  min: number
  max: number
  value: number[]
  vertical?: boolean
  reverse?: boolean
}

export type MarkType = {
  key: number | string
  content: string
}

export interface MarkProps {
  data: MarkType[]
  min: number
  max: number
  vertical?: boolean
  onMouseDown?: (val: number) => void
  reverse?: boolean
  value?: number[]
}

export interface InputProps {
  min?: number
  max?: number
  step?: number
  value: number[]
  range?: boolean
  disabled?: boolean
  onChange?: (val: [number, number]) => void
}

export interface SliderButtonProps {
  style?: CSSProperties
  disabled?: boolean
  value: number
  vertical?: boolean
  reverse?: boolean
  tooltipVisible?: boolean
  tooltipPosition?: TriggerPosition
  formatTooltip?: (value: number) => string | ReactNode
  onMoving?: (x: number, y: number) => void
  onMoveEnd?: () => void
  onMoveBegin?: () => void
}
