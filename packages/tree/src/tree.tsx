import * as React from "react"
import {
  forwardRef,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

import {
  TreeList,
  checkChildrenChecked,
  checkParentChecked,
  getNodes,
  loopNodeWithState,
  getNodeList,
  NodeInstance,
  NodeProps,
  TreeDataType,
  updateKeys,
} from "@illa-design/tree-common"
import { TreeProps } from "./interface"

// treeData is default
export const Tree = forwardRef<HTMLDivElement, TreeProps>((props, ref) => {
  const {
    // node data
    treeData,
    children,
    // loadMore
    loadMore,
    // drag,
    onDragOver,
    onDragLeave,
    onDragStart,
    onDrop,
    onDragEnd,
    draggable,
    allowDrop,
    // select
    selectable = true,
    defaultSelectedKeys,
    onSelect,
    selectedKeys,
    multiple,
    //  expand
    expandedKeys,
    defaultExpandedKeys,
    onExpand,
    autoExpandParent = true,
    // checkable
    checkable,
    checkedKeys,
    defaultCheckedKeys,
    checkStrictly,
    onCheck,
    // ui
    showLine,
    size,
    blockNode,
    renderTitle,
    // icons
    dragIcon,
    switcherIcon,
    loadingIcon,
    ...rest
  } = props

  const [selectedKeysState, setSelectedKeys] = useState(
    defaultSelectedKeys ?? [],
  )
  const [expandedKeysState, setExpandedKeysState] = useState(
    defaultExpandedKeys ?? [],
  )
  const [checkKeysState, setCheckKeysState] = useState(
    defaultCheckedKeys ? new Set(defaultCheckedKeys) : new Set([]),
  )
  const [halfCheckKeysState, setHalfCheckKeysState] = useState(
    new Set<string>([]),
  )

  const [_treeData, setTreeData] = useState<NodeProps[]>([])
  const [loadMoreKeys, setLoadMoreKeys] = useState(new Set<string>())

  const nodeCache = useRef<{ [key: string]: NodeInstance }>({})
  const [_defaultNodesList, treeNodeArr] = useMemo(() => {
    if (!treeData) return [[], []]
    const nodeList = [...treeData].concat(getNodes(children as ReactElement))
    return [nodeList, loopNodeWithState(nodeList)]
  }, [treeData])

  useEffect(() => {
    let _expandedKey
    if (autoExpandParent && !defaultExpandedKeys) {
      _expandedKey = treeNodeArr
        .filter((item) => {
          return !item.isLeaf
        })
        .map((item) => item.key)
    } else {
      _expandedKey = defaultExpandedKeys ?? []
    }

    setExpandedKeysState(_expandedKey)
    let keys = new Set(defaultCheckedKeys)
    let halfSet: Set<string> = new Set<string>([])
    if (!checkStrictly) {
      defaultCheckedKeys?.forEach((target) => {
        keys = checkChildrenChecked(target, treeNodeArr, keys) ?? keys
      })
      halfSet = checkParentChecked(keys, treeNodeArr)
      setHalfCheckKeysState(halfSet)
    }
    setCheckKeysState(keys)
    if (!multiple && defaultSelectedKeys && defaultSelectedKeys.length > 0)
      setSelectedKeys([defaultSelectedKeys[0]])
  }, [_defaultNodesList])

  useEffect(() => {
    const newValue = loopNodeWithState(
      _defaultNodesList,
      expandedKeys ?? expandedKeysState,
      selectedKeys ?? selectedKeysState,
      checkedKeys ? new Set(checkedKeys) : checkKeysState,
      halfCheckKeysState,
    )
    setTreeData(newValue)
  }, [checkKeysState, selectedKeysState, expandedKeysState, halfCheckKeysState])

  useMemo(() => {
    let keys = new Set(defaultCheckedKeys)
    let halfSet: Set<string> = new Set<string>([])
    if (!checkStrictly) {
      defaultCheckedKeys?.forEach((target) => {
        keys = checkChildrenChecked(target, _treeData, keys) ?? keys
      })
      halfSet = checkParentChecked(keys, _treeData)
    }
    setHalfCheckKeysState(halfSet)
    setCheckKeysState(keys)
  }, [checkStrictly, defaultCheckedKeys])

  useMemo(() => {
    let _expandedKey
    if (autoExpandParent && !defaultExpandedKeys) {
      _expandedKey = treeNodeArr
        .filter((item) => {
          return !item.isLeaf
        })
        .map((item) => item.key)
    } else {
      _expandedKey = defaultExpandedKeys ?? []
    }
    setExpandedKeysState(_expandedKey)
  }, [autoExpandParent, defaultExpandedKeys])

  const handleDragOver = useCallback(
    (e: DragEvent, key: string) => {
      const node = nodeCache.current[key]
      onDragOver && onDragOver(e, node)
    },
    [onDragOver],
  )

  const handleDragStart = useCallback(
    (e: DragEvent, key: string) => {
      const node = nodeCache.current[key]
      onDragStart && onDragStart(e, node)
    },
    [onDragStart],
  )

  const handleDragEnd = useCallback(
    (e: DragEvent, key: string) => {
      const node = nodeCache.current[key]
      onDragEnd && onDragEnd(e, node)
    },
    [onDragEnd],
  )

  const handleDragLeave = useCallback(
    (e: DragEvent, key: string) => {
      const node = nodeCache.current[key]
      onDragLeave && onDragLeave(e, node)
    },
    [onDragOver],
  )
  const [dragState, setDragState] = useState<{
    dragNodeKey?: string
    dropNodeKey?: string
    dropPosition?: number
  }>({})

  const updateDragState = (props: {
    dragNodeKey?: string
    dropNodeKey?: string
    dropPosition?: number
  }) => {
    const newValue = { ...dragState, ...props }
    setDragState(newValue)
  }

  const handleDrop = useCallback(
    (e: DragEvent) => {
      const _dropNode = nodeCache.current[dragState.dropNodeKey ?? ""]
      const _dropPosition = dragState.dropPosition ?? 0
      const _info = {
        e: e,
        dropPosition: _dropPosition,
        dragNode: nodeCache.current[dragState.dragNodeKey ?? ""],
        dropNode: _dropNode,
      }
      if (
        allowDrop &&
        allowDrop({ node: _dropNode, position: _dropPosition })
      ) {
        return
      }
      onDrop && onDrop(_info)
    },
    [onDrop, nodeCache.current, dragState],
  )

  const handleSelect = useCallback(
    (targetKey: string, event: Event) => {
      const _selectedKeys = selectedKeys ?? selectedKeysState
      if (!selectable) return
      const keys = updateKeys(
        _selectedKeys,
        targetKey,
        selectedKeys !== undefined || multiple,
      )
      setSelectedKeys(keys)
      const extra = {
        selectedNodes: getNodeList(nodeCache.current).filter(
          (item: NodeInstance) =>
            item.key && keys.includes(item.key.toString()),
        ),
        selected: keys.includes(targetKey),
        node: nodeCache.current[targetKey],
        e: event,
      }
      onSelect && onSelect(keys, extra)
    },
    [selectedKeysState, nodeCache.current],
  )

  const handleExpand = useCallback(
    (targetKey: string) => {
      const _expandedKeys = expandedKeys ?? expandedKeysState
      const keys = updateKeys(_expandedKeys, targetKey, true)
      setExpandedKeysState(keys)
      const extra = {
        expandedNodes: getNodeList(nodeCache.current).filter(
          (item) => item.key && keys.includes(item.key.toString()),
        ),
        expanded: keys.includes(targetKey),
        node: nodeCache.current[targetKey],
      }
      onExpand && onExpand(keys, extra)
    },
    [expandedKeysState, nodeCache.current],
  )

  const handleCheck = useCallback(
    (targetKey: string, event: Event) => {
      const _checkedKeys = checkedKeys ? new Set(checkedKeys) : checkKeysState
      let keys = new Set(updateKeys(Array.from(_checkedKeys), targetKey, true))
      let halfSet: Set<string> = new Set<string>([])
      if (!checkStrictly) {
        keys = checkChildrenChecked(targetKey, _treeData, keys) ?? keys
        halfSet = checkParentChecked(keys, _treeData)
        setHalfCheckKeysState(halfSet)
      }
      setCheckKeysState(keys)
      const extra = {
        checked: keys?.has(targetKey),
        node: nodeCache.current[targetKey],
        checkedNodes: getNodeList(nodeCache.current).filter(
          (item) => item.key && keys.has(item.key.toString()),
        ),
        halfCheckedKeys: Array.from(halfSet ?? []),
        halfCheckedNodes: getNodeList(nodeCache.current).filter(
          (item) => item.key && halfSet?.has(item.key.toString()),
        ),
        e: event,
      }
      onCheck && onCheck(Array.from(keys), extra)
    },
    [checkKeysState, nodeCache.current, _treeData],
  )
  const handleLoadMore = async (key: string) => {
    loadMoreKeys.add(key)
    setLoadMoreKeys(new Set([...loadMoreKeys]))
    const node = nodeCache.current[key]
    loadMore && (await loadMore(node))
    loadMoreKeys.delete(key)
    setLoadMoreKeys(new Set([...loadMoreKeys]))
  }

  return (
    <div ref={ref} {...rest}>
      <TreeList
        handleLoadMore={loadMore && handleLoadMore}
        listData={_treeData}
        blockNode={blockNode}
        size={size}
        renderTitle={renderTitle}
        showLine={showLine}
        draggable={draggable}
        handleExpand={handleExpand}
        handleSelect={handleSelect}
        handleCheck={handleCheck}
        dragIcon={dragIcon}
        switcherIcon={switcherIcon}
        loadingIcon={loadingIcon}
        loadingMoreKeys={loadMoreKeys}
        saveNodeCache={(key: string, node: NodeInstance) => {
          if (!Object.keys(nodeCache.current).includes(key)) {
            nodeCache.current[key] = node
          }
        }}
        checkable={checkable}
        handleDragStart={handleDragStart}
        handleDragEnd={handleDragEnd}
        handleDragLeave={handleDragLeave}
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
        updateDragState={updateDragState}
        allowDrop={allowDrop}
      />
    </div>
  )
})

Tree.displayName = "Tree"
