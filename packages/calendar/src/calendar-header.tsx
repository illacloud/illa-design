import { FC, Fragment, useEffect, useState } from "react"
import { Button } from "@illa-design/button"
import {
  NextDoubleIcon,
  NextIcon,
  PreDoubleIcon,
  PreIcon,
} from "@illa-design/icon"
import { Select } from "@illa-design/select"
import { RadioGroup } from "@illa-design/radio"
import { CalendarHeaderProps, selectTimeProps } from "./interface"
import {
  applyHeaderWrapCss,
  buttonHiddenCss,
  headerLeftBtnsCss,
  headerLeftPartCss,
  headerRightBtnsCss,
  headerSmallTextCss,
  headerTextCss,
  modeRadioStyle,
  preNextIconsCss,
  selectCommonCss,
} from "./styles"
import { applyBoxStyle } from "@illa-design/theme"

export const CalendarHeader: FC<CalendarHeaderProps> = props => {
  const {
    allowSelect,
    panel,
    panelTodayBtn,
    panelOperations,
    mode,
    headerRender,
    currentDay,
    headerType,
    onChangeTime,
    onSelectTime,
    onToToday,
    onChangeMode,
    locale,
    monthListLocale,
    onChange,
    onPanelChange,
  } = props

  const [currentYear, setCurrentYear] = useState<number>(-1)
  const [currentMonth, setCurrentMonth] = useState<number>(-1)

  useEffect(() => {
    setCurrentYear(currentDay.year())
    setCurrentMonth(currentDay.month() + 1)
  }, [currentDay])

  const selectTime = (time: selectTimeProps) => {
    const { year, month } = time
    if (year) {
      setCurrentYear(year)
      onSelectTime({ year: year, month: currentMonth })
    }
    if (month) {
      setCurrentMonth(month)
      onSelectTime({ year: currentYear, month: month })
    }
  }

  const modeRadioChange = (radioValue: string) => {
    switch (radioValue) {
      case locale?.month:
        onChangeMode("month")
        break
      case locale?.year:
        onChangeMode("year")
        break
    }
  }

  function HeaderTypeButton() {
    return (
      <div css={preNextIconsCss}>
        <span css={headerTextCss}>
          {currentYear}{" "}
          {mode === "month" && `${monthListLocale[currentMonth - 1]}`}
        </span>
        <Button
          disabled={!allowSelect}
          variant={"text"}
          colorScheme={"gray"}
          onClick={() => onChangeTime("pre")}
          leftIcon={<PreIcon size={"12px"} />}
        />
        <Button
          disabled={!allowSelect}
          variant={"text"}
          colorScheme={"gray"}
          onClick={() => onChangeTime("next")}
          leftIcon={<NextIcon size={"12px"} />}
        />
      </div>
    )
  }

  function HeaderTypeSelect() {
    const yearsList = []
    let baseYear: number | null = currentYear - 10
    for (let i = 0; i < 20; i++) {
      baseYear++
      yearsList.push(baseYear)
    }
    baseYear = null
    const monthList = new Array(12).fill(1).map((mItem, mIdx) => mIdx + 1)

    return (
      <div css={preNextIconsCss}>
        <Select
          disabled={!allowSelect}
          options={yearsList}
          defaultValue={currentYear}
          size={"small"}
          css={selectCommonCss}
          style={{ width: 105 }}
          onChange={(val: number) => selectTime({ year: val })}
        />
        {mode === "month" && (
          <Select
            disabled={!allowSelect}
            options={monthList}
            defaultValue={currentMonth}
            size={"small"}
            css={selectCommonCss}
            style={{ width: 90 }}
            onChange={(val: number) => selectTime({ month: val })}
          />
        )}
      </div>
    )
  }

  return (
    <Fragment>
      {typeof headerRender === "function" ? (
        headerRender({
          value: currentDay,
          pageShowDate: currentDay,
          mode: mode,
          onChange,
          onChangePageDate: onPanelChange,
          onChangeMode,
        })
      ) : (
        <div css={[applyHeaderWrapCss(panel || false), applyBoxStyle(props)]}>
          {panel ? (
            <Fragment>
              <div css={headerLeftBtnsCss}>
                {/* double-pre button */}
                <Button
                  disabled={!allowSelect}
                  variant={"text"}
                  colorScheme={"gray"}
                  css={
                    !panelOperations?.includes("doubleLeft") && buttonHiddenCss
                  }
                  onClick={() => onChangeTime("pre", "year")}
                  leftIcon={<PreDoubleIcon size={"12px"} />}
                />
                {/* pre button */}
                <Button
                  disabled={!allowSelect}
                  variant={"text"}
                  colorScheme={"gray"}
                  css={
                    !(panelOperations?.includes("left") && mode === "day") &&
                    buttonHiddenCss
                  }
                  onClick={() => onChangeTime("pre", "month")}
                  leftIcon={<PreIcon size={"12px"} />}
                />
              </div>

              {mode === "day" && (
                <div css={headerSmallTextCss}>
                  {currentYear} {monthListLocale[currentMonth - 1]}
                </div>
              )}
              {mode === "month" && (
                <div css={headerSmallTextCss}>{currentYear}</div>
              )}
              {mode === "year" && (
                <div css={headerSmallTextCss}>
                  {currentYear - 10}-{currentYear}
                </div>
              )}

              <div css={headerRightBtnsCss}>
                <Button
                  disabled={!allowSelect}
                  variant={"text"}
                  colorScheme={"gray"}
                  css={
                    !(panelOperations?.includes("right") && mode === "day") &&
                    buttonHiddenCss
                  }
                  onClick={() => onChangeTime("next", "month")}
                  leftIcon={<NextIcon size={"12px"} />}
                />
                <Button
                  disabled={!allowSelect}
                  variant={"text"}
                  colorScheme={"gray"}
                  css={
                    !panelOperations?.includes("doubleRight") && buttonHiddenCss
                  }
                  onClick={() => onChangeTime("next", "year")}
                  leftIcon={<NextDoubleIcon size={"12px"} />}
                />
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div css={headerLeftPartCss}>
                {headerType === "button" && <HeaderTypeButton />}
                {headerType === "select" && <HeaderTypeSelect />}
                {panelTodayBtn && (
                  <Button
                    disabled={!allowSelect}
                    colorScheme={"gray"}
                    size={"medium"}
                    onClick={() => onToToday()}
                  >
                    {locale?.today}
                  </Button>
                )}
              </div>
              <div css={modeRadioStyle}>
                <RadioGroup
                  options={[locale?.month, locale?.year]}
                  type="button"
                  size="medium"
                  defaultValue={locale?.month}
                  onChange={modeRadioChange}
                />
              </div>
            </Fragment>
          )}
        </div>
      )}
    </Fragment>
  )
}
