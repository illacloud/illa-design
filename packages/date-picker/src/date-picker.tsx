import { forwardRef } from "react"
import { DatePickerProps } from "./interface"
import { Input } from '@illa-design/input'
import { CalendarIcon } from '@illa-design/icon'

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>((props, ref) => {
  const {
    ...restProps
  } = props



  return (
    <div ref={ref} {...restProps}>
      <Input
        style={{ width: 280 }}
        suffix={{ render: <CalendarIcon /> }}
        allowClear={true}
      />
    </div>
  )
})

DatePicker.displayName = "DatePicker"
