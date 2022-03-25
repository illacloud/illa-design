/** @jsxImportSource @emotion/react */
import * as React from "react"
import {
  forwardRef,
  ReactElement,
  useEffect,
  useContext,
  useRef,
  useState,
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
import { CheckmarkIcon, ReduceIcon } from "@illa-design/icon"
import { Trigger } from "@illa-design/trigger"
import { RenderPickerProps } from "./interface"
import { css } from "@emotion/react"

export const Picker = forwardRef<HTMLDivElement, RenderPickerProps>(
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
      // [todo] focus on index
      // setTimeout(() => inputRef.current?.focus(index));
    }

    const setOpen = (visible: boolean, callback?: Function) => {
      if (currentPopupVisible !== visible) {
        setCurrentPopupVisible(visible)
      }
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
      // popupVisible: currentPopupVisible,
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
      onChange: (inputValue?: string) => {
        if (!currentPopupVisible) {
          setCurrentPopupVisible(true)
        }
        setInputValue(inputValue)
        if (isRangePicker) {
          const newValueShow = [
            ...(isArray(valueShow)
              ? valueShow
              : (currentValue as Dayjs[]) || []),
          ]
          if (isValidTime(inputValue)) {
            newValueShow[focusedInputIndex] = getDayjsValue(
              inputValue,
              format,
            ) as Dayjs
            setValueShow(newValueShow)
            setInputValue(undefined)
          }
        } else if (isValidTime(inputValue)) {
          setValueShow(getDayjsValue(inputValue, format))
          setInputValue(undefined)
        }
      },
    }

    let showValue = ""
    if (inputValue !== undefined) {
      showValue = inputValue
    } else if (valueShow && !isArray(valueShow)) {
      showValue = dayjs(valueShow)?.format(format)
    } else if (currentValue && !isArray(currentValue)) {
      showValue = dayjs(currentValue)?.format(format)
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
            css={css`
              width: unset;
              display: inline-flex;
            `}
            inputRef={inputRef}
            placeholder={inputPlaceHolder}
            value={showValue}
          />
        )}
      </Trigger>
    )
  },
)

Picker.displayName = "Picker"
