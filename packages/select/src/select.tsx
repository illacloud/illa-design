/** @jsxImportSource @emotion/react */
import * as React from "react"
import {
  forwardRef,
  ChangeEvent,
  useRef,
  useState,
  useMemo,
  useEffect,
} from "react"
import { css } from "@emotion/react"
import { useMergeValue, isArray, isObject } from "@illa-design/system"
import { Trigger } from "@illa-design/trigger"
import { List } from "@illa-design/list"
import { Empty } from "@illa-design/empty"
import { SelectView } from "./select-view"
import {
  SelectProps,
  OptionProps,
  OptionInfo,
  InputValueChangeReason,
  LabeledValue,
} from "./interface"
import { applyMergeCss, applyRadioSize, applySelectStyle } from "./style"
import {
  flatChildren,
  getValidValue,
  isEmptyValue,
  isSelectOptGroup,
  isSelectOption,
  SelectInner,
} from "./utils"

// 输入框粘贴会先触发 onPaste 后触发 onChange，但 onChange 的 value 中不包含换行符
// 如果刚刚因为粘贴触发过分词，则 onChange 不再进行分词尝试
const THRESHOLD_TOKEN_SEPARATOR_TRIGGER = 100

export const Select = forwardRef<HTMLElement, SelectProps>((props, ref) => {
  const {
    mode,
    children,
    disabled,
    value,
    defaultValue,
    labelInValue,
    placeholder,
    options,
    filterOption,
    showSearch,
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
    ...otherProps
  } = props

  const isMultipleMode = mode === "multiple" || mode === "tags"
  const isNoOptionSelected = isEmptyValue(value, isMultipleMode)

  const [currentVisible, setCurrentVisible] = useState<boolean>()
  // 用来保存 value 和选中项的映射
  const refValueMap = useRef<
    Array<{ value: OptionProps["value"]; option: OptionInfo }>
  >([])
  const [stateValue, setValue] = useState(
    getValidValue(props.defaultValue, isMultipleMode, labelInValue),
  )
  const currentValue =
    "value" in props
      ? getValidValue(props.value, isMultipleMode, labelInValue)
      : stateValue

  const [inputValue, setInputValue, stateInputValue] = useMergeValue("", {
    value: "inputValue" in props ? props.inputValue || "" : undefined,
  })
  // tag模式下，由用户输入而扩展到Options中的值
  const [userCreatedOptions, setUserCreatedOptions] = useState<string[]>([])
  // 具有选中态或者 hover 态的 option 的 value
  const [valueActive, setValueActive] = useState<OptionProps["value"]>(
    isArray(currentValue) ? currentValue[0] : currentValue,
  )

  // ref
  const refList = useRef<any>(null)
  const refTrigger = useRef(null)
  // 触发 onInputValueChange 回调的值
  const refOnInputChangeCallbackValue = useRef(inputValue)
  const refOnInputChangeCallbackReason = useRef<InputValueChangeReason>()
  // 用 none 表示目前处于键盘操作中，忽略鼠标的 onMouseEnter 和 onMouseLeave 事件
  const refKeyboardArrowDirection = useRef<"up" | "down" | "none" | null>(null)
  // 上次成功触发自动分词的时间
  const refTSLastSeparateTriggered = useRef(0)

  // 缓存较为耗时的 flatChildren 的结果
  const {
    childrenList,
    optionInfoMap,
    optionValueList,
    optionIndexListForArrowKey,
    hasOptGroup,
    hasComplexLabelInOptions,
  } = useMemo(() => {
    return flatChildren(
      { children, options, filterOption },
      {
        inputValue,
        userCreatedOptions,
        userCreatingOption: mode === "tags" ? inputValue : "",
      },
    )
  }, [children])

  const valueActiveDefault =
    optionValueList?.[optionIndexListForArrowKey?.[0]] ?? undefined

  const scrollIntoView = (optionValue: any) => {
    const activeOption = optionInfoMap.get(optionValue)
    if (refList.current && activeOption && activeOption.child.props) {
      refList.current.scrollTo({ key: activeOption.child.props._key })
    }
  }

  // 尝试更新 inputValue，触发 onInputValueChange
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

  // 选项下拉框显示/隐藏时的一些自动行为
  useEffect(() => {
    if (currentVisible) {
      // 重新设置 hover 态的 Option
      const firstValue = isArray(currentValue) ? currentValue[0] : currentValue
      const nextValueActive =
        !isNoOptionSelected && optionInfoMap.has(firstValue)
          ? firstValue
          : valueActiveDefault
      setValueActive(nextValueActive)
      // 在弹出框动画结束之后再执行scrollIntoView，否则会有不必要的滚动产生
      setTimeout(() => scrollIntoView(nextValueActive))
    } else {
      tryUpdateInputValue("", "optionListHide")
    }
  }, [currentVisible])

  // 在 inputValue 变化时，适时触发 onSearch
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
    const option = optionInfoMap.get(value)
    if (option) {
      const index = refValueMap.current.findIndex(
        (item) => item.value === value,
      )
      if (index > -1) {
        refValueMap.current.splice(index, 1, { value, option })
      } else {
        refValueMap.current.push({ value, option })
      }
      return option
    }

    const item = refValueMap.current.find((x) => x.value === value)
    return item?.option as OptionInfo
  }

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist()
  }

  // Object should be returned when labelInValue is true
  const getValueForCallbackParameter = (
    value: SelectInner,
    option: OptionInfo | Array<OptionInfo> | undefined,
    isEmpty = isEmptyValue(value, isMultipleMode),
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

  // 尝试更新 popupVisible，触发 onVisibleChange
  const tryUpdatePopupVisible = (value: boolean) => {
    if (currentVisible !== value) {
      setCurrentVisible(value)
      onVisibleChange && onVisibleChange(value)
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

  // 多选时，选择一个选项
  const checkOption = (valueToAdd: any) => {
    const option = optionInfoMap.get(valueToAdd)
    if (option) {
      const newValue = (value as string[]).concat(valueToAdd)
      tryUpdateSelectValue(newValue)
    }
  }

  // 多选时，取消一个选项
  const uncheckOption = (valueToRemove?: any) => {
    // 取消选中时不需要检查option是否存在，因为可能已被外部剔除了此选项
    const option = getOptionInfoByValue(valueToRemove)
    const newValue = (value as string[]).filter((v) => v !== valueToRemove)
    tryUpdateSelectValue(newValue)

    if (onDeselect) {
      onDeselect(
        getValueForCallbackParameter(valueToRemove, option, false) as
          | React.ReactText
          | LabeledValue,
        option,
      )
    }
  }

  const handleOptionClick = (
    optionValue: OptionProps["value"],
    disabled: boolean,
  ) => {
    if (disabled) {
      return
    }

    if (isMultipleMode) {
      ;(value as Array<OptionProps["value"]>).indexOf(optionValue) === -1
        ? checkOption(optionValue)
        : uncheckOption(optionValue)

      // 点击一个选项时，清空输入框内容
      if (!isObject(showSearch) || !showSearch.retainInputValueWhileSelect) {
        tryUpdateInputValue("", "optionChecked")
      }
    } else {
      if (optionValue !== value) {
        tryUpdateSelectValue(optionValue as SelectInner)
      }
      setTimeout(() => {
        tryUpdatePopupVisible(false)
      })
    }
  }

  const renderOption = () => {
    const elementList = children ? (
      <List
        ref={refList}
        css={css`
          min-width: unset !important;
          width: 100%;
        `}
        size="small"
        data={children as any}
        render={(data, index) => {
          return data
        }}
        renderKey={(data, index) => {
          return index.toString()
        }}
        hoverable
        onMouseMove={() => {
          refKeyboardArrowDirection.current = null;
        }}
        onScroll={(e) => onPopupScroll?.(e.target)}
      >
        {(child: any) => {
          if (isSelectOptGroup(child)) {
            return <child.type {...child.props} />
          }
          if (isSelectOption(child)) {
            return (
              child && (
                <child.type
                  {...child.props}
                  valueSelect={value}
                  valueActive={valueActive}
                  isMultipleMode={isMultipleMode}
                  onClickOption={handleOptionClick}
                  onMouseEnter={(value: any) => {
                    refKeyboardArrowDirection.current === null &&
                      setValueActive(value)
                  }}
                  onMouseLeave={() => {
                    refKeyboardArrowDirection.current === null &&
                      setValueActive(undefined)
                  }}
                />
              )
            )
          }
          return child
        }}
      </List>
    ) : null

    return <div>{elementList || <Empty />}</div>
  }

  // SelectView组件事件处理
  const selectViewEventHandlers = {
    onFocus,
    onBlur: (event: React.FocusEvent<HTMLSelectElement>) => {
      onBlur && onBlur(event)
      // 兼容：下拉列表隐藏时，失焦需要清空已输入内容
      !currentVisible && tryUpdateInputValue("", "optionListHide")
    },
    onChangeInputValue: (value: string) => {
      tryUpdateInputValue(value, "manual")

      if (!currentVisible && value) {
        tryUpdatePopupVisible(true)
      }
    },
    // Option Items
    onRemoveCheckedItem: (_: any, index: number, event: Event) => {
      event.stopPropagation()
      uncheckOption(currentValue?.[index as never])
    },
    onClear: (event: any) => {
      event.stopPropagation()
      if (isMultipleMode) {
        // 保留已经被选中但被disabled的选项值
        const newValue = (value as []).filter((v) => {
          const item = optionInfoMap.get(v)
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
      content={renderOption()}
      showArrow={false}
      colorScheme="white"
      position="tl"
      disabled={disabled}
      withoutPadding
      autoAlignPopupWidth
      popupVisible={currentVisible}
      onVisibleChange={(value: boolean) => {
        console.log(value, "onVisibleChange")
        if (currentVisible !== value) {
          setCurrentVisible(value)
          onVisibleChange?.(value)
        }
      }}
    >
      <SelectView
        {...props}
        {...selectViewEventHandlers}
        popupVisible={currentVisible}
        isMultipleMode={isMultipleMode}
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
      />
    </Trigger>
  )
})

Select.displayName = "Select"
