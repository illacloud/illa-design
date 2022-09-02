import { cloneElement, forwardRef, useEffect, useRef, useState } from "react"
import { CommonRangeProps, ShortcutType } from "./interface"
import { Trigger } from "@illa-design/trigger"
import { CalendarIcon } from "@illa-design/icon"
import { RangeInput, RangeInputRef } from "@illa-design/input"
import {
  applyRangeFooterCss,
  buttonBoxCss,
  rangeBodyCss,
  rangeLeftContentCss,
  rangePickerCss,
  rangeRightContentCss,
  showTimeHeaderCss,
  triContentCommonCss,
  wrapCss,
} from "./style"
import { TimePickerPopup } from "@illa-design/time-picker"
import dayjs, { Dayjs } from "dayjs"
import { Calendar } from "@illa-design/calendar"
import { css } from "@emotion/react"
import { Button } from "@illa-design/button"
import { getFinalValue, initFormat, isValidTime } from "./utils"
import {
  dayjsPro,
  getDayjsValue,
  getSortedDayjsArray,
  isArray, isDayjs,
  isDayjsArrayChange,
  useMergeValue,
} from "@illa-design/system"
import { ShortcutsComp } from "./shortcut"

const formatTime = (str: Dayjs, format: string) => {
  return str ? dayjsPro(str)?.format(format) : ""
}

export const RangePicker = forwardRef<HTMLDivElement, CommonRangeProps>(
  (props, ref) => {
    const {
      disabled,
      disableConfirm,
      order = true,
      allowClear = true,
      position = "bottom-start",
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
      ...otherProps
    } = props

    const inputGroupRef = useRef({} as RangeInputRef)
    const tpProps = typeof showTime === "object" ? showTime : {}
    const isBooleanShowTime = typeof showTime === "boolean" ? showTime : false

    const finalFormat = initFormat("day", isBooleanShowTime, format)
    const [leftCalendarDate, setLeftCalendarDate] = useState<Dayjs>(
      defaultPickerValue?.[0] ? dayjs(defaultPickerValue[0]) : dayjs(),
    )
    const [rightCalendarDate, setRightCalendarDate] = useState<Dayjs>(
      !defaultPickerValue?.[0] && defaultPickerValue?.[1]
        ? dayjs(defaultPickerValue[1])
        : dayjs().add(1, "month"),
    )
    const [preChangeValue, setPreChangeValue] = useState<number>(0)
    const [inputVal, setInputVal] = useState<string[]>()
    const [valueShow, setValueShow] = useState<Dayjs[]>()
    const [currentValue, setCurrentValue] = useMergeValue(
      value
        ? (getDayjsValue(value, finalFormat) as Dayjs[])
        : defaultValue
          ? (getDayjsValue(defaultValue, finalFormat) as Dayjs[])
          : undefined,
      {
        value: getDayjsValue(value, finalFormat) as Dayjs[],
        defaultValue: undefined,
      },
    )
    const [focusedInputIndex, setFocusedInputIndex] = useState<number>(0)

    const [showTrigger, setShowTrigger] = useState<boolean>(
      popupVisible as boolean,
    )
    const [showTimePicker, setShowTimePicker] = useState<boolean>(false)
    const shortcutsShowLeft = shortcuts?.length && shortcutsPlacementLeft
    const shortcutsShowBottom = shortcuts?.length && !shortcutsPlacementLeft
    // calendar range value
    const [rangeValueFirst, setRangeValueFirst] = useState<Dayjs | undefined>()
    const [rangeValueSecond, setRangeValueSecond] = useState<Dayjs | undefined>()
    const [rangeValueHover, setRangeValueHover] = useState<Dayjs | undefined>()

    const onClearDate = () => {
      onConfirmValue(undefined)
      onChange?.(undefined, undefined)
      setRangeValueFirst(undefined)
      setRangeValueSecond(undefined)
      setRangeValueHover(undefined)

      onClear?.()
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

    useEffect(() => {
      if (!rangeValueFirst) return
      let newValueShow = [...(valueShow || currentValue || [])]
      newValueShow[0] = rangeValueFirst
      setValueShow(newValueShow)
    }, [rangeValueFirst])

    useEffect(() => {
      if (!rangeValueFirst || !rangeValueSecond) return
      let formatPre = rangeValueFirst.format(finalFormat)
      let formatAfter = rangeValueSecond.format(finalFormat)
      if (showTime) {
        onSelect?.(
          [formatPre, formatAfter],
          [rangeValueFirst, rangeValueSecond],
        )
        return
      }

      onConfirmValue([rangeValueFirst, rangeValueSecond])
      setShowTrigger(false)
      onChange?.([formatPre, formatAfter], [rangeValueFirst, rangeValueSecond])
    }, [rangeValueSecond])

    const handleRangeVal = (
      date: Dayjs | undefined,
      type: "first" | "second" | "hover",
    ) => {
      let newValueShow = [...(valueShow || currentValue || [])]
      if (type === "first") {
        setRangeValueFirst(date)
      } else if (type === "second") {
        if (date?.isBefore(rangeValueFirst)) {
          setRangeValueSecond(rangeValueFirst)
          setRangeValueFirst(date)
        } else {
          setRangeValueSecond(date)
        }
        newValueShow = [rangeValueFirst as Dayjs, date as Dayjs]
        setValueShow(newValueShow)
        if (newValueShow[0] && newValueShow[1]) {
          onConfirmValue(newValueShow)
        }
      } else if (type === "hover") {
        setRangeValueHover(date)
      }
    }

    const onClickShortcut = (item: ShortcutType) => {
      // setCalendarValue(item.value() as Dayjs)
      // onChangeDate(item.value() as Dayjs)
      setRangeValueFirst(item.value()?.[0])
      setRangeValueSecond(item.value()?.[1])
      onSelectShortcut?.(item)
    }

    const tryUpdatePopupVisible = (visible: boolean) => {
      if (popupVisible !== visible) {
        setShowTrigger?.(visible)
        onVisibleChange?.(visible)
        if (!visible) {
          setInputVal(undefined)
          setValueShow(undefined)
        }
      }
    }

    const changeFocusedInputIndex = (index: number) => {
      setFocusedInputIndex(index)
      setTimeout(() => {
        inputGroupRef?.current?.focus?.(index)
        const date = [...(valueShow || currentValue || [])]?.[index]
        if (date) {
          if (index === 0) {
            setLeftCalendarDate(date)
            setRightCalendarDate(date.add(1, "month"))
          } else {
            setRightCalendarDate(date)
            setLeftCalendarDate(date.subtract(1, "month"))
          }
        }
      })
    }

    const focusInput = (focus: boolean = true) => {
      if (focus) {
        inputGroupRef.current?.focus?.(focusedInputIndex)
      } else {
        inputGroupRef.current?.blur?.()
      }
    }

    const onConfirmValue = (vs?: Dayjs[], ok?: boolean) => {
      //  when disabled = array, Deal with the problem of changing the time sequence
      const currentOrder =
        !(isArray(disabled) && (disabled[0] || disabled[1])) && order
      const newValue = currentOrder ? getSortedDayjsArray(vs as Dayjs[]) : vs
      setCurrentValue(newValue)
      setValueShow(undefined)
      setInputVal(undefined)

      if (
        isArray(newValue) &&
        isDayjsArrayChange(currentValue as Dayjs[], newValue)
      ) {
        onChange?.(
          newValue.map((t) => t.format(finalFormat)),
          newValue,
        )

        ok && onOk && onOk(
          newValue.map((t) => t.format(finalFormat)),
          newValue,
        )
      }
      tryUpdatePopupVisible(false)
      setTimeout(() => focusInput(false))
    }

    useEffect(() => {
      console.log("valueShow", valueShow)
    }, [valueShow])

    const onSelectTime = (time: Dayjs, focusedInput: number) => {
      const values = valueShow?.slice() || currentValue?.slice() || []
      values[focusedInput] = getFinalValue(values[focusedInput], time)
      setValueShow(values)
      onSelect?.(
        values.map((t) => t.format(finalFormat)),
        values,
      )
      console.log(values, "values")
      if (
        disableConfirm &&
        isArray(values) &&
        isDayjs(values[0]) &&
        isDayjs(values[1])
      ) {
        onConfirmValue(values)
      }
    }

    const onConfirmTimeValue = (ok?: boolean) => {
      if (
        valueShow?.length &&
        (valueShow[0] === undefined || valueShow[1] === undefined)
      ) {
        changeFocusedInputIndex?.(focusedInputIndex === 0 ? 1 : 0)
      } else {
        onConfirmValue?.(valueShow, ok)
      }
    }


    console.log({
      finalFormat,
      showTrigger,
      focusedInputIndex,
      inputVal,
      currentValue,
      valueShow0: valueShow?.[0],
      valueShow1: valueShow?.[1],
      rangeValueHover,
      rangeValueFirst,
      rangeValueSecond,
    })

    return (
      <Trigger
        showArrow={false}
        position={position}
        trigger={"click"}
        colorScheme={"white"}
        maxW={"700px"}
        popupVisible={showTrigger}
        content={
          <div css={wrapCss}>
            {shortcutsShowLeft && <ShortcutsComp
              shortcuts={shortcuts}
              shortcutsPlacementLeft={shortcutsPlacementLeft}
              onClickShortcut={onClickShortcut}
            />}
            <div>
              <div css={rangeBodyCss}>
                {showTimePicker && (
                  <div css={rangePickerCss}>
                    <div>
                      <div css={showTimeHeaderCss}>time</div>
                      {cloneElement(<TimePickerPopup />, {
                        isRangePicker: true,
                        disableConfirm: true,
                        format: "HH:mm:ss",
                        valueShow: valueShow?.[0] || currentValue?.[0],
                        popupVisible: showTrigger,
                        showNowBtn: false,
                        disabledHours: disabledTime?.(dayjs(), "start")
                          .disabledHours,
                        disabledMinutes: disabledTime?.(dayjs(), "start")
                          .disabledMinutes,
                        disabledSeconds: disabledTime?.(dayjs(), "start")
                          .disabledSeconds,
                        onSelect: (_: string, time: Dayjs) => {
                          onSelectTime(time, 0)
                        },
                        onConfirmValue: onConfirmTimeValue,
                        ...timepickerProps,
                        ...tpProps,
                      })}
                    </div>
                    <div>
                      <div css={showTimeHeaderCss}>time</div>
                      {cloneElement(<TimePickerPopup />, {
                        isRangePicker: true,
                        disableConfirm: true,
                        format: "HH:mm:ss",
                        valueShow: valueShow?.[1] || currentValue?.[1],
                        popupVisible: showTrigger,
                        showNowBtn: false,
                        disabledHours: disabledTime?.(dayjs(), "end")
                          .disabledHours,
                        disabledMinutes: disabledTime?.(dayjs(), "end")
                          .disabledMinutes,
                        disabledSeconds: disabledTime?.(dayjs(), "end")
                          .disabledSeconds,
                        onSelect: (_: string, time: Dayjs) => {
                          onSelectTime(time, 1)
                        },
                        onConfirmValue: onConfirmTimeValue,
                        ...timepickerProps,
                        ...tpProps,
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
                      onChange={(v) => {
                        console.log("onChange", v.format(finalFormat))
                      }}
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
                  {shortcutsShowBottom && <ShortcutsComp
                    shortcuts={shortcuts}
                    shortcutsPlacementLeft={shortcutsPlacementLeft}
                    onClickShortcut={onClickShortcut}
                  />}
                  {showTime && (
                    <div css={buttonBoxCss}>
                      <Button
                        variant={"text"}
                        onClick={() => setShowTimePicker(!showTimePicker)}
                      >
                        choose {showTimePicker ? "date" : "time"}
                      </Button>
                      <Button onClick={() => onConfirmTimeValue(true)}>ok</Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        }
        closeOnClick={false}
        clickOutsideToClose
        onVisibleChange={tryUpdatePopupVisible}
      >
        <RangeInput
          {...otherProps}
          ref={ref}
          inputGroupRef={inputGroupRef}
          disabled={disabled}
          value={
            inputVal
              ? inputVal
              : isArray(valueShow) && valueShow.length
                ? [
                  formatTime(valueShow[0], finalFormat),
                  formatTime(valueShow[1], finalFormat),
                ]
                : isArray(currentValue) && currentValue.length
                  ? [
                    formatTime(currentValue[0], finalFormat),
                    formatTime(currentValue[1], finalFormat),
                  ]
                  : []
          }
          focusedInputIndex={focusedInputIndex}
          changeFocusedInputIndex={changeFocusedInputIndex}
          borderColor={colorScheme}
          allowClear={allowClear}
          onClear={() => onClearDate?.()}
          placeholder={placeholder}
          error={error}
          readOnly={readOnly}
          size={size}
          suffix={{ render: <CalendarIcon /> }}
          separator={separator}
          onPressEnter={() => {
            if (isArray(valueShow) && valueShow.length) {
              if (valueShow[0] === undefined || valueShow[1] === undefined) {
                changeFocusedInputIndex(focusedInputIndex === 0 ? 1 : 0)
              } else if (valueShow.length === 2) {
                onConfirmValue(valueShow)
              }
            } else {
              tryUpdatePopupVisible(false)
            }
          }}
          onChange={(value?: string[]) => {
            if (!editable) return
            if (!value) {
              setInputVal(undefined)
              return
            }
            if (!isArray(value)) return
            setInputVal(value)
            const val = value[focusedInputIndex]
            const newValueShow = [...(valueShow || currentValue || [])]
            const setRangeValue =
              focusedInputIndex === 0 ? setRangeValueFirst : setRangeValueSecond
            const setCalendarDate =
              focusedInputIndex === 0
                ? setLeftCalendarDate
                : setRightCalendarDate
            if (isValidTime(val, finalFormat)) {
              const valueDayjs = getDayjsValue(val, finalFormat) as Dayjs
              newValueShow[focusedInputIndex] = valueDayjs
              setValueShow(newValueShow)
              setRangeValue(valueDayjs)
              setCalendarDate(valueDayjs)
              setRangeValueHover(undefined)
              setInputVal(undefined)
            }
          }}
        />
      </Trigger>
    )
  },
)
RangePicker.displayName = "RangePicker"
