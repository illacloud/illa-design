import { FC, useCallback, useContext, useMemo } from "react"
import {
  getDayjsValue,
  getNow,
  padStart,
  toLocal,
  dayjsPro,
} from "@illa-design/system"
import type { Dayjs } from "dayjs"
import { TimePickerPopupProps } from "./interface"
import { getColumnsFromFormat } from "../utils"
import { PickerContext } from "../context"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"
import { Button } from "@illa-design/button"
import { HoursColumn } from "./hoursColumn"
import { MinutesColumn } from "./minutesColumn"
import { SecondsColumn } from "./secondsColumn"
import { AmPmColumn } from "./amPmColumn"
import {
  getHoursShowList,
  getMinutesShowList,
  getSecondsShowList,
  isUse12Hours,
} from "./utils"
import {
  footerBtnWrapperStyle,
  footerExtraWrapperStyle,
  timepickerPopupStyle,
} from "./style"

export const TimePickerPopup: FC<TimePickerPopupProps> = (props) => {
  const {
    format = "HH:mm:ss",
    use12Hours,
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
    colorScheme,
  } = props

  const valueShow = getDayjsValue(propsValueShow as Dayjs, format) as Dayjs
  const ampm = valueShow && valueShow.hour() >= 12 ? "pm" : "am"
  const _use12Hours = isUse12Hours(format, use12Hours)
  const HOURS = getHoursShowList(step.hour, use12Hours)
  const MINUTES = getMinutesShowList(step.minute)
  const SECONDS = getSecondsShowList(step.second)

  const { utcOffset, timezone } = useContext(PickerContext)
  const configProviderProps = useContext<ConfigProviderProps>(
    ConfigProviderContext,
  )

  const locale = configProviderProps?.locale?.timePicker ?? def.timePicker

  const selectedHour = useMemo(() => {
    let _hour = valueShow && valueShow.hour()
    if (_use12Hours) {
      _hour = _hour > 12 ? _hour - 12 : _hour
      if (_hour === 0 && ampm === "am") {
        _hour += 12
      }
    }
    return _hour
  }, [_use12Hours, ampm, valueShow])
  const selectedMinute = valueShow && valueShow.minute()
  const selectedSecond = valueShow && valueShow.second()

  const getDefaultStr = useCallback(
    (type: "hour" | "minute" | "second") => {
      switch (type) {
        case "hour":
          return typeof disabledHours === "function"
            ? padStart(
                `${HOURS.find((h) => disabledHours().indexOf(h) === -1) || 0}`,
                2,
                "0",
              )
            : padStart(`${HOURS[0]}`, 2, "0")
        case "minute":
          return typeof disabledMinutes === "function"
            ? padStart(
                `${
                  MINUTES.find(
                    (m) => disabledMinutes(selectedHour).indexOf(m) === -1,
                  ) || 0
                }`,
                2,
                "0",
              )
            : padStart(`${MINUTES[0]}`, 2, "0")
        case "second":
          return typeof disabledSeconds === "function"
            ? padStart(
                `${
                  SECONDS.find(
                    (s) =>
                      disabledSeconds(selectedHour, selectedMinute).indexOf(
                        s,
                      ) === -1,
                  ) || 0
                }`,
                2,
                "0",
              )
            : padStart(`${SECONDS[0]}`, 2, "0")

        default:
          return "00"
      }
    },
    [
      HOURS,
      MINUTES,
      SECONDS,
      disabledHours,
      disabledMinutes,
      disabledSeconds,
      selectedHour,
      selectedMinute,
    ],
  )

  const onHandleSelect = (selectedValue?: number | string, unit?: string) => {
    const isUpperCase = getColumnsFromFormat(format).list.indexOf("A") !== -1
    const _valueShow =
      valueShow ||
      dayjsPro(
        `${getDefaultStr("hour")}:${getDefaultStr("minute")}:${getDefaultStr(
          "second",
        )}`,
        "HH:mm:ss",
      )
    let hour = _valueShow.hour()
    const minute = _valueShow.minute()
    const second = _valueShow.second()
    const selectedAmpm = isUpperCase ? ampm.toUpperCase() : ampm
    let valueFormat = "HH:mm:ss"
    let newValue
    if (use12Hours) {
      if (isUpperCase) {
        valueFormat = `${valueFormat} A`
      } else {
        valueFormat = `${valueFormat} a`
      }
    }
    if (use12Hours) {
      hour = hour > 12 ? hour - 12 : hour
    }
    if (unit === "hour") {
      newValue = dayjsPro(
        `${selectedValue}:${minute}:${second} ${selectedAmpm}`,
        valueFormat,
        "en",
      )
    }
    if (unit === "minute") {
      newValue = dayjsPro(
        `${hour}:${selectedValue}:${second} ${selectedAmpm}`,
        valueFormat,
        "en",
      )
    }
    if (unit === "second") {
      newValue = dayjsPro(
        `${hour}:${minute}:${selectedValue} ${selectedAmpm}`,
        valueFormat,
        "en",
      )
    }
    if (unit === "ampm") {
      newValue = dayjsPro(
        `${hour}:${minute}:${second} ${
          isUpperCase ? (selectedValue as string).toUpperCase() : selectedValue
        }`,
        valueFormat,
        "en",
      )
    }

    newValue = dayjsPro(newValue, valueFormat).locale(dayjsPro.locale())

    onSelect &&
      onSelect(
        toLocal(newValue, utcOffset, timezone).format(format),
        toLocal(newValue, utcOffset, timezone),
      )

    if (!isRangePicker) {
      setValueShow?.(newValue)

      if (disableConfirm) {
        onConfirmValue?.(newValue)
      }
    }
  }

  const onConfirmTime = () => {
    if (valueShow) {
      onConfirmValue?.(valueShow)
    }
  }

  const onSelectNow = () => {
    const now = getNow()
    const zoneNow = getNow(utcOffset, timezone)
    onSelect && onSelect(now.format(format), now)
    if (disableConfirm) {
      onConfirmValue?.(zoneNow)
    } else {
      setValueShow?.(zoneNow)
    }
  }

  const _disabledMinutes = useMemo(() => {
    if (typeof disabledMinutes === "function") {
      return () => {
        return disabledMinutes(selectedHour)
      }
    }
    return undefined
  }, [disabledMinutes, selectedHour])

  const _disabledSeconds = useMemo(() => {
    if (typeof disabledSeconds === "function") {
      return () => {
        return disabledSeconds(selectedHour, selectedMinute)
      }
    }
    return undefined
  }, [disabledSeconds, selectedHour, selectedMinute])

  const { list } = getColumnsFromFormat(format)
  const _hideFooter =
    hideFooter ||
    (disableConfirm && isRangePicker) ||
    (!isRangePicker && disableConfirm && !showNowBtn)
  return (
    <>
      <div css={timepickerPopupStyle} className="time-picker-popup">
        {(list.indexOf("H") !== -1 || list.indexOf("h") !== -1) && (
          <HoursColumn
            showList={HOURS}
            selectedValue={selectedHour}
            disabledFunc={disabledHours}
            onHandleSelect={onHandleSelect}
            hideDisabledOptions={hideDisabledOptions}
            popupVisible={popupVisible}
            scrollSticky={scrollSticky}
            colorScheme={colorScheme}
          />
        )}
        {list.indexOf("m") !== -1 && (
          <MinutesColumn
            showList={MINUTES}
            selectedValue={selectedMinute}
            disabledFunc={_disabledMinutes}
            onHandleSelect={onHandleSelect}
            hideDisabledOptions={hideDisabledOptions}
            popupVisible={popupVisible}
            scrollSticky={scrollSticky}
            colorScheme={colorScheme}
          />
        )}
        {list.indexOf("s") !== -1 && (
          <SecondsColumn
            showList={SECONDS}
            selectedValue={selectedSecond}
            disabledFunc={_disabledSeconds}
            onHandleSelect={onHandleSelect}
            hideDisabledOptions={hideDisabledOptions}
            popupVisible={popupVisible}
            scrollSticky={scrollSticky}
            colorScheme={colorScheme}
          />
        )}
        {use12Hours && (
          <AmPmColumn
            showList={HOURS}
            format={format}
            valueShow={valueShow}
            selectedValue={ampm}
            onHandleSelect={onHandleSelect}
            popupVisible={popupVisible}
            scrollSticky={scrollSticky}
            colorScheme={colorScheme}
          />
        )}
      </div>
      {extra && <div css={footerExtraWrapperStyle}>{extra}</div>}
      {!_hideFooter && (
        <div css={footerBtnWrapperStyle}>
          {!isRangePicker && showNowBtn ? (
            <Button size="small" onClick={onSelectNow}>
              {locale.now}
            </Button>
          ) : (
            <div />
          )}
          {!disableConfirm && (
            <Button
              // type="primary"
              size="small"
              onClick={onConfirmTime}
              disabled={confirmBtnDisabled || !valueShow}
              colorScheme={colorScheme}
            >
              {locale.ok}
            </Button>
          )}
        </div>
      )}
    </>
  )
}
