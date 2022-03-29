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
import { Input } from "@illa-design/input"
import { TimeIcon } from "@illa-design/icon"
import { Trigger } from "@illa-design/trigger"
import { RenderPickerProps } from "./interface"
import { triggerContentStyle } from "./style"
import { RangeInput, RangeInputRef } from "../../input/src"

export const Picker = forwardRef<HTMLDivElement, RenderPickerProps>(
  (props, ref) => {
    const {
      style,
      className,
      popup,
      isRangePicker,
      allowClear = true,
      disableConfirm,
      placeholder,
      disabled,
      position = "bl",
      format = "HH:mm:ss",
      error,
      triggerProps,
      value: propsValue,
      popupVisible,
      onChange,
      icons = { inputSuffix: <TimeIcon /> },
      size,
      scrollSticky = true,
      editable = true,
      unmountOnExit,
      order = true,
      // events
      onClear,
      ...otherProps
    } = props

    const getDefaultValue = (): Dayjs | Dayjs[] | undefined => {
      let value
      if (props.value) {
        value = getDayjsValue(props.value, format)
      } else if (props.defaultValue) {
        value = getDayjsValue(props.defaultValue, format)
      }
      return value
    }

    const configProviderProps = useContext<ConfigProviderProps>(
      ConfigProviderContext,
    )
    const locale = configProviderProps?.locale?.timePicker ?? def.timePicker
    const [valueShow, setValueShow] = useState<Dayjs | Dayjs[]>()
    const [inputValue, setInputValue] = useState<string>()
    const [rangeInputValue, setRangeInputValue] = useState<string[] | undefined>()
    const [focusedInputIndex, setFocusedInputIndex] = useState<number>(0)

    // controlled / uncontrolled
    const [currentPopupVisible, setCurrentPopupVisible] = useMergeValue(false, {
      value: popupVisible,
      defaultValue: undefined,
    })
    const [currentValue, setCurrentValue] = useMergeValue(getDefaultValue(), {
      value: getDayjsValue(propsValue, format),
      defaultValue: undefined,
    })

    const inputRef = useRef<HTMLInputElement>(null)
    const inputGroupRef = useRef({} as RangeInputRef)

    const rangeInputPlaceholder = isArray(placeholder)
      ? placeholder
      : locale["placeholders"]
    const inputPlaceHolder = !isArray(placeholder)
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
      const newValue =
        isRangePicker && order ? getSortedDayjsArray(vs as Dayjs[]) : vs
      setCurrentValue(newValue)
      setValueShow(undefined)
      setInputValue(undefined)

      if (
        isArray(newValue) &&
        isDayjsArrayChange(currentValue as Dayjs[], newValue)
      ) {
        onChange &&
          onChange(
            newValue.map((t) => t.format(format)),
            newValue,
          )
      }
      if (isDayjs(newValue) && isDayjsChange(currentValue as Dayjs, newValue)) {
        onChange && onChange(newValue.format(format), newValue)
      }

      if (!disableConfirm) {
        setOpen(false)
      }
    }

    const baseInputProps = {
      style,
      className,
      format,
      disabled,
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
        onChange && onChange(undefined, undefined)
        onClear?.()
      },
      onChange: (inputValue?: string| string[]) => {
        console.log(inputValue, "onChange")
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
          console.log(val, isValidTime(val), 'val, rangeInputValue')
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
      return dayjs(str)?.format(format)
    }

    return (
      <Trigger
        trigger="click"
        colorScheme="white"
        closeOnClick={false}
        showArrow={false}
        clickOutsideToClose
        withoutPadding
        position={position}
        disabled={disabled}
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
