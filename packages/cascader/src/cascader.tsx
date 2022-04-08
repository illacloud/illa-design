import {
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import isEqual from "react-fast-compare"
import { isArray, isObject, isString, KeyCode } from "@illa-design/system"
import { SelectView, SelectViewProps } from "@illa-design/select"
import { Trigger } from "@illa-design/trigger"
import { CascaderProps, OptionProps } from "./interface"
import { DefaultFieldNames } from "./node"
import { DefaultPopup } from "./popup/default-popup"
import { SearchPopup } from "./popup/search-popup"
import Store from "./store"
import { applyPopupStyle } from "./style"
import { logDOM } from "@testing-library/react"

function getConfig(props: any) {
  return {
    fieldNames: props.fieldNames,
    filterOption: props.filterOption,
  }
}

function getStore(props: any, value: any) {
  const _value = value ? (isArray(value[0]) ? value : [value]) : []
  return new Store(props.options || [], _value, getConfig(props))
}

const formatValue = (
  value?: (string | string[])[],
  multiple?: boolean,
): string[][] | undefined => {
  if (value === undefined) {
    return []
  }
  if (multiple) {
    return value as string[][]
  }
  return [value as string[]]
}

export const Cascader = forwardRef<HTMLDivElement, CascaderProps<any>>(
  <T extends OptionProps>(
    props: CascaderProps<T>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const {
      size = "medium",
      children,
      disabled,
      value,
      defaultValue,
      showSearch,
      multiple,
      options = [],
      trigger = "click",
      expandTrigger = "click",
      // event
      onChange,
      onSearch,
      onFocus,
      onBlur,
      onClear,
      onVisibleChange,
    } = props

    const [currentVisible, setCurrentVisible] = useState<boolean>()
    const [inputValue, setInputValue] = useState("")

    const propsValue = value ? formatValue(value, multiple) : undefined
    const [stateValue, setValue] = useState<string[][] | undefined>(
      propsValue || (defaultValue ? formatValue(defaultValue, multiple) : []),
    )
    const mergeValue = "value" in props ? propsValue : stateValue
    const showSearchPanel = !!inputValue

    const timerRef = useRef<number | undefined>()
    const store = useRef<Store<T>>(getStore(props, mergeValue))
    const stashNodes = useRef<Store<T>["nodes"]>([])

    useEffect(() => {
      store.current = getStore(props, mergeValue)
    }, [JSON.stringify(getConfig(props)), options])

    const handleVisibleChange = useCallback(
      (value) => {
        if (value !== currentVisible) {
          onVisibleChange?.(value)
          if (!("popupVisible" in props)) {
            setCurrentVisible(value)
          }
        }
      },
      [props.onVisibleChange, currentVisible],
    )

    const handleChange = (newValue: string[][]) => {
      console.log(newValue, mergeValue, inputValue)
      if (
        isObject(showSearch) &&
        !showSearch?.retainInputValueWhileSelect &&
        multiple
      ) {
        setInputValue("")
      }
      const isSame = mergeValue === newValue
      if (isSame) {
        return
      }

      if (!multiple) {
        store.current.setNodeCheckedByValue(newValue)
      }

      const nodes = store.current.getCheckedNodes()
      stashNodes.current = Array.from(new Set(nodes.concat(stashNodes.current)))
      const selectedOptions = getSelectedOptionsByValue(newValue)
      const _value = multiple ? newValue : newValue[0]
      const _selectedOptions = multiple ? selectedOptions : selectedOptions[0]

      if (!multiple) {
        console.log(inputValue)
        if (inputValue) {
          // 单选时选择搜索项，直接关闭面板
          handleVisibleChange(false)
        } else if (
          selectedOptions[0] &&
          selectedOptions[0][selectedOptions[0].length - 1]?.isLeaf
        ) {
          handleVisibleChange(false)
        }
      }

      if ("value" in props) {
        store.current.setNodeCheckedByValue(mergeValue)
      } else {
        setValue(newValue)
      }
      onChange?.(_value, _selectedOptions, {
        dropdownVisible: currentVisible,
      })
    }

    const getSelectedOptionsByValue = (values: string[][]): OptionProps[][] => {
      const nodes = store.current.getCheckedNodes().concat(stashNodes.current)
      const result: any[] = []

      values.map((value) => {
        const node = nodes.find((item) => isEqual(item.pathValue, value))
        if (node) {
          result.push(node.getPathNodes()?.map((x) => x._data))
        }
      })
      return result
    }

    const renderText = useCallback(
      (value) => {
        console.log(value, store, "renderText")
        // store 中不存在时，从stashNodes.current中找一下对应节点
        const options = getSelectedOptionsByValue([value])[0] || []

        let text
        let valueShow = isArray(value) ? value.map((x) => String(x)) : []

        if (options.length) {
          valueShow = options?.map((x: OptionProps) => x.label ?? "")
        }
        if (valueShow.every((v) => isString(v))) {
          text = valueShow.join(" / ")
        } else {
          text = valueShow.reduce((total: string[], item, index) => {
            return total?.concat(index === 0 ? [item] : [" / ", item])
          }, [])
        }
        return {
          text: text || "",
          disabled: options[options.length - 1]?.disabled,
        }
      },
      [store],
    )

    useEffect(() => {
      // console.log('change')
      // const clearTimer = () => {
      //   clearTimeout(timerRef.current)
      //   timerRef.current = undefined
      // }
      // if (!currentVisible && inputValue) {
      //   if (timerRef.current) {
      //     clearTimer()
      //   }
      //   timerRef.current = window.setTimeout(() => {
      //     setInputValue("")
      //     timerRef.current = undefined
      //   }, 200)
      // }
      // return () => {
      //   clearTimer()
      // }
    }, [currentVisible])

    // SelectView event handle
    const selectViewEventHandlers: SelectViewProps = {
      renderText,
      onFocus,
      onClear: (e) => {
        e.stopPropagation()
        if (!multiple) {
          handleChange([])
        } else {
          const nodes = store.current.getCheckedNodes()
          const newValue = nodes
            .filter((x) => x.disabled)
            .map((x) => x.pathValue)
          store.current.setNodeCheckedByValue(newValue)
          handleChange(newValue)
        }
        onClear?.(!!currentVisible)
      },
      onKeyDown: (e) => {
        if (disabled) {
          return
        }
        e.stopPropagation()
        const keyCode = e.keyCode || e.which
        if (keyCode === KeyCode.Enter && !currentVisible) {
          handleVisibleChange(true)
          e.preventDefault()
        }
      },
      onChangeInputValue: (v) => {
        console.log("onChangeInputValue")
        setInputValue(v)
        onSearch?.(v)
        // tab键 focus 到输入框，此时下拉框未显示。如果输入值，展示下拉框
        if (!currentVisible) {
          handleVisibleChange(true)
        }
      },
      onRemoveCheckedItem: (item, index, event) => {
        event?.stopPropagation()
        if (item.disabled) {
          return
        }
        const newValue = mergeValue?.filter((_, i) => i !== index) ?? []
        handleChange(newValue)
      },
    }

    console.log(inputValue, mergeValue, "value")

    return (
      <Trigger
        trigger="click"
        content={
          <div css={applyPopupStyle()}>
            {showSearchPanel ? (
              <SearchPopup
                multiple={multiple}
                store={store.current}
                value={mergeValue}
                inputValue={inputValue}
                onChange={handleChange}
              />
            ) : (
              <DefaultPopup
                multiple={multiple}
                store={store.current}
                value={mergeValue}
                popupVisible={currentVisible}
                expandTrigger={expandTrigger}
              />
            )}
          </div>
        }
        showArrow={false}
        colorScheme="white"
        position="bl"
        maxWidth=""
        disabled={disabled}
        openDelay={0}
        closeDelay={0}
        withoutPadding
        closeOnClick
        clickOutsideToClose
        popupVisible={currentVisible}
        onVisibleChange={handleVisibleChange}
      >
        <SelectView
          {...props}
          {...selectViewEventHandlers}
          ref={ref}
          inputValue={inputValue}
          value={multiple ? mergeValue : mergeValue && mergeValue[0]}
          popupVisible={currentVisible}
          multiple={multiple}
          isEmptyValue={
            !mergeValue || (isArray(mergeValue) && mergeValue.length === 0)
          }
        />
      </Trigger>
    )
  },
)

Cascader.displayName = "Cascader"
