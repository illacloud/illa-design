import {
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  ReactElement,
  UIEventHandler,
  JSXElementConstructor,
  SyntheticEvent,
} from "react"
import { TriggerProps } from "@illa-design/trigger"

export interface OptionProps
  extends Omit<HTMLAttributes<HTMLLIElement>, "onMouseEnter" | "onMouseLeave"> {
  _key?: any
  disabled?: boolean
  multiple?: boolean
  value?: string | number
  title?: string
  extra?: any
  valueActive?: string
  valueSelect?: string | string[] | number | number[]
  isSelectOption?: boolean
  colorScheme?: SelectColorScheme
  size?: SelectSize
  onClick?: (value: SyntheticEvent) => void
  onMouseEnter?: (value: OptionProps["value"]) => void
  onMouseLeave?: () => void
  onClickOption?: (value: OptionProps["value"], disabled?: boolean) => void
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

export interface OptionListProps<T> {
  childrenList?: ReactElement<any, string | JSXElementConstructor<any>>[]
  notFoundContent?: ReactNode
  render?: (data: T, index: number) => ReactNode
  onMouseMove?: () => void
  onScroll?: UIEventHandler<HTMLElement>
  size?: SelectSize
}

export type SelectSize = "small" | "medium" | "large"

export type SelectColorScheme =
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
  | "techPink"
  | "techPurple"
  | "grayBlue"

export interface SelectProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "defaultValue" | "onFocus" | "onBlur"
  > {
  defaultValue?:
    | string
    | string[]
    | number
    | number[]
    | LabeledValue
    | LabeledValue[]
  value?: string | string[] | number | number[] | LabeledValue | LabeledValue[]
  inputValue?: string
  labelInValue?: boolean
  multiple?: boolean
  allowCreate?: boolean
  notFoundContent?: ReactNode
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
  triggerProps?: Partial<TriggerProps>
  colorScheme?: SelectColorScheme
  // events
  onChange?: (value: any, option?: OptionInfo | OptionInfo[]) => void
  onSearch?: (value: string, reason: InputValueChangeReason) => void
  onPopupScroll?: (element: any) => void
  onVisibleChange?: (visible: boolean) => void
  onInputValueChange?: (value: string, reason: InputValueChangeReason) => void
  onDeselect?: (
    value: string | number | LabeledValue,
    option: OptionInfo,
  ) => void
  onFocus?: (e: SyntheticEvent) => void
  onBlur?: (e: SyntheticEvent) => void
  onClear?: (visible?: boolean) => void
  readOnly?: boolean
}

export interface SelectViewProps
  extends Omit<
    SelectProps,
    "options" | "filterOption" | "onChange" | "onClear" | "triggerProps"
  > {
  value?: any
  defaultValue?: any
  multiple?: boolean
  popupVisible?: boolean
  isEmptyValue?: boolean
  renderText: (value: any) => { text?: any; disabled?: boolean }
  onRemoveCheckedItem?: (item: any, index: number, e?: SyntheticEvent) => void
  onChangeInputValue?: (value: string, e?: SyntheticEvent) => void
  onClear?: (e: SyntheticEvent) => void
}

// Reason：User manual input、Checked option、optionList Hide、auto word segmentation
export type InputValueChangeReason =
  | "manual"
  | "optionChecked"
  | "optionListHide"
  | "tokenSeparator"

export interface SelectStateValue {
  disabled?: boolean
  error?: boolean
  focus?: boolean
  size?: SelectViewProps["size"]
  colorScheme?: SelectProps["colorScheme"]
  readOnly?: boolean
}

export interface SelectOptionStateValue {
  disabled?: boolean
  size?: SelectViewProps["size"]
  colorScheme: SelectColorScheme
  isChecked?: boolean
  multiple?: boolean
}
