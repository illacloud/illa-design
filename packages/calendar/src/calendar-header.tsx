import { FC, Fragment, useEffect, useState } from "react"
import { CalendarHeaderProps, selectTimeProps } from "./interface"
import { Button } from "@illa-design/button"
import {
  PreIcon,
  NextIcon,
  PreDoubleIcon,
  NextDoubleIcon,
} from "@illa-design/icon"
import { Select } from "@illa-design/select"
import {
  headerLeftPartCss,
  headerRightPartCss,
  headerTextCss,
  headerSmallTextCss,
  preNextIconsCss,
  selectCommonCss,
  applyHeaderWrapCss,
  applyModeButtonCss,
} from "./styles"
import dayjs from "dayjs"

export const CalendarHeader: FC<CalendarHeaderProps> = (props) => {
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
  } = props

  const [currentYear, setCurrentYear] = useState<number>(-1)
  const [currentMonth, setCurrentMonth] = useState<number>(-1)
  const [doSelect, setDoSelect] = useState<boolean>(false)

  useEffect(() => {
    setCurrentYear(dayjs(currentDay).year())
    setCurrentMonth(dayjs(currentDay).month() + 1)
  }, [currentDay])

  const selectTime = (time: selectTimeProps) => {
    const { year, month } = time
    year && setCurrentYear(year)
    month && setCurrentMonth(month)
    setDoSelect(true)
  }

  useEffect(() => {
    if (!doSelect) {
      return
    }
    onSelectTime({ year: currentYear, month: currentMonth })
    setDoSelect(false)
  }, [doSelect])

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
        >
          <PreIcon size={"12px"} />
        </Button>
        <Button
          disabled={!allowSelect}
          variant={"text"}
          colorScheme={"gray"}
          onClick={() => onChangeTime("next")}
        >
          <NextIcon size={"12px"} />
        </Button>
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
          onChange={(val) => selectTime({ year: val })}
        />
        {mode === "month" && (
          <Select
            disabled={!allowSelect}
            options={monthList}
            defaultValue={currentMonth}
            size={"small"}
            css={selectCommonCss}
            style={{ width: 90 }}
            onChange={(val) => selectTime({ month: val })}
          />
        )}
      </div>
    )
  }

  return (
    <Fragment>
      {headerRender ? (
        headerRender
      ) : (
        <div css={applyHeaderWrapCss(panel || false)}>
          {panel ? (
            <Fragment>
              <div>
                {/* double-pre button */}
                {panelOperations?.includes("double-left") ? (
                  <Button
                    disabled={!allowSelect}
                    variant={"text"}
                    colorScheme={"gray"}
                    onClick={() => onChangeTime("pre", "year")}
                  >
                    <PreDoubleIcon size={"12px"} />
                  </Button>
                ) : null}
                {/* pre button */}
                {panelOperations?.includes("left") && mode === "day" ? (
                  <Button
                    disabled={!allowSelect}
                    variant={"text"}
                    colorScheme={"gray"}
                    onClick={() => onChangeTime("pre", "month")}
                  >
                    <PreIcon size={"12px"} />
                  </Button>
                ) : null}
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

              <div>
                {/* next button */}
                {panelOperations?.includes("right") && mode === "day" ? (
                  <Button
                    disabled={!allowSelect}
                    variant={"text"}
                    colorScheme={"gray"}
                    onClick={() => onChangeTime("next", "month")}
                  >
                    <NextIcon size={"12px"} />
                  </Button>
                ) : null}
                {/* double-next button */}
                {panelOperations?.includes("double-right") ? (
                  <Button
                    disabled={!allowSelect}
                    variant={"text"}
                    colorScheme={"gray"}
                    onClick={() => onChangeTime("next", "year")}
                  >
                    <NextDoubleIcon size={"12px"} />
                  </Button>
                ) : null}
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
              <div css={headerRightPartCss}>
                <div
                  css={applyModeButtonCss(mode === "month")}
                  onClick={() => onChangeMode("month")}
                >
                  {locale?.month}
                </div>
                <div
                  css={applyModeButtonCss(mode === "year")}
                  onClick={() => onChangeMode("year")}
                >
                  {locale?.year}
                </div>
              </div>
            </Fragment>
          )}
        </div>
      )}
    </Fragment>
  )
}
