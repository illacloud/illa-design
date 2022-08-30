import { forwardRef } from "react"
import { RangePickerBodyProps } from "./interface"
import { Trigger } from "@illa-design/trigger"
import { CalendarIcon } from "@illa-design/icon"
import { RangeInput } from "@illa-design/input"

export const PickerRange = forwardRef<HTMLDivElement, RangePickerBodyProps>(
  (props, ref) => {
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
      colorScheme,
      readOnly,
      format,
      ...otherProps
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
        maxW={"700px"}
        popupVisible={popupVisible}
        content={pickerContent}
        closeOnClick={false}
        clickOutsideToClose
        onVisibleChange={tryUpdatePopupVisible}
      >
        <RangeInput
          {...otherProps}
          ref={ref}
          disabled={disabled}
          value={inputVal}
          borderColor={colorScheme}
          allowClear={allowClear}
          onClear={() => onClearDate?.()}
          placeholder={placeholder}
          error={error}
          readOnly={readOnly}
          size={size}
          suffix={{ render: <CalendarIcon /> }}
          separator={separator}
          onChange={(value: string[]) => {
            editable && onChangeInputVal?.(value)
          }}
        />
      </Trigger>
    )
  },
)
PickerRange.displayName = "PickerRange"
