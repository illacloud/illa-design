import { cloneElement, forwardRef, useCallback, useEffect, useMemo, useState } from "react"
import { CommonPickerProps } from "./interface"
import { Trigger } from "@illa-design/trigger"
import { Input } from "@illa-design/input"
import { CalendarIcon } from "@illa-design/icon"
import {
  applyShortContainerCss,
  horShortcuts,
  nowButtonCss, popupCss, shortCutsCss, showTimeContainerCss, showTimeHeaderCss,
  singlePickerContentCss,
  triContentCommonCss,
  triggerCss,
  vertShortcuts,
} from "./style"
import { Calendar } from "@illa-design/calendar"
import dayjs, { Dayjs } from "dayjs"
import { Button } from "@illa-design/button"
import { TimePickerPopup } from "@illa-design/time-picker"
import { throttleByRaf, useMergeValue } from "@illa-design/system"
import { initFormat } from "./utils"

export const Picker = forwardRef<HTMLDivElement, CommonPickerProps>(
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
      onChangeInputVal,
      onClearDate,
      onChangeVisible,
      ...otherProps
    } = props

    const [currentPopupVisible, setCurrentPopupVisible] = useMergeValue(false, {
      value: popupVisible,
      defaultValue: undefined,
    })

    const tpProps = typeof showTime === "object" ? showTime : {}
    const isBooleanShowTime = typeof showTime === "boolean" ? showTime : false

    const finalFormat = format || initFormat(type, isBooleanShowTime)

    const initValue =
      value || defaultValue
        ? dayjs(value || defaultValue).format(finalFormat as string)
        : ""
    const [inputVal, setInputVal] = useState<string>(initValue)
    useEffect(() => {
      if (value) {
        const _initValue = dayjs(value).format(finalFormat as string)
        setInputVal(_initValue)
        setCalendarShortCuts(dayjs(value))
      }
    }, [value])
    useEffect(() => {
      // YYYY-MM-DD
      if (finalFormat?.length) {
        setInputVal(
          inputVal ? dayjs(inputVal).format(finalFormat as string) : inputVal,
        )
        setCalendarShortCuts(inputVal ? dayjs(value) : undefined)
      }
    }, [finalFormat])

    const [calendarShortCuts, setCalendarShortCuts] = useState<Dayjs | "clear">()

    const mergedDefaultValue = value || defaultValue || defaultPickerValue
    const showTimeMerged =
      (isBooleanShowTime || Object.keys(tpProps).length > 0) && type === "day"

    const [valueShow, setValueShow] = useState<Dayjs>()

    const [calendarValue, setCalendarValue] = useState<Dayjs>(dayjs())

    const tryUpdatePopupVisible = (visible: boolean) => {
      if (currentPopupVisible !== visible) {
        setCurrentPopupVisible(visible)
      }
      if (!visible) {
        setInputVal(undefined)
        setValueShow(undefined)
      }
    }

    const clearDate = () => {
      setInputVal("")
      setCalendarValue(dayjs())
      setCalendarShortCuts("clear")
      setValueShow(undefined)

      onClear?.()
      setCurrentPopupVisible(false)
    }

    const finalValue = (calendar?: Dayjs | null, timePicker?: Dayjs | null) => {
      calendar = calendar || calendarValue
      timePicker = timePicker || dayjs()
      return dayjs(
        `${calendar.format("YYYY-MM-DD")} ${timePicker.format("HH:mm:ss")}`,
      )
    }

    const changeDate = (date: Dayjs, time?: Dayjs) => {
      let value = finalValue(date, time)
      let valueFormat = value.format(finalFormat as string)
      onSelect?.(valueFormat, value)
      if (!showTimeMerged) {
        onChange?.(valueFormat, value)
        setCurrentPopupVisible(false)
        setInputVal(valueFormat)
        setCalendarValue(value)
        setValueShow(value)
        setCalendarShortCuts(value)
      } else {
        setCalendarValue(date)
        setValueShow(value)
      }
    }

    const clickNow = () => {
      let current = dayjs()
      setInputVal(current.format(finalFormat as string))
      setCalendarShortCuts(current)
      onChange?.(current.format(finalFormat as string), current)
      setCurrentPopupVisible(false)
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
      setCurrentPopupVisible(false)
      setInputVal(valueFormat)
      setCalendarShortCuts(value)
      setCalendarValue(dayjs())
      setValueShow(undefined)
    }

    const showCalendarTodayButton = useMemo(() => {
      // if show time select, hide Today button
      if (showTimeMerged) {
        return false
      }
      if (showNowBtn === undefined && type === "day") {
        return true
      } else {
        return showNowBtn && !isBooleanShowTime && !shortcuts?.length
      }
    }, [])

    function ShortcutsCompt() {
      return shortcuts ? (
        <div css={applyShortContainerCss(shortcutsPlacementLeft)}>
          {/* eslint-disable-next-line react/prop-types */}
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
      <Trigger
        _css={triggerCss}
        showArrow={false}
        position={position}
        trigger={"click"}
        colorScheme={"white"}
        popupVisible={currentPopupVisible}
        content={<div css={singlePickerContentCss}>
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
                changeDate(date, valueShow)
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
                  popupVisible: currentPopupVisible,
                  onConfirmValue,
                  showNowBtn: false,
                  disabledHours: disabledTime?.().disabledHours,
                  disabledMinutes: disabledTime?.().disabledMinutes,
                  disabledSeconds: disabledTime?.().disabledSeconds,
                  onSelect: (valueString: string, value: Dayjs) => {
                    changeDate(calendarValue, value)
                  },
                  ...tpProps,
                })}
              </div>
            </div>
          )}
        </div>}
        closeOnClick={false}
        clickOutsideToClose
        withoutPadding
        onVisibleChange={tryUpdatePopupVisible}
      >
        <Input
          {...otherProps}
          ref={ref}
          readOnly={readOnly}
          disabled={disabled}
          placeholder={placeholder}
          size={size}
          value={inputVal}
          borderColor={colorScheme}
          suffix={{ render: <CalendarIcon /> }}
          allowClear={allowClear}
          error={error}
          onClear={() => onClearDate?.()}
          onChange={(value: string) => {
            editable && onChangeInputVal?.(value)
          }}
        />
      </Trigger>
    )
  },
)

Picker.displayName = "Picker"
