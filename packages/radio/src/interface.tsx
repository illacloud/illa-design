import { HTMLAttributes, ChangeEvent } from "react"

export type RadioColorScheme =
  string
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

export interface RadioProps extends Omit<HTMLAttributes<HTMLLabelElement>, "onChange"> {
  name?: string
  value?: any
  disabled?: boolean
  checked?: boolean
  defaultChecked?: boolean
  colorScheme?: RadioColorScheme
  onChange?: (checked: boolean, event: ChangeEvent) => void;
}

export interface RadioGroupContextProps<T> {
  name?: string
  value?: T
  colorScheme?: RadioColorScheme
  disabled?: boolean
  defaultValue?: T
  options?: string[] | {
    label: string
    value: string
    disabled: boolean
  }[]
  direction?: "vertical" | "horizontal"
  spacing?: string | number
  onChange?: (checked: boolean, event: ChangeEvent) => void;
}

export interface RadioGroupProps<T> extends
  Omit<HTMLAttributes<HTMLDivElement>, "onChange"|"defaultValue">,
  RadioGroupContextProps<T>  {
}