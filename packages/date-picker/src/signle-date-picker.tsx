import {
  ChangeEvent,
  FC,
  useRef,
  useState,
  MouseEvent,
  useEffect,
  forwardRef,
} from "react"
import {
  GetHeaderOperationsFun,
  DatePickerModeType,
  SingleDatePickerProps,
} from "./interface"
import { PickerContext } from "./context"
import { Trigger } from "@illa-design/trigger"
import { DateInput } from "./input/singleInput"
import { getFormat } from "./utils/uiHelpers"
import { Dayjs, UnitType } from "dayjs"
import { getDefaultValue, getLocaleDayjsValue } from "./utils/dateHelper"
import {
  dayjsPro,
  getDayjsValue,
  getNow,
  getValueWithTime,
  isDayjsChange,
  isObject,
  toLocal,
  toTimezone,
  usePrevious,
} from "@illa-design/system"
import { CalendarIcon } from "@illa-design/icon"
import { BasicFooterSection } from "./panels/basic-footer-section"
import { DatePickerPanel } from "./panels/date"
import { applyBoxStyle } from "@illa-design/theme"

export const SingleDatePicker = forwardRef<
  HTMLDivElement,
  SingleDatePickerProps
>((props, ref) => {
  const {
    allowClear = true,
    placeholder,
    disabled,
    position = "bottom-start",
    error,
    editable = true,
    triggerProps,
    onSelect,
    onVisibleChange,
    value: propsValue,
    onChange,
    disabledDate,
    extra,
    defaultPickerValue,
    pickerValue,
    onPickerValueChange,
    utcOffset,
    timezone,
    defaultValue,
    size = "medium",
    colorScheme = "blue",
    inputSuffix,
    showTime,
    showNowBtn = true,
    onOk,
    readonly = false,
  } = props

  const refInput = useRef<HTMLInputElement>(null)

  const weekStart = 0

  const realFormat = getFormat("date", props.format, !!showTime)
  let format = realFormat
  if (typeof format === "function") {
    format = showTime ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD"
  }

  const [value, setValue] = useState<Dayjs | undefined>(
    getDefaultValue(
      format,
      propsValue,
      defaultValue,
      utcOffset,
      timezone,
    ) as Dayjs,
  )
  const [popupVisible, setPopupVisible] = useState<boolean | undefined>(
    !!props.popupVisible,
  )
  const mergedPopupVisible =
    "popupVisible" in props ? props.popupVisible : popupVisible
  const mergedValue =
    "value" in props
      ? (getDayjsValue(
          propsValue as Dayjs,
          format,
          utcOffset,
          timezone,
        ) as Dayjs)
      : value

  const defaultPageShowDate =
    mergedValue ||
    (getDayjsValue(defaultPickerValue as Dayjs, format) as Dayjs) ||
    getNow()

  const [inputValue, setInputValue] = useState<string | undefined>()
  const [valueShow, setValueShow] = useState<Dayjs>()
  const [pageShowDate, setPageShowDate] = useState<Dayjs | undefined>(
    defaultPageShowDate,
  )
  const mergedPageShowDate =
    (getDayjsValue(pickerValue as Dayjs, format) as Dayjs) || pageShowDate

  const panelValue = valueShow || mergedValue
  const [panelMode, setPanelMode] = useState<DatePickerModeType>("date")

  const defaultTimeValue =
    (isObject(showTime) &&
      (getDayjsValue(
        showTime.defaultValue as Dayjs,
        showTime.format || "HH:mm:ss",
        utcOffset,
        timezone,
      ) as Dayjs)) ||
    getNow(utcOffset, timezone)

  const timeValue = panelValue || defaultTimeValue

  function focusInput() {
    refInput.current?.focus?.()
  }

  function blurInput() {
    refInput.current?.blur?.()
  }

  const previousUtcOffset = usePrevious(utcOffset)
  const previousTimezone = usePrevious(timezone)

  const isDidMount = useRef<boolean>(false)

  useEffect(() => {
    if (isDidMount.current) {
      if (
        value &&
        (previousUtcOffset !== utcOffset || timezone !== previousTimezone)
      ) {
        const localValue = toLocal(value, previousUtcOffset, previousTimezone)
        setValue(toTimezone(localValue, utcOffset, timezone))
      }
    } else {
      isDidMount.current = true
    }
  }, [previousTimezone, previousUtcOffset, timezone, utcOffset, value])

  useEffect(() => {
    setInputValue(undefined)

    if (mergedPopupVisible) {
      setPageShowDate(defaultPageShowDate)
    } else {
      setValueShow(undefined)
      setTimeout(() => {
        setPanelMode("date")
        blurInput()
      }, 100)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mergedPopupVisible])

  function visibleChange(visible: boolean) {
    if (visible) {
      setOpen(visible, () => {
        focusInput()
      })
    } else {
      setOpen(false)
    }
  }

  function handlePickerValueChange(v?: Dayjs) {
    const finalValue =
      typeof format === "function" ? format(v as Dayjs) : v?.format(format)
    onPickerValueChange && onPickerValueChange(finalValue, v)
  }

  function setOpen(visible?: boolean, callback?: () => void) {
    setPopupVisible(visible)
    onVisibleChange && onVisibleChange(visible)
    callback && callback()
  }

  function onClear(e: MouseEvent<HTMLSpanElement>) {
    e.stopPropagation()
    setValue(undefined)
    setValueShow(undefined)
    onHandleChange(undefined)
    props.onClear && props.onClear()
  }

  function onClickConfirmBtn() {
    const pv = getLocaleDayjsValue(panelValue, "en-us")
    onConfirmValue()
    const finalValue =
      typeof format === "function" ? format(pv as Dayjs) : pv?.format(format)

    onOk && onOk(pv && finalValue, pv)
  }

  function onConfirmValue() {
    setValue(panelValue)
    onHandleChange(panelValue)
    setOpen(false)
  }

  function onHandleSelect(_: string | undefined, date?: Dayjs, now?: boolean) {
    setInputValue(undefined)
    if (showTime) {
      const newTime = now ? date : getValueWithTime(date as Dayjs, timeValue)
      setValueShow(newTime)
      setPageShowDate(newTime)

      const localTime = getLocaleDayjsValue(
        toLocal(newTime as Dayjs, utcOffset, timezone),
        "en-us",
      )
      const finalValue =
        typeof format === "function"
          ? format(localTime as Dayjs)
          : localTime?.format(format)

      onSelect && onSelect(finalValue, localTime)
    } else {
      const localTime = getLocaleDayjsValue(
        toLocal(date as Dayjs, utcOffset, timezone).locale("en-us"),
        "en-us",
      )
      const finalValue =
        typeof format === "function"
          ? format(localTime as Dayjs)
          : localTime?.format(format)
      onSelect &&
        onSelect(
          localTime ? localTime.format(finalValue) : undefined,
          localTime as Dayjs,
        )
      setValue(date)
      onHandleChange(date)
      setOpen(false)
    }
  }

  function onHandleChange(newValue: Dayjs | undefined) {
    if (isDayjsChange(newValue, mergedValue)) {
      const finalValue =
        typeof format === "function"
          ? format(newValue as Dayjs)
          : newValue?.format(format)

      onChange && onChange(finalValue, newValue as Dayjs)
    }
  }

  function onTimePickerSelect(_: string, time: Dayjs) {
    const _valueShow = panelValue || getNow(utcOffset, timezone)
    const newValueShow = getValueWithTime(_valueShow, time)
    setValueShow(newValueShow)

    const localNewValueShow = getLocaleDayjsValue(
      toLocal(newValueShow, utcOffset, timezone),
      "en-us",
    )
    const finalValue =
      typeof format === "function"
        ? format(localNewValueShow as Dayjs)
        : localNewValueShow?.format(format)
    onSelect && onSelect(finalValue, localNewValueShow)
  }

  function isValid(time: string | Dayjs): boolean {
    return (
      typeof time === "string" &&
      (typeof format === "function"
        ? format(dayjsPro(time)) === time
        : dayjsPro(time, format).format(format) === time) &&
      (typeof disabledDate === "function"
        ? !disabledDate(
            typeof format === "function"
              ? dayjsPro(format(dayjsPro(time)))
              : dayjsPro(time, format),
          )
        : true)
    )
  }

  function onChangeInput(e: ChangeEvent<HTMLInputElement>) {
    const niv = e.target.value
    setInputValue(niv)
    if (!mergedPopupVisible) {
      setOpen(true)
    }
    if (isValid(niv)) {
      const newValue = getDayjsValue(
        niv,
        format as string,
        utcOffset,
        timezone,
      ) as Dayjs
      setValueShow(newValue)
      setPageShowDate(newValue)
      setInputValue(undefined)
    }
  }

  function onPressEnter() {
    if (panelValue) {
      onConfirmValue()
      blurInput()
    } else if (mergedPopupVisible) {
      setOpen(false)
    }
  }

  function changePageShowDate(type: "prev" | "next", unit: UnitType, num = 1) {
    let newPageShowDate
    if (type === "prev") {
      // @ts-ignore
      newPageShowDate = mergedPageShowDate.subtract(num, unit)
    }
    if (type === "next") {
      // @ts-ignore
      newPageShowDate = mergedPageShowDate.add(num, unit)
    }

    handlePickerValueChange(newPageShowDate)
    setPageShowDate(newPageShowDate)
  }

  function getHeaderOperations(pickMode: DatePickerModeType = "date") {
    if (pickMode === "date" || pickMode === "week") {
      return {
        onPrev: () => changePageShowDate("prev", "month"),
        onNext: () => changePageShowDate("next", "month"),
        onSuperPrev: () => changePageShowDate("prev", "year"),
        onSuperNext: () => changePageShowDate("next", "year"),
      }
    }
    if (pickMode === "month" || pickMode === "quarter") {
      return {
        onSuperPrev: () => changePageShowDate("prev", "year"),
        onSuperNext: () => changePageShowDate("next", "year"),
      }
    }
    if (pickMode === "year") {
      return {
        onSuperPrev: () => changePageShowDate("prev", "year", 10),
        onSuperNext: () => changePageShowDate("next", "year", 10),
      }
    }
  }

  function onSelectNow() {
    const now = getLocaleDayjsValue(getNow(utcOffset, timezone), "en-us")
    handlePickerValueChange(now)
    const finalValue =
      typeof format === "function" ? format(now as Dayjs) : now?.format(format)
    onHandleSelect(finalValue, now, true)
  }

  const suffixIcon =
    inputSuffix === null ? null : inputSuffix || <CalendarIcon />

  const shouldShowFooter =
    (showTime && panelMode === "date") ||
    extra ||
    (!showTime && panelMode === "date" && showNowBtn)

  return (
    <PickerContext.Provider value={{ utcOffset, timezone, weekStart }}>
      <Trigger
        content={
          <>
            <DatePickerPanel
              {...props}
              {...getHeaderOperations()}
              getHeaderOperations={
                getHeaderOperations as GetHeaderOperationsFun
              }
              onSelect={onHandleSelect}
              onTimePickerSelect={onTimePickerSelect}
              popupVisible={mergedPopupVisible}
              format={format}
              value={panelValue}
              pageShowDate={mergedPageShowDate}
              setPageShowDate={(v) => {
                setPageShowDate(v)
                handlePickerValueChange(v)
              }}
              timeValue={timeValue}
              isTimePanel={false}
              panelMode={panelMode}
              setPanelMode={setPanelMode}
            />
            {shouldShowFooter && (
              <BasicFooterSection
                disabled={!panelValue}
                onClickConfirmBtn={onClickConfirmBtn}
                extra={extra}
                showNowBtn={showNowBtn}
                mode={panelMode}
                onSelectNow={onSelectNow}
                showTime={!!showTime}
              />
            )}
          </>
        }
        trigger="click"
        position={position}
        disabled={disabled || readonly}
        onVisibleChange={visibleChange}
        popupVisible={mergedPopupVisible}
        colorScheme="white"
        showArrow={false}
        withoutPadding
        {...triggerProps}
      >
        <div css={applyBoxStyle(props)} ref={ref}>
          <DateInput
            ref={refInput}
            placeholder={placeholder as string | undefined}
            popupVisible={mergedPopupVisible}
            value={valueShow || mergedValue}
            inputValue={inputValue}
            onChange={onChangeInput}
            format={realFormat}
            disabled={disabled}
            error={error}
            size={size}
            colorScheme={colorScheme}
            onPressEnter={onPressEnter}
            onClear={onClear}
            allowClear={allowClear}
            editable={editable || !readonly}
            suffixIcon={suffixIcon}
          />
        </div>
      </Trigger>
    </PickerContext.Provider>
  )
})

SingleDatePicker.displayName = "SingleDatePicker"
