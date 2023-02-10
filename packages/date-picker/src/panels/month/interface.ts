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
  onMouseEnterCell?: (time: Dayjs, disabled: boolean) => void
  onMouseLeaveCell?: (time: Dayjs, disabled: boolean) => void
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
