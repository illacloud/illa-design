import { ReactNode, HTMLAttributes, Ref, SyntheticEvent } from "react"
import { SerializedStyles } from "@emotion/react"

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
  onClick?: (e: SyntheticEvent) => void
  onFocus?: (e: SyntheticEvent) => void
  onBlur?: (e: SyntheticEvent) => void
  onChange?: (value: T[]) => void
  onRemove?: (value: T, index: number, event?: SyntheticEvent) => void
  onInputChange?: (inputValue: string, event?: SyntheticEvent) => void
  onPressEnter?: (e: SyntheticEvent) => void

  _css?: SerializedStyles
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
