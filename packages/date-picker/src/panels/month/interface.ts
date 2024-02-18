import { Dayjs } from "dayjs"
import { ReactNode } from "react"
import {
  SingleMonthPickerProps,
  PrivateCType,
  DatePickerModeType,
} from "../../interface"

export interface MonthPickerPanelProps
  extends SingleMonthPickerProps,
    PrivateCType {
  rangeValues?: Dayjs[]
  dateRender?: (currentDate: Dayjs) => ReactNode
  pageShowDate?: Dayjs
  isRangePicker?: boolean
  onSuperPrev?: () => void
  onSuperNext?: () => void
  panelMode?: DatePickerModeType
  setPanelMode?: (mode: DatePickerModeType) => void
  originMode?: DatePickerModeType
  valueShowHover?: Dayjs[]
}
