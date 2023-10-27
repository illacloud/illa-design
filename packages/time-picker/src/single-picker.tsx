import {
  useEffect,
  useRef,
  useState,
  MouseEvent,
  ChangeEvent,
  forwardRef,
  useCallback,
} from "react"
import {
  getDayjsValue,
  isDayjs,
  isDayjsChange,
  toLocal,
  toTimezone,
  usePrevious,
  isValidTimeString,
} from "@illa-design/system"
import { PickerContext } from "./context"
import { Trigger } from "@illa-design/trigger"
import { DateInput } from "./input/singleInput"
import { TimePickerProps } from "./"
import { TimePickerPopup } from "./popup/time-picker-body"
import { TimeIcon } from "@illa-design/icon"
import { getDefaultValue, getFormat } from "./utils"
import { applyBoxStyle } from "@illa-design/theme"
import type { Dayjs } from "dayjs"

export const TimePicker = forwardRef<HTMLDivElement, TimePickerProps>(
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
      readonly = false,
    } = props

    const suffixIcon = (icons && icons.inputSuffix) || <TimeIcon />

    const _format = getFormat(format)

    const [popupVisible, setPopupVisible] = useState<boolean>(false)
    const [value, setValue] = useState<Dayjs | undefined>(
      getDefaultValue(
        _format,
        props.value,
        props.defaultValue,
        utcOffset,
        timezone,
      ) as Dayjs,
    )
    const [valueShow, setValueShow] = useState<Dayjs>()
    const [inputValue, setInputValue] = useState<string>()

    const mergedValue =
      "value" in props
        ? (getDayjsValue(
            propsValue as Dayjs,
            format,
            utcOffset,
            timezone,
          ) as Dayjs)
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
          const localValue = toLocal(value, previousUtcOffset, previousTimezone)
          const zoneValue = toTimezone(localValue, utcOffset, timezone)
          setValue(zoneValue)
        }
      } else {
        isDidMount.current = true
      }
    }, [previousTimezone, previousUtcOffset, timezone, utcOffset, value])

    const refInput = useRef<HTMLInputElement>(null)

    const focusInput = () => {
      refInput.current?.focus?.()
    }

    const onHandleChange = (vs?: Dayjs) => {
      if (isDayjs(vs) && isDayjsChange(mergedValue as Dayjs, vs)) {
        onChange &&
          onChange(
            toLocal(vs, utcOffset, timezone).format(format),
            toLocal(vs, utcOffset, timezone),
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
      callback && callback()
      if (!visible) {
        setValueShow(undefined)
      }
    }

    const onConfirmValue = (vs?: Dayjs) => {
      const newValue = vs
      setValue(newValue)
      setValueShow(undefined)
      setInputValue(undefined)

      onHandleChange(newValue)

      if (!disableConfirm) {
        setOpen(false)
      }
    }

    const onPressEnter = () => {
      onConfirmValue(valueShow || mergedValue)
    }

    const onClear = (e: MouseEvent<HTMLSpanElement>) => {
      e.stopPropagation()
      onConfirmValue(undefined)
      onChange?.(undefined, undefined)
      props.onClear?.()
    }

    const confirmInputValue = useCallback(
      (newInputValue?: string) => {
        const newInputDayjs = getDayjsValue(newInputValue, format) as Dayjs
        if (isValidTimeString(newInputValue, format)) {
          const localDayjs = toLocal(newInputDayjs, utcOffset, timezone)
          props.onSelect &&
            props.onSelect(localDayjs.format(format), localDayjs)
          setValueShow(newInputDayjs)
          setInputValue(undefined)
        }
      },
      [format, props, timezone, utcOffset],
    )

    const onChangeInput = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const newInputValue = e.target.value
        if (!popupVisible) {
          setPopupVisible(true)
        }
        setInputValue(newInputValue)
        confirmInputValue(newInputValue)
      },
      [confirmInputValue, popupVisible],
    )

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
            <TimePickerPopup
              {...props}
              format={_format}
              onConfirmValue={onConfirmValue}
              setValueShow={setValueShow}
              valueShow={valueShow || mergedValue}
              value={mergedValue}
              popupVisible={mergedPopupVisible}
              scrollSticky={scrollSticky}
            />
          }
          showArrow={false}
          {...triggerProps}
        >
          <div css={applyBoxStyle(props)} ref={ref}>
            <DateInput
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
              placeholder={placeholder as string}
              value={(valueShow || mergedValue) as Dayjs}
              inputValue={inputValue as string}
              onChange={onChangeInput}
              colorScheme={colorScheme}
            />
          </div>
        </Trigger>
      </PickerContext.Provider>
    )
  },
)

TimePicker.displayName = "DatePicker"
