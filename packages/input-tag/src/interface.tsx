import { ReactNode, HTMLAttributes, Ref } from "react"

export type InputTagSize = "small" | "medium" | "large"

export interface InputTagProps<T = any>
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "size" | "value" | "defaultValue" | "onChange"
  > {
  inputRef?: Ref<HTMLInputElement>
  inputValue?: string
  defaultValue?: T[]
  value?: T[]
  size?: InputTagSize
  placeholder?: string
  error?: boolean
  disabled?: boolean
  autoFocus?: boolean
  readOnly?: boolean
  disableInput?: boolean
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

export interface RenderTagsProps extends HTMLAttributes<HTMLElement> {
  size?: InputTagProps["size"]
  value: ObjectValueType[]
  readOnly?: boolean
  disabled?: boolean
  labelInValue?: boolean
  onRemove?: InputTagProps["onRemove"]
  valueChangeHandler?: (value: ObjectValueType[]) => void
}

export interface InputTagStateValue {
  disabled?: boolean
  error?: boolean
  focus?: boolean
  size?: InputTagProps["size"]
}
