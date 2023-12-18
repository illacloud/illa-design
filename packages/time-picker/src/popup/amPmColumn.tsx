import { FC } from "react"
import { AmPmColumnProps } from "./interface"
import { getColumnsFromFormat } from "../utils"
import { BaseColumn } from "./baseColumn"

const AMPM = ["am", "pm"]

export const AmPmColumn: FC<AmPmColumnProps> = (props) => {
  const {
    format,
    valueShow,
    popupVisible,
    selectedValue,
    onHandleSelect,
    scrollSticky,
    colorScheme,
  } = props
  const isUpperCase = getColumnsFromFormat(format).list.indexOf("A") !== -1
  const ampm = valueShow && valueShow.hour() >= 12 ? "pm" : "am"

  const list = AMPM.map((a) => ({
    label: isUpperCase ? a.toUpperCase() : a,
    value: a,
    selected: ampm === a,
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
