import { useContext, useCallback } from "react"
import { Dayjs } from "dayjs"
import { getDayjsValue, dayjs, isFunction } from "@illa-design/system"
import { Button } from "@illa-design/button"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"
import { TimeColumn } from "./time-column"
import { applyContentButton, applyTimepickerContent } from "./style"
import { TimePickerProps, CalendarValue, TimeColumnProps } from "./interface"

interface PickerPopupProps extends TimePickerProps {
  confirmBtnDisabled?: boolean
  onConfirmValue?: (value: Dayjs) => void
  isRangePicker?: boolean
  valueShow?: CalendarValue
  setValueShow?: (valueShow: Dayjs) => void
  hideFooter?: boolean
}

type SelectUnit = Record<
  "hour" | "minute" | "second" | "selectedAmpm",
  string | number | undefined
>

function getColumnsFromFormat(format?: string) {
  const units = ["H", "h", "m", "s", "a", "A"]
  const list: string[] = []
  let use12Hours = false
  units.forEach((unit) => {
    if (format?.indexOf(unit) !== -1) {
      list.push(unit)
      if (unit === "a" || unit === "A") {
        use12Hours = true
      }
    }
  })
  return {
    list,
    use12Hours,
  }
}

function padStart(string: string, length: number, char = " "): string {
  const s = String(string)
  if (!length) {
    return s
  }
  const newString = s.length < length ? `${char}${s}` : s
  return newString.length < length
    ? padStart(newString, length, char)
    : newString
}

export function TimePickerPopup(props: PickerPopupProps) {
  const {
    format = "HH:mm:ss",
    onSelect,
    popupVisible,
    step = {},
    use12Hours,
    disabledHours,
    disabledMinutes,
    disabledSeconds,
    hideDisabledOptions,
    onConfirmValue,
    isRangePicker,
    confirmBtnDisabled,
    valueShow: propsValueShow,
    setValueShow,
    disableConfirm,
    hideFooter,
    showNowBtn = true,
    scrollSticky,
  } = props

  const configProviderProps = useContext<ConfigProviderProps>(
    ConfigProviderContext,
  )
  const locale = configProviderProps?.locale?.timePicker ?? def.timePicker

  const valueShow = getDayjsValue(propsValueShow, format) as Dayjs
  const ampm = valueShow && valueShow.hour() >= 12 ? "pm" : "am"
  const _use12Hours = use12Hours || getColumnsFromFormat(format).use12Hours
  const _hideFooter =
    hideFooter ||
    (isRangePicker && disableConfirm) ||
    (!isRangePicker && disableConfirm && !showNowBtn)

  const getShowList = useCallback(
    (type: "hour" | "minute" | "second") => {
      const stepFormType = step[type] || 1
      const duration = type === "hour" ? (_use12Hours ? 12 : 24) : 60
      const list: number[] = []
      for (let i = 0; i < duration; i += stepFormType) {
        list.push(i)
      }
      if (type === "hour" && _use12Hours) {
        list[0] = 12
      }
      return list
    },
    [step.hour, step.minute, step.second, _use12Hours],
  )

  const HOURS = getShowList("hour")
  const MINUTES = getShowList("minute")
  const SECONDS = getShowList("second")

  let selectedHour = valueShow && valueShow.hour()
  selectedHour = _use12Hours
    ? selectedHour > 12
      ? selectedHour - 12
      : selectedHour
    : selectedHour
  if (_use12Hours && selectedHour === 0 && ampm === "am") {
    selectedHour += 12
  }
  const selectedMinute = valueShow && valueShow.minute()
  const selectedSecond = valueShow && valueShow.second()

  function onHandleSelect(
    selectedValue?: number | string,
    unit?: TimeColumnProps["unit"],
  ) {
    const isUpperCase = getColumnsFromFormat(format).list.indexOf("A") !== -1
    const _valueShow = valueShow || dayjs("00:00:00", "HH:mm:ss")
    const timeData: SelectUnit = {
      hour: _valueShow?.hour?.(),
      minute: _valueShow?.minute?.(),
      second: _valueShow?.second?.(),
      selectedAmpm: isUpperCase ? ampm.toUpperCase() : ampm,
    }

    let valueFormat = "HH:mm:ss"
    let newValue
    if (_use12Hours) {
      if (isUpperCase) {
        valueFormat = `${valueFormat} A`
      } else {
        valueFormat = `${valueFormat} a`
      }
      const _hour = timeData.hour as number
      timeData.hour = _hour > 12 ? _hour - 12 : _hour
    }

    if (unit) {
      if (unit === "ampm") {
        timeData["selectedAmpm"] = isUpperCase
          ? (selectedValue as string).toUpperCase()
          : selectedValue
      } else {
        timeData[unit] = selectedValue
      }
      const { hour, minute, second, selectedAmpm } = timeData
      newValue = dayjs(
        `${hour}:${minute}:${second} ${selectedAmpm}`,
        valueFormat,
        "en",
      )
    }
    newValue = dayjs(newValue, valueFormat).locale(dayjs.locale())
    onSelect?.(newValue.format(format), newValue)

    if (!isRangePicker) {
      setValueShow && setValueShow(newValue)
      if (disableConfirm) {
        onConfirmValue?.(newValue)
      }
    }
  }

  function onSelectNow() {
    const now = dayjs()
    onSelect?.(now.format(format), now)
    if (disableConfirm) {
      onConfirmValue?.(now)
    } else {
      setValueShow?.(now)
    }
  }

  const baseTimeColumnProps = {
    onHandleSelect,
    popupVisible,
    scrollSticky,
  }

  function renderHours() {
    const hours =
      hideDisabledOptions && isFunction(disabledHours)
        ? HOURS.filter((h) => disabledHours().indexOf(h) === -1)
        : HOURS
    const list = hours.map((h) => ({
      label: padStart(`${h}`, 2, "0"),
      value: h,
      selected: selectedHour !== undefined && selectedHour === h,
      disabled: isFunction(disabledHours) && disabledHours().indexOf(h) !== -1,
    }))
    return (
      <TimeColumn
        {...baseTimeColumnProps}
        list={list}
        value={selectedHour}
        unit="hour"
      />
    )
  }

  function renderMinutes() {
    const minutes =
      hideDisabledOptions && isFunction(disabledMinutes)
        ? MINUTES.filter((h) => disabledMinutes(selectedHour).indexOf(h) === -1)
        : MINUTES
    const list = minutes.map((m) => ({
      label: padStart(`${m}`, 2, "0"),
      value: m,
      selected: selectedHour !== undefined && selectedMinute === m,
      disabled:
        isFunction(disabledMinutes) &&
        disabledMinutes(selectedHour).indexOf(m) !== -1,
    }))

    return (
      <TimeColumn
        {...baseTimeColumnProps}
        list={list}
        value={selectedMinute}
        unit="minute"
      />
    )
  }

  function renderSeconds() {
    const seconds =
      hideDisabledOptions && isFunction(disabledSeconds)
        ? SECONDS.filter(
            (h) =>
              disabledSeconds(selectedHour, selectedMinute).indexOf(h) === -1,
          )
        : SECONDS
    const list = seconds.map((s) => ({
      label: padStart(`${s}`, 2, "0"),
      value: s,
      selected: selectedHour !== undefined && selectedSecond === s,
      disabled:
        isFunction(disabledSeconds) &&
        disabledSeconds(selectedHour, selectedMinute).indexOf(s) !== -1,
    }))
    return (
      <TimeColumn
        {...baseTimeColumnProps}
        list={list}
        value={selectedSecond}
        unit="second"
      />
    )
  }

  function renderAmPm() {
    const isUpperCase = getColumnsFromFormat(format).list.indexOf("A") !== -1
    const AMPM = ["am", "pm"]
    const list = AMPM.map((a) => ({
      label: isUpperCase ? a.toUpperCase() : a,
      value: a,
      selected: ampm === a,
    }))
    return (
      <TimeColumn
        {...baseTimeColumnProps}
        list={list}
        value={ampm}
        unit="ampm"
      />
    )
  }

  const { list } = getColumnsFromFormat(format)

  return (
    <>
      <div css={applyTimepickerContent()}>
        {(list.indexOf("H") !== -1 || list.indexOf("h") !== -1) &&
          renderHours()}
        {list.indexOf("m") !== -1 && renderMinutes()}
        {list.indexOf("s") !== -1 && renderSeconds()}
        {_use12Hours && renderAmPm()}
      </div>
      {!_hideFooter ? (
        <div css={applyContentButton()}>
          {!isRangePicker && showNowBtn ? (
            <Button colorScheme="gray" size="small" onClick={onSelectNow}>
              {locale.now}
            </Button>
          ) : (
            <div />
          )}
          {!disableConfirm && (
            <Button
              size="small"
              onClick={() => {
                if (valueShow) {
                  onConfirmValue?.(valueShow)
                }
              }}
              disabled={confirmBtnDisabled || !valueShow}
            >
              {locale.ok}
            </Button>
          )}
        </div>
      ) : null}
    </>
  )
}
