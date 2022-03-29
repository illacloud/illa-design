import { useContext, useCallback, ReactNode } from "react"
import { Dayjs } from "dayjs"
import { TimePickerProps, CalendarValue } from "./interface"

import { getDayjsValue, dayjs, isFunction } from "@illa-design/system"
import { Button } from "@illa-design/button"
import { TimeColumn } from "./time-column"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"
import { applyContentButton, applyTimepickerContent } from "./style"

interface InnerTimePickerProps extends TimePickerProps {
  confirmBtnDisabled?: boolean
  popupVisible?: boolean
  step?: { hour?: number; minute?: number; second?: number }
  disabledHours?: () => number[]
  disabledMinutes?: (selectedHour?: number) => number[]
  disabledSeconds?: (selectedHour?: number, selectedMinute?: number) => number[]
  hideDisabledOptions?: boolean
  onConfirmValue?: (value: Dayjs) => void
  isRangePicker?: boolean
  extra?: ReactNode
  valueShow?: CalendarValue
  setValueShow?: (valueShow: Dayjs) => void
  hideFooter?: boolean
}

const AMPM = ["am", "pm"]

export function getColumnsFromFormat(format?: string) {
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

export function padStart(string: string, length: number, char = " "): string {
  const s = String(string)
  if (!length) {
    return s
  }
  const newString = s.length < length ? `${char}${s}` : s
  return newString.length < length
    ? padStart(newString, length, char)
    : newString
}

function isUse12Hours(props: InnerTimePickerProps) {
  return props.use12Hours || getColumnsFromFormat(props.format).use12Hours
}

export function TimePickerPopup(props: InnerTimePickerProps) {
  const {
    format = "HH:mm:ss",
    onSelect,
    popupVisible,
    step = {},
    disabledHours,
    disabledMinutes,
    disabledSeconds,
    hideDisabledOptions,
    onConfirmValue,
    isRangePicker,
    confirmBtnDisabled,
    valueShow: propsValueShow,
    setValueShow,
    extra,
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
  const use12Hours = isUse12Hours(props)

  const getShowList = useCallback(
    (type: "hour" | "minute" | "second") => {
      const stepHour = step.hour || 1
      const stepMinute = step.minute || 1
      const stepSecond = step.second || 1
      const list: number[] = []
      if (type === "hour") {
        for (let i = 0; i < (use12Hours ? 12 : 24); i += stepHour) {
          list.push(i)
        }
        if (use12Hours) {
          list[0] = 12
        }
      }
      if (type === "minute") {
        for (let i = 0; i < 60; i += stepMinute) {
          list.push(i)
        }
      }
      if (type === "second") {
        for (let i = 0; i < 60; i += stepSecond) {
          list.push(i)
        }
      }

      return list
    },
    [step.hour, step.minute, step.second, use12Hours],
  )

  const HOURS = getShowList("hour")
  const MINUTES = getShowList("minute")
  const SECONDS = getShowList("second")

  let selectedHour = valueShow && valueShow.hour()
  selectedHour = use12Hours
    ? selectedHour > 12
      ? selectedHour - 12
      : selectedHour
    : selectedHour
  if (use12Hours && selectedHour === 0 && ampm === "am") {
    selectedHour += 12
  }
  const selectedMinute = valueShow && valueShow.minute()
  const selectedSecond = valueShow && valueShow.second()

  function onHandleSelect(selectedValue?: number | string, unit?: string) {
    console.log(selectedValue, unit, dayjs(), "onHandleSelect")
    const isUpperCase = getColumnsFromFormat(format).list.indexOf("A") !== -1
    const _valueShow = valueShow || dayjs("00:00:00", "HH:mm:ss")
    //console.log(_valueShow)
    let hour = _valueShow?.hour?.()
    const minute = _valueShow?.minute?.()
    const second = _valueShow?.second?.()
    const selectedAmpm = isUpperCase ? ampm.toUpperCase() : ampm
    let valueFormat = "HH:mm:ss"
    let newValue
    if (use12Hours) {
      if (isUpperCase) {
        valueFormat = `${valueFormat} A`
      } else {
        valueFormat = `${valueFormat} a`
      }
      hour = hour > 12 ? hour - 12 : hour
    }
    if (unit === "hour") {
      newValue = dayjs(
        `${selectedValue}:${minute}:${second} ${selectedAmpm}`,
        valueFormat,
        "en",
      )
    }
    if (unit === "minute") {
      newValue = dayjs(
        `${hour}:${selectedValue}:${second} ${selectedAmpm}`,
        valueFormat,
        "en",
      )
    }
    if (unit === "second") {
      newValue = dayjs(
        `${hour}:${minute}:${selectedValue} ${selectedAmpm}`,
        valueFormat,
        "en",
      )
    }
    if (unit === "ampm") {
      newValue = dayjs(
        `${hour}:${minute}:${second} ${
          isUpperCase ? (selectedValue as string).toUpperCase() : selectedValue
        }`,
        valueFormat,
        "en",
      )
    }

    newValue = dayjs(newValue, valueFormat).locale(dayjs.locale())

    onSelect && onSelect(newValue.format(format), newValue)

    if (!isRangePicker) {
      setValueShow && setValueShow(newValue)

      if (disableConfirm) {
        onConfirmValue?.(newValue)
      }
    }
  }

  function onConfirmTime() {
    if (valueShow) {
      onConfirmValue?.(valueShow)
    }
  }

  function onSelectNow() {
    const now = dayjs()
    onSelect && onSelect(now.format(format), now)
    if (disableConfirm) {
      onConfirmValue?.(now)
    } else {
      setValueShow && setValueShow(now)
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
      disabled:
        isFunction(disabledHours) &&
        disabledHours().indexOf(h) !== -1,
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

  const _hideFooter =
    hideFooter ||
    (disableConfirm && isRangePicker) ||
    (!isRangePicker && disableConfirm && !showNowBtn)

  return (
    <>
      <div css={applyTimepickerContent()}>
        {(list.indexOf("H") !== -1 || list.indexOf("h") !== -1) &&
          renderHours()}
        {list.indexOf("m") !== -1 && renderMinutes()}
        {list.indexOf("s") !== -1 && renderSeconds()}
        {use12Hours && renderAmPm()}
      </div>
      {extra && <div>{extra}</div>}
      {!_hideFooter && (
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
              onClick={onConfirmTime}
              disabled={confirmBtnDisabled || !valueShow}
            >
              {locale.ok}
            </Button>
          )}
        </div>
      )}
    </>
  )
}
