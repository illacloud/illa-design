import { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react"

export type SwitchColorScheme =
  | "white"
  | "blackAlpha"
  | "gray"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "cyan"
  | "purple"
  | "grayBlue"
  | string

export type SwitchSize = "medium" | "large"

export interface SwitchProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  colorScheme?: SwitchColorScheme
  disabled?: boolean
  size?: SwitchSize
  checkedText?: string
  uncheckedText?: string
  uncheckedIcon?: ReactNode
  checkedIcon?: ReactNode
  defaultChecked?: boolean
  checked?: boolean
  onChange?: (value: boolean, event: MouseEvent) => void
}
