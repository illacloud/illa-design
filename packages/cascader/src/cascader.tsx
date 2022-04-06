import {
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import { Trigger } from "@illa-design/trigger"
import { SelectView, SelectViewProps } from "@illa-design/select"
import { CascaderProps, OptionProps } from "./interface"
import { DefaultFieldNames, NodeProps, Node } from "./node"
import { isArray, isFunction, isString, KeyCode } from "@illa-design/system"
import { CascaderPanel } from "./cascader-panel"
import Store from "./store"
import isEqual from "react-fast-compare"
import { applyPopupStyle } from "./style"

function getConfig(props: any) {
  return {
    showEmptyChildren: props.showEmptyChildren,
    changeOnSelect: props.changeOnSelect,
    lazyload: !!props.loadMore,
    fieldNames: props.fieldNames,
    filterOption: props.filterOption,
  }
}

function getStore(props: any, value: any) {
  const tmp = value ? (Array.isArray(value[0]) ? value : [value]) : []
  return new Store(props.options || [], tmp, getConfig(props))
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
      allowCreate,
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
    const fieldNames = DefaultFieldNames
    const showSearchPanel = !isFunction(onSearch) && !!inputValue

    const timerRef = useRef<number | undefined>()
    const store = useRef<Store<T>>(getStore(props, mergeValue))
    const stashNodes = useRef<Store<T>["nodes"]>([])

    useEffect(() => {
      store.current = getStore(props, mergeValue)
    }, [JSON.stringify(getConfig(props)), options])

    const handleVisibleChange = (value: boolean) => {
      if (currentVisible !== value) {
        setCurrentVisible(value)
        onVisibleChange?.(value)
      }
    }

    const handleChange = (newValue: string[][], isTouch?: boolean) => {
      console.log(newValue, inputValue)
      setValue((mergeValue) => {
        const isSame = isEqual(mergeValue, newValue)

        if (!isSame) {
          if (isTouch || !multiple) {
            store.current.setNodeCheckedByValue(newValue)
          }
        }

        const nodes = store.current.getCheckedNodes()
        if (!isSame) {
          stashNodes.current = nodes.concat(stashNodes.current)
        }

        const selectedOptions = getSelectedOptionsByValue(newValue)

        if (!isSame) {
          const _value = multiple ? newValue : newValue[0]
          const _selectedOptions = multiple
            ? selectedOptions
            : selectedOptions[0]
          onChange?.(_value, _selectedOptions, {
            dropdownVisible: currentVisible,
          })
        }
        console.log(inputValue, selectedOptions,'change')
        if (!multiple) {
          if (inputValue) {
            // 单选时选择搜索项，直接关闭面板
            handleVisibleChange(false)
          } else if (
            (selectedOptions[0] &&
              selectedOptions[0][selectedOptions[0].length - 1]?.isLeaf) ||
            expandTrigger === "hover"
          ) {
            handleVisibleChange(false)
          }
        }
        // 这里直接通过setValue修改stateValue是为了节省受控模式下，不断通过外部value查找节点，计算选中状态的操作。
        // 和useUpdate配合，在statevalue和外部传入的value不相等的时候才进行计算。
        return isSame ? mergeValue : newValue
      })
    }

    const getSelectedOptionsByValue = (values: string[][]): OptionProps[][] => {
      const nodes = store.current.getCheckedNodes().concat(stashNodes.current)
      const result: any[] = []

      values.map((value) => {
        const node = nodes.find((item) => isEqual(item.pathValue, value))
        if (node) {
          result.push(node.getPathNodes()?.map((x) => x._data));
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
          valueShow = options?.map((x: OptionProps) => x.label ?? '')
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
      const clearTimer = () => {
        clearTimeout(timerRef.current)
        timerRef.current = undefined
      }
      if (!currentVisible && inputValue) {
        if (timerRef.current) {
          clearTimer()
        }
        timerRef.current = window.setTimeout(() => {
          setInputValue("")
          timerRef.current = undefined
        }, 200)
      }
      return () => {
        clearTimer()
      }
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
          handleChange(newValue, true)
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
        setInputValue(v)
        onSearch?.(v)
        // tab键 focus 到输入框，此时下拉框未显示。如果输入值，展示下拉框
        if (!currentVisible) {
          handleVisibleChange(true)
        }
      },
      onRemoveCheckedItem: (item, index, e) => {
        e.stopPropagation()
        if (item.disabled) {
          return
        }
        const newValue = mergeValue?.filter((_, i) => i !== index) ?? []
        handleChange(newValue, true)
      },
    }

    console.log(inputValue, mergeValue, "value")

    return (
      <Trigger
        trigger="click"
        content={
          <div css={applyPopupStyle()}>
            {showSearchPanel ? (
              <div>SearchPanel</div>
            ) : (
              <CascaderPanel
                multiple={multiple}
                store={store.current}
                value={mergeValue}
                onChange={handleChange}
                popupVisible={currentVisible}
                expandTrigger={expandTrigger}
                onEsc={() => {
                  handleVisibleChange(false)
                }}
                onDoubleClickOption={() => {
                  if (!multiple) {
                    handleVisibleChange(false)
                  }
                }}
              />
            )}
          </div>
        }
        showArrow={false}
        colorScheme="white"
        position="bl"
        disabled={disabled}
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
        />
      </Trigger>
    )
  },
)

Cascader.displayName = "Cascader"
