import { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react"
import { BoxProps } from "@illa-design/theme"

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
  | "techPurple"
  | "techPink"
  | string

export type SwitchSize = "medium" | "large"

export interface SwitchProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange">,
    BoxProps {
  colorScheme?: SwitchColorScheme
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
