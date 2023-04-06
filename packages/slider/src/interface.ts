import { HTMLAttributes, MouseEvent, ReactNode } from "react"
import { BoxProps } from "@illa-design/theme"
import { TriggerPosition } from "@illa-design/trigger"
import { BarLocation } from "./content"

export type SliderColorScheme =
  | string
  | "white"
  | "blackAlpha"
  | "gray"
  | "grayBlue"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "cyan"
  | "purple"
  | "techPink"
  | "techPurple"

export type SpecialSliderProps = "defaultValue" | "onChange"
export interface SliderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, SpecialSliderProps>,
    BoxProps {
  disabled?: boolean
  showTicks?: boolean
  tooltipVisible?: boolean
  hideValue?: boolean
  max?: number
  min?: number
  step?: number
  tooltipPosition?: TriggerPosition
  defaultValue?: number | number[]
  isRange?: boolean | { draggableBar: boolean }
  value?: number | number[]
  startMarkShow?: boolean
  endMarkShow?: boolean
  colorScheme?: SliderColorScheme
  formatTooltip?: (value: number) => string | ReactNode
  onAfterChange?: (val: number | number[]) => void
  onChange?: (val: number | number[]) => void
}

export interface SliderBar {
  isRange: boolean | { draggableBar: boolean }
  dragBar: (x: number, startValue: number[]) => void
  value: number[]
  left: number
  width: number
  disabled: boolean
  containerWidth: number
  partLength: number
  colorScheme?: SliderColorScheme
  onDragBarEnd: (x: number, startValue: number[]) => void
}

export interface SliderMarkBar {
  isRange: boolean | { draggableBar: boolean }
  markBarRef?: React.RefObject<HTMLDivElement>
  dragEnd: (
    x: number,
    startValue: number | number[],
    location: BarLocation,
  ) => void
  step: number
  partLength: number
  min: number
  max: number
  left: number
  right: number
  colorScheme?: SliderColorScheme
  drag: (
    x: number,
    startValue: number | number[],
    location: BarLocation,
  ) => void
  value: number | number[]
  location: BarLocation
  disabled: boolean
  currentWidth: number
  mouseOut?: () => void
  mouseEnter?: () => void
  rerenderPosition?: () => void
}

export interface SliderTick {
  left: number
  leftValue: number
  rightValue: number
  currentWidth: number
  disabled: boolean
  colorScheme?: SliderColorScheme
  value: number
}

export interface SliderNumTick {
  left: number
  disabled: boolean
  value: number
}

export interface IUseOffsetReturn {
  currentValue: number | number[]
  leftOffset: number
  rightOffset: number
  barLength: number
  partLength: number
  initOffsetFromState: (
    partLength: number,
    width: number,
    rightVal: number,
    leftVal?: number,
  ) => void
  onDragging: (
    x: number,
    startValue: number | number[],
    location: BarLocation,
  ) => void
  onDragEnd: (
    x: number,
    startValue: number | number[],
    location: BarLocation,
    onAfterChange?: ((v: number | number[]) => void) | undefined,
    onChange?: ((v: number | number[]) => void) | undefined,
  ) => void
  onClickTick: (v: number) => void
  onDragBar: (x: number, startValue: number[]) => void
  onDragBarEnd: (
    x: number,
    startValue: number[],
    onAfterChange?: ((v: number[]) => void) | undefined,
  ) => void
}

export interface ICustomRef {
  focus: () => void
}
