import { HTMLAttributes, ReactNode } from "react"
import { Dayjs } from "dayjs"
import { SerializedStyles } from "@emotion/react"

export type panelOperationsItem =
  | "left"
  | "double-left"
  | "right"
  | "double-right"
export type defaultModeItem = "month" | "year" | "day"
export type CalendarValue = number | string | Date | Dayjs

export interface CalenderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  allowSelect?: boolean
  panel?: boolean
  panelWidth?: number | string
  panelTodayBtn?: boolean
  panelOperations?: panelOperationsItem[]
  dayStartOfWeek?: 0 | 1
  defaultMode?: defaultModeItem
  mode?: defaultModeItem
  disabledDate?: (current: Dayjs) => boolean
  onChange?: (date: Dayjs) => void
  onPanelChange?: (date: Dayjs) => void
  dateRender?: (date: Dayjs) => ReactNode
  monthRender?: (date: Dayjs) => ReactNode
  dateInnerContent?: (date: Dayjs) => ReactNode
  headerRender?: (props: {
    value?: Dayjs
    pageShowDate?: Dayjs
    mode?: string
    onChange: () => void
    onChangePageDate: () => void
    onChangeMode: () => void
  }) => ReactNode
  locale?: Record<string, any>
  headerType?: "button" | "select"
  _css?: SerializedStyles

  datepickerDay?: Dayjs
  onChangeDatePickerDay?: (date: Dayjs) => void
  usedByDatepicker?: boolean

  rangeValueFirst?: number
  rangeValueSecond?: number
  rangeValueHover?: number
  handleRangeVal?: (date: number, type: "first" | "second" | "hover") => void

  selectDayFromProps?: Dayjs | Dayjs[] | "clear"
  defaultPickerValue?: CalendarValue
}

export interface CalendarHeaderProps extends CalenderProps {
  currentDay: Dayjs
  onChangeTime: Function
  onSelectTime: Function
  onToToday: Function
  onChangeMode: Function
  monthListLocale: string[]
}

export interface CalendarBodyProps extends CalenderProps {
  currentDay: Dayjs
  selectDay: number
  onClickDay: Function
  onToToday: Function
  monthListLocale: string[]
}

export interface selectTimeProps {
  year?: number
  month?: number
}

export interface CalendarDaysProps extends CalenderProps {
  componentMode: boolean
  componentYear?: number
  componentMonth: number
  selectDay?: number
  onClickDay?: Function
}
