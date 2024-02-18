import { Dayjs } from "dayjs"
import { ReactNode } from "react"
import {
  PrivateCType,
  SingleQuarterPickerProps,
  DatePickerModeType,
} from "../../interface"

export interface QuarterPickerPanelProps
  extends SingleQuarterPickerProps,
    PrivateCType {
  rangeValues?: Dayjs[]
  dateRender?: (currentDate: Dayjs) => ReactNode
  pageShowDate?: Dayjs
  isRangePicker?: boolean
  onSuperPrev?: () => void
  onSuperNext?: () => void
  panelMode?: DatePickerModeType
  setPanelMode?: (mode: DatePickerModeType) => void
  valueShowHover?: Dayjs[]
}
