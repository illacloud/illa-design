import {
  forwardRef,
  useRef,
  useState,
  useMemo,
  useEffect,
  ReactText,
  SyntheticEvent,
} from "react"
import { useMergeValue, isArray, isObject, omit } from "@illa-design/system"
import { Trigger } from "@illa-design/trigger"
import { SelectView } from "./select-view"
import {
  SelectProps,
  OptionProps,
  OptionInfo,
  InputValueChangeReason,
  LabeledValue,
} from "./interface"
import {
  flatChildren,
  getValidValue,
  isEmptyValue,
  isSelectOption,
  SelectInner,
} from "./utils"
import { OptionList } from "./option-list"

export const Select = forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
  const {
    size = "medium",
    children,
    disabled,
    value,
    defaultValue,
    labelInValue,
    options,
    filterOption = true,
    showSearch,
    multiple,
    allowCreate,
    triggerProps,
    // event
    onChange,
    onSearch,
    onFocus,
    onBlur,
    onClear,
    onDeselect,
    onPopupScroll,
    onVisibleChange,
    onInputValueChange,
    readOnly,
    colorScheme = "blue",
  } = props

  const [currentVisible, setCurrentVisible] = useState<boolean>()
  const refValueMap = useRef<
    { value: OptionProps["value"]; option: OptionInfo }[]
  >([])
  const [stateValue, setValue] = useState(
    getValidValue(defaultValue, multiple, labelInValue),
  )
  const currentValue =
    "value" in props ? getValidValue(value, multiple, labelInValue) : stateValue

  const isNoOptionSelected = isEmptyValue(currentValue, multiple)
  const [inputValue, setInputValue, stateInputValue] = useMergeValue("", {
    value: "inputValue" in props ? props.inputValue || "" : undefined,
  })
  const [userCreatedOptions, setUserCreatedOptions] = useState<string[]>([])
  const [valueActive, setValueActive] = useState<OptionProps["value"]>(
    isArray(currentValue) ? currentValue[0] : currentValue,
  )

  // ref
  const refList = useRef<any>(null)
  // onInputValueChange Callback
  const refOnInputChangeCallbackValue = useRef(inputValue)
  const refOnInputChangeCallbackReason = useRef<InputValueChangeReason>()

  const {
    childrenList,
    optionInfoMap,
    optionValueList,
    optionIndexListForArrowKey,
  } = useMemo(() => {
    return flatChildren(
      { children, options, filterOption },
      {
        inputValue,
        userCreatedOptions,
        userCreatingOption: allowCreate ? inputValue : "",
      },
    )
  }, [children, options, filterOption, inputValue, userCreatedOptions])

  const valueActiveDefault =
    optionValueList?.[optionIndexListForArrowKey?.[0]] ?? undefined

  const scrollIntoView = (optionValue: any) => {
    const activeOption = optionInfoMap.get(optionValue)
    if (refList.current && activeOption && activeOption?.child?.props) {
      refList.current.scrollTo({ key: activeOption?.child?.props?._key })
    }
  }

  const tryUpdateInputValue = (
    value: string,
    reason: InputValueChangeReason,
  ) => {
    if (value !== refOnInputChangeCallbackValue.current) {
      setInputValue(value)
      refOnInputChangeCallbackValue.current = value
      refOnInputChangeCallbackReason.current = reason
      onInputValueChange?.(value, reason)
    }
  }

  // currentVisible change
  useEffect(() => {
    if (currentVisible) {
      const firstValue = isArray(currentValue) ? currentValue[0] : currentValue
      const nextValueActive =
        !isNoOptionSelected && optionInfoMap.has(firstValue)
          ? firstValue
          : valueActiveDefault
      setValueActive(nextValueActive)
      // wait option animation ends, to avoid unnecessary scroll
      setTimeout(() => scrollIntoView(nextValueActive))
    } else {
      tryUpdateInputValue("", "optionListHide")
    }
  }, [currentVisible])

  // when inputValue change, trigger onSearch
  useEffect(() => {
    const { current: reason } = refOnInputChangeCallbackReason
    if (
      stateInputValue === inputValue &&
      (reason === "manual" || reason === "optionListHide")
    ) {
      onSearch?.(inputValue, reason)
    }
  }, [inputValue])

  const getOptionInfoByValue = (value: OptionProps["value"]): OptionInfo => {
    const option = optionInfoMap?.get(value)
    if (option) {
      const index = refValueMap.current?.findIndex(
        (item) => item?.value === value,
      )
      if (index > -1) {
        refValueMap.current?.splice(index, 1, { value, option })
      } else {
        refValueMap.current?.push({ value, option })
      }
      return option
    }

    const item = refValueMap.current?.find((x) => x.value === value)
    return item?.option as OptionInfo
  }

  // Object should be returned when labelInValue is true
  const getValueForCallbackParameter = (
    value: SelectInner,
    option: OptionInfo | Array<OptionInfo> | undefined,
    isEmpty = isEmptyValue(value, multiple),
  ) => {
    if (labelInValue && !isEmpty) {
      if (Array.isArray(value)) {
        return value.map((optionValue, index) => ({
          value: optionValue,
          label: (option as OptionInfo[])[index]?.children,
        }))
      }
      return { value, label: (option as OptionInfo)?.children }
    }
    return value
  }

  const tryUpdatePopupVisible = (value: boolean) => {
    if (currentVisible !== value) {
      setCurrentVisible(value)
      onVisibleChange?.(value)
    }
  }

  const tryUpdateSelectValue = (value: SelectInner) => {
    setValue(value)
    if (onChange) {
      const option =
        value === undefined
          ? undefined
          : Array.isArray(value)
          ? value.map(getOptionInfoByValue)
          : getOptionInfoByValue(value)
      onChange(getValueForCallbackParameter(value, option), option)
    }
  }

  // multiple = true
  const checkOption = (valueToAdd: any) => {
    const option = optionInfoMap.get(valueToAdd)
    if (option) {
      const newValue = (currentValue as string[]).concat(valueToAdd)
      tryUpdateSelectValue(newValue)
    }
  }
  const uncheckOption = (valueToRemove?: any) => {
    const option = getOptionInfoByValue(valueToRemove)
    const newValue = (currentValue as string[])?.filter(
      (v) => v !== valueToRemove,
    )
    tryUpdateSelectValue(newValue)

    if (onDeselect) {
      onDeselect(
        getValueForCallbackParameter(valueToRemove, option, false) as
          | ReactText
          | LabeledValue,
        option,
      )
    }
  }

  // when mode change, format value
  useEffect(() => {
    if (multiple) {
      if (!Array.isArray(currentValue)) {
        setValue(currentValue === undefined ? [] : [currentValue as any])
      }
    } else if (Array.isArray(currentValue)) {
      setValue(
        currentValue?.length === 0 ? undefined : (currentValue?.[0] as any),
      )
    }
  }, [multiple, currentValue])

  // update refValueMap
  useEffect(() => {
    refValueMap.current = refValueMap.current?.filter((x) => {
      if (x?.value) {
        return multiple
          ? isArray(currentValue) &&
              (currentValue as Array<string | number>)?.indexOf(x?.value) > -1
          : x?.value === currentValue
      }
      return false
    })
  }, [currentValue, multiple])

  // allowCreate = true, change optionValue
  useEffect(() => {
    // Treat the value without the corresponding option as custom tag, and remove the valueTag that don't exist in the value
    if (allowCreate && Array.isArray(currentValue)) {
      const newUseCreatedOptions = (currentValue as any[]).filter((v) => {
        const option = optionInfoMap.get(v)
        return !option || option._origin === "userCreatingOption"
      })
      const validUseCreatedOptions = userCreatedOptions.filter(
        (tag) => (currentValue as any[]).indexOf(tag) !== -1,
      )
      const _userCreatedOptions =
        validUseCreatedOptions.concat(newUseCreatedOptions)
      if (_userCreatedOptions.toString() !== userCreatedOptions.toString()) {
        setUserCreatedOptions(_userCreatedOptions)
      }
    }
  }, [currentValue])

  const handleOptionClick = (
    optionValue: OptionProps["value"],
    disabled: boolean,
  ) => {
    if (disabled) {
      return
    }
    if (multiple) {
      ;(currentValue as Array<OptionProps["value"]>)?.indexOf(optionValue) ===
      -1
        ? checkOption(optionValue)
        : uncheckOption(optionValue)
      // clear InputValue
      if (!isObject(showSearch) || !showSearch.retainInputValueWhileSelect) {
        tryUpdateInputValue("", "optionChecked")
      }
    } else {
      if (optionValue !== currentValue) {
        tryUpdateSelectValue(optionValue as SelectInner)
      }
      setTimeout(() => {
        tryUpdatePopupVisible(false)
      })
    }
  }

  // SelectView event handle
  const selectViewEventHandlers = {
    onFocus,
    onBlur: (event: SyntheticEvent) => {
      onBlur?.(event)
      !currentVisible && tryUpdateInputValue("", "optionListHide")
    },
    onChangeInputValue: (value: string) => {
      tryUpdateInputValue(value, "manual")
      if (!currentVisible && value) {
        tryUpdatePopupVisible(true)
      }
    },
    onClear: (event: SyntheticEvent) => {
      event.stopPropagation()
      if (multiple) {
        // Keep the value that has been selected but disabled
        const newValue = (currentValue as [])?.filter((v) => {
          const item = optionInfoMap?.get(v)
          return item && item.disabled
        })
        tryUpdateSelectValue(newValue)
      } else {
        tryUpdateSelectValue(undefined)
      }
      tryUpdateInputValue("", "manual")
      onClear?.(currentVisible)
    },
  }

  return (
    <Trigger
      trigger="click"
      content={
        <OptionList
          ref={refList}
          childrenList={childrenList}
          render={(child: any) => {
            if (isSelectOption(child)) {
              return (
                child && (
                  <child.type
                    {...child.props}
                    size={size}
                    valueSelect={currentValue}
                    valueActive={valueActive}
                    multiple={multiple}
                    colorScheme={colorScheme}
                    onClickOption={handleOptionClick}
                    onMouseEnter={(value: any) => {
                      setValueActive(value)
                    }}
                    onMouseLeave={() => {
                      setValueActive(undefined)
                    }}
                  />
                )
              )
            }
            return child
          }}
          onScroll={(e) => onPopupScroll?.(e.target)}
        />
      }
      showArrow={false}
      colorScheme="white"
      position="bl"
      disabled={disabled || readOnly}
      openDelay={10}
      closeDelay={10}
      withoutPadding
      closeOnClick
      clickOutsideToClose
      autoAlignPopupWidth
      popupVisible={currentVisible}
      onVisibleChange={tryUpdatePopupVisible}
      {...triggerProps}
    >
      <SelectView
        {...omit(props, ["triggerProps"])}
        {...selectViewEventHandlers}
        ref={ref}
        value={currentValue}
        inputValue={inputValue}
        popupVisible={currentVisible}
        multiple={multiple}
        isEmptyValue={isNoOptionSelected}
        renderText={(value) => {
          const option = getOptionInfoByValue(value)
          let text = value
          if (option) {
            text = option.children
          }
          return {
            text,
            disabled: option?.disabled,
          }
        }}
        onRemoveCheckedItem={(_, index, event) => {
          event?.stopPropagation()
          uncheckOption(currentValue?.[index as never])
        }}
      />
    </Trigger>
  )
})

Select.displayName = "Select"
