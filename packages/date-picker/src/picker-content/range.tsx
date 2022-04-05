import { forwardRef, useState } from "react"
import { RangePickerProps } from "../interface"
// import { Calendar } from "@illa-design/calendar"
import { Calendar } from "../../../calendar/src/index"
import dayjs from "dayjs"
import { PickerRange } from "../picker-range"
import { css } from "@emotion/react"
import {
  triContentCommonCss,
  rangeLeftContentCss,
  rangeRightContentCss,
} from "../style"

export const RangePicker = forwardRef<HTMLDivElement, RangePickerProps>(
  (props, ref) => {
    const {
      _css,
      disabled,
      allowClear = true,

      placeholder = [],
      position = "bl",
      size = "medium",
      onChange,
      onSelect,
      onVisibleChange,
      onClear,
      onSelectShortcut,
      onOk,
      defaultValue,

      // separator

      ...restProps
    } = props

    const [leftCalendarDate, setLeftCalendarDate] = useState<dayjs.Dayjs>(
      dayjs(
        `${dayjs().year()}-${dayjs().month() + 1}-${
          dayjs().date() > 28 ? 28 : dayjs().date()
        }`,
      ),
    )
    const [rightCalendarDate, setRightCalendarDate] = useState<dayjs.Dayjs>(
      dayjs(
        `${dayjs().year()}-${dayjs().month() + 2}-${
          dayjs().date() > 28 ? 28 : dayjs().date()
        }`,
      ),
    )

    const [preChangeValue, setPreChangeValue] = useState<number>(0)

    const [rangeValueFirst, setRangeValueFirst] = useState<number>(0)
    const [rangeValueSecond, setRangeValueSecond] = useState<number>(0)
    const [rangeValueHover, setRangeValueHover] = useState<number>(0)

    const [inputVal, setInputVal] = useState<string>()

    const clearDate = () => {
      setInputVal("")
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

    return (
      <div ref={ref} css={_css} {...restProps}>
        <PickerRange
          disabled={disabled}
          allowClear={allowClear}
          inputVal={inputVal}
          onClearDate={clearDate}
          placeholder={placeholder}
          position={position}
          pickerContent={
            <>
              <Calendar
                panel={true}
                mode={"day"}
                css={css`
                  ${triContentCommonCss};
                  ${rangeLeftContentCss}
                `}
                panelOperations={["doubleLeft", "left"]}
                panelTodayBtn={false}
                onPanelChange={(date: dayjs.Dayjs) => changeHeader(date)}
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
                css={css`
                  ${triContentCommonCss};
                  ${rangeRightContentCss}
                `}
                panelOperations={["doubleRight", "right"]}
                panelTodayBtn={false}
                onPanelChange={(date: dayjs.Dayjs) => changeHeader(date)}
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
        />
      </div>
    )
  },
)

RangePicker.displayName = "RangePicker"
