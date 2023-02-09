import { Dayjs } from "dayjs"
import { ReactNode } from "react"
import {
  PrivateCType,
  SingleQuarterPickerProps,
  ModeType,
} from "../../interface"

export interface QuarterPickerPanelProps
  extends SingleQuarterPickerProps,
    PrivateCType {
  rangeValues?: Dayjs[]
  onMouseEnterCell?: (time: Dayjs, disabled: boolean) => void
  onMouseLeaveCell?: (time: Dayjs, disabled: boolean) => void
  dateRender?: (currentDate: Dayjs) => ReactNode
  pageShowDate?: Dayjs
  isRangePicker?: boolean
  onSuperPrev?: () => void
  onSuperNext?: () => void
  panelMode?: ModeType
  setPanelMode?: (mode: ModeType) => void
}
