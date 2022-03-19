import React, { HTMLAttributes, ReactNode } from "react"
import { Dayjs } from "dayjs"
import { TriggerProps } from "@illa-design/trigger"

export type TimePickerSize = "small" | "medium" | "large"

export interface PickerProps
  extends Omit<
    HTMLAttributes<HTMLElement>,
    "placeholder" | "defaultValue" | "onChange" | "onSelect"
  > {
  size?: TimePickerSize
  step?: { hour?: number; minute?: number; second?: number }
  disabled?: boolean
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
  unmountOnExit?: boolean
  hideDisabledOptions?: boolean
  disabledHours?: () => number[]
  disabledMinutes?: (selectedHour?: number) => number[]
  disabledSeconds?: (selectedHour?: number, selectedMinute?: number) => number[]

  onClear?: () => void
}

export type CalendarValue = Dayjs | Date | string | number

export interface TimePickerProps extends PickerProps {
  defaultValue?: CalendarValue
  value?: CalendarValue
  showNowBtn?: boolean
  onSelect?: (valueString: string, value: Dayjs) => void
  onChange?: (valueString: string, value: Dayjs) => void
}

export interface RangePickerProps extends PickerProps {
  defaultValue?: CalendarValue[]
  value?: CalendarValue[]
  placeholder?: string[]
  order?: boolean
  onSelect?: (valueString: string[], value: Dayjs[]) => void
  onChange?: (valueString: string[], value: Dayjs[]) => void
}
