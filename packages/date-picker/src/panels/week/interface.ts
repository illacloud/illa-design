import { Dayjs } from "dayjs"
import {
  PrivateCType,
  SingleWeekPickerProps,
  DatePickerModeType,
} from "../../interface"

export interface WeekPickerPanelProps
  extends SingleWeekPickerProps,
    PrivateCType {
  isRangePicker?: boolean
  rangeValues?: Dayjs[]
  pageShowDate?: Dayjs
  onPrev?: () => void
  onNext?: () => void
  onSuperPrev?: () => void
  onSuperNext?: () => void
  localeName?: string
  panelMode?: DatePickerModeType
  setPanelMode?: (mode: DatePickerModeType) => void
  valueShowHover?: Dayjs[]
}
