import {
  FC,
  useEffect,
  useMemo,
  useRef,
  useState,
  MouseEvent,
  ChangeEvent,
  forwardRef,
} from "react"
import {
  GetHeaderOperationsFun,
  DatePickerModeType,
  RangeDatePickerProps,
} from "./interface"
import { getFormat } from "./utils/uiHelpers"
import { Dayjs, QUnitType, UnitType } from "dayjs"
import {
  getDayjsValue,
  getNow,
  getSortedDayjsArray,
  getValueWithTime,
  isDayjs,
  isDayjsArrayChange,
  isObject,
  isValidTimeString,
  toLocal,
  toTimezone,
  usePrevious,
} from "@illa-design/system"
import {
  getAvailableDayjsLength,
  getLocaleDayjsValue,
  getRangeDefaultValue,
} from "./utils/dateHelper"
import { useUpdate } from "./utils/hooks"
import { DateInputRangeHandler } from "./input/interface"
import { CalendarIcon, TimeIcon } from "@illa-design/icon"
import { PickerContext } from "./context"
import { Trigger } from "@illa-design/trigger"
import { RangeDateInput } from "./input/rangeInput"
import { RangePickerPanel } from "./panels/range"
import { BasicFooterSection } from "./panels/basic-footer-section"
import { applyBoxStyle } from "@illa-design/theme"

export const RangeDatePicker = forwardRef<HTMLDivElement, RangeDatePickerProps>(
  (props, ref) => {
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
      disabledTime,
      showTime,
      onOk,
      defaultPickerValue,
      pickerValue,
      onPickerValueChange,
      triggerElement,
      clearRangeOnReselect,
      separator,
      utcOffset,
      timezone,
      mode = "date",
      inputSuffix,
      size = "medium",
      colorScheme = "blue",
      extra,
      readonly = false,
    } = props

    const weekStart = 0

    const refInput = useRef<DateInputRangeHandler>(null)

    const format = getFormat(mode, props.format, !!props.showTime) as string

    const availableInputIndex = useMemo(() => {
      if (Array.isArray(disabled)) {
        if (disabled[0] && !disabled[1]) {
          return 1
        }
        if (disabled[1] && !disabled[0]) {
          return 0
        }
      }
    }, [disabled])

    const isHalfAvailable = typeof availableInputIndex === "number"
    const disabledTimePickerIndex = isHalfAvailable
      ? 1 ^ availableInputIndex
      : undefined

    const [focusedInputIndex, setFocusedInputIndex] = useState<number>(
      isHalfAvailable ? availableInputIndex : 0,
    )

    useEffect(() => {
      if (isHalfAvailable) {
        setFocusedInputIndex(availableInputIndex)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [disabled])

    const nextFocusedInputIndex = 1 ^ focusedInputIndex

    const [inputValue, setInputValue] = useState<string | undefined>()
    //     isHalfAvailable: boolean,
    //         nextFocusedInputIndex: number,
    //         format: string,
    //         value?: Dayjs[],
    //         defaultValue?: Dayjs[],
    //         utcOffset?: number,
    //         timezone?: string,
    // ) {
    const [value, setValue] = useState<Dayjs[] | undefined>(
      getRangeDefaultValue(
        isHalfAvailable,
        nextFocusedInputIndex,
        format,
        propsValue as Dayjs[],
        props.defaultValue as Dayjs[],
        utcOffset,
        timezone,
      ),
    )
    const [valueShow, setValueShow] = useState<Dayjs[]>()
    const [valueShowHover, setValueShowHover] = useState<Dayjs[]>()
    const [popupVisible, setPopupVisible] = useState<boolean>(
      !!props.popupVisible,
    )
    const [panelModes, setPanelModes] = useState<DatePickerModeType[]>([
      mode,
      mode,
    ])
    const [isTimePanel, setIsTimePanel] = useState<boolean>(false)

    const mergedPopupVisible =
      "popupVisible" in props ? props.popupVisible : popupVisible
    const propsValueDayjs = getDayjsValue(
      propsValue as Dayjs[],
      format,
      utcOffset,
      timezone,
    ) as Dayjs[]
    const mergedValue = "value" in props ? propsValueDayjs : value

    const panelValue = valueShow || mergedValue || []
    const selectedLength = getAvailableDayjsLength(valueShow || mergedValue)
    const firstRange = useRef<boolean>(true)
    const now = getNow()
    const zoneNow = toTimezone(now, utcOffset, timezone)

    function getTimeValues(): Dayjs[] {
      const timeValues: Dayjs[] = []
      const defaultTimeValue =
        isObject(showTime) && showTime.defaultValue
          ? (getDayjsValue(
              showTime.defaultValue as Dayjs[],
              showTime.format || "HH:mm:ss",
              utcOffset,
              timezone,
            ) as Dayjs[])
          : []
      timeValues[0] = panelValue[0] || defaultTimeValue?.[0] || zoneNow
      timeValues[1] = panelValue[1] || defaultTimeValue?.[1] || zoneNow
      return timeValues
    }

    const timeValues = getTimeValues()

    const selectedDisabledDate = isHalfAvailable
      ? (current: Dayjs) =>
          availableInputIndex === 0
            ? // @ts-ignore
              current.isAfter(panelValue[1], mode as QUnitType)
            : // @ts-ignore
              current.isBefore(panelValue[0], mode as QUnitType)
      : undefined

    const customTriggerElement = triggerElement !== undefined
    const resetRange = customTriggerElement || clearRangeOnReselect

    const defaultPageShowDates = mergedValue ||
      (getDayjsValue(defaultPickerValue as Dayjs[], format) as Dayjs[]) || [
        now,
        now,
      ]

    function isValidDayjsArray(sv: unknown) {
      return (
        sv &&
        Array.isArray(sv) &&
        sv.length === 2 &&
        isDayjs(sv[0]) &&
        isDayjs(sv[1])
      )
    }

    function isSamePanel(
      innerValue: Dayjs[] | undefined,
      pickerMode: DatePickerModeType,
    ) {
      if (
        innerValue &&
        innerValue.length === 2 &&
        isValidDayjsArray(innerValue)
      ) {
        return (
          ((pickerMode === "date" || pickerMode === "week") &&
            innerValue[0].isSame(innerValue[1], "month")) ||
          ((pickerMode === "month" || pickerMode === "quarter") &&
            innerValue[0].isSame(innerValue[1], "year")) ||
          (pickerMode === "year" &&
            Math.floor(innerValue[0].year() / 10) ===
              Math.floor(innerValue[1].year() / 10))
        )
      }
    }

    function getPageShowDatesByValue(
      value = getNow(utcOffset, timezone),
      pickerMode = mode,
      type: "prev" | "next" = "prev",
    ) {
      const prev = type === "prev"
      switch (pickerMode) {
        case "date":
        case "week":
          return prev
            ? [value, value.add(1, "month")]
            : [value.subtract(1, "month"), value]
        case "month":
        case "quarter":
          return prev
            ? [value, value.add(1, "year")]
            : [value.subtract(1, "year"), value]
        case "year":
          return prev
            ? [value, value.add(10, "year")]
            : [value.subtract(10, "year"), value]
        default:
          return []
      }
    }

    function getShowDatesFromFocused(
      dates?: Dayjs[],
      index = focusedInputIndex,
    ) {
      const prev = index === 0 || isSamePanel(dates, mode)
      if (Array.isArray(dates) && dates.length < 2) {
        return getPageShowDatesByValue(
          dates[0] || getNow(utcOffset, timezone),
          mode,
          "prev",
        )
      }
      if (Array.isArray(dates) && dates.length === 2) {
        if (dates[index]) {
          return getPageShowDatesByValue(
            dates[index],
            mode,
            prev ? "prev" : "next",
          )
        }
        return getPageShowDatesByValue(
          dates[index === 0 ? 1 : 0] || getNow(utcOffset, timezone),
          mode,
          prev && !dates[index === 0 ? 1 : 0] ? "prev" : "next",
        )
      }
    }

    const [pageShowDates, setPageShowDates] = useState<Dayjs[] | undefined>(
      getShowDatesFromFocused(defaultPageShowDates),
    )

    const mergedPageShowDate =
      getShowDatesFromFocused(
        getDayjsValue(
          pickerValue as Dayjs[],
          format,
          utcOffset,
          timezone,
        ) as Dayjs[],
      ) || pageShowDates

    const previousUtcOffset = usePrevious(utcOffset)
    const previousTimezone = usePrevious(timezone)

    useUpdate(() => {
      if (
        Array.isArray(value) &&
        (previousUtcOffset !== utcOffset || timezone !== previousTimezone)
      ) {
        const localValue = value.map((v) =>
          toLocal(v, previousUtcOffset, previousTimezone),
        )
        const zoneValue = localValue.map((v) =>
          toTimezone(v, utcOffset, timezone),
        )
        setValue(zoneValue)
      }
    }, [utcOffset, previousUtcOffset, timezone, previousTimezone])

    useUpdate(() => {
      setPageShowDates(getShowDatesFromFocused(mergedPageShowDate))
    }, [mode])

    useEffect(() => {
      setPanelModes([mode, mode])
    }, [mode])

    useEffect(() => {
      setInputValue(undefined)

      if (mergedPopupVisible) {
        setIsTimePanel(false)
        setPanelModes([mode, mode])
        setPageShowDates(getShowDatesFromFocused(defaultPageShowDates))
        setValueShow(mergedValue)
      } else {
        setValueShow(undefined)
        setValueShowHover(undefined)
        blurInput()
      }
      firstRange.current = !!mergedPopupVisible
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mergedPopupVisible])

    const startStr = propsValueDayjs?.[0]?.format(format)
    const endStr = propsValueDayjs?.[1]?.format(format)

    useEffect(() => {
      setValueShow(undefined)
      setValueShowHover(undefined)
    }, [startStr, endStr])

    function handlePickerValueChange(v: Dayjs[]) {
      if (!isSamePanel([v[0], pageShowDates?.[0] as Dayjs], mode)) {
        onPickerValueChange &&
          onPickerValueChange(
            Array.isArray(v) ? v.map((v) => v && v.format(format)) : undefined,
            v,
          )
      }
    }

    function setFixedPageShowDates(
      innerValue: Dayjs[],
      index = focusedInputIndex,
    ) {
      const newPageShowDates = getShowDatesFromFocused(innerValue, index)
      setPageShowDates(newPageShowDates)
      handlePickerValueChange(newPageShowDates as Dayjs[])
    }

    function focusInput(index?: number) {
      refInput.current?.focus?.(isHalfAvailable ? availableInputIndex : index)
    }

    function blurInput() {
      refInput.current?.blur?.()
    }

    function setOpen(visible: boolean) {
      onVisibleChange && onVisibleChange(visible)
      setPopupVisible(visible)
    }

    function visibleChange(visible: boolean) {
      if (visible) {
        setTimeout(() => focusInput())
        setOpen(visible)
      } else {
        setOpen(false)
      }
    }

    function onHandleChange(newValue: Dayjs[] | undefined) {
      if (isDayjsArrayChange(mergedValue, newValue)) {
        const localValue = Array.isArray(newValue)
          ? newValue.map((v) =>
              getLocaleDayjsValue(toLocal(v, utcOffset, timezone), "en-us"),
            )
          : undefined
        onChange &&
          onChange(
            Array.isArray(localValue)
              ? (localValue.map((v) => v && v.format(format)) as string[])
              : undefined,
            localValue as Dayjs[],
          )
      }
    }

    function onClear(e: MouseEvent<HTMLSpanElement>) {
      e.stopPropagation()
      let newValueShow: (undefined | Dayjs)[] | undefined = [...panelValue]
      if (isHalfAvailable) {
        newValueShow[availableInputIndex] = undefined
      } else {
        newValueShow = undefined
      }
      setValue(newValueShow as undefined)
      setValueShow(newValueShow as undefined)
      onHandleChange(newValueShow as Dayjs[])
      props.onClear && props.onClear()
    }

    function changeFocusedInputIndex(index: number, silent?: boolean) {
      setInputValue(undefined)
      setFocusedInputIndex(index)
      if (panelValue && panelValue.length && !silent) {
        const newPageShowDates = getShowDatesFromFocused(panelValue, index)
        setPageShowDates(newPageShowDates)
        handlePickerValueChange(newPageShowDates as Dayjs[])
      }
    }

    function isDisabledDate(date: Dayjs): boolean {
      const selectedDisabled =
        typeof selectedDisabledDate === "function"
          ? selectedDisabledDate(date)
          : false
      const originDisabledDate =
        typeof disabledDate === "function" ? disabledDate(date) : false
      return originDisabledDate || selectedDisabled
    }

    function isValid(time?: string): boolean {
      return (
        isValidTimeString(time, format) &&
        !isDisabledDate(getDayjsValue(time, format) as Dayjs)
      )
    }

    function onChangeInput(e: ChangeEvent<HTMLInputElement>) {
      const newValueShow = [...(panelValue || [])]
      const niv = e.target.value
      setInputValue(niv)
      if (!mergedPopupVisible) {
        setOpen(true)
      }
      if (isValid(niv)) {
        newValueShow[focusedInputIndex] = getDayjsValue(niv, format) as Dayjs
        setValueShow(newValueShow)
        setFixedPageShowDates(newValueShow)
        setInputValue(undefined)
      }
    }

    function switchFocusedInput(silent?: boolean) {
      changeFocusedInputIndex(nextFocusedInputIndex, silent)
      setTimeout(() => focusInput(nextFocusedInputIndex))
    }

    function onConfirmValue(date?: Dayjs[], keepOpen?: boolean) {
      const confirmValue = date || panelValue
      if (!confirmValue || !confirmValue[0] || !confirmValue[1]) {
        return
      }
      const sortedValues = getSortedDayjsArray(confirmValue)
      setValue(sortedValues)
      onHandleChange(sortedValues)
      if (triggerElement !== null && !keepOpen) {
        setOpen(false)
      }
    }

    function onPressEnter() {
      if (Array.isArray(valueShow) && valueShow.length) {
        if (inputValue && !isValid(inputValue)) {
          setInputValue(undefined)
        } else if (selectedLength !== 2) {
          switchFocusedInput()
        } else if (selectedLength === 2) {
          onConfirmValue(valueShow)
        }
      } else if (mergedPopupVisible) {
        setOpen(false)
      }
    }

    function onClickConfirmBtn() {
      onConfirmValue()
      const localePanelValue = panelValue.map((v) =>
        getLocaleDayjsValue(v, "en-us"),
      )
      onOk &&
        onOk(
          localePanelValue.map((v) => v && v.format(format)) as string[],
          localePanelValue as Dayjs[],
        )
    }

    function getUnit(): QUnitType {
      switch (mode) {
        case "date":
        case "week":
          return "date"
        case "month":
          return "month"
        case "year":
          return "year"
        default:
          return "date"
      }
    }

    function outOfRange(date: Dayjs): boolean {
      if (selectedLength !== 2) {
        return false
      }
      const v = valueShow || mergedValue
      // @ts-ignore
      if (focusedInputIndex === 0 && date.isAfter(v?.[1], getUnit())) {
        return true
      }
      // @ts-ignore
      if (focusedInputIndex === 1 && date.isBefore(v?.[0], getUnit())) {
        return true
      }
      return false
    }

    function onSelectPanel(_: string | undefined, date: Dayjs | undefined) {
      const isOutOfRange = outOfRange(date as Dayjs) && firstRange.current
      const newValueShow = (
        resetRange && selectedLength === 2 && !isHalfAvailable
          ? []
          : [...panelValue]
      ) as Dayjs[]

      // if custom triggerElement, focused input index always 0 -> 1
      const focusedIndex = customTriggerElement
        ? selectedLength === 0 || selectedLength === 2
          ? 0
          : 1
        : focusedInputIndex
      const newDate = (
        showTime
          ? getValueWithTime(date as Dayjs, timeValues[focusedIndex])
          : date
      ) as Dayjs

      if (isOutOfRange) {
        newValueShow[focusedIndex] = newDate
        // @ts-ignore
        newValueShow[1 ^ focusedIndex] = undefined
      } else {
        newValueShow[focusedIndex] = newDate
      }

      const sortedValueShow = getSortedDayjsArray(newValueShow) as Dayjs[]

      onSelectValueShow(sortedValueShow)
      setFixedPageShowDates(sortedValueShow)
      setInputValue(undefined)

      const newSelectedLength = getAvailableDayjsLength(newValueShow)

      if (resetRange) {
        if (
          selectedLength === 0 ||
          (selectedLength === 2 && !isHalfAvailable)
        ) {
          customTriggerElement
            ? setFocusedInputIndex(1)
            : switchFocusedInput(true)
        } else if (!showTime) {
          onConfirmValue(newValueShow)
        }
      } else if (newSelectedLength <= 1) {
        switchFocusedInput(true)
      } else if (
        selectedLength === 2 &&
        firstRange.current &&
        !isHalfAvailable
      ) {
        firstRange.current = false
        switchFocusedInput(true)
        if (!showTime && !isOutOfRange) {
          onConfirmValue(newValueShow, true)
        }
      } else {
        firstRange.current = false
        if (!showTime && !isOutOfRange) {
          onConfirmValue(newValueShow)
        }
      }
    }

    function onSelectValueShow(newValueShow: Dayjs[]) {
      setValueShow(newValueShow)
      setValueShowHover(undefined)
      const sortedValues = getSortedDayjsArray(newValueShow)
      const zoneValues = sortedValues?.map((v) =>
        getLocaleDayjsValue(toLocal(v, utcOffset, timezone), "en-us"),
      )
      onSelect &&
        onSelect(
          zoneValues?.map((v) => v && v.format(format)) as string[],
          zoneValues as Dayjs[],
          { type: focusedInputIndex === 1 ? "end" : "start" },
        )
    }

    function onTimePickerSelect(index: number, _: string, time: Dayjs) {
      const newValueShow = Array.isArray(panelValue) ? [...panelValue] : []
      const newTimeValue = getValueWithTime(
        newValueShow[index] || getNow(utcOffset, timezone),
        time,
      )
      newValueShow[index] = newTimeValue
      onSelectValueShow(newValueShow)
    }

    function changePageShowDates(
      type: "prev" | "next",
      unit: UnitType,
      num = 1,
    ) {
      const index = type === "prev" ? 0 : 1
      let newPageShowDates = [...(mergedPageShowDate as Dayjs[])]
      if (type === "prev") {
        // @ts-ignore
        newPageShowDates[index] = mergedPageShowDate?.[index].subtract(
          num,
          // @ts-ignore
          unit,
        )
      }
      if (type === "next") {
        // @ts-ignore
        newPageShowDates[index] = mergedPageShowDate?.[index].add(num, unit)
      }
      newPageShowDates = getPageShowDatesByValue(
        newPageShowDates[index],
        mode,
        type,
      )

      setFixedPageShowDates(newPageShowDates)
    }

    function getHeaderOperations(pickerMode: DatePickerModeType = mode) {
      if (pickerMode === "date" || pickerMode === "week") {
        return {
          onPrev: () => changePageShowDates("prev", "month"),
          onNext: () => changePageShowDates("next", "month"),
          onSuperPrev: () => changePageShowDates("prev", "year"),
          onSuperNext: () => changePageShowDates("next", "year"),
        }
      }
      if (pickerMode === "month" || pickerMode === "quarter") {
        return {
          onSuperPrev: () => changePageShowDates("prev", "year"),
          onSuperNext: () => changePageShowDates("next", "year"),
        }
      }
      if (pickerMode === "year") {
        return {
          onSuperPrev: () => changePageShowDates("prev", "year", 10),
          onSuperNext: () => changePageShowDates("next", "year", 10),
        }
      }
    }

    const placeholders = Array.isArray(placeholder) ? placeholder : ["", ""]
    const suffixIcon =
      inputSuffix === null
        ? null
        : inputSuffix || (showTime ? <TimeIcon /> : <CalendarIcon />)

    const triggerDisabled = Array.isArray(disabled)
      ? disabled[0] && disabled[1]
      : disabled

    const shouldShowFooter =
      (showTime && panelModes[0] === "date" && panelModes[1] === "date") ||
      extra

    return (
      <PickerContext.Provider value={{ utcOffset, timezone, weekStart }}>
        <Trigger
          content={
            <>
              <RangePickerPanel
                {...props}
                {...getHeaderOperations()}
                getHeaderOperations={
                  getHeaderOperations as GetHeaderOperationsFun
                }
                setRangePageShowDates={setFixedPageShowDates}
                pageShowDates={mergedPageShowDate}
                value={panelValue}
                format={format}
                onSelectPanel={onSelectPanel}
                disabledDate={(current) => isDisabledDate(current)}
                disabledTime={disabledTime}
                mode={mode}
                showTime={showTime}
                timeValues={timeValues}
                onTimePickerSelect={onTimePickerSelect}
                popupVisible={mergedPopupVisible}
                disabledTimePickerIndex={disabledTimePickerIndex}
                isTimePanel={isTimePanel}
                valueShowHover={valueShowHover}
                panelModes={panelModes}
                setPanelModes={setPanelModes}
              />
              {shouldShowFooter && (
                <BasicFooterSection
                  disabled={!panelValue}
                  onClickConfirmBtn={onClickConfirmBtn}
                  extra={extra}
                  showTime={!!showTime}
                  placeLeft
                />
              )}
            </>
          }
          trigger="click"
          position={position}
          disabled={triggerDisabled || readonly}
          onVisibleChange={visibleChange}
          popupVisible={mergedPopupVisible}
          colorScheme="white"
          maxW="auto"
          showArrow={false}
          withoutPadding
          {...triggerProps}
        >
          <div css={applyBoxStyle(props)} ref={ref}>
            <RangeDateInput
              ref={refInput}
              placeholder={placeholders}
              popupVisible={mergedPopupVisible}
              value={valueShow || mergedValue}
              onChange={onChangeInput}
              inputValue={inputValue}
              changeFocusedInputIndex={changeFocusedInputIndex}
              focusedInputIndex={focusedInputIndex}
              separator={separator}
              format={format}
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
  },
)

RangeDatePicker.displayName = "RangeDatePicker"
