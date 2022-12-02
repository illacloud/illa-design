import { CSSProperties, HTMLAttributes, ReactNode } from "react"
import { Dayjs } from "dayjs"
import { BoxProps } from "@illa-design/theme"

export type StatisticMode = "default" | "builder"

export interface StatisticProps
  extends Omit<HTMLAttributes<HTMLElement>, "title" | "prefix">,
    BoxProps {
  style?: CSSProperties
  title?: string | ReactNode
  mode?: StatisticMode
  value?: string | number | Dayjs
  styleValue?: CSSProperties
  decimalSeparator?: string
  format?: string
  groupSeparator?: string
  loading?: boolean
  precision?: number
  extra?: ReactNode
  prefix?: string | ReactNode
  suffix?: string | ReactNode
}

export interface CountDownProps
  extends Omit<HTMLAttributes<HTMLElement>, "title" | "onChange">,
    BoxProps {
  style?: CSSProperties
  styleValue?: CSSProperties
  title?: string | ReactNode
  mode?: StatisticMode
  value?: string | number | Dayjs | Date
  now?: string | number | Dayjs | Date
  format?: string
  start?: boolean
  onFinish?: () => void
  onChange?: (value: number) => void
}
