import { LabelHTMLAttributes, SyntheticEvent } from "react"
import { BoxProps } from "@illa-design/theme"

export type CheckboxColorScheme =
  | string
  | "gray"
  | "blue"
  | "purple"
  | "red"
  | "green"
  | "yellow"
  | "orange"
  | "cyan"
  | "white"
  | "techPink"
  | "techPurple"

export interface CheckboxOption {
  label?: string
  value?: string
  disabled?: boolean
}

export interface CheckboxProps
  extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "onChange">,
    BoxProps {
  value?: string | number
  disabled?: boolean
  checked?: boolean
  defaultChecked?: boolean
  indeterminate?: boolean
  onChange?: (checked: boolean, event: SyntheticEvent) => void
  colorScheme?: CheckboxColorScheme
}

export interface CheckboxGroupProps
  extends Omit<
      LabelHTMLAttributes<HTMLDivElement>,
      "onChange" | "defaultValue"
    >,
    BoxProps {
  value?: (string | number)[]
  defaultValue?: (string | number)[]
  disabled?: boolean
  options?: (string | number | CheckboxOption)[]
  direction?: "vertical" | "horizontal"
  spacing?: string | number
  onChange?: (value: (string | number)[], event: SyntheticEvent) => void
  colorScheme?: CheckboxColorScheme
}
