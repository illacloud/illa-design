import { HTMLAttributes, ChangeEvent, ReactNode } from "react"

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

export type RadioSize = "small" | "medium" | "large"

export interface RadioProps
  extends Omit<HTMLAttributes<HTMLLabelElement>, "onChange"> {
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
  defaultValue?: T
  options?: (
    | string
    | number
    | { label: ReactNode; value: any; disabled?: boolean }
  )[]
  type?: "radio" | "button"
  direction?: "vertical" | "horizontal"
  // only used in type="button"
  size?: RadioSize
  spacing?: string | number
  onChange?: (value: any, event: ChangeEvent) => void
}

export interface RadioGroupProps<T>
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue">,
    RadioGroupContextProps<T> {}

export interface RadioStatus {
  size?: RadioSize
  checked?: boolean
  disabled?: boolean
  colorScheme: RadioColorScheme
}
