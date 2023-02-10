import { Dayjs } from "dayjs"
import { ReactNode } from "react"
import { SingleYearPickerProps, DatePickerModeType } from "../../interface"

export interface YearPickerPanelProps
  extends Pick<
    SingleYearPickerProps,
    "value" | "onSelect" | "format" | "superPrevIcon" | "superNextIcon"
  > {
  dateRender?: (currentDate: Dayjs) => ReactNode
  disabledDate?: (current: Dayjs) => boolean
  onMouseEnterCell?: (time: Dayjs, disabled: boolean) => void
  onMouseLeaveCell?: (time: Dayjs, disabled: boolean) => void
  pageShowDate?: Dayjs
  isRangePicker?: boolean
  rangeValues?: Dayjs[]
  onSuperPrev?: () => void
  onSuperNext?: () => void
  originMode?: DatePickerModeType
  valueShowHover?: Dayjs[]
}
