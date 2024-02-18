import {
  ChangeEvent,
  FC,
  useRef,
  useState,
  MouseEvent,
  useEffect,
  forwardRef,
} from "react"
import { SingleYearPickerProps } from "./interface"
import { PickerContext } from "./context"
import { Trigger } from "@illa-design/trigger"
import { DateInput } from "./input/singleInput"
import { getFormat } from "./utils/uiHelpers"
import { Dayjs } from "dayjs"
import { getDefaultValue, getLocaleDayjsValue } from "./utils/dateHelper"
import { YearPickerPanel } from "./panels/year"
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
import { applyBoxStyle } from "@illa-design/theme"

export const SingleYearPicker = forwardRef<
  HTMLDivElement,
  SingleYearPickerProps
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
    readonly = false,
  } = props

  const refInput = useRef<HTMLInputElement>(null)

  const weekStart = 0

  const realFormat = getFormat("year", props.format) as string
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
  const [pageShowDate, setPageShowDate] = useState<Dayjs>(defaultPageShowDate)
  const mergedPageShowDate =
    (getDayjsValue(pickerValue as Dayjs, format) as Dayjs) || pageShowDate

  const panelValue = valueShow || mergedValue

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
        blurInput()
      }, 100)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mergedPopupVisible])

  function setOpen(visible?: boolean, callback?: () => void) {
    setPopupVisible(visible)
    onVisibleChange && onVisibleChange(visible)
    callback && callback()
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

  function onHandleChange(newValue: Dayjs | undefined) {
    if (isDayjsChange(newValue, mergedValue)) {
      onChange &&
        onChange((newValue as Dayjs).format(format), newValue as Dayjs)
    }
  }

  function onConfirmValue() {
    setValue(panelValue)
    onHandleChange(panelValue)
    setOpen(false)
  }

  function onPressEnter() {
    if (panelValue) {
      onConfirmValue()
      blurInput()
    } else if (mergedPopupVisible) {
      setOpen(false)
    }
  }
  function visibleChange(visible: boolean) {
    if (visible) {
      setOpen(visible, () => {
        focusInput()
      })
    } else {
      setOpen(false)
    }
  }

  function onClear(e: MouseEvent<HTMLSpanElement>) {
    e.stopPropagation()
    setValue(undefined)
    setValueShow(undefined)
    onHandleChange(undefined)
    props.onClear && props.onClear()
  }

  function handlePickerValueChange(v: Dayjs) {
    onPickerValueChange && onPickerValueChange(v.format(format), v)
  }

  function changePageShowDate(type: "prev" | "next", num = 1) {
    let newPageShowDate
    if (type === "prev") {
      newPageShowDate = mergedPageShowDate.subtract(num, "year")
    }
    if (type === "next") {
      newPageShowDate = mergedPageShowDate.add(num, "year")
    }

    if (newPageShowDate) {
      handlePickerValueChange(newPageShowDate)
      setPageShowDate(newPageShowDate)
    }
  }

  function getHeaderOperations() {
    return {
      onSuperPrev: () => changePageShowDate("prev", 10),
      onSuperNext: () => changePageShowDate("next", 10),
    }
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

  const suffixIcon =
    inputSuffix === null ? null : inputSuffix || <CalendarIcon />

  return (
    <PickerContext.Provider value={{ utcOffset, timezone, weekStart }}>
      <Trigger
        content={
          <>
            <YearPickerPanel
              {...props}
              {...getHeaderOperations()}
              pageShowDate={mergedPageShowDate}
              format={format}
              onSelect={onHandleSelect}
              value={panelValue}
            />
            {extra && (
              <BasicFooterSection
                disabled={!panelValue}
                extra={extra}
                mode="year"
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

SingleYearPicker.displayName = "SingleYearPicker"
