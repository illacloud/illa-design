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
  SingleQuarterPickerProps,
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
  isDayjsChange,
  toLocal,
  toTimezone,
  usePrevious,
} from "@illa-design/system"
import { CalendarIcon } from "@illa-design/icon"
import { BasicFooterSection } from "./panels/basic-footer-section"
import { QuarterPickerPanel } from "./panels/quarter"
import { applyBoxStyle } from "@illa-design/theme"

export const SingleQuarterPicker = forwardRef<
  HTMLDivElement,
  SingleQuarterPickerProps
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
    onOk,
    readonly = false,
  } = props

  const refInput = useRef<HTMLInputElement>(null)

  const weekStart = 0

  const realFormat = getFormat("quarter", props.format) as string
  let format = realFormat

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
  const [panelMode, setPanelMode] = useState<DatePickerModeType>("quarter")

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
        setPanelMode("quarter")
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
    onPickerValueChange && onPickerValueChange(v?.format(format), v)
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
    onOk && onOk(pv && pv.format(format), pv)
  }

  function onConfirmValue() {
    setValue(panelValue)
    onHandleChange(panelValue)
    setOpen(false)
  }

  function onHandleSelect(_: string | undefined, date?: Dayjs) {
    setInputValue(undefined)
    const localTime = getLocaleDayjsValue(
      toLocal(date as Dayjs, utcOffset, timezone).locale("en-us"),
      "en-us",
    )
    onSelect &&
      onSelect(
        localTime ? localTime.format(format) : undefined,
        localTime as Dayjs,
      )
    setValue(date)
    onHandleChange(date)
    setOpen(false)
  }

  function onHandleChange(newValue: Dayjs | undefined) {
    if (isDayjsChange(newValue, mergedValue)) {
      onChange &&
        onChange((newValue as Dayjs).format(format), newValue as Dayjs)
    }
  }

  function isValid(time: string | Dayjs): boolean {
    return (
      typeof time === "string" &&
      dayjsPro(time, format).format(format) === time &&
      (typeof disabledDate === "function"
        ? !disabledDate(dayjsPro(time, format))
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
      const newValue = getDayjsValue(niv, format, utcOffset, timezone) as Dayjs
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

  function getHeaderOperations(pickMode: DatePickerModeType = "quarter") {
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
    onHandleSelect(now?.format(format), now)
  }

  const suffixIcon =
    inputSuffix === null ? null : inputSuffix || <CalendarIcon />

  return (
    <PickerContext.Provider value={{ utcOffset, timezone, weekStart }}>
      <Trigger
        content={
          <>
            <QuarterPickerPanel
              {...props}
              {...getHeaderOperations()}
              getHeaderOperations={
                getHeaderOperations as GetHeaderOperationsFun
              }
              onSelect={onHandleSelect}
              popupVisible={mergedPopupVisible}
              format={format}
              value={panelValue}
              pageShowDate={mergedPageShowDate}
              setPageShowDate={(v) => {
                setPageShowDate(v)
                handlePickerValueChange(v)
              }}
              panelMode={panelMode}
              setPanelMode={setPanelMode}
            />
            {!!extra && (
              <BasicFooterSection
                disabled={!panelValue}
                onClickConfirmBtn={onClickConfirmBtn}
                extra={extra}
                mode={panelMode}
                onSelectNow={onSelectNow}
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

SingleQuarterPicker.displayName = "SingleQuarterPicker"
