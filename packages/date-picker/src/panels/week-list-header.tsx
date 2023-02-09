import { FC, useContext, useMemo } from "react"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"
import { weekListHeaderStyle, weekListItemStyle } from "./style"
import { WeekListHeaderProps } from "./interface"

export const WeekListHeader: FC<WeekListHeaderProps> = (props) => {
  const { isWeek } = props
  const configProviderProps = useContext<ConfigProviderProps>(
    ConfigProviderContext,
  )
  const DATE_PICKER_LOCALE =
    configProviderProps?.locale?.datePicker ?? def.datePicker

  const weekList = useMemo(() => {
    const baseList = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]
    if (isWeek) {
      baseList.unshift("")
    }
    return baseList
  }, [isWeek])

  return (
    <div css={weekListHeaderStyle}>
      {weekList.map((weekDay) => (
        <div key={weekDay} css={weekListItemStyle}>
          {DATE_PICKER_LOCALE[weekDay]}
        </div>
      ))}
    </div>
  )
}

WeekListHeader.displayName = "WeekListHeader"
