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
  | "brand-purple"
  | "brand-pink"
  | string

export type SwitchSize = "medium" | "large"

export interface SwitchProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  uncheckedBackgroundColor?: SwitchColorScheme
  checkedBackgroundColor?: SwitchColorScheme
  disabled?: boolean
  size?: SwitchSize
  checkedText?: string | ReactNode
  uncheckedText?: string | ReactNode
  uncheckedIcon?: ReactNode
  checkedIcon?: ReactNode
  defaultChecked?: boolean
  checked?: boolean
  onChange?: (value: boolean, event: MouseEvent) => void
}
