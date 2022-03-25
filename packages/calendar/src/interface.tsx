import { HTMLAttributes, ReactNode } from "react"
import { Dayjs } from "dayjs"

export type panelOperationsItem =
  | "left"
  | "double-left"
  | "right"
  | "double-right"
export type defaultModeItem = "month" | "year" | "day"

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
}

export interface CalendarHeaderProps extends CalenderProps {
  currentDay: string | number
  onChangeTime: Function
  onSelectTime: Function
  onToToday: Function
  onChangeMode: Function
  monthListLocale: string[]
}

export interface CalendarBodyProps extends CalenderProps {
  currentDay: string | number
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
