import { cloneElement, forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { RenderSinglePickerProps } from "./interface"
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
import {
  dayjsPro,
  getDayjsValue,
  isDayjs, isDayjsChange, isObject,
  isString,
  throttleByRaf,
  useMergeValue,
} from "@illa-design/system"
import { initFormat } from "./utils"

const isValidTime = (time?: string, format?: string): boolean => {
  return (
    typeof isString(time) && dayjsPro(time, format).format(format) === time
  )
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
        ? getDayjsValue(value, finalFormat) as Dayjs
        : defaultValue
          ? getDayjsValue(defaultValue, finalFormat) as Dayjs
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
    const [calendarShortCuts, setCalendarShortCuts] = useState<Dayjs | "clear">()

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

    const clearDate = () => {
      onConfirmValue(undefined)
      onChange?.(undefined, undefined)
      onClear?.()
    }

    const getFinalValue = (calendar?: Dayjs | null, timePicker?: Dayjs | null) => {
      calendar = calendar || calendarValue
      timePicker = timePicker || dayjs()
      return dayjs(
        `${calendar.format("YYYY-MM-DD")} ${timePicker.format("HH:mm:ss")}`,
      )
    }

    const changeDate = (date?: Dayjs, time?: Dayjs) => {
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

    const clickNow = () => {
      let current = dayjs()
      setCurrentValue(current)
      setCalendarShortCuts(current)
      onChange?.(current.format(finalFormat), current)
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
                changeDate(date, valueShow || currentValue)
              }}
              disabledDate={disabledDate}
              defaultDate={calendarValue}
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
                    onClick={clickNow}
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
                  inputValue,
                  setInputValue,
                  format: "HH:mm:ss",
                  valueShow: valueShow || currentValue,
                  popupVisible: currentPopupVisible,
                  onConfirmValue: (time: Dayjs) => {
                    onConfirmValue(getFinalValue(valueShow || currentValue, time))
                  },
                  showNowBtn: false,
                  disabledHours: disabledTime?.().disabledHours,
                  disabledMinutes: disabledTime?.().disabledMinutes,
                  disabledSeconds: disabledTime?.().disabledSeconds,
                  onSelect: (valueString: string, value: Dayjs) => {
                    changeDate(valueShow || currentValue, value)
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
          inputRef={inputRef}
          readOnly={readOnly}
          disabled={disabled}
          placeholder={placeholder}
          size={size}
          value={inputValue ? inputValue
            : valueShow ? valueShow.format(finalFormat)
              : currentValue ? currentValue.format(finalFormat) : ""
          }
          borderColor={colorScheme}
          suffix={{ render: <CalendarIcon /> }}
          allowClear={allowClear}
          error={error}
          onClear={clearDate}
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
        />
      </Trigger>
    )
  },
)

Picker.displayName = "Picker"
