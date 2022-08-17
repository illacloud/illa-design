import { HTMLAttributes, ReactNode } from "react"
import { Dayjs } from "dayjs"
import { SerializedStyles } from "@emotion/react"
import { RangePickerProps, TimePickerProps } from "@illa-design/time-picker"
import { InputBorderColor } from "@illa-design/input"
import { BoxProps } from "@illa-design/theme"

export type PickerPosition = "top" | "tl" | "tr" | "bottom" | "bl" | "br"
export type ShortcutType = {
  text: ReactNode
  value: () => Dayjs | Dayjs[]
} & Record<string, any>
export type PickerSize = "small" | "medium" | "large"
export type DatePickerCalendarValue = number | string | Date | Dayjs
export type DisabledTimeProps = {
  disabledHours?: () => number[]
  disabledMinutes?: () => number[]
  disabledSeconds?: () => number[]
}
export type RangePickerMode = "date" | "month" | "week" | "year" | "quarter"
export interface PickerProps
  extends Omit<
      HTMLAttributes<HTMLDivElement>,
      "placeholder" | "onChange" | "onSelect"
    >,
    BoxProps {
  disabled?: boolean | boolean[]
  allowClear?: boolean
  position?: PickerPosition
  placeholder?: string | string[]
  shortcuts?: ShortcutType[]
  shortcutsPlacementLeft?: boolean
  error?: boolean
  size?: PickerSize
  popupVisible?: boolean
  onVisibleChange?: (visible?: boolean) => void
  onChange?: (dateString: string, date: Dayjs) => void
  onSelect?: (dateString: string, date: Dayjs) => void
  onClear?: () => void
  editable?: boolean
  onSelectShortcut?: (shortcut: ShortcutType) => void
  locale?: Record<string, any>
  separator?: ReactNode
  disabledDate?: (current?: Dayjs) => boolean
  onOk?: (dateString: string, date: Dayjs) => void
  defaultPickerValue?: DatePickerCalendarValue
  _css?: SerializedStyles
  utcOffset?: number
  timezone?: string
  colorScheme?: InputBorderColor
  readOnly?: boolean
}

export interface DatePickerProps extends Omit<PickerProps, "defaultValue"> {
  placeholder?: string
  format?: string | ((value: Dayjs) => string)
  defaultValue?: DatePickerCalendarValue
  value?: DatePickerCalendarValue
  showTime?: boolean | TimePickerProps
  timepickerProps?: TimePickerProps
  showNowBtn?: boolean
  disabledTime?: (current?: Dayjs) => DisabledTimeProps
}

export interface MonthPickerProps extends Omit<PickerProps, "defaultValue"> {
  placeholder?: string
  format?: string | ((value: Dayjs) => string)
  defaultValue?: DatePickerCalendarValue
  value?: DatePickerCalendarValue
}

export interface YearPickerProps extends Omit<PickerProps, "defaultValue"> {
  placeholder?: string
  format?: string | ((value: Dayjs) => string)
  defaultValue?: DatePickerCalendarValue
  value?: DatePickerCalendarValue
}

export interface CommonRangeProps
  extends Omit<
    PickerProps,
    "onChange" | "defaultValue" | "onOk" | "defaultPickerValue" | "onSelect"
  > {
  disabled?: boolean | boolean[]
  format?: string | ((value: Dayjs) => string)
  onChange?: (dateString: string[], date: Dayjs[]) => void
  onSelect?: (dateString: string[], date: Dayjs[]) => void
  defaultValue?: DatePickerCalendarValue[]
  value?: DatePickerCalendarValue[]
  mode?: RangePickerMode
  showTime?: boolean | RangePickerProps
  placeholder?: string[]
  timepickerProps?: RangePickerProps
  onOk?: (dateString: string[], date: Dayjs[]) => void
  disabledTime?: (current: Dayjs, type: "start" | "end") => DisabledTimeProps
  defaultPickerValue?: DatePickerCalendarValue[]
}

export interface CommonSingleProps extends DatePickerProps {
  type: "day" | "month" | "year"
}

export interface CommonProps extends BoxProps {
  disabled?: boolean | boolean[]
  allowClear?: boolean
  position?: PickerPosition
  error?: boolean
  size?: PickerSize
  popupVisible?: boolean
  editable?: boolean
  readOnly?: boolean
  colorScheme?: InputBorderColor
  onVisibleChange?: (visible?: boolean) => void
}

export interface CommonPickerProps extends CommonProps {
  placeholder?: string
  inputVal?: string
  pickerContent: ReactNode
  onClear?: () => void
  onClearDate?: () => void
  onChangeInputVal?: (value: string) => void
  onChangeVisible?: (visible: boolean) => void
}

export interface RangePickerBodyProps extends CommonProps {
  placeholder?: string[]
  inputVal?: string[]
  separator?: ReactNode
  pickerContent: ReactNode
  onClearDate?: () => void
  onChangeInputVal?: (value: string[]) => void
  onChangeVisible?: (visible: boolean) => void
}
