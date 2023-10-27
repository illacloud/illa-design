import {
  useEffect,
  useRef,
  useState,
  MouseEvent,
  ChangeEvent,
  forwardRef,
} from "react"
import {
  getDayjsValue,
  toLocal,
  toTimezone,
  usePrevious,
  isValidTimeString,
  isDayjsArrayChange,
  getSortedDayjsArray,
} from "@illa-design/system"
import { PickerContext } from "./context"
import { Trigger } from "@illa-design/trigger"
import { RangePickerProps } from "./"
import { TimeIcon } from "@illa-design/icon"
import { getDefaultValue, getFormat, getFormatTime } from "./utils"
import { RangePickerBody } from "./popup/range-picker-body"
import { RangeDateInput } from "./input/rangeInput"
import { DateInputRangeHandler } from "./input/interface"
import { applyBoxStyle } from "@illa-design/theme"
import type { Dayjs } from "dayjs"

export const RangePicker = forwardRef<HTMLDivElement, RangePickerProps>(
  (props, ref) => {
    const {
      allowClear = true,
      disableConfirm,
      placeholder,
      disabled,
      position = "bottom-start",
      error,
      triggerProps,
      value: propsValue,
      onChange,
      icons,
      size = "medium",
      colorScheme = "blue",
      editable = true,
      utcOffset,
      timezone,
      format = "HH:mm:ss",
      scrollSticky = true,
      order = true,
      readonly = false,
    } = props

    const suffixIcon = (icons && icons.inputSuffix) || <TimeIcon />

    const _format = getFormat(format)

    const [popupVisible, setPopupVisible] = useState<boolean>(false)
    const [value, setValue] = useState<Dayjs[] | undefined>(
      getDefaultValue(
        _format,
        props.value,
        props.defaultValue,
        utcOffset,
        timezone,
      ) as Dayjs[],
    )
    const [valueShow, setValueShow] = useState<Dayjs[]>()
    const [inputValue, setInputValue] = useState<string>()
    const [focusedInputIndex, setFocusedInputIndex] = useState<number>(0)

    const mergedValue =
      "value" in props
        ? (getDayjsValue(
            propsValue as Dayjs[],
            format,
            utcOffset,
            timezone,
          ) as Dayjs[])
        : value
    const mergedPopupVisible =
      "popupVisible" in props ? props.popupVisible : popupVisible

    const previousUtcOffset = usePrevious(utcOffset)
    const previousTimezone = usePrevious(timezone)

    const isDidMount = useRef<boolean>(false)

    useEffect(() => {
      if (isDidMount.current) {
        if (
          value &&
          (previousUtcOffset !== utcOffset || timezone !== previousTimezone)
        ) {
          const localValue = value.map((v) =>
            toLocal(v, previousUtcOffset, previousTimezone),
          )
          const zoneValue = localValue.map((lc) =>
            toTimezone(lc, utcOffset, timezone),
          )
          setValue(zoneValue)
        }
      } else {
        isDidMount.current = true
      }
    }, [previousTimezone, previousUtcOffset, timezone, utcOffset, value])

    const refInput = useRef<DateInputRangeHandler>(null)

    const focusInput = (index?: number) => {
      refInput.current?.focus?.(index)
    }

    const changeFocusedInputIndex = (index: number) => {
      setFocusedInputIndex(index)
      window.setTimeout(() => focusInput(index))
    }

    const onHandleChange = (vs?: Dayjs[]) => {
      if (Array.isArray(vs) && isDayjsArrayChange(mergedValue as Dayjs[], vs)) {
        onChange?.(
          vs.map((t) => toLocal(t, utcOffset, timezone).format(format)),
          vs.map((t) => toLocal(t, utcOffset, timezone)),
        )
      }
    }

    const onVisibleChange = (visible: boolean) => {
      if (visible) {
        setOpen(visible, () => {
          setTimeout(() => focusInput())
        })
      } else {
        setOpen(false)
      }
    }

    const setOpen = (visible: boolean, callback?: () => void) => {
      setPopupVisible(visible)
      setInputValue(undefined)
      callback?.()
      if (!visible) {
        setValueShow(undefined)
      }
    }

    const onConfirmValue = (vs?: Dayjs[]) => {
      const newValue =
        order && Array.isArray(vs)
          ? getSortedDayjsArray(vs.map((v) => getFormatTime(v)))
          : vs
      setValue(newValue)
      setValueShow(undefined)
      setInputValue(undefined)

      onHandleChange(newValue)

      if (!disableConfirm) {
        setOpen(false)
      }
    }

    const onPressEnter = () => {
      if (Array.isArray(valueShow) && valueShow.length) {
        if (inputValue && !isValidTimeString(inputValue, format)) {
          setOpen(false)
        } else if (valueShow[0] === undefined || valueShow[1] === undefined) {
          changeFocusedInputIndex(focusedInputIndex === 0 ? 1 : 0)
        } else if (valueShow.length === 2) {
          onConfirmValue(valueShow)
        }
      } else {
        setOpen(false)
      }
    }

    const onClear = (e: MouseEvent<HTMLSpanElement>) => {
      e.stopPropagation()
      onConfirmValue(undefined)
      onChange?.(undefined, undefined)
      props.onClear?.()
    }

    const confirmInputValue = (newInputValue?: string) => {
      const newInputDayjs = getDayjsValue(newInputValue, format) as Dayjs
      const newValueShow = [
        ...(Array.isArray(valueShow) ? valueShow : (value as Dayjs[]) || []),
      ]
      if (isValidTimeString(newInputValue, format)) {
        newValueShow[focusedInputIndex] = newInputDayjs
        const localDayjsArray = newValueShow.map((nv) =>
          toLocal(nv, utcOffset, timezone),
        )
        props.onSelect &&
          props.onSelect(
            localDayjsArray.map((la) => la && la.format(format)),
            localDayjsArray,
          )
        setValueShow(newValueShow)
        setInputValue(undefined)
      }
    }

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      const newInputValue = e.target.value
      if (!popupVisible) {
        setPopupVisible(true)
      }
      setInputValue(newInputValue)
      confirmInputValue(newInputValue)
    }

    return (
      <PickerContext.Provider value={{ utcOffset, timezone }}>
        <Trigger
          trigger="click"
          position={position}
          disabled={disabled || readonly}
          popupVisible={mergedPopupVisible}
          onVisibleChange={onVisibleChange}
          colorScheme="white"
          content={
            <RangePickerBody
              {...props}
              format={_format}
              onConfirmValue={onConfirmValue}
              setValueShow={setValueShow}
              valueShow={valueShow || mergedValue}
              value={mergedValue}
              popupVisible={mergedPopupVisible}
              scrollSticky={scrollSticky}
              focusedInputIndex={focusedInputIndex}
              changeFocusedInputIndex={changeFocusedInputIndex}
            />
          }
          showArrow={false}
          {...triggerProps}
        >
          <div css={applyBoxStyle(props)} ref={ref}>
            <RangeDateInput
              popupVisible={mergedPopupVisible}
              format={_format}
              disabled={disabled}
              error={error}
              size={size}
              onPressEnter={onPressEnter}
              onClear={onClear}
              suffixIcon={suffixIcon}
              editable={editable || !readonly}
              allowClear={allowClear}
              ref={refInput}
              placeholder={placeholder}
              value={valueShow || mergedValue}
              inputValue={inputValue}
              onChange={onChangeInput}
              colorScheme={colorScheme}
              changeFocusedInputIndex={changeFocusedInputIndex}
              focusedInputIndex={focusedInputIndex}
            />
          </div>
        </Trigger>
      </PickerContext.Provider>
    )
  },
)

RangePicker.displayName = "RangePicker"
