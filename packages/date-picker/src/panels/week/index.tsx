import { FC, useCallback } from "react"
import { WeekPickerPanelProps } from "./interface"
import { Dayjs } from "dayjs"
import { DatePickerPanel } from "../date"
import { dayjsPro } from "@illa-design/system"

export const WeekPickerPanel: FC<WeekPickerPanelProps> = (props) => {
  const {
    value,
    isRangePicker,
    rangeValues,
    onPrev,
    onNext,
    onSuperPrev,
    onSuperNext,
    localeName,
    ...reset
  } = props

  const bodyProps = isRangePicker ? { rangeValues } : { value }
  const headerOperations = { onPrev, onNext, onSuperPrev, onSuperNext }

  const isSameTime = useCallback(
    (current: Dayjs, target: Dayjs) =>
      current
        .locale({
          ...dayjsPro.Ls[localeName || "en-us"],
          weekStart: 0,
        })
        .isSame(target, "week"),
    [localeName],
  )
  return (
    <DatePickerPanel
      {...reset}
      {...bodyProps}
      {...headerOperations}
      isWeek
      isSameTime={isSameTime}
      isRangePicker={isRangePicker}
    />
  )
}
