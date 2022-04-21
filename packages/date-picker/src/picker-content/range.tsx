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

export const DPRangePicker = forwardRef<HTMLDivElement, CommonRangeProps>(
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
      showTime = false,
      timepickerProps,
      disabledTime,
      onSelectShortcut,
      onClear,
      ...restProps
    } = props

    // cur cmpt value
    const finalFormat = format || initFormat("day", !!showTime)
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
        setRangeValueSecond(date)
      } else if (type === "hover") {
        setRangeValueHover(date)
      }
    }

    useEffect(() => {
      if (!rangeValueFirst || !rangeValueSecond) return
      let format1 = rangeValueFirst.format(finalFormat as string)
      let format2 = rangeValueSecond.format(finalFormat as string)
      if (showTime) {
        onSelect?.([format1, format2], [rangeValueFirst, rangeValueSecond])
        return
      }
      setInputVal([format1, format2])
      setShowTrigger(false)
      onChange?.([format1, format2], [rangeValueFirst, rangeValueSecond])
    }, [rangeValueSecond])

    const showTimeConfirm = () => {
      if (!rangeValueFirst || !rangeValueSecond) return
      let defaultTime = dayjs()
      let calendar1 = dayjs(
        Math.min(rangeValueFirst.valueOf(), rangeValueSecond.valueOf()),
      ).format("YYYY-MM-DD")
      let calendar2 = dayjs(
        Math.max(rangeValueFirst.valueOf(), rangeValueSecond.valueOf()),
      ).format("YYYY-MM-DD")
      let timePicker1 = (valueShowLeft || defaultTime).format("hh:mm:ss")
      let timePicker2 = (valueShowRight || defaultTime).format("hh:mm:ss")
      setInputVal([
        `${calendar1} ${timePicker1}`,
        `${calendar2} ${timePicker2}`,
      ])
      onChange?.(
        [`${calendar1} ${timePicker1}`, `${calendar2} ${timePicker2}`],
        [
          dayjs(`${calendar1} ${timePicker1}`),
          dayjs(`${calendar2} ${timePicker2}`),
        ],
      )
      onOk?.(
        [`${calendar1} ${timePicker1}`, `${calendar2} ${timePicker2}`],
        [
          dayjs(`${calendar1} ${timePicker1}`),
          dayjs(`${calendar2} ${timePicker2}`),
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
                          format: "hh:mm:ss",
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
                          disabledHours: disabledTime?.(dayjs(), "end")
                            .disabledHours,
                          disabledMinutes: disabledTime?.(dayjs(), "end")
                            .disabledMinutes,
                          disabledSeconds: disabledTime?.(dayjs(), "end")
                            .disabledSeconds,
                          ...timepickerProps,
                          ...restProps,
                        })}
                      </div>
                    </div>
                  )}
                  {!showTimePicker && (
                    <>
                      <Calendar
                        panel={true}
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
                        defaultDate={leftCalendarDate}
                        rangePicker={true}
                        rangeValueFirst={rangeValueFirst}
                        rangeValueSecond={rangeValueSecond}
                        rangeValueHover={rangeValueHover}
                        handleRangeVal={handleRangeVal}
                      />
                      <Calendar
                        panel={true}
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
                        defaultDate={rightCalendarDate}
                        rangePicker={true}
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

DPRangePicker.displayName = "rangePicker"
