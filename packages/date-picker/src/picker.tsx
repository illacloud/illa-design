import { FC, useState } from "react"
import { CommonPickerProps } from "./interface"
import { Trigger } from "@illa-design/trigger"
import { Input } from "@illa-design/input"
import { CalendarIcon } from "@illa-design/icon"
import { PickerContext } from "./picker-context"

export const Picker: FC<CommonPickerProps> = (props) => {
  const { size = "medium", pickerContent, inputVal, onClearDate } = props

  const [showTrigger, setShowTrigger] = useState<boolean>(false)

  return (
    <PickerContext.Consumer>
      {(value) => {
        return (
          <Trigger
            showArrow={false}
            position={"bl"}
            trigger={"click"}
            colorScheme={"white"}
            popupVisible={showTrigger}
            content={pickerContent}
            clickOutsideToClose
          >
            <Input
              size={size}
              value={inputVal}
              style={{ width: 280 }}
              suffix={{ render: <CalendarIcon /> }}
              allowClear={true}
              onFocus={() => {
                !showTrigger && setShowTrigger(true)
              }}
              onBlur={() => {
                showTrigger && setShowTrigger(false)
              }}
              onClear={() => onClearDate && onClearDate()}
            />
          </Trigger>
        )
      }}
    </PickerContext.Consumer>
  )
}
