import React, {
  HTMLAttributes,
  ChangeEvent,
  PropsWithChildren,
  ReactNode,
  ReactElement,
} from "react"

export interface RadioGroupContextProps<T> {
  name?: string
  value?: T
  disabled?: boolean
  defaultValue?: T
  options?: (
    | string
    | number
    | { label: ReactNode; value: any; disabled?: boolean }
  )[]
  direction?: "vertical" | "horizontal"
  spacing?: string | number
  onChange?: (checked: boolean, event: ChangeEvent) => void
}

export interface RadioGroupProps<T>
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue">,
    RadioGroupContextProps<T> {}

export interface OptionProps extends HTMLAttributes<HTMLLIElement> {
  _key?: any
  disabled?: boolean
  value?: string | number
  title?: string
  extra?: any
}

export interface OptionInfo extends PropsWithChildren<OptionProps> {
  child: ReactElement
  _valid: boolean
  _index: number
  _origin: "children" | "options" | "userCreatedOptions" | "userCreatingOption"
}

export type OptionInfoMap = Map<OptionProps["value"], OptionInfo>

export type LabeledValue = {
  value: string | number
  label: ReactNode
}

export type SelectSize = "small" | "medium" | "large"

export interface SelectProps
  extends Omit<HTMLAttributes<HTMLSelectElement>, "onChange" | "defaultValue"> {
  defaultValue?:
    | string
    | string[]
    | number
    | number[]
    | LabeledValue
    | LabeledValue[]
  value?: string | string[] | number | number[] | LabeledValue | LabeledValue[]
  inputValue?: string
  mode?: "multiple" | "tags"
  notFoundContent?: ReactNode
  getPopupContainer?: (node: HTMLElement) => Element
  placeholder?: string
  showSearch?:
    | boolean
    | { retainInputValue?: boolean; retainInputValueWhileSelect?: boolean }
  size?: SelectSize
  disabled?: boolean
  error?: boolean
  loading?: boolean
  allowClear?: boolean
  maxTagCount?: number
  arrowIcon?: ReactNode | null
  removeIcon?: ReactNode | null
  options?: (
    | string
    | number
    | {
        label: ReactNode | string
        value: string | number
        disabled?: boolean
        extra?: any
      }
  )[]
  filterOption?:
    | boolean
    | ((inputValue: string, option: ReactElement) => boolean)

  onChange?: (value: boolean, option: OptionInfo | OptionInfo[]) => void
  onVisibleChange?: (visible: boolean) => void
}

export interface SelectViewProps extends SelectProps {
  isMultiMode?: boolean
  popupVisible?: boolean
  renderText: (value: any) => { text?: any; disabled?: boolean }
}
