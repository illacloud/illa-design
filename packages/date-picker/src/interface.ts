import { ReactNode } from "react"
import { TriggerPosition, TriggerProps } from "@illa-design/trigger"
import { Dayjs } from "dayjs"
import { InputColorScheme, InputSize } from "./input/interface"
import { TimePickerProps, RangePickerProps } from "@illa-design/time-picker"
import { BoxProps } from "@illa-design/theme"

export type DatePickerModeType = "date" | "month" | "week" | "year" | "quarter"
export type DatePickerValue = number | string | Date | Dayjs

export type GetHeaderOperationsFun = (mode: DatePickerModeType) => {
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

export interface PublicDatePickerProps extends BoxProps {
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

  defaultPickerValue?: DatePickerValue
  pickerValue?: DatePickerValue
  onPickerValueChange?: (
    dateString: string | undefined,
    value: Dayjs | undefined,
  ) => void
  hideNotInViewDates?: boolean
  utcOffset?: number
  timezone?: string
  inputSuffix?: ReactNode
  readonly?: boolean
}

export interface SinglePickerProps extends PublicDatePickerProps {
  disabled?: boolean
  placeholder?: string
  format?: string
  defaultValue?: DatePickerValue
  value?: DatePickerValue
  mode?: DatePickerModeType
}

export interface SingleYearPickerProps extends PublicDatePickerProps {
  disabled?: boolean
  placeholder?: string
  format?: string
  defaultValue?: DatePickerValue
  value?: DatePickerValue
}

export interface SingleWeekPickerProps extends PublicDatePickerProps {
  disabled?: boolean
  placeholder?: string
  format?: string

  defaultValue?: DatePickerValue
  value?: DatePickerValue
}

export interface SingleDatePickerProps extends PublicDatePickerProps {
  disabled?: boolean
  placeholder?: string
  format?: string | ((value: Dayjs) => string)

  defaultValue?: DatePickerValue

  value?: DatePickerValue

  showTime?: boolean | TimePickerProps

  timepickerProps?: TimePickerProps

  showNowBtn?: boolean

  disabledTime?: (current?: Dayjs, type?: "start" | "end") => DisabledTimeProps
}

export interface SingleMonthPickerProps extends PublicDatePickerProps {
  disabled?: boolean
  placeholder?: string
  format?: string
  defaultValue?: DatePickerValue

  value?: DatePickerValue
}

export interface SingleQuarterPickerProps extends PublicDatePickerProps {
  disabled?: boolean
  placeholder?: string
  format?: string
  defaultValue?: DatePickerValue
  value?: DatePickerValue
}

export interface RangeDatePickerProps
  extends Omit<
    PublicDatePickerProps,
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
  defaultValue?: DatePickerValue[]
  value?: DatePickerValue[]
  mode?: DatePickerModeType
  showTime?: boolean | RangePickerProps
  placeholder?: string[]
  timepickerProps?: TimePickerProps
  onOk?: (dateString: string[], date: Dayjs[]) => void
  disabledTime?: (current?: Dayjs, type?: "start" | "end") => DisabledTimeProps
  triggerElement?: ReactNode
  defaultPickerValue?: DatePickerValue[]
  pickerValue?: DatePickerValue[]
  onPickerValueChange?: (
    dateString: string[] | undefined,
    value: Dayjs[] | undefined,
  ) => void
  clearRangeOnReselect?: boolean
  disabledDate?: (current: Dayjs) => boolean
  showNowBtn?: boolean
}
