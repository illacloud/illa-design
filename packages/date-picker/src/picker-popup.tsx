import { FC, forwardRef, useMemo } from "react"
import { PickerPopUpProps, ShortcutsProps } from "./interface"
import {
  applyShortContainerCss,
  horShortcuts,
  nowButtonCss,
  popupCss,
  shortCutsCss,
  showTimeContainerCss,
  showTimeHeaderCss,
  singlePickerContentCss,
  triContentCommonCss,
  vertShortcuts,
} from "./style"
import { Calendar } from "@illa-design/calendar"
import { Dayjs } from "dayjs"
import { Button } from "@illa-design/button"
import { TimePickerPopup } from "@illa-design/time-picker"
import { isObject } from "@illa-design/system"
import { getFinalValue } from "./utils"

const ShortcutsComp: FC<ShortcutsProps> = (props) => {
  const {
    shortcuts,
    shortcutsPlacementLeft,
    handleShortEnter,
    handleShortLeave,
    onClickShortcut,
  } = props
  return shortcuts ? (
    <div css={applyShortContainerCss(shortcutsPlacementLeft)}>
      {shortcuts.map((item, key) => {
        return (
          <div
            css={shortCutsCss}
            key={key}
            onMouseEnter={() => handleShortEnter?.(item)}
            onMouseLeave={() => handleShortLeave?.(item)}
            onClick={() => {
              onClickShortcut?.(item)
            }}
          >
            {item.text}
          </div>
        )
      })}
    </div>
  ) : null
}

export const PickerPopUp = forwardRef<HTMLDivElement, PickerPopUpProps>(
  (props, ref) => {
    const {
      shortcuts,
      shortcutsPlacementLeft,
      type,
      disabledDate,
      showTime,
      showNowBtn,
      disabledTime,
      popupVisible,
      valueShow,
      calendarValue,
      calendarShortCuts,
      handleShortEnter,
      handleShortLeave,
      onClickShortcut,
      onClickNow,
      onConfirmValue,
      onChangeDate,
    } = props

    const tpProps = isObject(showTime) ? showTime : {}
    const isBooleanShowTime = typeof showTime === "boolean" ? showTime : false
    const showTimeMerged =
      (isBooleanShowTime || Object.keys(tpProps).length > 0) && type === "day"

    const showCalendarTodayButton = useMemo(() => {
      // if show time select, hide Today button
      if (showTimeMerged) {
        return false
      }
      if (showNowBtn === undefined && type === "day") {
        return true
      } else {
        return showNowBtn && !isBooleanShowTime && !shortcuts?.length
      }
    }, [])

    return (
      <div css={singlePickerContentCss} ref={ref}>
        {shortcutsPlacementLeft && (
          <div css={vertShortcuts}>
            <ShortcutsComp
              shortcuts={shortcuts}
              shortcutsPlacementLeft={shortcutsPlacementLeft}
              handleShortEnter={handleShortEnter}
              handleShortLeave={handleShortLeave}
              onClickShortcut={onClickShortcut}
            />
          </div>
        )}
        <div>
          <Calendar
            panel
            isTodayTarget
            mode={type}
            panelTodayBtn={showCalendarTodayButton}
            _css={triContentCommonCss}
            onChange={(date: Dayjs) => {
              onChangeDate?.(date, valueShow)
            }}
            disabledDate={disabledDate}
            defaultDate={calendarValue}
            defaultSelectedDate={calendarShortCuts}
          />
          {(shortcuts || showTime) && (
            <div css={horShortcuts}>
              {shortcuts && !shortcutsPlacementLeft ? (
                <ShortcutsComp
                  shortcuts={shortcuts}
                  shortcutsPlacementLeft={shortcutsPlacementLeft}
                  handleShortEnter={handleShortEnter}
                  handleShortLeave={handleShortLeave}
                  onClickShortcut={onClickShortcut}
                />
              ) : showNowBtn ? (
                <Button
                  colorScheme="gray"
                  css={nowButtonCss}
                  onClick={onClickNow}
                >
                  Now
                </Button>
              ) : null}
            </div>
          )}
        </div>
        {showTimeMerged && (
          <div css={showTimeContainerCss}>
            <div css={showTimeHeaderCss}>time</div>
            <div css={popupCss}>
              <TimePickerPopup
                scrollSticky
                isRangePicker={false}
                showNowBtn={false}
                format={"HH:mm:ss"}
                valueShow={valueShow}
                popupVisible={popupVisible}
                disabledHours={disabledTime?.().disabledHours}
                disabledMinutes={disabledTime?.().disabledMinutes}
                disabledSeconds={disabledTime?.().disabledSeconds}
                onConfirmValue={(time: Dayjs) => {
                  onConfirmValue?.(getFinalValue(valueShow, time))
                }}
                onSelect={(valueString: string, value: Dayjs) => {
                  onChangeDate?.(valueShow, value)
                }}
                {...tpProps}
              />
            </div>
          </div>
        )}
      </div>
    )
  },
)

PickerPopUp.displayName = "PickerPopUp"
