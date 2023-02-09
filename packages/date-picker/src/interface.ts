import { ReactNode } from "react"
import { TriggerPosition, TriggerProps } from "@illa-design/trigger"
import { Dayjs } from "dayjs"
import { InputColorScheme, InputSize } from "./input/interface"
import { TimePickerProps, RangePickerProps } from "@illa-design/time-picker"

export type ModeType = "date" | "month" | "week" | "year" | "quarter"
export type CalendarValue = number | string | Date | Dayjs

export type GetHeaderOperationsFun = (mode: ModeType) => {
  onPrev?: () => void
  onNext?: () => void
  onSuperPrev?: () => void
  onSuperNext?: () => void
}

export type PrivateCType = {
  setPageShowDate?: (d?: Dayjs) => void
  getHeaderOperations?: GetHeaderOperationsFun
}
export interface DisabledTimeProps {
  disabledHours?: () => number[]
  disabledMinutes?: () => number[]
  disabledSeconds?: () => number[]
}

export interface PublicPickerProps {
  allowClear?: boolean
  dayStartOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  position?: TriggerPosition
  placeholder?: string | string[]
  error?: boolean
  prefix?: ReactNode
  size?: InputSize
  colorScheme?: InputColorScheme
  popupVisible?: boolean
  onVisibleChange?: (visible?: boolean) => void
  onChange?: (dateString: string | undefined, date: Dayjs | undefined) => void
  onSelect?: (dateString: string | undefined, date: Dayjs | undefined) => void
  onClear?: () => void
  dateRender?: (currentDate: Dayjs) => ReactNode
  editable?: boolean
  triggerProps?: Partial<TriggerProps>
  superNextIcon?: ReactNode
  superPrevIcon?: ReactNode
  nextIcon?: ReactNode
  prevIcon?: ReactNode
  locale?: Record<string, any>
  separator?: ReactNode
  disabledDate?: (current: Dayjs) => boolean
  extra?: ReactNode
  onOk?: (dateString: string | undefined, date: Dayjs | undefined) => void

  defaultPickerValue?: CalendarValue
  pickerValue?: CalendarValue
  onPickerValueChange?: (
    dateString: string | undefined,
    value: Dayjs | undefined,
  ) => void
  hideNotInViewDates?: boolean
  utcOffset?: number
  timezone?: string
  inputSuffix?: ReactNode
}

export interface SinglePickerProps extends PublicPickerProps {
  disabled?: boolean
  placeholder?: string
  format?: string
  defaultValue?: CalendarValue
  value?: CalendarValue
  mode?: ModeType
}

export interface SingleYearPickerProps extends PublicPickerProps {
  disabled?: boolean
  placeholder?: string
  format?: string
  defaultValue?: CalendarValue
  value?: CalendarValue
}

export interface SingleWeekPickerProps extends PublicPickerProps {
  disabled?: boolean
  placeholder?: string
  format?: string

  defaultValue?: CalendarValue
  value?: CalendarValue
}

export interface SingleDatePickerProps extends PublicPickerProps {
  disabled?: boolean
  placeholder?: string
  format?: string | ((value: Dayjs) => string)

  defaultValue?: CalendarValue

  value?: CalendarValue

  showTime?: boolean | TimePickerProps

  timepickerProps?: TimePickerProps

  showNowBtn?: boolean

  disabledTime?: (current?: Dayjs, type?: "start" | "end") => DisabledTimeProps
}

export interface SingleMonthPickerProps extends PublicPickerProps {
  disabled?: boolean
  placeholder?: string
  format?: string
  defaultValue?: CalendarValue

  value?: CalendarValue
}

export interface SingleQuarterPickerProps extends PublicPickerProps {
  disabled?: boolean
  placeholder?: string
  format?: string
  defaultValue?: CalendarValue
  value?: CalendarValue
}

export interface RangeDatePickerProps
  extends Omit<
    PublicPickerProps,
    | "onChange"
    | "onSelect"
    | "onOk"
    | "defaultPickerValue"
    | "pickerValue"
    | "onPickerValueChange"
  > {
  disabled?: boolean | boolean[]
  format?: string
  onChange?: (
    dateString: string[] | undefined,
    date: Dayjs[] | undefined,
  ) => void
  onSelect?: (
    dateString: string[],
    value: Dayjs[],
    extra?: { type: "start" | "end" },
  ) => void
  defaultValue?: CalendarValue[]
  value?: CalendarValue[]
  mode?: ModeType
  showTime?: boolean | RangePickerProps
  placeholder?: string[]
  timepickerProps?: TimePickerProps
  onOk?: (dateString: string[], date: Dayjs[]) => void
  disabledTime?: (current?: Dayjs, type?: "start" | "end") => DisabledTimeProps
  triggerElement?: ReactNode
  defaultPickerValue?: CalendarValue[]
  pickerValue?: CalendarValue[]
  onPickerValueChange?: (
    dateString: string[] | undefined,
    value: Dayjs[] | undefined,
  ) => void
  clearRangeOnReselect?: boolean
  disabledDate?: (current: Dayjs) => boolean
  showNowBtn?: boolean
}
