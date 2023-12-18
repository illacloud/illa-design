import { FC } from "react"
import { BaseColumnProps } from "./interface"
import { padStart } from "@illa-design/system"
import { BaseColumn } from "./baseColumn"

export const MinutesColumn: FC<BaseColumnProps> = (props) => {
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
  const minutes =
    hideDisabledOptions && typeof disabledFunc === "function"
      ? showList.filter((h) => disabledFunc().indexOf(h) === -1)
      : showList
  const list = minutes.map((m) => ({
    label: padStart(`${m}`, 2, "0"),
    value: m,
    selected: selectedValue !== undefined && selectedValue === m,
    disabled:
      typeof disabledFunc === "function" && disabledFunc().indexOf(m) !== -1,
  }))
  return (
    <BaseColumn
      list={list}
      value={selectedValue}
      onHandleSelect={onHandleSelect}
      unit="minute"
      popupVisible={popupVisible}
      scrollSticky={scrollSticky}
      colorScheme={colorScheme}
    />
  )
}
