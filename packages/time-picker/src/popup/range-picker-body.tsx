import { FC, useCallback, useContext } from "react"
import { RangeTimePickerPopupProps } from "./interface"
import { PickerContext } from "../context"
import { TimePickerPopup } from "./time-picker-body"
import {
  DayjsPro,
  isDayjs,
  omit,
  toLocal,
  toTimezone,
} from "@illa-design/system"

export const RangePickerBody: FC<RangeTimePickerPopupProps> = (props) => {
  const {
    format = "HH:mm:ss",
    onSelect,
    focusedInputIndex = 0,
    changeFocusedInputIndex,
    popupVisible,
    onConfirmValue,
    valueShow = [],
    setValueShow,
    disableConfirm,
    ...rest
  } = props

  const { utcOffset, timezone } = useContext(PickerContext)

  const onSelectTime = useCallback(
    (_: string, time: DayjsPro) => {
      const zoneValue = valueShow.slice()
      const v = valueShow.map((a) => toLocal(a, utcOffset, timezone))

      zoneValue[focusedInputIndex] = toTimezone(time, utcOffset, timezone)
      v[focusedInputIndex] = time

      onSelect &&
        onSelect(
          v.map((t) => t.format(format)),
          v,
        )

      setValueShow?.(zoneValue)

      if (
        disableConfirm &&
        Array.isArray(v) &&
        isDayjs(v[0]) &&
        isDayjs(v[1])
      ) {
        onConfirmValue?.(zoneValue)
      }
    },
    [
      disableConfirm,
      focusedInputIndex,
      format,
      onConfirmValue,
      onSelect,
      setValueShow,
      timezone,
      utcOffset,
      valueShow,
    ],
  )

  const onConfirmValueInner = useCallback(() => {
    if (
      valueShow.length &&
      (valueShow[0] === undefined || valueShow[1] === undefined)
    ) {
      changeFocusedInputIndex?.(focusedInputIndex === 0 ? 1 : 0)
    } else {
      onConfirmValue?.(valueShow)
    }
  }, [changeFocusedInputIndex, focusedInputIndex, onConfirmValue, valueShow])

  const timepickerProps = omit(rest, [
    "defaultValue",
    "placeholder",
    "value",
    "onChange",
  ])
  const currentShowValue = valueShow[focusedInputIndex]

  return (
    <TimePickerPopup
      onSelect={onSelectTime}
      value={currentShowValue}
      format={format}
      isRangePicker
      onConfirmValue={onConfirmValueInner}
      confirmBtnDisabled={!isDayjs(currentShowValue)}
      valueShow={currentShowValue}
      popupVisible={popupVisible}
      disableConfirm={disableConfirm}
      {...timepickerProps}
    />
  )
}
