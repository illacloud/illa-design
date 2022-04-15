import {
  forwardRef,
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react"
import { useMergeValue, isObject } from "@illa-design/system"
import { Trigger } from "@illa-design/trigger"
import {
  InputValueChangeReason,
  getValidValue,
  isEmptyValue,
  SelectView,
} from "@illa-design/select"

import { TreeSelectProps } from "./interface"
import {
  checkChildrenChecked,
  checkParentChecked,
  loopNodeWithState,
  NodeInstance,
  TreeList,
  NodeProps,
  TreeDataType,
  updateKeys,
  loopItemData,
} from "@illa-design/tree-common"
import * as React from "react"
import { getSearchReason } from "./utils"
import { css } from "@emotion/react"
import { Empty } from "@illa-design/empty"

export const TreeSelect = forwardRef<HTMLElement, TreeSelectProps>(
  (props, ref) => {
    const {
      defaultValue,
      value,
      size,
      // select
      disabled,
      arrowIcon,
      showSearch,
      onChange,
      onClear,
      onClick,
      // tree
      treeCheckable,
      treeCheckStrictly,
      loadMore,
      labelInValue,
      multiple,
      // others
      treeData: defaultTreeData = [],
      triggerProps,
      onSearch,
      inputValue,
      ...rest
    } = props

    const [currentVisible, setCurrentVisible] = useState<boolean>(false)
    const [stateValue, setValue] = useState(() => {
      return getValidValue(defaultValue, multiple, labelInValue)
    })
    const currentValue =
      "value" in props
        ? getValidValue(value, multiple, labelInValue)
        : stateValue

    const [treeData, setTreeData] = useState<NodeProps[]>([])

    const [selectedKeysState, setSelectedKeys] = useState<string[]>([])
    const [expandedKeysState, setExpandedKeysState] = useState<string[]>([])
    const [checkKeysState, setCheckKeysState] = useState<Set<string>>(
      new Set([]),
    )
    const [halfCheckKeysState, setHalfCheckKeysState] = useState(
      new Set<string>([]),
    )

    const [searchReasonKeys, setSearchReasonKeys] = useState<string[]>([])
    // If treeCheckable is true, _multiple must be true
    const _multiple = treeCheckable || multiple

    const [options, _treeNodeArr] = useMemo(() => {
      return [loopItemData(defaultTreeData), loopNodeWithState(defaultTreeData)]
    }, [defaultTreeData])

    useEffect(() => {
      // init expand
      let data = loopNodeWithState(defaultTreeData as TreeDataType[])
      const _expandedKey = data
        .filter((item) => {
          return !item.isLeaf
        })
        .map((item) => item.key)
      setExpandedKeysState(_expandedKey)
    }, [])

    useEffect(() => {
      let newValue = loopNodeWithState(
        defaultTreeData,
        expandedKeysState,
        selectedKeysState,
        checkKeysState,
        halfCheckKeysState,
      )
      if (searchReasonKeys && searchReasonKeys.length > 0) {
        newValue = newValue.filter((node) => {
          if (searchReasonKeys.includes(node.key)) return true
          const index = node._fatherPath?.findIndex((father) => {
            return searchReasonKeys.includes(father.key)
          })
          return index && index > -1
        })
      } else if (refOnInputChangeCallbackValue.current.length > 0) {
        newValue = []
      }
      setTreeData(newValue)
    }, [
      checkKeysState,
      selectedKeysState,
      expandedKeysState,
      halfCheckKeysState,
      searchReasonKeys,
    ])

    useEffect(() => {
      if (options) {
        let values
        if (_multiple) {
          values = selectedKeysState.map((key) => {
            return options.find((item) => item.key === key).value
          })
        } else if (selectedKeysState[0]) {
          values = options.find(
            (item) => item.key === selectedKeysState[0],
          ).value
        }
        const _value = getValidValue(values, _multiple, labelInValue)
        setValue(_value)
        onChange && onChange(_value)
      }
    }, [selectedKeysState])

    const isNoOptionSelected = isEmptyValue(currentValue, _multiple)
    const [_inputValue, setInputValue, stateInputValue] = useMergeValue("", {
      value: "inputValue" in props ? props.inputValue || "" : undefined,
    })

    useEffect(() => {
      let _selectedKey: string[] = []
      if (currentValue) {
        if (Array.isArray(currentValue)) {
          _selectedKey = options
            // @ts-ignore
            .filter((item) => currentValue.includes(item.value))
            .map((option) => option.key)
        } else {
          _selectedKey = options
            .filter((item) => currentValue === item.value)
            .map((option) => option.key)
        }
      }
      let keys = new Set(_selectedKey)
      let halfSet: Set<string> = new Set<string>([])
      if (!treeCheckStrictly) {
        keys?.forEach((target) => {
          keys = checkChildrenChecked(target, _treeNodeArr, keys) ?? keys
        })
        halfSet = checkParentChecked(keys, _treeNodeArr)
        setHalfCheckKeysState(halfSet)
      }
      setCheckKeysState(keys)
      setHalfCheckKeysState(halfSet)
      setSelectedKeys(_selectedKey)
    }, [defaultValue])

    const nodeCache = useRef<{ [key: string]: NodeInstance }>({})

    const refOnInputChangeCallbackValue = useRef(_inputValue)
    const refOnInputChangeCallbackReason = useRef<InputValueChangeReason>()

    const tryUpdateInputValue = (
      value: string,
      reason: InputValueChangeReason,
    ) => {
      if (value !== refOnInputChangeCallbackValue.current) {
        setInputValue(value)
        refOnInputChangeCallbackValue.current = value
        refOnInputChangeCallbackReason.current = reason
      }
    }

    useEffect(() => {
      const { current } = refOnInputChangeCallbackValue
      if (current.length === 0) {
        setSearchReasonKeys([])
        return
      }
      const items = getSearchReason(current, _treeNodeArr)
      const expandSet = new Set<string>()
      items.forEach((item) => {
        item._fatherPath
          ?.map((father) => father.key)
          .forEach((key) => {
            if (key.length > 0) expandSet.add(key)
          })
      })
      const arr = Array.from(expandSet)
      const keys = items.map((item) => item.key).concat(arr)

      setExpandedKeysState(() => {
        return [...expandedKeysState, ...arr]
      })
      setSearchReasonKeys(keys)
    }, [refOnInputChangeCallbackValue.current])

    useEffect(() => {
      const { current: reason } = refOnInputChangeCallbackReason
      if (
        stateInputValue === inputValue &&
        (reason === "manual" || reason === "optionListHide")
      ) {
        onSearch?.(inputValue)
      }
    }, [inputValue])

    // SelectView event handle
    const selectViewEventHandlers = {
      onFocus: () => {},
      onBlur: (event: any) => {
        !currentVisible && tryUpdateInputValue("", "optionListHide")
      },
      onChangeInputValue: (value: string) => {
        tryUpdateInputValue(value, "manual")
        if (!currentVisible && value) {
          tryUpdatePopupVisible(true)
        }
      },
      onRemoveCheckedItem: (_: any, index: number, event: Event) => {
        event?.stopPropagation()
        const value = currentValue?.[index as never]
        const item = options.find((item) => item.value === value)
        if (treeCheckable) {
          item && handleCheck(item.key)
        } else {
          item && handleSelect(item.key)
        }
      },
      onClear: (event: any) => {
        event.stopPropagation()
        if (_multiple) {
          // Keep the value that has been selected but disabled
          const newValue = (selectedKeysState as [])?.filter((v) => {
            const item = options.find((item) => item.value === v)
            return item && item.disabled
          })
          setSelectedKeys(newValue)
        } else {
          setSelectedKeys([])
        }
        tryUpdateInputValue("", "manual")
        onClear?.(currentVisible)
      },
    }

    const tryUpdatePopupVisible = (value: boolean) => {
      if (currentVisible !== value) {
        setCurrentVisible(value)
      }
    }

    const handleExpand = useCallback(
      (targetKey: string) => {
        const keys = updateKeys(expandedKeysState, targetKey, true)
        setExpandedKeysState(keys)
      },
      [expandedKeysState],
    )

    const handleSelect = useCallback(
      (targetKey: string) => {
        const keys = updateKeys(selectedKeysState, targetKey, _multiple)
        setSelectedKeys(keys)
        if (_multiple && treeCheckable) {
          handleCheck(targetKey)
        }
        if (!_multiple) {
          setCurrentVisible(false)
        }
        if (!isObject(showSearch) || !showSearch.retainInputValueWhileSelect) {
          tryUpdateInputValue("", "optionChecked")
        }
      },
      [selectedKeysState, currentValue],
    )

    const handleCheck = useCallback(
      (targetKey: string, event?: Event) => {
        let keys = new Set(
          updateKeys(Array.from(checkKeysState), targetKey, true),
        )
        let halfSet: Set<string> = new Set<string>([])
        if (!treeCheckStrictly) {
          keys = checkChildrenChecked(targetKey, treeData, keys) ?? keys
          halfSet = checkParentChecked(keys, treeData)
          setHalfCheckKeysState(halfSet)
        }
        setCheckKeysState(keys)
        const leaf = Array.from(keys).filter((key) => {
          const item = options.find((item) => item.key === key)
          return !item?.children?.length || item.children.length == 0
        })
        setSelectedKeys(leaf)
        if (!isObject(showSearch) || !showSearch.retainInputValueWhileSelect) {
          tryUpdateInputValue("", "optionChecked")
        }
      },
      [checkKeysState, treeData],
    )

    return (
      <Trigger
        trigger="click"
        content={
          treeData.length > 0 ? (
            <TreeList
              listData={treeData}
              size={size}
              blockNode={true}
              handleExpand={handleExpand}
              handleSelect={handleSelect}
              handleCheck={handleCheck}
              saveNodeCache={(key: string, node: NodeInstance) => {
                const value = options.find((item) => item.key === key).value
                if (!Object.keys(nodeCache.current).includes(value)) {
                  nodeCache.current[value] = node
                }
              }}
              checkable={treeCheckable}
            />
          ) : (
            <Empty
              css={css`
                padding: 16px 0;
              `}
            />
          )
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
        onVisibleChange={tryUpdatePopupVisible}
        {...triggerProps}
      >
        <SelectView
          {...rest}
          {...selectViewEventHandlers}
          disabled={disabled}
          value={currentValue}
          showSearch={showSearch}
          inputValue={_inputValue}
          popupVisible={currentVisible}
          multiple={_multiple}
          isEmptyValue={isNoOptionSelected}
          renderText={(value: any) => {
            if (nodeCache.current && value) {
              const option = nodeCache?.current[value]?.props
              return {
                text: option?.title,
                disabled: option?.disabled,
              }
            }
            return {
              text: value,
            }
          }}
        />
      </Trigger>
    )
  },
)

TreeSelect.displayName = "TreeSelect"
