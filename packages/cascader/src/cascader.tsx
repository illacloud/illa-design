import {
  ForwardedRef,
  forwardRef,
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import isEqual from "react-fast-compare"
import { isArray, isObject, isString, KeyCode } from "@illa-design/system"
import { SelectView } from "@illa-design/select"
import { Trigger } from "@illa-design/trigger"
import { CascaderProps, OptionProps } from "./interface"
import { Store } from "./node"
import { DefaultPopup } from "./popup/default-popup"
import { SearchPopup } from "./popup/search-popup"
import { applyPopupStyle } from "./style"
import { useCurrentRef } from "./hooks"
import { css } from "@emotion/react"

function getConfig(props: CascaderProps<any>) {
  return {
    fieldNames: props.fieldNames,
    filterOption: props.filterOption,
  }
}

function getStore(props: any, value?: any) {
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
      fieldNames,
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

    const selectViewRef = useRef<HTMLDivElement>(null)
    const [currentVisible, setCurrentVisible] = useState<boolean>()
    const [inputValue, setInputValue] = useState("")

    const propsValue =
      "value" in props ? formatValue(value, multiple) : undefined
    const [stateValue, setValue] = useState<string[][] | undefined>(
      propsValue || (defaultValue ? formatValue(defaultValue, multiple) : []),
    )
    const mergeValue = "value" in props ? propsValue : stateValue
    const showSearchPanel = !!inputValue

    const timerRef = useRef<number | undefined>()
    const stashNodes = useRef<Store<T>["nodes"]>([])

    const store = useCurrentRef<Store<T>>(
      () => getStore(props, mergeValue),
      [JSON.stringify(getConfig(props)), options],
    )

    const handleVisibleChange = useCallback(
      (value: boolean) => {
        if (value !== currentVisible) {
          onVisibleChange?.(value)
          if (!("popupVisible" in props)) {
            setCurrentVisible(value)
          }
        }
      },
      [onVisibleChange, currentVisible],
    )

    const handleChange = (newValue: string[][]) => {
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
        store.setNodeCheckedByValue(newValue)
      }

      const nodes = store.getCheckedNodes()
      stashNodes.current = Array.from(new Set(nodes.concat(stashNodes.current)))
      const selectedOptions = getSelectedOptionsByValue(newValue)
      const _value = multiple ? newValue : newValue[0]
      const _selectedOptions = multiple ? selectedOptions : selectedOptions[0]

      if (!multiple) {
        if (inputValue) {
          handleVisibleChange(false)
        } else if (
          selectedOptions[0] &&
          selectedOptions[0][selectedOptions[0].length - 1]?.isLeaf
        ) {
          handleVisibleChange(false)
        }
      }

      if ("value" in props) {
        store.setNodeCheckedByValue(mergeValue)
      } else {
        setValue(newValue)
        store.setNodeCheckedByValue(newValue)
      }
      onChange?.(_value, _selectedOptions, {
        dropdownVisible: currentVisible,
      })
    }

    const getSelectedOptionsByValue = (values: string[][]): OptionProps[][] => {
      const nodes = store.getCheckedNodes().concat(stashNodes.current)
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
      (value: any) => {
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
          disabled: options?.[options.length - 1]?.disabled,
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

    useEffect(() => {
      if ("value" in props) {
        const newValue = formatValue(value, multiple)
        if (!isEqual(stateValue, newValue)) {
          store.setNodeCheckedByValue(newValue)
          setValue(newValue)
        }
      }
    }, [value, stateValue, multiple])

    // SelectView event handle
    const selectViewEventHandlers = {
      renderText,
      onFocus,
      onClear: (e: SyntheticEvent) => {
        e.stopPropagation()
        if (!multiple) {
          handleChange([])
        } else {
          const nodes = store.getCheckedNodes()
          const newValue = nodes
            .filter((x) => x.disabled)
            .map((x) => x.pathValue)
          store.setNodeCheckedByValue(newValue)
          handleChange(newValue)
        }
        onClear?.(!!currentVisible)
      },
      onChangeInputValue: (v: string) => {
        setInputValue(v)
        onSearch?.(v)
        // If enter value, popupVisible = true
        if (!currentVisible) {
          handleVisibleChange(true)
        }
      },
    }

    return (
      <Trigger
        trigger={trigger}
        content={
          <div css={applyPopupStyle()}>
            {showSearchPanel ? (
              <SearchPopup
                _css={css`
                  min-width: ${selectViewRef?.current?.offsetWidth}px;
                `}
                multiple={multiple}
                store={store}
                value={mergeValue}
                inputValue={inputValue}
                onChange={handleChange}
              />
            ) : (
              <DefaultPopup
                _css={css`
                  min-width: ${selectViewRef?.current?.offsetWidth}px;
                `}
                multiple={multiple}
                store={store}
                value={mergeValue}
                popupVisible={currentVisible}
                expandTrigger={expandTrigger}
                onChange={handleChange}
              />
            )}
          </div>
        }
        showArrow={false}
        colorScheme="white"
        position="bl"
        openDelay={0}
        closeDelay={0}
        maxWidth=""
        disabled={disabled}
        withoutPadding
        closeOnClick
        clickOutsideToClose
        popupVisible={currentVisible}
        onVisibleChange={handleVisibleChange}
      >
        <div ref={ref}>
          <SelectView
            {...props}
            {...selectViewEventHandlers}
            ref={selectViewRef}
            inputValue={inputValue}
            value={multiple ? mergeValue : mergeValue && mergeValue[0]}
            popupVisible={currentVisible}
            multiple={multiple}
            isEmptyValue={
              !mergeValue || (isArray(mergeValue) && mergeValue.length === 0)
            }
            onKeyDown={(e) => {
              if (disabled) {
                return
              }
              e.stopPropagation()
              const keyCode = e.keyCode || e.which
              if (keyCode === KeyCode.Enter && !currentVisible) {
                handleVisibleChange(true)
                e.preventDefault()
              }
            }}
            onRemoveCheckedItem={(item, index, event) => {
              event?.stopPropagation()
              if (item.disabled) {
                return
              }
              const newValue = mergeValue?.filter((_, i) => i !== index) ?? []
              handleChange(newValue)
            }}
          />
        </div>
      </Trigger>
    )
  },
)

Cascader.displayName = "Cascader"
