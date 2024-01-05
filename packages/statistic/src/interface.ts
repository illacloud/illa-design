import { CSSProperties, HTMLAttributes, ReactNode } from "react"
import { Dayjs } from "dayjs"
import { BoxProps } from "@illa-design/theme"

export interface StatisticProps
  extends Omit<HTMLAttributes<HTMLElement>, "title" | "prefix">,
    BoxProps {
  title?: string | ReactNode
  value?: string | number | Dayjs
  decimalSeparator?: string
  format?: string
  countUp?: boolean
  countDuration?: number
  countFrom?: number
  groupSeparator?: string
  loading?: boolean
  precision?: number
  extra?: ReactNode
  prefix?: string | ReactNode
  suffix?: string | ReactNode
  colorScheme?: string
}

export interface CountDownProps
  extends Omit<HTMLAttributes<HTMLElement>, "title" | "onChange">,
    BoxProps {
  title?: string | ReactNode
  value?: string | number | Dayjs | Date
  now?: string | number | Dayjs | Date
  format?: string
  start?: boolean
  onFinish?: () => void
  onChange?: (value: number) => void
  valueStyle?: CSSProperties
  colorScheme?: string
}
