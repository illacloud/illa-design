import { ReactNode } from "react"
import { TriggerPosition, TriggerProps } from "@illa-design/trigger"
import { DayjsPro } from "@illa-design/system"
import { InputColorScheme, InputSize } from "./input/interface"
import { BoxProps } from "@illa-design/theme"

export type TimePickerValue = DayjsPro | Date | string | number

export interface PublicTimePickerProps extends BoxProps {
  error?: boolean
  prefix?: ReactNode
  allowClear?: boolean
  disableConfirm?: boolean
  position?: TriggerPosition
  format?: string
  use12Hours?: boolean
  onClear?: () => void
  popupVisible?: boolean
  triggerProps?: Partial<TriggerProps>
  step?: { hour?: number; minute?: number; second?: number }
  disabledHours?: () => number[]
  disabledMinutes?: (selectedHour: number) => number[]
  disabledSeconds?: (selectedHour: number, selectedMinute: number) => number[]
  hideDisabledOptions?: boolean
  size?: InputSize
  colorScheme?: InputColorScheme
  scrollSticky?: boolean
  editable?: boolean
  icons?: { inputSuffix?: ReactNode }
  extra?: ReactNode
  utcOffset?: number
  timezone?: string
  disabled?: boolean
  readonly?: boolean
}

type BaseTimePickerProps = {
  onSelect?: (valueString: string, value: DayjsPro) => void
  onChange?: (valueString?: string, value?: DayjsPro) => void
  defaultValue?: TimePickerValue
  value?: TimePickerValue
  showNowBtn?: boolean
  placeholder?: string
}

export type TimePickerProps = BaseTimePickerProps & PublicTimePickerProps

type BaseRangePickerProps = {
  onChange?: (valueString?: string[], value?: DayjsPro[]) => void
  onSelect?: (valueString: string[], value: DayjsPro[]) => void
  defaultValue?: TimePickerValue[]
  value?: TimePickerValue[]
  placeholder?: string[]
  order?: boolean
}

export type RangePickerProps = BaseRangePickerProps & PublicTimePickerProps
