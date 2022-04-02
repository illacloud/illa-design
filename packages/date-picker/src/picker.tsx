import { FC, useState } from "react"
import { CommonPickerProps } from "./interface"
// import { Trigger } from "@illa-design/trigger"
import { Trigger } from "../../trigger/src/index"
import { Input } from "@illa-design/input"
import { CalendarIcon } from "@illa-design/icon"
// import { ConfigProviderContext, ConfigProviderProps, def } from "@illa-design/config-provider"

export const Picker: FC<CommonPickerProps> = (props) => {
  const {
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
    disabled,
  } = props

  // const configProviderProps = useContext<ConfigProviderProps>(
  //   ConfigProviderContext,
  // )
  // const locale = configProviderProps?.locale?.datePicker ?? def.datePicker

  const [showTrigger, setShowTrigger] = useState<boolean>(false)
  const mergedPopupVisible = popupVisible || showTrigger

  const tryUpdatePopupVisible = (value: boolean) => {
    if (mergedPopupVisible !== value) {
      setShowTrigger(value)
      onVisibleChange?.(value)
    }
  }

  return (
    <Trigger
      showArrow={false}
      position={position}
      trigger={"click"}
      colorScheme={"white"}
      popupVisible={mergedPopupVisible}
      content={pickerContent}
      closeOnClick={false}
      clickOutsideToClose
      onVisibleChange={tryUpdatePopupVisible}
    >
      <Input
        // disabled={disabled} // typeof
        // placeholder={placeholder} // typeof
        size={size}
        value={inputVal}
        style={{ width: 280 }}
        suffix={{ render: <CalendarIcon /> }}
        allowClear={allowClear}
        error={error}
        onFocus={() => {
          !showTrigger && tryUpdatePopupVisible(true)
        }}
        onClear={() => onClearDate?.()}
        onChange={(value: string) => {
          editable && onChangeInputVal?.(value)
        }}
      />
    </Trigger>
  )
}
