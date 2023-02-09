import {
  ChangeEvent,
  CSSProperties,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
} from "react"
import { DayjsPro } from "@illa-design/system"

export type InputColorScheme =
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

export type InputSize = "small" | "medium" | "large"

export interface DateInputHandler {
  focus: () => void
  blur: () => void
}

export interface DateInputProps {
  style?: CSSProperties
  className?: string | string[]
  error?: boolean
  disabled?: boolean
  placeholder?: string
  value?: DayjsPro
  inputValue?: string
  popupVisible?: boolean
  format?: string | ((value: DayjsPro) => string)
  prefixCls?: string
  size?: InputSize
  colorScheme?: InputColorScheme
  allowClear?: boolean
  onClear?: (e: MouseEvent<HTMLSpanElement>) => void
  editable?: boolean
  onPressEnter?: () => void
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  suffixIcon?: ReactNode
  isPlaceholder?: boolean
  prefix?: ReactNode
}

export interface DateInputRangeHandler {
  focus: (index?: number) => void
  blur: () => void
}

export interface DateInputRangeProps {
  error?: boolean
  disabled?: boolean | boolean[]
  placeholder?: string[]
  value?: DayjsPro[]
  popupVisible?: boolean
  format?: string
  size?: InputSize
  colorScheme?: InputColorScheme
  allowClear?: boolean
  onClear?: (e: MouseEvent<HTMLSpanElement>) => void
  onPressEnter?: () => void
  onPressTab?: (e: KeyboardEvent<HTMLInputElement>) => void
  editable?: boolean
  suffixIcon?: ReactNode
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  inputValue?: string
  separator?: ReactNode
  changeFocusedInputIndex?: (index: number) => void
  focusedInputIndex?: number
  isPlaceholder?: boolean
  prefix?: ReactNode
}
