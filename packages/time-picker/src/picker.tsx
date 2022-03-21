/** @jsxImportSource @emotion/react */
import * as React from "react"
import {
  forwardRef,
  ReactElement,
  useEffect,
  useContext,
  useCallback,
  useRef,
  useState,
} from "react"
import dayjs, { Dayjs } from "dayjs"
import {
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
import { Trigger } from "@illa-design/trigger"
import { CheckmarkIcon, ReduceIcon } from "@illa-design/icon"
import { PickerProps, CalendarValue } from "./interface"

interface RenderPickerProps extends PickerProps {
  defaultValue?: CalendarValue | CalendarValue[]
  value?: CalendarValue | CalendarValue[]
  onSelect?: (value?: string | string[], dayjsValue?: Dayjs | Dayjs[]) => void
  onChange?: (value?: string | string[], dayjsValue?: Dayjs | Dayjs[]) => void
  isRangePicker?: boolean
  picker?: ReactElement
  hideFooter?: boolean
  order?: boolean
}

export const Picker = forwardRef<HTMLInputElement, RenderPickerProps>(
  (props, ref) => {
    const {
      style,
      className,
      picker,
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
      icons,
      size,
      editable = true,
      unmountOnExit,
      order = true,
      ...otherProps
    } = props

    const getDefaultValue = ():Dayjs | (Dayjs | undefined)[] | undefined => {
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
    const locale = configProviderProps?.locale?.empty ?? def.empty
    const [valueShow, setValueShow] = useState<Dayjs | Dayjs[]>()
    const [inputValue, setInputValue] = useState<string>()
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

    const rangeInputPlaceholder = isArray(placeholder)
      ? placeholder
      : locale.TimePicker["placeholders"]
    const inputPlaceHolder = placeholder || locale.TimePicker["placeholder"]

    function isValidTime(time: string): boolean {
      return (
        typeof time === "string" && dayjs(time, format)?.format(format) === time
      )
    }

    function changeFocusedInputIndex(index: number) {
      setFocusedInputIndex(index)
      // [todo] focus on index
      // setTimeout(() => inputRef.current?.focus(index));
    }

    const setOpen = (visible: boolean, callback?: Function) => {
      setCurrentPopupVisible(visible)
      setInputValue(undefined)
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
      popupVisible: currentPopupVisible,
      format,
      disabled,
      error,
      size,
      editable,
      allowClear,
      suffixIcon: (icons && icons.inputSuffix) ,
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
        e.stopPropagation()
        onConfirmValue(undefined)
        onChange && onChange(undefined, undefined)
        props.onClear && props.onClear()
      },
      onChange: (e: any) => {
        const newInputValue = e.target.value
        if (!popupVisible) {
          setCurrentPopupVisible(true)
        }
        setInputValue(newInputValue)
        if (isRangePicker) {
          const newValueShow = [
            ...(isArray(valueShow)
              ? valueShow
              : (currentValue as Dayjs[]) || []),
          ]
          if (isValidTime(newInputValue)) {
            newValueShow[focusedInputIndex] = getDayjsValue(
              newInputValue,
              format,
            ) as Dayjs
            setValueShow(newValueShow)
            setInputValue(undefined)
          }
        } else if (isValidTime(newInputValue)) {
          setValueShow(getDayjsValue(newInputValue, format))
          setInputValue(undefined)
        }
      },
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
        onVisibleChange={(visible) => {
          if (visible) {
            setOpen(visible, () => {
              inputRef.current?.focus()
            })
            return
          }
          setOpen(false)
        }}
        popupVisible={currentPopupVisible}
        content={
          <div onClick={() => inputRef.current?.focus()}>
            {React.cloneElement(picker as ReactElement, {
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
          <div>InputRange</div>
        ) : (
          <Input
            {...baseInputProps}
            inputRef={inputRef}
            placeholder={inputPlaceHolder}
            // value={(valueShow || currentValue) as Dayjs}
            // inputValue={inputValue as string}
          />
        )}
      </Trigger>
    )
  },
)

Picker.displayName = "Picker"
