import {
  ReactNode,
  ChangeEvent,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  KeyboardEvent,
  Ref,
  MutableRefObject,
} from "react"
import { Dayjs } from "dayjs"

export type InputBorderColor =
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

export type InputVariant = "fill" | "outline"

export type InputSize = "small" | "medium" | "large"

export interface InputElementProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: InputVariant
  placeholder?: string
  borderColor?: InputBorderColor
  defaultValue?: string
  disabled?: boolean
  error?: boolean
  size?: InputSize
  value?: string
  maxLength?: number
  showCount?: boolean
  allowClear?: boolean
  autoFitWidth?: boolean
  textCenterHorizontal?: boolean
  onClear?: () => void
  onValueChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void
  onPressEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
}

export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "prefix" | "size" | "onChange"
  > {
  inputRef?: Ref<HTMLInputElement>
  variant?: InputVariant
  placeholder?: string
  borderColor?: InputBorderColor
  defaultValue?: string
  disabled?: boolean
  error?: boolean
  size?: InputSize
  value?: string
  maxLength?: number
  showCount?: boolean
  allowClear?: boolean
  prefix?: { custom?: boolean; render?: ReactNode }
  suffix?: { custom?: boolean; render?: ReactNode }
  addonAfter?: { custom?: boolean; render?: ReactNode }
  addonBefore?: { custom?: boolean; render?: ReactNode }
  requirePadding?: boolean
  textCenterHorizontal?: boolean
  onClear?: () => void
  onPressEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  onChange?: (value: string, event: any) => void
}

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  textAreaRef?: Ref<HTMLTextAreaElement>
  variant?: InputVariant
  placeholder?: string
  defaultValue?: string
  disabled?: boolean
  error?: boolean
  autoSize?:
    | boolean
    | {
        minRows?: number
        maxRows?: number
      }
  value?: string
  maxLength?: number
  showCount?: boolean
  allowClear?: boolean
  onClear?: () => void
}

export interface SearchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  inputRef?: Ref<HTMLInputElement>
  searchButton?: boolean
  loading?: boolean
  variant?: InputVariant
  placeholder?: string
  borderColor?: InputBorderColor
  defaultValue?: string
  disabled?: boolean
  error?: boolean
  size?: InputSize
  value?: string
  maxLength?: number
  allowClear?: boolean
  requirePadding?: boolean
  textCenterHorizontal?: boolean
  onClear?: () => void
  onSearch?: (value?: string) => void
  onPressEnter?: (event: KeyboardEvent<HTMLInputElement>) => void
}

export interface PasswordProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  inputRef?: Ref<HTMLInputElement>
  invisibleButton?: boolean
  loading?: boolean
  variant?: InputVariant
  placeholder?: string
  borderColor?: InputBorderColor
  defaultValue?: string
  disabled?: boolean
  error?: boolean
  size?: InputSize
  value?: string
  allowClear?: boolean
  requirePadding?: boolean
  onClear?: () => void
}

export type RangeInputRef = {
  input0?: HTMLInputElement | null
  input1?: HTMLInputElement | null
  focus: (index: number) => void
  blur: () => void
}

export interface RangeInputProps
  extends Omit<
    InputHTMLAttributes<HTMLDivElement>,
    "disabled" | "size" | "placeholder" | "value" | "onChange"
  > {
  inputGroupRef?: MutableRefObject<{
    input0?: HTMLInputElement | null
    input1?: HTMLInputElement | null
    focus: (index: number) => void
    blur: () => void
  }>
  size?: InputSize
  borderColor?: InputProps["borderColor"]
  value?: string[]
  placeholder?: string[]
  popupVisible?: boolean
  format?: string
  allowClear?: boolean
  editable?: boolean
  error?: boolean
  disabled?: boolean | boolean[]
  suffix?: { custom?: boolean; render?: ReactNode }
  separator?: ReactNode
  focusedInputIndex?: number
  isPlaceholder?: boolean
  changeFocusedInputIndex?: (index: number) => void

  onChange?: (value: string[], event: any) => void
  onClear?: () => void
  onPressEnter?: () => void
  onPressTab?: (e: any) => void
}

export interface StateValue {
  disabled?: boolean
  error?: boolean
  focus?: boolean
  variant?: string
  size?: InputProps["size"]
  borderColor?: InputProps["borderColor"]
  // only RangeInput
  focusedInput0?: boolean
  focusedInput1?: boolean
  disabled0?: boolean
  disabled1?: boolean
}
