import { forwardRef, useCallback, useEffect, useState } from "react"
import { throttleByRaf } from "@illa-design/system"
import { Button } from "@illa-design/button"
import {
  DatePickerProps,
  MonthPickerProps,
  YearPickerProps,
  CommonSingleProps,
} from "../interface"
// import { Calendar } from "@illa-design/calendar"
import { Calendar } from "../../../calendar/src/index"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import tz from "dayjs/plugin/timezone"
import { Picker } from "../picker"
import {
  applySinglePickerContentCss,
  triContentCommonCss,
  applyShortContainerCss,
  shortCutsCss,
  selectersContainerCss,
  showTimeContainerCss,
  showTimeHeaderCss,
  showTimeContentCss,
  laneItemCss,
  scrollItemCss,
  applyPickerFooterCss,
  okButtonCss,
} from "../style"

const CommonPicker = forwardRef<HTMLDivElement, CommonSingleProps>(
  (props, ref) => {
    const {
      type,
      _css,
      disabled = false,
      allowClear = true,
      position = "bl",
      placeholder = "",
      shortcuts,
      shortcutsPlacementLeft = false,
      error,
      size = "medium",
      popupVisible = false,
      onVisibleChange,
      onChange,
      onSelect,
      onClear,
      editable = true,
      onSelectShortcut,
      disabledDate,
      defaultPickerValue,
      showTime = true,
      onOk,
      format = "YYYY-MM-DD",
      value,
      defaultValue,
      showNowBtn = true,
      // disabledTime, // TODO

      ...restProps
    } = props

    let initValue =
      value || defaultValue
        ? dayjs(value || defaultValue).format(format as string)
        : ""
    const [inputVal, setInputVal] = useState<string>(initValue)
    const [calendarShortCuts, setCalendarShortCuts] = useState<
      dayjs.Dayjs | "clear"
    >()
    const [shortcutSwitch, setShortcutSwitch] = useState<string>("")
    const [showTrigger, setShowTrigger] = useState<boolean>(popupVisible)
    const mergedDefaultValue = value || defaultPickerValue
    const showTimeMerged = showTime && type === "day"

    // dayjs.extend(utc)
    // dayjs.extend(tz)
    // dayjs.tz.setDefault("Asia/Tokyo")

    const changeDate = (date: dayjs.Dayjs) => {
      let fotmatDate = dayjs(date)
      let val
      switch (type) {
        case "day":
          val = fotmatDate.format("YYYY-MM-DD")
          break
        case "month":
          val = fotmatDate.format("YYYY-MM")
          break
        case "year":
          val = fotmatDate.format("YYYY")
          break
        default:
          val = fotmatDate.format("YYYY-MM-DD")
      }
      setInputVal(val)

      onSelect?.(fotmatDate.format("YYYY-MM-DD hh:mm:ss"), fotmatDate)
      if (!showTimeMerged) {
        onChange?.(fotmatDate.format("YYYY-MM-DD hh:mm:ss"), fotmatDate)
        setShowTrigger(false)
      }
    }
    const clearDate = () => {
      setInputVal("")
      setCalendarShortCuts("clear")

      onClear?.()
      setShowTrigger(false)
    }

    const handleShortEnter = useCallback(
      throttleByRaf((item: any) => {
        if (item.text === shortcutSwitch) return
        setCalendarShortCuts(item.value())
      }),
      [calendarShortCuts],
    )

    const handleShortLeave = (item: any) => {
      if (item.text === shortcutSwitch) return
      setCalendarShortCuts("clear")
    }

    const changeInputVal = (value: string) => {
      setInputVal(value)
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
                  if (shortcutSwitch !== item.text) {
                    setShortcutSwitch(
                      typeof item.text === "string" ? item.text : "",
                    )
                  }
                  changeDate(item.value() as dayjs.Dayjs)
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
          onChangeInputVal={changeInputVal}
          pickerContent={
            <div css={applySinglePickerContentCss(shortcutsPlacementLeft)}>
              <div css={selectersContainerCss}>
                {shortcutsPlacementLeft && <ShortcutsCompt />}
                <Calendar
                  panel={true}
                  mode={type}
                  panelTodayBtn={
                    showNowBtn && shortcuts && !shortcutsPlacementLeft
                  }
                  css={triContentCommonCss}
                  onChange={(date: dayjs.Dayjs) => {
                    changeDate(date)
                    setShortcutSwitch("")
                  }}
                  disabledDate={disabledDate}
                  selectDayFromProps={calendarShortCuts}
                  defaultPickerValue={dayjs(mergedDefaultValue)}
                />
                {showTimeMerged && (
                  <div css={showTimeContainerCss}>
                    <div css={showTimeHeaderCss}>time</div>
                    <div css={showTimeContentCss}>
                      <div css={laneItemCss}>
                        {new Array(24).fill(1).map((item, idx) => {
                          return (
                            <div css={scrollItemCss} key={idx}>
                              {idx < 9 && "0"}
                              {idx + 1}
                            </div>
                          )
                        })}
                      </div>
                      <div css={laneItemCss}>
                        {new Array(60).fill(1).map((item, idx) => {
                          return (
                            <div css={scrollItemCss} key={idx}>
                              {idx < 9 && "0"}
                              {idx + 1}
                            </div>
                          )
                        })}
                      </div>
                      <div css={laneItemCss}>
                        {new Array(60).fill(1).map((item, idx) => {
                          return (
                            <div css={scrollItemCss} key={idx}>
                              {idx < 9 && "0"}
                              {idx + 1}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {(shortcuts && !shortcutsPlacementLeft) ||
              showTimeMerged ||
              showNowBtn ? (
                <div css={applyPickerFooterCss(showTimeMerged, showNowBtn)}>
                  {shortcuts && !shortcutsPlacementLeft && <ShortcutsCompt />}
                  {!(shortcuts && !shortcutsPlacementLeft) && showNowBtn && (
                    <div
                      css={shortCutsCss}
                      onClick={() => {
                        changeDate(dayjs())
                        setShowTrigger(false)
                      }}
                    >
                      Now
                    </div>
                  )}
                  {showTimeMerged && (
                    <Button
                      css={okButtonCss}
                      onClick={() => {
                        onChange?.(inputVal, dayjs(inputVal))
                        onOk?.(inputVal, dayjs(inputVal))
                        setShowTrigger(false)
                      }}
                    >
                      OK
                    </Button>
                  )}
                </div>
              ) : null}
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
