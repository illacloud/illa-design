import { FC } from "react"
import { RangePickerBodyProps } from "./interface"
import { Trigger } from "@illa-design/trigger"
import { CalendarIcon } from "@illa-design/icon"
import { RangeInput } from "@illa-design/input"

export const PickerRange: FC<RangePickerBodyProps> = (props) => {
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
    separator,
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
    <Trigger
      showArrow={false}
      position={position}
      trigger={"click"}
      colorScheme={"white"}
      maxWidth={"700px"}
      popupVisible={popupVisible}
      content={pickerContent}
      closeOnClick={false}
      clickOutsideToClose
      onVisibleChange={tryUpdatePopupVisible}
    >
      <RangeInput
        disabled={disabled}
        value={inputVal}
        allowClear={allowClear}
        onClear={() => onClearDate?.()}
        placeholder={placeholder}
        error={error}
        size={size}
        suffix={{ render: <CalendarIcon /> }}
        separator={separator}
        onChange={(value: string[]) => {
          editable && onChangeInputVal?.(value)
        }}
      />
    </Trigger>
  )
}

PickerRange.displayName = "PickerRange"
