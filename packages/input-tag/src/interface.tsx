import { ReactNode, HTMLAttributes } from "react"
import * as React from "react"

export type InputTagSize = "small" | "medium" | "large"

export interface InputTagProps<T = any>
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "size" | "value" | "defaultValue" | "onChange"
  > {
  inputValue?: string
  defaultValue?: T[]
  value?: T[]

  size?: InputTagSize
  placeholder?: string
  error?: boolean
  disabled?: boolean
  autoFocus?: boolean
  readOnly?: boolean
  allowClear?: boolean
  // input output both { label: '', value: ''}
  labelInValue?: boolean
  suffix?: ReactNode
  icon?: { removeIcon?: ReactNode; clearIcon?: ReactNode }
  validate?: (inputValue: string, values: T[]) => boolean | Promise<boolean>

  onClear?: () => void
  onClick?: (e: any) => void
  onFocus?: (e: any) => void
  onBlur?: (e: any) => void
  onPaste?: (e: any) => void
  onChange?: (value: T[]) => void
  onRemove?: (value: T, index: number, event?: any) => void
  onInputChange?: (inputValue: string, event?: any) => void
  onPressEnter?: (e: any) => void
}

export type ObjectValueType = {
  value?: any
  label?: ReactNode
  closable?: boolean
}
