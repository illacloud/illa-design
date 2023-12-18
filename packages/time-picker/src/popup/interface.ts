import { DayjsPro } from "@illa-design/system"
import {
  TimePickerProps,
  RangePickerProps,
  TimePickerValue,
} from "../interface"

type ListItem = {
  label?: string
  value?: number | string
  disabled?: boolean
  selected?: boolean
}
export interface TimeColumnProps {
  list: ListItem[]
  value?: number | string
  onHandleSelect?: (value?: number | string, unit?: string) => void
  unit?: "hour" | "minute" | "second" | "ampm"
  popupVisible?: boolean
  scrollSticky?: boolean
  colorScheme?: string
}

export interface BaseColumnProps {
  showList: number[]
  hideDisabledOptions?: boolean
  disabledFunc?: () => number[]
  selectedValue?: number
  popupVisible?: boolean
  onHandleSelect?: (value?: number | string, unit?: string) => void
  scrollSticky?: boolean
  colorScheme?: string
}

export interface AmPmColumnProps
  extends Omit<
    BaseColumnProps,
    "step" | "hideDisabledOptions" | "disabledFunc" | "selectedValue"
  > {
  format: string
  valueShow: DayjsPro
  selectedValue?: string
}

export interface TimePickerPopupProps extends TimePickerProps {
  confirmBtnDisabled?: boolean
  onConfirmValue?: (value: DayjsPro) => void
  isRangePicker?: boolean
  valueShow?: TimePickerValue
  setValueShow?: (valueShow: DayjsPro) => void
  hideFooter?: boolean
}

export interface RangeTimePickerPopupProps extends RangePickerProps {
  focusedInputIndex?: number
  changeFocusedInputIndex?: (index: number) => void
  popupVisible?: boolean
  onConfirmValue?: (value: DayjsPro[]) => void
  valueShow?: DayjsPro[]
  setValueShow?: (valueShow: DayjsPro[]) => void
}
