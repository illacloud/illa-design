import {
  forwardRef,
  ReactElement,
  useContext,
  useRef,
  useState,
  cloneElement,
} from "react"
import { Dayjs } from "dayjs"
import {
  dayjs,
  isArray,
  useMergeValue,
  getDayjsValue,
  isDayjs,
  isDayjsChange,
  isDayjsArrayChange,
  getSortedDayjsArray,
} from "@illa-design/system"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"
import { Input, RangeInput, RangeInputRef } from "@illa-design/input"
import { TimeIcon } from "@illa-design/icon"
import { Trigger } from "@illa-design/trigger"
import { RenderPickerProps } from "./interface"
import { triggerContentStyle } from "./style"

export const Picker = forwardRef<HTMLDivElement, RenderPickerProps>(
  (props, ref) => {
    const {
      style,
      className,
      children,
      popup,
      isRangePicker,
      disableConfirm,
      placeholder,
      disabled,
      error,
      triggerProps,
      value,
      defaultValue,
      popupVisible,
      step,
      size,
      prefix,
      hideFooter,
      use12Hours,
      disabledHours,
      disabledMinutes,
      disabledSeconds,
      hideDisabledOptions,
      position = "bl",
      format = "HH:mm:ss",
      icons = { inputSuffix: <TimeIcon /> },
      allowClear = true,
      scrollSticky = true,
      editable = true,
      order = true,
      // events
      onChange,
      onClear,
      onSelect,
      ...otherProps
    } = props

    const configProviderProps = useContext<ConfigProviderProps>(
      ConfigProviderContext,
    )
    const locale = configProviderProps?.locale?.timePicker ?? def.timePicker
    const [valueShow, setValueShow] = useState<Dayjs | Dayjs[]>()
    const [inputValue, setInputValue] = useState<string>()
    const [rangeInputValue, setRangeInputValue] = useState<
      string[] | undefined
    >()
    const [focusedInputIndex, setFocusedInputIndex] = useState<number>(0)

    // controlled / uncontrolled
    const [currentPopupVisible, setCurrentPopupVisible] = useMergeValue(false, {
      value: popupVisible,
      defaultValue: undefined,
    })
    const [currentValue, setCurrentValue] = useMergeValue(
      value
        ? getDayjsValue(value, format)
        : defaultValue
        ? getDayjsValue(defaultValue, format)
        : undefined,
      {
        value: getDayjsValue(value, format),
        defaultValue: undefined,
      },
    )

    const inputRef = useRef<HTMLInputElement>(null)
    const inputGroupRef = useRef({} as RangeInputRef)

    const rangeInputPlaceholder = isArray(placeholder)
      ? placeholder
      : (locale["placeholders"] as string[])
    const inputPlaceHolder =
      placeholder && !isArray(placeholder)
        ? placeholder
        : (locale["placeholder"] as string)

    function isValidTime(time?: string): boolean {
      return (
        typeof time === "string" && dayjs(time, format)?.format(format) === time
      )
    }

    function changeFocusedInputIndex(index: number) {
      setFocusedInputIndex(index)
      setTimeout(() => inputGroupRef.current?.focus(index))
    }

    const setOpen = (visible: boolean, callback?: Function) => {
      if (currentPopupVisible !== visible) {
        setCurrentPopupVisible(visible)
      }
      setInputValue(undefined)
      setRangeInputValue(undefined)
      callback?.()
      if (!visible) {
        setValueShow(undefined)
      }
    }

    function onConfirmValue(vs?: Dayjs | Dayjs[]) {
      //  when disabled = array, Deal with the problem of changing the time sequence
      const currentOrder =
        !(isArray(disabled) && (disabled[0] || disabled[1])) && order
      const newValue =
        isRangePicker && currentOrder ? getSortedDayjsArray(vs as Dayjs[]) : vs
      setCurrentValue(newValue)
      setValueShow(undefined)
      setInputValue(undefined)

      if (
        isArray(newValue) &&
        isDayjsArrayChange(currentValue as Dayjs[], newValue)
      ) {
        onChange?.(
          newValue.map((t) => t.format(format)),
          newValue,
        )
      }
      if (isDayjs(newValue) && isDayjsChange(currentValue as Dayjs, newValue)) {
        onChange?.(newValue.format(format), newValue)
      }

      if (!disableConfirm) {
        setOpen(false)
      }
    }

    const baseInputProps = {
      ...otherProps,
      ref,
      style,
      className,
      error,
      size,
      readOnly: !editable,
      allowClear,
      suffix: { render: icons && icons.inputSuffix },
      onPressEnter: () => {
        if (isRangePicker) {
          if (isArray(valueShow) && valueShow.length) {
            if (inputValue && !isValidTime(inputValue)) {
              setOpen(false)
            } else if (
              valueShow[0] === undefined ||
              valueShow[1] === undefined
            ) {
              changeFocusedInputIndex(focusedInputIndex === 0 ? 1 : 0)
            } else if (valueShow.length === 2) {
              onConfirmValue(valueShow)
            }
          } else {
            setOpen(false)
          }
        } else {
          onConfirmValue(valueShow || currentValue)
        }
      },
      onClear: (e?: any) => {
        e?.stopPropagation()
        onConfirmValue(undefined)
        onChange?.(undefined, undefined)
        onClear?.()
      },
      onChange: (inputValue?: string | string[]) => {
        if (!currentPopupVisible) {
          setCurrentPopupVisible(true)
        }
        if (isRangePicker) {
          if (!inputValue) {
            setRangeInputValue(undefined)
            return
          }
          if (!isArray(inputValue)) return
          setRangeInputValue(inputValue)
          const val = inputValue[focusedInputIndex]
          const newValueShow = [
            ...(isArray(valueShow)
              ? valueShow
              : (currentValue as Dayjs[]) || []),
          ]
          if (isValidTime(val)) {
            newValueShow[focusedInputIndex] = getDayjsValue(
              val,
              format,
            ) as Dayjs
            setValueShow(newValueShow)
            setRangeInputValue(undefined)
          }
        } else {
          if (isArray(inputValue)) return
          setInputValue(inputValue)
          if (isValidTime(inputValue)) {
            setValueShow(getDayjsValue(inputValue, format))
            setInputValue(undefined)
          }
        }
      },
    }

    const formatTime = (str: Dayjs) => {
      return str ? dayjs(str)?.format(format) : ""
    }

    return (
      <Trigger
        openDelay={0}
        closeDelay={0}
        trigger="click"
        colorScheme="white"
        closeOnClick={false}
        showArrow={false}
        clickOutsideToClose
        withoutPadding
        position={position}
        disabled={
          (isArray(disabled) && disabled.includes(true)) ||
          (!isArray(disabled) && disabled)
        }
        onVisibleChange={(visible: boolean) => {
          if (visible) {
            setOpen(visible, () => {
              inputRef.current?.focus()
            })
          } else {
            setOpen(visible)
          }
        }}
        popupVisible={currentPopupVisible}
        content={
          <div
            css={triggerContentStyle}
            onClick={() => inputRef.current?.focus()}
          >
            {cloneElement(popup as ReactElement, {
              ...props,
              format,
              inputValue,
              setInputValue,
              onConfirmValue,
              setValueShow,
              valueShow: isRangePicker
                ? isArray(valueShow) && valueShow.length
                  ? valueShow
                  : currentValue
                : valueShow || currentValue,
              value: currentValue,
              popupVisible: currentPopupVisible,
              focusedInputIndex,
              changeFocusedInputIndex,
            })}
          </div>
        }
        {...triggerProps}
      >
        {isRangePicker ? (
          <RangeInput
            {...baseInputProps}
            disabled={disabled}
            placeholder={rangeInputPlaceholder}
            inputGroupRef={inputGroupRef}
            focusedInputIndex={focusedInputIndex}
            changeFocusedInputIndex={changeFocusedInputIndex}
            value={
              rangeInputValue
                ? rangeInputValue
                : isArray(valueShow) && valueShow.length
                ? [formatTime(valueShow[0]), formatTime(valueShow?.[1])]
                : isArray(currentValue) && currentValue.length
                ? [formatTime(currentValue[0]), formatTime(currentValue?.[1])]
                : []
            }
          />
        ) : (
          <Input
            {...baseInputProps}
            inputRef={inputRef}
            disabled={!isArray(disabled) && disabled}
            placeholder={inputPlaceHolder}
            value={
              inputValue
                ? inputValue
                : valueShow && !isArray(valueShow)
                ? formatTime(valueShow)
                : currentValue && !isArray(currentValue)
                ? formatTime(currentValue)
                : ""
            }
          />
        )}
      </Trigger>
    )
  },
)

Picker.displayName = "Picker"
