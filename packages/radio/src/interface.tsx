import { CSSProperties, HTMLAttributes, ReactNode } from "react"

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

export interface RadioProps extends HTMLAttributes<HTMLDivElement> {
  name?: string
  value?: any
  disabled?: boolean
  checked?: boolean
  defaultChecked?: boolean

  colorScheme?: RadioColorScheme
}

export type RadioOwnGroupProps = HTMLAttributes<HTMLDivElement> & RadioGroupContextProps

export interface RadioGroupProps extends RadioOwnGroupProps {
}

interface optionsArr {
  label: string
  value: string
  disabled?: boolean
}[]

export interface RadioGroupContextProps {
  name?: string
  value?: any
  disabled?: boolean
  defaultValue?: any
  options?: string[] | optionsArr[]
  direction?: "vertical" | "horizontal"
  spacing?: string | number

  colorScheme?: RadioColorScheme
}