import { forwardRef, useCallback, useState } from "react"
import { throttleByRaf } from "@illa-design/system"
import {
  DatePickerProps,
  MonthPickerProps,
  YearPickerProps,
  CommonPickerProps,
  CommonSingleProps,
} from "../interface"
// import { Calendar } from "@illa-design/calendar"
import { Calendar } from "../../../calendar/src/index"
import dayjs from "dayjs"
import { Picker } from "../picker"
import {
  applySinglePickerContentCss,
  triContentCommonCss,
  applyShortContainerCss,
  shortCutsCss,
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
      // shortcuts,
      shortcutsPlacementLeft = false,
      error,
      size = "medium",
      popupVisible,
      onVisibleChange,
      onChange,
      onSelect,
      onClear,
      editable = true,
      onSelectShortcut,
      disabledDate,
      defaultPickerValue = "2021-09-10",

      onOk, // TODO
      defaultValue,
      ...restProps
    } = props

    const shortcuts = [
      {
        text: "a month later",
        value: () => dayjs().add(1, "month"),
      },
    ]

    const [inputVal, setInputVal] = useState<string>()
    const [calendarShortCuts, setCalendarShortCuts] = useState<
      dayjs.Dayjs | "clear"
    >()
    const [shortcutSwitch, setShortcutSwitch] = useState<string>("")

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
      onChange?.(fotmatDate.format("YYYY-MM-DD hh:mm:ss"), fotmatDate)
    }
    const clearDate = () => {
      setInputVal("")
      setCalendarShortCuts("clear")

      onClear?.()
    }

    const handleShortEnter = useCallback(
      throttleByRaf((item) => {
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
          popupVisible={popupVisible}
          onClear={onClear}
          onVisibleChange={onVisibleChange}
          editable={editable}
          onChangeInputVal={changeInputVal}
          pickerContent={
            <div css={applySinglePickerContentCss(shortcutsPlacementLeft)}>
              <Calendar
                panel={true}
                mode={type}
                panelTodayBtn={false}
                css={triContentCommonCss}
                onChange={(date: dayjs.Dayjs) => {
                  changeDate(date)
                  setShortcutSwitch("")
                }}
                selectDayFromProps={calendarShortCuts}
                disabledDate={disabledDate}
                defaultPickerValue={dayjs(defaultPickerValue)}
              />
              {shortcuts && (
                <div css={applyShortContainerCss(shortcutsPlacementLeft)}>
                  {shortcuts.map((item, key) => {
                    return (
                      <div
                        css={shortCutsCss}
                        key={key}
                        onMouseEnter={() => handleShortEnter(item)}
                        onMouseLeave={() => handleShortLeave(item)}
                        onClick={() => {
                          shortcutSwitch !== item.text &&
                            setShortcutSwitch(item.text)
                          changeDate(item.value())
                          onSelectShortcut?.(item)
                        }}
                      >
                        {item.text}
                      </div>
                    )
                  })}
                </div>
              )}
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
