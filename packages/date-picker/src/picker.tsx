import { forwardRef, useCallback, useRef, useState } from "react"
import { RenderSinglePickerProps, ShortcutType } from "./interface"
import { Trigger } from "@illa-design/trigger"
import { Input } from "@illa-design/input"
import { CalendarIcon } from "@illa-design/icon"
import { triggerCss } from "./style"
import dayjs, { Dayjs } from "dayjs"
import {
  dayjsPro,
  getDayjsValue,
  isDayjs,
  isDayjsChange,
  isObject,
  throttleByRaf,
  useMergeValue,
} from "@illa-design/system"
import { initFormat, isValidTime } from "./utils"
import { PickerPopUp } from "./picker-popup"

const formatTime = (str: Dayjs, format: string) => {
  return str ? dayjsPro(str)?.format(format) : ""
}

export const Picker = forwardRef<HTMLDivElement, RenderSinglePickerProps>(
  (props, ref) => {
    const {
      shortcuts,
      shortcutsPlacementLeft,
      type,
      disabled,
      allowClear = true,
      position = "bottom-start",
      placeholder = "",
      error,
      size = "medium",
      colorScheme,
      popupVisible,
      editable = true,
      onSelectShortcut,
      disabledDate,
      defaultPickerValue,
      showTime,
      onOk,
      format,
      value,
      defaultValue,
      showNowBtn,
      disabledTime,
      readOnly,
      onChange,
      onSelect,
      onClear,
      onVisibleChange,
      ...otherProps
    } = props

    const inputRef = useRef<HTMLInputElement>(null)
    const tpProps = isObject(showTime) ? showTime : {}
    const isBooleanShowTime = typeof showTime === "boolean" ? showTime : false
    const finalFormat = initFormat(type, isBooleanShowTime, format)

    const [inputValue, setInputValue] = useState<string>()
    const [valueShow, setValueShow] = useState<Dayjs>()
    const [currentValue, setCurrentValue] = useMergeValue(
      value
        ? (getDayjsValue(value, finalFormat) as Dayjs)
        : defaultValue
        ? (getDayjsValue(defaultValue, finalFormat) as Dayjs)
        : undefined,
      {
        value: getDayjsValue(value, finalFormat) as Dayjs,
        defaultValue: undefined,
      },
    )
    const [currentPopupVisible, setCurrentPopupVisible] = useMergeValue(false, {
      value: popupVisible,
      defaultValue: undefined,
    })
    const [calendarValue, setCalendarValue] = useState<Dayjs>(dayjs())
    const [calendarShortCuts, setCalendarShortCuts] = useState<
      Dayjs | "clear"
    >()

    const showTimeMerged =
      (isBooleanShowTime || Object.keys(tpProps).length > 0) && type === "day"

    const tryUpdatePopupVisible = (visible: boolean) => {
      if (currentPopupVisible !== visible) {
        setCurrentPopupVisible(visible)
        if (!visible) {
          setInputValue(undefined)
          setValueShow(undefined)
          setCalendarShortCuts("clear")
        } else {
          currentValue && setCalendarShortCuts(currentValue)
        }
      }
    }

    const getFinalValue = (
      calendar?: Dayjs | null,
      timePicker?: Dayjs | null,
    ) => {
      calendar = calendar || calendarValue
      timePicker = timePicker || dayjs()
      return dayjs(
        `${calendar.format("YYYY-MM-DD")} ${timePicker.format("HH:mm:ss")}`,
      )
    }

    const onClickNow = () => {
      let current = dayjs()
      setCurrentValue(current)
      setCalendarShortCuts(current)
      onChange?.(current.format(finalFormat), current)
      setCurrentPopupVisible(false)
    }

    const onChangeDate = (date?: Dayjs, time?: Dayjs) => {
      let value = getFinalValue(date, time)
      let valueFormat = value.format(finalFormat)
      onSelect?.(valueFormat, value)
      if (!showTimeMerged) {
        onConfirmValue(value)
      } else {
        setValueShow(value)
        setCalendarShortCuts(value)
      }
    }

    const onConfirmValue = (value?: Dayjs) => {
      setCurrentValue(value)
      setInputValue(undefined)
      setValueShow(undefined)
      setCalendarShortCuts(value)
      setCalendarValue(dayjs())

      if (isDayjs(value) && isDayjsChange(currentValue, value)) {
        let valueFormat = value.format(finalFormat)
        onChange?.(valueFormat, value)
        onOk?.(valueFormat, value)
      }
      tryUpdatePopupVisible(false)
      inputRef?.current?.blur()
    }

    const handleShortEnter = useCallback(
      throttleByRaf((item: any) => {
        if (item.value().isSame(calendarValue, "date")) return
        setCalendarShortCuts(item.value())
      }),
      [calendarShortCuts],
    )
    const handleShortLeave = useCallback(
      throttleByRaf((item: any) => {
        if (item.value().isSame(calendarValue, "date")) return
        setCalendarShortCuts("clear")
      }),
      [calendarShortCuts],
    )

    const onClickShortcut = (item: ShortcutType) => {
      setCalendarValue(item.value() as Dayjs)
      onChangeDate(item.value() as Dayjs)
      onSelectShortcut?.(item)
    }

    return (
      <Trigger
        _css={triggerCss}
        showArrow={false}
        position={position}
        trigger={"click"}
        colorScheme={"white"}
        popupVisible={currentPopupVisible}
        content={
          <PickerPopUp
            popupVisible={currentPopupVisible}
            valueShow={valueShow || currentValue}
            {...{
              shortcuts,
              shortcutsPlacementLeft,
              type,
              disabledDate,
              showTime,
              showNowBtn,
              disabledTime,
              calendarValue,
              calendarShortCuts,
              handleShortEnter,
              handleShortLeave,
              onClickShortcut,
              onClickNow,
              onConfirmValue,
              onChangeDate,
            }}
          />
        }
        closeOnClick={false}
        clickOutsideToClose
        withoutPadding
        onVisibleChange={tryUpdatePopupVisible}
      >
        <Input
          ref={ref}
          inputRef={inputRef}
          readOnly={readOnly}
          disabled={disabled}
          placeholder={placeholder}
          size={size}
          value={
            inputValue
              ? inputValue
              : valueShow
              ? valueShow.format(finalFormat)
              : currentValue
              ? currentValue.format(finalFormat)
              : ""
          }
          borderColor={colorScheme}
          suffix={{ render: <CalendarIcon /> }}
          allowClear={allowClear}
          error={error}
          onClear={() => {
            onConfirmValue(undefined)
            onChange?.(undefined, undefined)
            onClear?.()
          }}
          onPressEnter={() => onConfirmValue(valueShow || currentValue)}
          onChange={(value: string) => {
            if (editable) {
              setInputValue(value)
              if (isValidTime(value, finalFormat)) {
                const dayjsValue = getDayjsValue(value, finalFormat) as Dayjs
                setValueShow(dayjsValue)
                setCalendarShortCuts(dayjsValue)
                setInputValue(undefined)
              }
            }
          }}
          {...otherProps}
        />
      </Trigger>
    )
  },
)

Picker.displayName = "Picker"
