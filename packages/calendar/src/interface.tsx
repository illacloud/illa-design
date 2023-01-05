import { HTMLAttributes } from "react"

import { Dayjs } from "dayjs"

export type CalendarMode = "day" | "week" | "month" | "year"

export type CalendarHeaderType = "button" | "select"

export type CalendarColorScheme =
  | string
  | "white"
  | "blackAlpha"
  | "gray"
  | "grayBlue"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "cyan"
  | "purple"
  | "techPink"
  | "techPurple"

export interface CalendarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
  colorScheme?: CalendarColorScheme
  allowSelect?: boolean
  isWeek?: boolean
  panel?: boolean
  panelTodayBtn?: boolean
  defaultMode?: CalendarMode
  headerType?: CalendarHeaderType
  mode?: CalendarMode
  onChange?: (date: Dayjs) => void
  onPanelChange?: (date: Dayjs) => void
  value?: Dayjs
  defaultValue?: Dayjs
}

export interface BigCalendarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  colorScheme: CalendarColorScheme
  value: Dayjs
  currentDate: Dayjs
  onChange: (date: Dayjs) => void
}
