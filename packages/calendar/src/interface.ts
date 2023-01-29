import { HTMLAttributes } from "react"

import { Dayjs } from "dayjs"
import { BoxProps } from "@illa-design/theme"

export type CalendarMode = "month" | "year" | "day"

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
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue">,
    BoxProps {
  colorScheme?: CalendarColorScheme
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

export interface CardCalendarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange">,
    BoxProps {
  colorScheme: CalendarColorScheme
  value: Dayjs
  currentDate: Dayjs
  onChange: (date: Dayjs) => void
  onCurrentDateChange: (date: Dayjs) => void
  panelTodayBtn?: boolean
}
