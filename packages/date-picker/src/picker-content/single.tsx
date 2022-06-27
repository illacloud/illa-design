import {
  forwardRef,
  useCallback,
  cloneElement,
  useState,
  useEffect,
} from "react"
import { throttleByRaf } from "@illa-design/system"
import { Button } from "@illa-design/button"
import dayjs, { Dayjs } from "dayjs"
import { TimePickerPopup } from "@illa-design/time-picker"
import { Calendar } from "@illa-design/calendar"
import {
  DatePickerProps,
  MonthPickerProps,
  YearPickerProps,
  CommonSingleProps,
} from "../interface"
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

const CommonPicker = forwardRef<HTMLDivElement, CommonSingleProps>(
  (props, ref) => {
    const {
      type,
      _css,
      disabled,
      allowClear = true,
      position = "bl",
      placeholder = "",
      shortcuts,
      shortcutsPlacementLeft,
      error,
      size = "medium",
      popupVisible,
      onVisibleChange,
      onChange,
      onSelect,
      onClear,
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
      colorScheme,
      readOnly,
      ...restProps
    } = props

    const tpProps = typeof showTime === "object" ? showTime : {}
    const isBooleanShowTime = typeof showTime === "boolean" ? showTime : false

    const finalFormat = format || initFormat(type, isBooleanShowTime)

    let initValue =
      value || defaultValue
        ? dayjs(value || defaultValue).format(finalFormat as string)
        : ""
    const [inputVal, setInputVal] = useState<string>(initValue)
    useEffect(() => {
      if (value) {
        const _initValue = dayjs(value).format(finalFormat as string)
        setInputVal(_initValue)
      }
    }, [value])

    const [calendarShortCuts, setCalendarShortCuts] = useState<
      Dayjs | "clear"
    >()
    const [showTrigger, setShowTrigger] = useState<boolean>(
      popupVisible ?? false,
    )
    const mergedDefaultValue = value || defaultPickerValue
    const showTimeMerged =
      (isBooleanShowTime || Object.keys(tpProps).length > 0) && type === "day"

    const [valueShow, setValueShow] = useState<Dayjs | Dayjs[]>()

    const [calendarValue, setCalendarValue] = useState<Dayjs>(dayjs())

    const finalValue = (calendar?: Dayjs | null, timePicker?: Dayjs | null) => {
      calendar = calendar || calendarValue
      timePicker = timePicker || dayjs()
      return dayjs(
        `${calendar.format("YYYY-MM-DD")} ${timePicker.format("HH:mm:ss")}`,
      )
    }

    const showCalendarTodayButton = Boolean(
      showNowBtn && !isBooleanShowTime && !shortcuts?.length,
    )

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
          readOnly={readOnly}
          colorScheme={colorScheme}
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
                  panel
                  isTodayTarget
                  mode={type}
                  panelTodayBtn={showCalendarTodayButton}
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
                      format: "HH:mm:ss",
                      valueShow: valueShow,
                      setValueShow,
                      popupVisible: showTrigger,
                      onConfirmValue,
                      showNowBtn: false,
                      disabledHours: disabledTime?.().disabledHours,
                      disabledMinutes: disabledTime?.().disabledMinutes,
                      disabledSeconds: disabledTime?.().disabledSeconds,
                      ...tpProps,
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
