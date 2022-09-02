import { cloneElement, forwardRef, useMemo, useState } from "react"
import { PickerPopUpProps, RangePickerPopUpProps } from "./interface"
import {
  applyRangeFooterCss,
  buttonBoxCss,
  horShortcuts,
  nowButtonCss,
  popupCss,
  rangeBodyCss,
  rangeLeftContentCss,
  rangePickerCss,
  rangeRightContentCss,
  showTimeContainerCss,
  showTimeHeaderCss,
  singlePickerContentCss,
  triContentCommonCss,
  vertShortcuts,
  wrapCss,
} from "./style"
import { Calendar } from "@illa-design/calendar"
import dayjs, { Dayjs } from "dayjs"
import { Button } from "@illa-design/button"
import { TimePickerPopup } from "@illa-design/time-picker"
import { isObject } from "@illa-design/system"
import { getFinalValue } from "./utils"
import { ShortcutsComp } from "./shortcut"
import { css } from "@emotion/react/dist/emotion-react.cjs"

export const RangePickerPopUp = forwardRef<
  HTMLDivElement,
  RangePickerPopUpProps
>((props, ref) => {
  const {
    shortcuts,
    shortcutsPlacementLeft,
    disabledDate,
    showTime,
    disabledTime,
    popupVisible,
    valueShow,
    timepickerProps,
    onClickShortcut,
    leftCalendarDate,
    rightCalendarDate,
    rangeValueFirst,
    rangeValueSecond,
    rangeValueHover,
    handleRangeVal,
    changeHeader,
    onSelectTime,
    onConfirmTimeValue,
  } = props

  const [showTimePicker, setShowTimePicker] = useState<boolean>(false)

  const tpProps = typeof showTime === "object" ? showTime : {}

  const shortcutsShowLeft = shortcuts?.length && shortcutsPlacementLeft
  const shortcutsShowBottom = shortcuts?.length && !shortcutsPlacementLeft

  return (
    <div css={wrapCss} ref={ref}>
      {shortcutsShowLeft && (
        <ShortcutsComp
          shortcuts={shortcuts}
          shortcutsPlacementLeft={shortcutsPlacementLeft}
          onClickShortcut={onClickShortcut}
        />
      )}
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
                  valueShow: valueShow?.[0],
                  popupVisible: popupVisible,
                  showNowBtn: false,
                  disabledHours: disabledTime?.(dayjs(), "start").disabledHours,
                  disabledMinutes: disabledTime?.(dayjs(), "start")
                    .disabledMinutes,
                  disabledSeconds: disabledTime?.(dayjs(), "start")
                    .disabledSeconds,
                  onSelect: (_: string, time: Dayjs) => {
                    onSelectTime?.(time, 0)
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
                  valueShow: valueShow?.[1],
                  popupVisible: popupVisible,
                  showNowBtn: false,
                  disabledHours: disabledTime?.(dayjs(), "end").disabledHours,
                  disabledMinutes: disabledTime?.(dayjs(), "end")
                    .disabledMinutes,
                  disabledSeconds: disabledTime?.(dayjs(), "end")
                    .disabledSeconds,
                  onSelect: (_: string, time: Dayjs) => {
                    onSelectTime?.(time, 1)
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
                onPanelChange={changeHeader}
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
                onPanelChange={changeHeader}
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
          <div css={applyRangeFooterCss(!!showTime, !!shortcutsShowBottom)}>
            {shortcutsShowBottom && (
              <ShortcutsComp
                shortcuts={shortcuts}
                shortcutsPlacementLeft={shortcutsPlacementLeft}
                onClickShortcut={onClickShortcut}
              />
            )}
            {showTime && (
              <div css={buttonBoxCss}>
                <Button
                  variant={"text"}
                  onClick={() => setShowTimePicker(!showTimePicker)}
                >
                  choose {showTimePicker ? "date" : "time"}
                </Button>
                <Button onClick={() => onConfirmTimeValue?.(true)}>ok</Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
})

RangePickerPopUp.displayName = "RangePickerPopUp"
