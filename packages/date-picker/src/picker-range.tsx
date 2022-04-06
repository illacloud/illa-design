import { FC, useState } from "react"
import { RangePickerBodyProps } from "./interface"
// import { Trigger } from "@illa-design/trigger"
import { Trigger } from "../../trigger/src/index"
import { CalendarIcon } from "@illa-design/icon"
import { Input, RangeInput } from "@illa-design/input"

export const PickerRange: FC<RangePickerBodyProps> = (props) => {
  const {
    disabled, // TODO
    allowClear, // TODO

    position,
    placeholder,
    error,
    size,
    popupVisible,
    onVisibleChange,
    editable,
    onChangeInputVal,
    pickerContent,
    inputVal,
    onClearDate,
    // onChangeVisible,
  } = props

  const tryUpdatePopupVisible = (value: boolean) => {
    if (popupVisible !== value) {
      //   onChangeVisible?.(value)
      onVisibleChange?.(value)
    }
  }

  return (
    <Trigger
      showArrow={false}
      position={position}
      trigger={"click"}
      colorScheme={"white"}
      popupVisible={popupVisible}
      content={pickerContent}
      closeOnClick={false}
      clickOutsideToClose
      onVisibleChange={tryUpdatePopupVisible}
    >
      {/* <Input
        // disabled={typeof disabled === 'boolean' ? disabled : false}
        // placeholder={typeof placeholder === "string" ? placeholder : ""}
        size={size}
        value={inputVal}
        style={{ width: 280 }}
        suffix={{ render: <CalendarIcon /> }}
        allowClear={allowClear}
        error={error}
        onFocus={() => {
          !popupVisible && tryUpdatePopupVisible(true)
        }}
        onClear={() => onClearDate?.()}
        onChange={(value: string) => {
          editable && onChangeInputVal?.(value)
        }}
      /> */}
      <RangeInput suffix={{ render: <CalendarIcon /> }} />
    </Trigger>
  )
}

PickerRange.displayName = "PickerRange"
