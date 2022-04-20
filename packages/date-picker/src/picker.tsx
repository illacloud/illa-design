import { FC } from "react"
import { CommonPickerProps } from "./interface"
import { Trigger } from "@illa-design/trigger"
import { Input } from "@illa-design/input"
import { CalendarIcon } from "@illa-design/icon"

export const Picker: FC<CommonPickerProps> = (props) => {
  const {
    disabled,
    allowClear,
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
    onChangeVisible,
  } = props

  const tryUpdatePopupVisible = (value: boolean) => {
    if (popupVisible !== value) {
      onChangeVisible?.(value)
      onVisibleChange?.(value)
    }
  }

  return (
    <>
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
        <Input
          disabled={typeof disabled === "boolean" ? disabled : false}
          placeholder={typeof placeholder === "string" ? placeholder : ""}
          size={size}
          value={inputVal}
          style={{ width: 280 }}
          suffix={{ render: <CalendarIcon /> }}
          allowClear={allowClear}
          error={error}
          onClear={() => onClearDate?.()}
          onChange={(value: string) => {
            editable && onChangeInputVal?.(value)
          }}
        />
      </Trigger>
    </>
  )
}
