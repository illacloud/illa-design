import { HTMLAttributes, ReactElement, ReactNode } from "react"
import { Dayjs } from "dayjs"
import { TriggerProps } from "@illa-design/trigger"
import { BoxProps } from "@illa-design/theme"

export type TimePickerSize = "small" | "medium" | "large"

interface PickerProps
  extends Omit<
      HTMLAttributes<HTMLElement>,
      "placeholder" | "defaultValue" | "onChange" | "onSelect"
    >,
    BoxProps {
  size?: TimePickerSize
  step?: { hour?: number; minute?: number; second?: number }
  error?: boolean
  allowClear?: boolean
  disableConfirm?: boolean
  position?: TriggerProps["position"]
  placeholder?: string | string[]
  // https://github.com/iamkun/dayjs
  format?: string
  use12Hours?: boolean
  popupVisible?: boolean
  triggerProps?: Partial<TriggerProps>
  scrollSticky?: boolean
  editable?: boolean
  icons?: { inputSuffix?: ReactNode }
  hideDisabledOptions?: boolean
  disabledHours?: () => number[]
  disabledMinutes?: (selectedHour?: number) => number[]
  disabledSeconds?: (selectedHour?: number, selectedMinute?: number) => number[]

  onClear?: () => void
}

export type TimePickerCalendarValue = Dayjs | Date | string | number

export interface TimePickerProps extends PickerProps {
  disabled?: boolean
  defaultValue?: TimePickerCalendarValue
  value?: TimePickerCalendarValue
  showNowBtn?: boolean
  onSelect?: (valueString: string, value: Dayjs) => void
  onChange?: (valueString: string, value: Dayjs) => void
}

export interface RangePickerProps extends PickerProps {
  disabled?: boolean | boolean[]
  defaultValue?: TimePickerCalendarValue[]
  value?: TimePickerCalendarValue[]
  placeholder?: string[]
  order?: boolean
  onSelect?: (valueString: string[], value: Dayjs[]) => void
  onChange?: (valueString: string[], value: Dayjs[]) => void
}

export interface RenderPickerProps extends PickerProps {
  disabled?: boolean | boolean[]
  defaultValue?: TimePickerCalendarValue | TimePickerCalendarValue[]
  value?: TimePickerCalendarValue | TimePickerCalendarValue[]
  onSelect?: (value?: string | string[], dayjsValue?: Dayjs | Dayjs[]) => void
  onChange?: (value?: string | string[], dayjsValue?: Dayjs | Dayjs[]) => void
  isRangePicker?: boolean
  popup?: ReactElement
  hideFooter?: boolean
  order?: boolean
}

type ListItem = {
  label?: string
  value?: number | string
  disabled?: boolean
  selected?: boolean
}
type TimeColumnUnit = "hour" | "minute" | "second" | "ampm"

export interface TimeColumnProps {
  list?: ListItem[]
  value?: number | string
  onHandleSelect?: (value?: number | string, unit?: TimeColumnUnit) => void
  unit?: TimeColumnUnit
  popupVisible?: boolean
  scrollSticky?: boolean
}
