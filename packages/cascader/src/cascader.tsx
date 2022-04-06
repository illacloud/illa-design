import {
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import { Trigger } from "@illa-design/trigger"
import { SelectView } from "@illa-design/select"
import { CascaderProps, OptionProps } from "./interface"
import { DefaultFieldNames, NodeProps, Node } from "./node"
import { isArray, isFunction, isString } from "@illa-design/system"
import { CascaderPanel } from "./cascader-panel"
import Store from "./store"
import isEqual from "react-fast-compare"

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

    const getSelectedOptionsByValue = (values: string[][]): NodeProps<T>[] => {
      const nodes = store.current.getCheckedNodes().concat(stashNodes.current)
      const result: NodeProps<T>[] = []

      values.map((value) => {
        const node = nodes.find((item) => isEqual(item.pathValue, value))
        if (node) {
          //result.push(node.getPathNodes().map((x: Node<T>) => x._data));
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
          valueShow = options.map((x: OptionProps) => x.label)
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

    // SelectView event handle
    const selectViewEventHandlers = {
      onFocus,
    }
    console.log(store, mergeValue, "store")

    return (
      <Trigger
        trigger="click"
        content={
          <div>
            {showSearchPanel ? (
              <div>SearchPanel</div>
            ) : (
              <CascaderPanel
                multiple={multiple}
                store={store.current}
                value={mergeValue}
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
        autoAlignPopupWidth
        popupVisible={currentVisible}
        onVisibleChange={handleVisibleChange}
      >
        <SelectView
          {...props}
          {...selectViewEventHandlers}
          ref={ref}
          renderText={renderText}
          popupVisible={currentVisible}
          multiple={multiple}
        />
      </Trigger>
    )
  },
)

Cascader.displayName = "Cascader"
