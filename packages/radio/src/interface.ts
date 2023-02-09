import { HTMLAttributes, ChangeEvent, ReactNode } from "react"
import { BoxProps } from "@illa-design/theme"

export type RadioColorScheme =
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

export type RadioSize = "small" | "medium" | "large"
export type RadioGroupType = "radio" | "button"
export type RadioGroupDirection = "vertical" | "horizontal"
export type RadioGroupSpacing = string | number

export interface RadioProps
  extends Omit<HTMLAttributes<HTMLLabelElement>, "onChange">,
    BoxProps {
  name?: string
  value?: any
  disabled?: boolean
  checked?: boolean
  defaultChecked?: boolean
  colorScheme?: RadioColorScheme
  onChange?: (checked: boolean, event: ChangeEvent) => void
}

export interface RadioGroupContextProps<T> {
  name?: string
  value?: T
  colorScheme?: RadioColorScheme
  disabled?: boolean
  forceEqualWidth?: boolean
  defaultValue?: T
  options?: (
    | string
    | number
    | { label: ReactNode; value: any; disabled?: boolean }
  )[]
  type?: RadioGroupType
  direction?: RadioGroupDirection
  // only used in type="button"
  size?: RadioSize
  spacing?: RadioGroupSpacing
  onChange?: (value: any, event: ChangeEvent) => void
}

export interface RadioGroupProps<T>
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue">,
    RadioGroupContextProps<T>,
    BoxProps {}

export interface RadioStatus {
  size?: RadioSize
  checked?: boolean
  disabled?: boolean
  forceEqualWidth?: boolean
  colorScheme?: RadioColorScheme
}
