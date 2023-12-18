import { FC } from "react"
import { BaseColumnProps } from "./interface"
import { padStart } from "@illa-design/system"
import { BaseColumn } from "./baseColumn"

export const HoursColumn: FC<BaseColumnProps> = (props) => {
  const {
    showList,
    popupVisible,
    selectedValue,
    hideDisabledOptions,
    scrollSticky,
    colorScheme,
    disabledFunc,
    onHandleSelect,
  } = props
  const hours =
    hideDisabledOptions && typeof disabledFunc === "function"
      ? showList.filter((h) => disabledFunc().indexOf(h) === -1)
      : showList
  const list = hours.map((h) => ({
    label: padStart(`${h}`, 2, "0"),
    value: h,
    selected: selectedValue !== undefined && selectedValue === h,
    disabled:
      typeof disabledFunc === "function" && disabledFunc().indexOf(h) !== -1,
  }))
  return (
    <BaseColumn
      list={list}
      value={selectedValue}
      onHandleSelect={onHandleSelect}
      unit="hour"
      popupVisible={popupVisible}
      scrollSticky={scrollSticky}
      colorScheme={colorScheme}
    />
  )
}
