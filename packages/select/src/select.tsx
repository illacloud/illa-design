/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, ChangeEvent, useRef, useState, useMemo } from "react"
import { SelectProps, OptionProps, OptionInfo } from "./interface"
import { applyMergeCss, applyRadioSize, applySelectStyle } from "./style"
import { flatChildren } from "./utils"
import { useMergeValue } from "@illa-design/system"
import { Trigger } from "@illa-design/trigger"
import { List } from "@illa-design/list"
import { Empty } from "@illa-design/empty"
import { SelectView } from "./select-view"
import { css } from "@emotion/react"

export const Select = forwardRef<HTMLElement, SelectProps>((props, ref) => {
  const {
    mode,
    children,
    disabled,
    value,
    defaultValue,
    placeholder,
    options,
    filterOption,
    // event
    onChange,
    onVisibleChange,
    ...otherProps
  } = props

  const isMultiMode = mode === "multiple" || mode === "tags"

  const [currentVisible, setCurrentVisible] = useState<boolean>()
  // 用来保存 value 和选中项的映射
  const refValueMap = useRef<
    Array<{ value: OptionProps["value"]; option: OptionInfo }>
  >([])

  const [currentValue, setCurrentValue] = useMergeValue(undefined, {
    value: value,
    defaultValue: defaultValue,
  })
  const [inputValue, setInputValue, stateInputValue] = useMergeValue('', {
    value: 'inputValue' in props ? props.inputValue || '' : undefined,
  });
  // tag模式下，由用户输入而扩展到Options中的值
  const [userCreatedOptions, setUserCreatedOptions] = useState<string[]>([]);

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
        userCreatingOption: (mode === "tags") ? inputValue : "",
      },
    )
  }, [children])

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

  const renderOption = () => {
    const elementList = children ? (
      <List
        css={css`
          min-width: unset !important;
          width: 100%;
        `}
        size="small"
        data={children as any}
        render={(data, index) => {
          console.log(data, "data")
          return data
        }}
        renderKey={(data, index) => {
          return index.toString()
        }}
        hoverable
        height={200}
      />
    ) : null

    return <div>{elementList || <Empty />}</div>
  }
  console.log(children, "children")

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
        if (currentVisible !== value) {
          setCurrentVisible(value)
          onVisibleChange?.(value)
        }
      }}
    >
      <SelectView
        {...props}
        popupVisible={currentVisible}
        isMultiMode={isMultiMode}
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
