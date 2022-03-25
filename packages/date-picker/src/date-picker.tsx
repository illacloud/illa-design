import { forwardRef } from "react"
import { DatePickerProps } from "./interface"
import { Input } from '@illa-design/input'
import { CalendarIcon } from '@illa-design/icon'
import { Trigger } from '@illa-design/trigger'
import { Calendar } from "@illa-design/calendar"

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>((props, ref) => {
  const {
    disabled,
    allowClear = true,
    placeholder,
    onChange,
    onSelect,
    defaultValue,
    ...restProps
  } = props



  return (
    <div ref={ref} {...restProps}>
      <Trigger position="bottom" trigger={'focus'} content="TL">
        <Input
          style={{ width: 280 }}
          suffix={{ render: <CalendarIcon /> }}
          allowClear={true}
        />
      </Trigger>

    </div>
  )
})

DatePicker.displayName = "DatePicker"
