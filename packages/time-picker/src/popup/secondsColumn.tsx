import { FC } from "react"
import { BaseColumnProps } from "./interface"
import { padStart } from "@illa-design/system"
import { BaseColumn } from "./baseColumn"

export const SecondsColumn: FC<BaseColumnProps> = (props) => {
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
  const seconds =
    hideDisabledOptions && typeof disabledFunc === "function"
      ? showList.filter((h) => disabledFunc().indexOf(h) === -1)
      : showList
  const list = seconds.map((s) => ({
    label: padStart(`${s}`, 2, "0"),
    value: s,
    selected: selectedValue !== undefined && selectedValue === s,
    disabled:
      typeof disabledFunc === "function" && disabledFunc().indexOf(s) !== -1,
  }))
  return (
    <BaseColumn
      list={list}
      value={selectedValue}
      onHandleSelect={onHandleSelect}
      unit="second"
      popupVisible={popupVisible}
      scrollSticky={scrollSticky}
      colorScheme={colorScheme}
    />
  )
}
