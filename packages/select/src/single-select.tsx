import {
  Children,
  cloneElement,
  forwardRef,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
} from "react"
import {
  OptionProps,
  SelectOptionObject,
  SelectProps,
  SelectValue,
} from "./interface"
import { Input } from "@illa-design/input"
import { Dropdown, DropList, DropListItem } from "@illa-design/dropdown"
import { useMergeValue } from "@illa-design/system"
import { DownIcon, LoadingIcon, UpIcon } from "@illa-design/icon"
import { getColor } from "@illa-design/theme"
import { Empty } from "@illa-design/empty"

export const SingleSelect = forwardRef<HTMLDivElement, SelectProps>(
  (props, ref) => {
    const {
      size = "medium",
      allowClear,
      placeholder,
      addAfter,
      labelInValue,
      colorScheme,
      defaultPopupVisible,
      popupVisible,
      disabled,
      error,
      loading,
      dropdownProps,
      addBefore,
      children,
      prefix,
      defaultValue,
      options,
      showSearch,
      value,
      filterOption,
      readOnly,
      variant,
      onChange,
      onClear,
      onInputValueChange,
      onKeyDown,
      onVisibleChange,
      onFocus,
      onDeselect,
      multiple,
      onBlur,
      trigger = "click",
      autoAlignPopupWidth = true,
      ...otherProps
    } = props

    const [finalPopupVisible, setFinalPopupVisible] = useMergeValue(false, {
      defaultValue: defaultPopupVisible,
      value: popupVisible,
    })

    const getValueFromProps = useCallback(
      (
        dealValue?:
          | SelectOptionObject
          | string
          | SelectOptionObject[]
          | string[]
          | number
          | number[],
      ) => {
        let dV: number | string | ReactNode | undefined = undefined
        if (dealValue === undefined) {
          dV = undefined
        } else {
          if (options === undefined) {
            Children.forEach(children, (child) => {
              const item = child as ReactElement<PropsWithChildren<OptionProps>>
              if (
                item.props.isSelectOption !== false &&
                item.props.value === dealValue
              ) {
                dV = item.props.children
              }
            })
          } else {
            if (labelInValue) {
              dV = (options as SelectOptionObject[]).find(
                (option) =>
                  option.value === (dealValue as SelectOptionObject).value,
              )?.label
            } else {
              if (options.length > 0) {
                if (
                  typeof options[0] === "string" ||
                  typeof options[0] === "number"
                ) {
                  dV = (options as [])?.find((v) => v === dealValue)
                } else if (typeof options[0] === "object") {
                  dV = (options as SelectOptionObject[]).find(
                    (option) => option.value === dealValue,
                  )?.label
                }
              }
            }
          }
        }
        return dV
      },
      [children, labelInValue, options],
    )

    const [finalInputValue, setFinalInputValue] = useMergeValue<
      number | string | ReactNode | undefined
    >("", {
      defaultValue: getValueFromProps(defaultValue),
      value: getValueFromProps(value),
    })

    const [finalSelectValue, setFinalSelectValue] = useMergeValue<
      SelectValue | undefined
    >(undefined, {
      defaultValue: defaultValue,
      value: value,
    })

    const lastChooseRef = useRef<string | null | ReactNode>(finalInputValue)

    const finalOptions: SelectOptionObject[] = useMemo(() => {
      let newOptions: SelectOptionObject[] = []
      if (options && options.length > 0) {
        if (typeof options[0] === "string" || typeof options[0] === "number") {
          newOptions = (options as []).map((option) => ({
            label: option + "",
            value: option,
          }))
        } else {
          newOptions = options as SelectOptionObject[]
        }
      }
      if (
        filterOption &&
        finalInputValue &&
        finalInputValue !== "" &&
        (typeof finalInputValue === "string" ||
          typeof finalInputValue === "number")
      ) {
        newOptions = newOptions.filter((option) => {
          if (typeof filterOption === "function") {
            return filterOption(finalInputValue)
          }
          return (
            typeof option.label === "string" &&
            option.label.includes(finalInputValue.toString())
          )
        })
      }

      return newOptions
    }, [filterOption, finalInputValue, options])

    return (
      <Dropdown
        colorScheme="white"
        autoAlignPopupWidth={autoAlignPopupWidth}
        trigger={trigger}
        triggerProps={{
          disabled: readOnly,
        }}
        popupVisible={finalPopupVisible}
        dropList={
          <DropList
            maxH="264px"
            onClickItem={(key, children) => {
              if (options === undefined) {
                if (value === undefined) {
                  lastChooseRef.current = children
                  setFinalInputValue(lastChooseRef.current ?? "")
                  setFinalSelectValue(key)
                }
                onChange?.(key)
              } else {
                const option = (options as []).find((o) => {
                  if (typeof o === "object") {
                    return (o as SelectOptionObject).value === key
                  } else {
                    return String(o) === key
                  }
                })
                if (option !== undefined) {
                  if (labelInValue) {
                    if (value === undefined) {
                      lastChooseRef.current = (
                        option as SelectOptionObject
                      ).label
                      setFinalInputValue(lastChooseRef.current ?? "")
                      setFinalSelectValue((option as SelectOptionObject).value)
                    }
                    onChange?.(option)
                  } else {
                    if (typeof option === "object") {
                      if (value === undefined) {
                        lastChooseRef.current = (
                          option as SelectOptionObject
                        ).label
                        setFinalInputValue(lastChooseRef.current ?? "")
                        setFinalSelectValue(
                          (option as SelectOptionObject).value,
                        )
                      }
                      onChange?.((option as SelectOptionObject).value)
                    } else {
                      if (value === undefined) {
                        lastChooseRef.current = option
                        setFinalInputValue(lastChooseRef.current ?? "")
                        setFinalSelectValue(option)
                      }
                      onChange?.(option)
                    }
                  }
                }
              }
            }}
          >
            {children === undefined || children === null
              ? finalOptions?.map((option, i) => {
                  return (
                    <DropListItem
                      key={option.value.toString()}
                      value={option.value.toString()}
                      colorScheme={colorScheme}
                      title={option.label}
                      selected={option.value === finalSelectValue}
                      disabled={option.disabled}
                    />
                  )
                })
              : Children.map(children, (child) => {
                  const item = child as ReactElement<
                    PropsWithChildren<OptionProps>
                  >
                  if (item.props.isSelectOption === false) {
                    return child
                  }
                  return cloneElement(item, {
                    selected: item.props.value === finalSelectValue,
                    colorScheme: colorScheme,
                  })
                })}
            {(!finalOptions || finalOptions.length === 0) && !children && (
              <Empty />
            )}
          </DropList>
        }
        disabled={disabled}
        onVisibleChange={(visible) => {
          if (popupVisible === undefined) {
            setFinalPopupVisible(visible)
          }
          if (showSearch) {
            if (visible) {
              setFinalInputValue("")
              onInputValueChange?.("")
            } else {
              setFinalInputValue(lastChooseRef.current ?? "")
              onInputValueChange?.("")
            }
          }
          onVisibleChange?.(visible)
        }}
        {...dropdownProps}
      >
        <Input
          variant={variant}
          onFocus={onFocus}
          onBlur={onBlur}
          value={finalInputValue}
          readOnly={!showSearch || readOnly}
          addBefore={addBefore}
          addAfter={addAfter}
          error={error}
          onKeyDown={onKeyDown}
          disabled={disabled}
          colorScheme={colorScheme}
          size={size}
          allowClear={allowClear}
          prefix={prefix}
          placeholder={placeholder}
          onChange={(v) => {
            setFinalInputValue(v)
            onInputValueChange?.(v)
          }}
          ref={ref}
          onClear={() => {
            if (value === undefined) {
              setFinalInputValue("")
              onInputValueChange?.("")
              setFinalSelectValue(undefined)
            }
            onClear?.()
            onChange?.(undefined)
          }}
          suffix={
            loading ? (
              <LoadingIcon c={getColor("grayBlue", "05")} spin={true} />
            ) : finalPopupVisible ? (
              <UpIcon />
            ) : (
              <DownIcon />
            )
          }
          {...otherProps}
        />
      </Dropdown>
    )
  },
)

SingleSelect.displayName = "SingleSelect"
