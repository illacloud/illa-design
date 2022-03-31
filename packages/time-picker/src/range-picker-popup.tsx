import { useContext, useCallback, ReactNode } from "react"
import { Dayjs } from "dayjs"
import { isArray, isDayjs } from "@illa-design/system"
import { RangePickerProps } from "./interface"
import { TimePickerPopup } from "./time-picker-popup"

interface RangePickerPopupProps extends RangePickerProps {
  focusedInputIndex?: number
  changeFocusedInputIndex?: (index: number) => void
  valueShow?: Dayjs[]
  setValueShow?: (valueShow: Dayjs[]) => void
  onConfirmValue?: (value: Dayjs[]) => void
}

export function RangePickerPopup(props: RangePickerPopupProps) {
  const {
    value,
    defaultValue,
    placeholder,
    format = "HH:mm:ss",
    focusedInputIndex = 0,
    changeFocusedInputIndex,
    popupVisible,
    valueShow = [],
    setValueShow,
    disableConfirm,
    disabled,
    onSelect,
    onChange,
    onConfirmValue,
    ...rest
  } = props

  const currentValueShow = valueShow[focusedInputIndex]

  return (
    <TimePickerPopup
      isRangePicker
      format={format}
      value={currentValueShow}
      confirmBtnDisabled={!isDayjs(currentValueShow)}
      valueShow={currentValueShow}
      popupVisible={popupVisible}
      disableConfirm={disableConfirm}
      onConfirmValue={() => {
        if (
          valueShow?.length &&
          (valueShow[0] === undefined || valueShow[1] === undefined)
        ) {
          changeFocusedInputIndex?.(focusedInputIndex === 0 ? 1 : 0)
        } else {
          onConfirmValue?.(valueShow)
        }
      }}
      onSelect={(_: string, time: Dayjs) => {
        const values = valueShow.slice()
        values[focusedInputIndex] = time
        onSelect?.(
          values.map((t) => t.format(format)),
          values,
        )
        setValueShow?.(values)
        if (
          disableConfirm &&
          isArray(values) &&
          isDayjs(values[0]) &&
          isDayjs(values[1])
        ) {
          onConfirmValue?.(values)
        }
      }}
      {...rest}
    />
  )
}
