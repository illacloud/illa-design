import { forwardRef, useState } from "react"
import { DatePickerProps } from "../interface"
import { Calendar } from "@illa-design/calendar"
import {} from "../style"
import dayjs from "dayjs"
import { Picker } from "../picker"

export const YearPicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (props, ref) => {
    const {
      disabled,
      allowClear = true,
      placeholder,
      size = "medium",
      onChange,
      onSelect,
      onVisibleChange,
      onClear,
      onSelectShortcut,
      onOk,
      defaultValue,
      ...restProps
    } = props

    const [inputVal, setInputVal] = useState<string>()

    const changeDate = (date: dayjs.Dayjs) => {
      let fotmatDate = dayjs(date)
      setInputVal(`${fotmatDate.year()}`)
    }
    const clearDate = () => {
      setInputVal("")
    }

    return (
      <div ref={ref} {...restProps}>
        <Picker
          inputVal={inputVal}
          onClearDate={clearDate}
          pickerContent={
            <Calendar
              panel={true}
              mode={"year"}
              style={{ margin: 0 }}
              onPanelChange={(date: dayjs.Dayjs) => changeDate(date)}
            />
          }
        />
      </div>
    )
  },
)

YearPicker.displayName = "YearPicker"
