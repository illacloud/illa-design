import { Dayjs } from "dayjs"
import { ReactNode, MouseEvent } from "react"
import { CalendarValue, ModeType } from "../interface"

export interface RowType {
  time?: Dayjs
  name?: string
  weekOfYear?: number
  isPrev?: boolean
  isNext?: boolean
}
export interface BasicPanelBodyProps {
  showWeekList?: boolean
  onSelectDate?: (timeString: string, time: Dayjs) => void
  disabledDate?: (current: Dayjs) => boolean
  onMouseEnterCell?: (date: Dayjs, disabled: boolean) => void
  onMouseLeaveCell?: (date: Dayjs, disabled: boolean) => void
  dateRender?: (currentDate: Dayjs) => ReactNode
  rows?: RowType[][]
  value?: CalendarValue
  rangeValues?: CalendarValue[]
  isSameTime: (current: Dayjs, target: Dayjs) => boolean
  mode?: "date" | "week" | "month" | "year" | "quarter"
  originMode?: "date" | "week" | "month" | "year" | "quarter"
  format?: string
  hideNotInViewDates?: boolean
  valueShowHover?: Dayjs[]
  isWeek?: boolean
}

export interface BasicRowProps
  extends Pick<
    BasicPanelBodyProps,
    | "rows"
    | "dateRender"
    | "onSelectDate"
    | "onMouseEnterCell"
    | "onMouseLeaveCell"
    | "disabledDate"
    | "originMode"
    | "isSameTime"
    | "hideNotInViewDates"
    | "valueShowHover"
    | "format"
  > {
  mode: ModeType
  value?: CalendarValue
  rangeValues?: CalendarValue[]
}

export interface WeekListHeaderProps {
  isWeek?: boolean
}

export interface BasicHeaderSectionProps {
  prefixCls?: string
  title?: ReactNode
  onPrev?: () => void
  onNext?: () => void
  onSuperPrev?: () => void
  onSuperNext?: () => void
  mode?: ModeType
  value?: Dayjs
  onChangePanel?: (mode: ModeType) => void
  superNextIcon?: ReactNode
  superPrevIcon?: ReactNode
  nextIcon?: ReactNode
  prevIcon?: ReactNode
}

export interface HeaderLabelProps
  extends Pick<
    BasicHeaderSectionProps,
    "mode" | "value" | "title" | "onChangePanel"
  > {}

export interface BasicFooterProps {
  showTime?: boolean
  disabled?: boolean
  onClickConfirmBtn?: (e: MouseEvent<HTMLButtonElement>) => void
  onSelectNow?: () => void
  showNowBtn?: boolean
  extra?: ReactNode
  mode?: ModeType
  placeLeft?: boolean
}
