import { forwardRef, useCallback, cloneElement, useState } from "react"
import { throttleByRaf } from "@illa-design/system"
import { Button } from "@illa-design/button"
import {
  DatePickerProps,
  MonthPickerProps,
  YearPickerProps,
  CommonSingleProps,
} from "../interface"
import dayjs, { Dayjs } from "dayjs"
import { Picker } from "../picker"
import {
  triContentCommonCss,
  applyShortContainerCss,
  shortCutsCss,
  singlePickerContentCss,
  showTimeContainerCss,
  showTimeHeaderCss,
  popupCss,
  horShortcuts,
  vertShortcuts,
  nowButtonCss,
} from "../style"
import { initFormat } from "../utils"
import { TimePickerPopup } from "@illa-design/time-picker"
import { Calendar } from "@illa-design/calendar"

const CommonPicker = forwardRef<HTMLDivElement, CommonSingleProps>(
  (props, ref) => {
    const {
      type,
      _css,
      disabled = false,
      allowClear = true,
      position = "bl",
      placeholder = "",
      shortcuts,
      shortcutsPlacementLeft = false,
      error,
      size = "medium",
      popupVisible = false,
      onVisibleChange,
      onChange,
      onSelect,
      onClear,
      editable = true,
      onSelectShortcut,
      disabledDate,
      defaultPickerValue,
      showTime = false,
      onOk,
      format,
      value,
      defaultValue,
      showNowBtn = false,
      disabledTime,
      ...restProps
    } = props

    const finalFormat = format || initFormat(type, showTime as boolean)

    let initValue =
      value || defaultValue
        ? dayjs(value || defaultValue).format(finalFormat as string)
        : ""
    const [inputVal, setInputVal] = useState<string>(initValue)
    const [calendarShortCuts, setCalendarShortCuts] = useState<
      Dayjs | "clear"
    >()
    const [showTrigger, setShowTrigger] = useState<boolean>(popupVisible)
    const mergedDefaultValue = value || defaultPickerValue
    const showTimeMerged = showTime && type === "day"

    const [valueShow, setValueShow] = useState<Dayjs | Dayjs[]>()

    const [calendarValue, setCalendarValue] = useState<Dayjs>(dayjs())

    const finalValue = (calendar?: Dayjs | null, timePicker?: Dayjs | null) => {
      calendar = calendar || calendarValue
      timePicker = timePicker || dayjs()
      return dayjs(
        `${calendar.format("YYYY-MM-DD")} ${timePicker.format("hh:mm:ss")}`,
      )
    }

    const changeDate = (date: Dayjs) => {
      let value = finalValue(date)
      let valueFormat = value.format(finalFormat as string)
      onSelect?.(valueFormat, value)
      if (!showTimeMerged) {
        onChange?.(valueFormat, value)
        setShowTrigger(false)
        setInputVal(valueFormat)
      } else {
        setCalendarValue(date)
      }
    }
    const clearDate = () => {
      setInputVal("")
      setCalendarValue(dayjs())
      setCalendarShortCuts("clear")

      onClear?.()
      setShowTrigger(false)
    }

    const clickNow = () => {
      let current = dayjs()
      setInputVal(current.format(finalFormat as string))
      onChange?.(current.format(finalFormat as string), current)
      setShowTrigger(false)
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

    const onConfirmValue = (time: Dayjs) => {
      let value = finalValue(calendarValue, time)
      let valueFormat = value.format(finalFormat as string)
      onChange?.(valueFormat, value)
      onOk?.(valueFormat, value)
      setShowTrigger(false)
      setInputVal(valueFormat)
      setCalendarValue(dayjs())
    }

    function ShortcutsCompt() {
      return shortcuts ? (
        <div css={applyShortContainerCss(shortcutsPlacementLeft)}>
          {shortcuts.map((item, key) => {
            return (
              <div
                css={shortCutsCss}
                key={key}
                onMouseEnter={() => handleShortEnter(item)}
                onMouseLeave={() => handleShortLeave(item)}
                onClick={() => {
                  setCalendarValue(item.value() as Dayjs)
                  changeDate(item.value() as Dayjs)
                  onSelectShortcut?.(item)
                }}
              >
                {item.text}
              </div>
            )
          })}
        </div>
      ) : null
    }

    return (
      <div ref={ref} css={_css} {...restProps}>
        <Picker
          disabled={disabled}
          allowClear={allowClear}
          position={position}
          placeholder={placeholder}
          inputVal={inputVal}
          onClearDate={clearDate}
          error={error}
          size={size}
          popupVisible={showTrigger}
          onChangeVisible={setShowTrigger}
          onClear={onClear}
          onVisibleChange={onVisibleChange}
          editable={editable}
          onChangeInputVal={setInputVal}
          pickerContent={
            <div css={singlePickerContentCss}>
              {shortcutsPlacementLeft && (
                <div css={vertShortcuts}>
                  <ShortcutsCompt />
                </div>
              )}
              <div>
                <Calendar
                  panel={true}
                  mode={type}
                  panelTodayBtn={false}
                  _css={triContentCommonCss}
                  onChange={(date: Dayjs) => {
                    changeDate(date)
                  }}
                  disabledDate={disabledDate}
                  defaultDate={calendarValue || dayjs(mergedDefaultValue)}
                  defaultSelectedDate={calendarShortCuts}
                />
                {(shortcuts || showTime) && (
                  <div css={horShortcuts}>
                    {shortcuts && !shortcutsPlacementLeft ? (
                      <ShortcutsCompt />
                    ) : showNowBtn ? (
                      <Button
                        colorScheme="gray"
                        css={nowButtonCss}
                        onClick={() => {
                          clickNow()
                        }}
                      >
                        Now
                      </Button>
                    ) : null}
                  </div>
                )}
              </div>
              {showTimeMerged && (
                <div css={showTimeContainerCss}>
                  <div css={showTimeHeaderCss}>time</div>
                  <div css={popupCss}>
                    {cloneElement(<TimePickerPopup />, {
                      isRangePicker: false,
                      format: "hh:mm:ss",
                      valueShow: valueShow,
                      setValueShow,
                      popupVisible: showTrigger,
                      onConfirmValue,
                      showNowBtn: false,
                      disabledHours: disabledTime?.().disabledHours,
                      disabledMinutes: disabledTime?.().disabledMinutes,
                      disabledSeconds: disabledTime?.().disabledSeconds,
                      ...restProps,
                    })}
                  </div>
                </div>
              )}
            </div>
          }
        />
      </div>
    )
  },
)

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (props, ref) => {
    return <CommonPicker {...props} ref={ref} type={"day"} />
  },
)

DatePicker.displayName = "DatePicker"

export const MonthPicker = forwardRef<HTMLDivElement, MonthPickerProps>(
  (props, ref) => {
    return <CommonPicker {...props} ref={ref} type={"month"} />
  },
)

MonthPicker.displayName = "MonthPicker"

export const YearPicker = forwardRef<HTMLDivElement, YearPickerProps>(
  (props, ref) => {
    return <CommonPicker {...props} ref={ref} type={"year"} />
  },
)

YearPicker.displayName = "YearPicker"
