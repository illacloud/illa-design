import { HTMLAttributes, ReactNode } from "react"
import { TriggerPosition } from "@illa-design/trigger"
import { BoxProps } from "@illa-design/theme"

export interface SliderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange">,
    BoxProps {
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

export interface SliderTicksProps extends BoxProps {
  step: number
  min: number
  max: number
  value: number[]
  vertical?: boolean
  reverse?: boolean
  disabled?: boolean
}

export type SliderMarkType = {
  key: number | string
  content: string
}

export interface SliderMarkProps extends BoxProps {
  data: SliderMarkType[]
  min: number
  max: number
  vertical?: boolean
  onMouseDown?: (val: number) => void
  reverse?: boolean
  value?: number[]
  disabled?: boolean
}

export interface SliderInputProps extends BoxProps {
  min?: number
  max?: number
  step?: number
  value: number[]
  range?: boolean
  disabled?: boolean
  vertical?: boolean
  onChange?: (val: [number, number]) => void
}

export interface SliderButtonProps extends BoxProps {
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
