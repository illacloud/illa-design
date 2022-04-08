import { forwardRef, useEffect, useState, cloneElement } from "react"
import { CommonRangeProps } from "../interface"
import { Calendar } from "../../../calendar/src/index"
import { Dayjs } from "dayjs"
import { dayjs } from "@illa-design/system"
import { PickerRange } from "../picker-range"
import { css } from "@emotion/react"
import {
  wrapCss,
  triContentCommonCss,
  rangeLeftContentCss,
  rangeRightContentCss,
  rangeBodyCss,
  applyRangeFooterCss,
  rangePickerCss,
  showTimeHeaderCss,
  applyShortContainerCss,
  shortCutsCss,
  buttonBoxCss
} from "../style"
import { initFormat } from '../utils'
import { Button } from '@illa-design/button'
import { TimePickerPopup } from "../../../time-picker/src/time-picker-popup"

export const RangePicker = forwardRef<HTMLDivElement, CommonRangeProps>(
  (props, ref) => {
    const {
      _css,
      disabled = false,
      allowClear = true,
      position = "bl",
      placeholder = [],
      shortcuts,
      shortcutsPlacementLeft = false,
      size = "medium",
      error,
      popupVisible,
      onVisibleChange,
      onChange,
      onSelect,
      editable = true,
      separator,
      disabledDate,
      onOk,
      defaultPickerValue,
      format,
      defaultValue,
      showTime = true,
      timepickerProps,
      disabledTime,
      onSelectShortcut,
      onClear,
      ...restProps
    } = props

    // cur cmpt value
    const finalFormat = format || initFormat('day', showTime as boolean)
    const [leftCalendarDate, setLeftCalendarDate] = useState<dayjs.Dayjs>(
      defaultPickerValue ? dayjs(defaultPickerValue[0]) : dayjs(
        `${dayjs().year()}-${dayjs().month() + 1}-${dayjs().date() > 28 ? 28 : dayjs().date()
        }`,
      ),
    )
    const [rightCalendarDate, setRightCalendarDate] = useState<dayjs.Dayjs>(
      defaultPickerValue ? dayjs(defaultPickerValue[1]) : dayjs(
        `${dayjs().year()}-${dayjs().month() + 2}-${dayjs().date() > 28 ? 28 : dayjs().date()
        }`,
      ),
    )
    const [preChangeValue, setPreChangeValue] = useState<number>(0)
    let initVal = defaultValue ? [dayjs(defaultValue[0]).format(format as string), dayjs(defaultValue[1]).format(format as string)] : []
    const [inputVal, setInputVal] = useState<string[]>(initVal)
    const [showTrigger, setShowTrigger] = useState<boolean>(popupVisible as boolean)
    const [showTimePicker, setShowTimePicker] = useState<boolean>(false)
    const [valueShowLeft, setValueShowLeft] = useState<Dayjs>()
    const [valueShowRight, setValueShowRight] = useState<Dayjs>()
    const shortcutsShowLeft = shortcuts?.length && shortcutsPlacementLeft
    const shortcutsShowBottom = shortcuts?.length && !shortcutsPlacementLeft
    // calendar range value
    const [rangeValueFirst, setRangeValueFirst] = useState<number>(0)
    const [rangeValueSecond, setRangeValueSecond] = useState<number>(0)
    const [rangeValueHover, setRangeValueHover] = useState<number>(0)

    const clearDate = () => {
      setInputVal([])
    }

    const changeHeader = (date: dayjs.Dayjs) => {
      let difValue = date.diff(dayjs(), "day")
      let result = difValue - preChangeValue
      if (result < 0) {
        // pre
        if (result < -100) {
          // pre year
          setRightCalendarDate(date.add(1, "year"))
        } else {
          // pre month
          setRightCalendarDate(date.add(1, "month"))
        }
      } else {
        if (result < 100) {
          // next month
          setLeftCalendarDate(date.subtract(1, "month"))
        } else {
          // next year
          setLeftCalendarDate(date.subtract(1, "year"))
        }
      }
      setPreChangeValue(difValue)
    }

    const handleRangeVal = (
      date: number,
      type: "first" | "second" | "hover",
    ) => {
      if (type === "first") {
        setRangeValueFirst(date)
      } else if (type === "second") {
        setRangeValueSecond(date)
      } else if (type === "hover") {
        setRangeValueHover(date)
      }
    }

    useEffect(() => {
      if (!rangeValueSecond) return
      let format1 = dayjs(rangeValueFirst).format(finalFormat as string)
      let format2 = dayjs(rangeValueSecond).format(finalFormat as string)
      if (showTime) {
        onSelect?.([format1, format2], [dayjs(rangeValueFirst), dayjs(rangeValueSecond)])
        return
      }
      setInputVal([format1, format2])
      setShowTrigger(false)
      onChange?.([format1, format2], [dayjs(rangeValueFirst), dayjs(rangeValueSecond)])
    }, [rangeValueSecond])

    const showTimeConfirm = () => {
      let defaultTime = dayjs()
      let calendar1 = (dayjs(Math.min(rangeValueFirst, rangeValueSecond)) || defaultTime).format('YYYY-MM-DD')
      let calendar2 = (dayjs(Math.max(rangeValueFirst, rangeValueSecond)) || defaultTime).format('YYYY-MM-DD')
      let timePicker1 = (valueShowLeft || defaultTime).format('hh:mm:ss')
      let timePicker2 = (valueShowRight || defaultTime).format('hh:mm:ss')
      setInputVal([`${calendar1} ${timePicker1}`, `${calendar2} ${timePicker2}`])
      onChange?.([`${calendar1} ${timePicker1}`, `${calendar2} ${timePicker2}`], [dayjs(`${calendar1} ${timePicker1}`), dayjs(`${calendar2} ${timePicker2}`)])
      onOk?.([`${calendar1} ${timePicker1}`, `${calendar2} ${timePicker2}`], [dayjs(`${calendar1} ${timePicker1}`), dayjs(`${calendar2} ${timePicker2}`)])
    }

    function ShortcutsCompt() {
      return shortcuts ? (
        <div css={applyShortContainerCss(shortcutsPlacementLeft)}>
          {shortcuts.map((item: any, key) => {
            return (
              <div
                css={shortCutsCss}
                key={key}
                onClick={() => {
                  setRangeValueFirst(item.value()[0].valueOf())
                  setRangeValueSecond(item.value()[1].valueOf())
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
        <PickerRange
          disabled={disabled}
          allowClear={allowClear}
          onClearDate={clearDate}
          placeholder={placeholder}
          error={error}
          size={size}
          onVisibleChange={onVisibleChange}
          popupVisible={showTrigger}
          onChangeVisible={setShowTrigger}
          editable={editable}
          position={position}
          onChangeInputVal={setInputVal}
          separator={separator}
          inputVal={inputVal}
          pickerContent={
            <div css={wrapCss}>
              {
                shortcutsShowLeft && <ShortcutsCompt />
              }
              <div>
                <div css={rangeBodyCss}>
                  {
                    showTimePicker &&
                    <div css={rangePickerCss}>
                      <div>
                        <div css={showTimeHeaderCss}>time</div>
                        {cloneElement(<TimePickerPopup />, {
                          isRangePicker: false,
                          disableConfirm: true,
                          format: "hh:mm:ss",
                          valueShow: valueShowLeft,
                          setValueShow: setValueShowLeft,
                          popupVisible: showTrigger,
                          showNowBtn: false,
                          disabledHours: disabledTime?.(dayjs(), 'start').disabledHours,
                          disabledMinutes: disabledTime?.(dayjs(), 'start').disabledMinutes,
                          disabledSeconds: disabledTime?.(dayjs(), 'start').disabledSeconds,
                          ...timepickerProps,
                          ...restProps,
                        })}
                      </div>
                      <div>
                        <div css={showTimeHeaderCss}>time</div>
                        {cloneElement(<TimePickerPopup />, {
                          isRangePicker: false,
                          disableConfirm: true,
                          format: "hh:mm:ss",
                          valueShow: valueShowRight,
                          setValueShow: setValueShowRight,
                          popupVisible: showTrigger,
                          showNowBtn: false,
                          disabledHours: disabledTime?.(dayjs(), 'end').disabledHours,
                          disabledMinutes: disabledTime?.(dayjs(), 'end').disabledMinutes,
                          disabledSeconds: disabledTime?.(dayjs(), 'end').disabledSeconds,
                          ...timepickerProps,
                          ...restProps,
                        })}
                      </div>
                    </div>
                  }
                  {
                    !showTimePicker &&
                    <>
                      <Calendar
                        panel={true}
                        mode={"day"}
                        css={css`${triContentCommonCss};${rangeLeftContentCss}`}
                        panelOperations={["doubleLeft", "left"]}
                        panelTodayBtn={false}
                        onPanelChange={(date: dayjs.Dayjs) => changeHeader(date)}
                        disabledDate={disabledDate}
                        //
                        datepickerDay={leftCalendarDate}
                        onChangeDatePickerDay={(val: dayjs.Dayjs) =>
                          setLeftCalendarDate(val)
                        }
                        usedByDatepicker={true}
                        rangeValueFirst={rangeValueFirst}
                        rangeValueSecond={rangeValueSecond}
                        rangeValueHover={rangeValueHover}
                        handleRangeVal={handleRangeVal}
                      />
                      <Calendar
                        panel={true}
                        mode={"day"}
                        css={css`${triContentCommonCss};${rangeRightContentCss}`}
                        panelOperations={["doubleRight", "right"]}
                        panelTodayBtn={false}
                        onPanelChange={(date: dayjs.Dayjs) => changeHeader(date)}
                        disabledDate={disabledDate}
                        //
                        datepickerDay={rightCalendarDate}
                        onChangeDatePickerDay={(val: dayjs.Dayjs) =>
                          setRightCalendarDate(val)
                        }
                        usedByDatepicker={true}
                        rangeValueFirst={rangeValueFirst}
                        rangeValueSecond={rangeValueSecond}
                        rangeValueHover={rangeValueHover}
                        handleRangeVal={handleRangeVal}
                      />
                    </>
                  }
                </div>
                {
                  (showTime || shortcutsShowBottom) &&
                  <div css={applyRangeFooterCss(!!showTime, !!shortcutsShowBottom)}>
                    {
                      shortcutsShowBottom && <ShortcutsCompt />
                    }
                    <div css={buttonBoxCss}>
                      <Button variant={'text'} onClick={() => setShowTimePicker(!showTimePicker)}>choose {showTimePicker ? 'date' : 'time'}</Button>
                      <Button onClick={() => showTimeConfirm()}>ok</Button>
                    </div>
                  </div>
                }
              </div>
            </div>
          }
        />
      </div>
    )
  },
)

RangePicker.displayName = "RangePicker"
