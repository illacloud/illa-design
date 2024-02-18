import {
  DatePickerModeType,
  PrivateCType,
  RangeDatePickerProps,
} from "../../interface"
import { Dayjs } from "dayjs"
import { ReactNode } from "react"

export interface RangePickerPanelProps
  extends RangeDatePickerProps,
    PrivateCType {
  disabledDate?: (current: Dayjs) => boolean
  dateRender?: (currentDate: Dayjs) => ReactNode
  pageShowDates?: Dayjs[]
  onSelectPanel?: (
    dateString: string | undefined,
    date: Dayjs | undefined,
  ) => void
  onPrev?: () => void
  onSuperPrev?: () => void
  onNext?: () => void
  onSuperNext?: () => void
  localeName?: string
  onTimePickerSelect?: (index: number, timeString: string, time: Dayjs) => void
  setRangePageShowDates?: (dates: Dayjs[], index: number) => void
  disabledTimePickerIndex?: number
  timeValues?: Dayjs[]
  isTimePanel?: boolean
  valueShowHover?: Dayjs[]
  panelModes?: DatePickerModeType[]
  setPanelModes?: (modes: DatePickerModeType[]) => void
}
