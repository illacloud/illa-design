import { forwardRef, useEffect, useState, cloneElement } from "react"
import { CommonRangeProps } from "../interface"
import dayjs, { Dayjs } from "dayjs"
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
  buttonBoxCss,
} from "../style"
import { initFormat } from "../utils"
import { Button } from "@illa-design/button"
import { TimePickerPopup } from "@illa-design/time-picker"
import { Calendar } from "@illa-design/calendar"

export const DateRangePicker = forwardRef<HTMLDivElement, CommonRangeProps>(
  (props, ref) => {
    const {
      _css,
      disabled,
      allowClear = true,
      position = "bl",
      placeholder = [],
      shortcuts,
      shortcutsPlacementLeft,
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
      showTime,
      timepickerProps,
      disabledTime,
      onSelectShortcut,
      onClear,
      colorScheme,
      value,
      readOnly,
      ...restProps
    } = props

    // cur cmpt value
    const tpProps = typeof showTime === "object" ? showTime : {}
    const isBooleanShowTime = typeof showTime === "boolean" ? showTime : false

    const finalFormat = format || initFormat("day", isBooleanShowTime)
    const [leftCalendarDate, setLeftCalendarDate] = useState<Dayjs>(
      defaultPickerValue?.[0] ? dayjs(defaultPickerValue[0]) : dayjs(),
    )
    const [rightCalendarDate, setRightCalendarDate] = useState<Dayjs>(
      !defaultPickerValue?.[0] && defaultPickerValue?.[1]
        ? dayjs(defaultPickerValue[1])
        : dayjs().add(1, "month"),
    )
    const [preChangeValue, setPreChangeValue] = useState<number>(0)
    let initVal = defaultValue
      ? [
          dayjs(defaultValue[0]).format(finalFormat as string),
          dayjs(defaultValue[1]).format(finalFormat as string),
        ]
      : []
    const [inputVal, setInputVal] = useState<string[]>(initVal)

    useEffect(() => {
      if (value) {
        setInputVal([
          dayjs(value[0]).format(finalFormat as string),
          dayjs(value[1]).format(finalFormat as string),
        ])
      }
    }, [value])

    const [showTrigger, setShowTrigger] = useState<boolean>(
      popupVisible as boolean,
    )
    const [showTimePicker, setShowTimePicker] = useState<boolean>(false)
    const [valueShowLeft, setValueShowLeft] = useState<Dayjs>()
    const [valueShowRight, setValueShowRight] = useState<Dayjs>()
    const shortcutsShowLeft = shortcuts?.length && shortcutsPlacementLeft
    const shortcutsShowBottom = shortcuts?.length && !shortcutsPlacementLeft
    // calendar range value
    const [rangeValueFirst, setRangeValueFirst] = useState<Dayjs | undefined>()
    const [rangeValueSecond, setRangeValueSecond] = useState<
      Dayjs | undefined
    >()
    const [rangeValueHover, setRangeValueHover] = useState<Dayjs | undefined>()

    const clearDate = () => {
      setInputVal([])
    }

    const changeHeader = (date: Dayjs) => {
      let difValue = date.diff(dayjs(), "day")
      let result = difValue - preChangeValue
      if (result < 0) {
        // pre
        if (leftCalendarDate.isSame(date, "date")) {
          return
        }
        setLeftCalendarDate(date)
        setRightCalendarDate(date.add(1, "month"))
      } else {
        // next
        if (rightCalendarDate.isSame(date, "date")) {
          return
        }
        setRightCalendarDate(date)
        setLeftCalendarDate(date.subtract(1, "month"))
      }
      setPreChangeValue(difValue)
    }

    const handleRangeVal = (
      date: Dayjs | undefined,
      type: "first" | "second" | "hover",
    ) => {
      if (type === "first") {
        setRangeValueFirst(date)
      } else if (type === "second") {
        if (date?.isBefore(rangeValueFirst)) {
          setRangeValueSecond(rangeValueFirst)
          setRangeValueFirst(date)
        } else {
          setRangeValueSecond(date)
        }
      } else if (type === "hover") {
        setRangeValueHover(date)
      }
    }

    useEffect(() => {
      if (!rangeValueFirst || !rangeValueSecond) return
      let formatPre = rangeValueFirst.format(finalFormat as string)
      let formatAfter = rangeValueSecond.format(finalFormat as string)
      if (showTime) {
        onSelect?.(
          [formatPre, formatAfter],
          [rangeValueFirst, rangeValueSecond],
        )
        return
      }
      setInputVal([formatPre, formatAfter])
      setShowTrigger(false)
      onChange?.([formatPre, formatAfter], [rangeValueFirst, rangeValueSecond])
    }, [rangeValueSecond])

    const showTimeConfirm = () => {
      if (!rangeValueFirst || !rangeValueSecond) return
      let defaultTime = dayjs()
      let calendarPre = dayjs(
        Math.min(rangeValueFirst.valueOf(), rangeValueSecond.valueOf()),
      ).format("YYYY-MM-DD")
      let calendarAfter = dayjs(
        Math.max(rangeValueFirst.valueOf(), rangeValueSecond.valueOf()),
      ).format("YYYY-MM-DD")
      let timePickerPre = (valueShowLeft || defaultTime).format("HH:mm:ss")
      let timePickerAfter = (valueShowRight || defaultTime).format("HH:mm:ss")
      setInputVal([
        `${calendarPre} ${timePickerPre}`,
        `${calendarAfter} ${timePickerAfter}`,
      ])
      onChange?.(
        [
          `${calendarPre} ${timePickerPre}`,
          `${calendarAfter} ${timePickerAfter}`,
        ],
        [
          dayjs(`${calendarPre} ${timePickerPre}`),
          dayjs(`${calendarAfter} ${timePickerAfter}`),
        ],
      )
      onOk?.(
        [
          `${calendarPre} ${timePickerPre}`,
          `${calendarAfter} ${timePickerAfter}`,
        ],
        [
          dayjs(`${calendarPre} ${timePickerPre}`),
          dayjs(`${calendarAfter} ${timePickerAfter}`),
        ],
      )
      setShowTrigger(false)
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
                  setRangeValueFirst(item.value()[0])
                  setRangeValueSecond(item.value()[1])
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
          colorScheme={colorScheme}
          onVisibleChange={onVisibleChange}
          popupVisible={showTrigger}
          onChangeVisible={setShowTrigger}
          editable={editable}
          position={position}
          onChangeInputVal={setInputVal}
          separator={separator}
          inputVal={inputVal}
          readOnly={readOnly}
          pickerContent={
            <div css={wrapCss}>
              {shortcutsShowLeft && <ShortcutsCompt />}
              <div>
                <div css={rangeBodyCss}>
                  {showTimePicker && (
                    <div css={rangePickerCss}>
                      <div>
                        <div css={showTimeHeaderCss}>time</div>
                        {cloneElement(<TimePickerPopup />, {
                          isRangePicker: false,
                          disableConfirm: true,
                          format: "HH:mm:ss",
                          valueShow: valueShowLeft,
                          setValueShow: setValueShowLeft,
                          popupVisible: showTrigger,
                          showNowBtn: false,
                          disabledHours: disabledTime?.(dayjs(), "start")
                            .disabledHours,
                          disabledMinutes: disabledTime?.(dayjs(), "start")
                            .disabledMinutes,
                          disabledSeconds: disabledTime?.(dayjs(), "start")
                            .disabledSeconds,
                          ...timepickerProps,
                          ...tpProps,
                          ...restProps,
                        })}
                      </div>
                      <div>
                        <div css={showTimeHeaderCss}>time</div>
                        {cloneElement(<TimePickerPopup />, {
                          isRangePicker: false,
                          disableConfirm: true,
                          format: "HH:mm:ss",
                          valueShow: valueShowRight,
                          setValueShow: setValueShowRight,
                          popupVisible: showTrigger,
                          showNowBtn: false,
                          disabledHours: disabledTime?.(dayjs(), "end")
                            .disabledHours,
                          disabledMinutes: disabledTime?.(dayjs(), "end")
                            .disabledMinutes,
                          disabledSeconds: disabledTime?.(dayjs(), "end")
                            .disabledSeconds,
                          ...timepickerProps,
                          ...tpProps,
                          ...restProps,
                        })}
                      </div>
                    </div>
                  )}
                  {!showTimePicker && (
                    <>
                      <Calendar
                        panel
                        mode={"day"}
                        _css={css`
                          ${triContentCommonCss};
                          ${rangeLeftContentCss}
                        `}
                        panelOperations={["doubleLeft", "left"]}
                        panelTodayBtn={false}
                        onPanelChange={(date: Dayjs) => changeHeader(date)}
                        disabledDate={disabledDate}
                        // extra
                        rangePicker
                        isTodayTarget
                        defaultDate={leftCalendarDate}
                        rangeValueFirst={rangeValueFirst}
                        rangeValueSecond={rangeValueSecond}
                        rangeValueHover={rangeValueHover}
                        handleRangeVal={handleRangeVal}
                      />
                      <Calendar
                        panel
                        mode={"day"}
                        _css={css`
                          ${triContentCommonCss};
                          ${rangeRightContentCss}
                        `}
                        panelOperations={["doubleRight", "right"]}
                        panelTodayBtn={false}
                        onPanelChange={(date: Dayjs) => changeHeader(date)}
                        disabledDate={disabledDate}
                        // extra
                        rangePicker
                        isTodayTarget
                        defaultDate={rightCalendarDate}
                        rangeValueFirst={rangeValueFirst}
                        rangeValueSecond={rangeValueSecond}
                        rangeValueHover={rangeValueHover}
                        handleRangeVal={handleRangeVal}
                      />
                    </>
                  )}
                </div>
                {(showTime || shortcutsShowBottom) && (
                  <div
                    css={applyRangeFooterCss(!!showTime, !!shortcutsShowBottom)}
                  >
                    {shortcutsShowBottom && <ShortcutsCompt />}
                    {showTime && (
                      <div css={buttonBoxCss}>
                        <Button
                          variant={"text"}
                          onClick={() => setShowTimePicker(!showTimePicker)}
                        >
                          choose {showTimePicker ? "date" : "time"}
                        </Button>
                        <Button onClick={() => showTimeConfirm()}>ok</Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          }
        />
      </div>
    )
  },
)

DateRangePicker.displayName = "rangePicker"
