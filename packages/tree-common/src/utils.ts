import { NodeProps, TreeDataType, NodeInstance } from "./interface"
import { Children, ReactElement } from "react"

export function getNodes(children: ReactElement): TreeDataType[] {
  const nodes: TreeDataType[] = []
  Children.forEach(children, (child: ReactElement, index: number) => {
    if (child && child.type && (child as ReactElement<NodeProps>)) {
      if (child.props && (child.props as NodeProps) && child.key) {
        const _props = child.props
        const key = child?.key?.toString() ?? _props.title + index
        const _children: TreeDataType[] = getNodes(
          child?.props?.children as ReactElement,
        )
        nodes.push({
          ..._props,
          children: _children,
          key: key,
        } as TreeDataType)
      }
    }
  })
  return nodes
}

export const loopNode = (nodeArr?: TreeDataType[], selectedKeys?: string[]) => {
  if (!nodeArr) return []
  const nodeList: NodeProps[] = []
  const _loop = (nodeArr: TreeDataType[], father: NodeProps) => {
    if (father.expanding === false) return
    const len = nodeArr.length
    nodeArr.map((node, index) => {
      const nodeProps: NodeProps & { children?: NodeProps[] } = {
        ...node,
        _checked: node._checked,
        _halfChecked: node._halfChecked,
        _isSelected: selectedKeys?.includes(node.key),
        _father: father,
        _children: node.children?.map((item) => item.key),
        _fatherPath: father?._fatherPath
          ? [...father?._fatherPath, father]
          : [father],
        _level: father?._level !== undefined ? father._level + 1 : 0,
        _isLast: index === len - 1,
        _indentArr:
          father._isLast === undefined
            ? []
            : [...(father._indentArr ?? [])].concat(!father._isLast),
        dataRef: node,
      }
      nodeList.push(nodeProps)
      if (node.children) {
        _loop(node.children, nodeProps)
      }
    })
  }
  _loop(nodeArr, { key: "" })
  return nodeList
}

export const loopNodeWithState = (
  nodeArr: TreeDataType[],
  expandedKeys?: string[],
  selectedKeys?: string[],
  checkedKeys?: Set<string>,
  halfCheckedKeys?: Set<string>,
) => {
  if (!nodeArr) return []
  const _loop = (nodeArr: TreeDataType[]) => {
    nodeArr.map((node) => {
      if (expandedKeys) {
        node.expanding = expandedKeys?.includes(node.key)
      }
      if (checkedKeys) {
        node._checked = checkedKeys?.has(node.key)
      }
      if (halfCheckedKeys) {
        node._halfChecked = halfCheckedKeys?.has(node.key)
      }
      if (node.children) {
        _loop(node.children)
      }
    })
  }
  _loop(nodeArr)
  return loopNode(nodeArr, selectedKeys)
}

export function checkChildrenChecked(
  targetKey: string,
  nodeArr?: NodeProps[],
  checkedKeys?: Set<string>,
) {
  const node = nodeArr?.find((item) => item.key === targetKey)
  const checked = checkedKeys?.has(targetKey)
  if (!node || !checkedKeys) return
  const childrenQueue = Array.from(node._children ?? [])
  while (childrenQueue.length) {
    const key = childrenQueue.pop()
    if (!key) continue
    const targetNode = nodeArr?.find((item) => item.key === key)
    if (targetNode?.disabled || targetNode?.checkable === true) continue
    if (checked) {
      checkedKeys.add(key)
    } else {
      checkedKeys.delete(key)
    }
    targetNode?._children?.map((child) => {
      childrenQueue.push(child)
    })
  }
  node?._fatherPath?.reverse().map((father, _) => {
    if (father._children?.every((childKey) => checkedKeys.has(childKey))) {
      checkedKeys.add(father.key)
    } else {
      checkedKeys.delete(father.key)
    }
  })
  return checkedKeys
}

export function checkParentChecked(
  checkedKeys: Set<string>,
  nodeArr?: NodeProps[],
) {
  const halfSet = new Set<string>()
  Array.from(checkedKeys).map((key) => {
    const item = nodeArr?.find((item) => {
      return item.key === key
    })

    item?._fatherPath?.map((father) => {
      if (father.key.length > 0) halfSet.add(father.key)
    })
  })
  return halfSet
}

export const updateKeys = (
  keys: string[],
  targetKey: string,
  multiple?: boolean,
) => {
  const hasTarget = keys?.includes(targetKey)
  if (hasTarget) {
    keys = keys?.filter((key) => key !== targetKey)
  } else {
    keys = multiple ? [...keys].concat(targetKey) : [targetKey]
  }
  return keys
}

export function getNodeList(cache: { [key: string]: NodeInstance }) {
  return Object.keys(cache).map((x) => cache[x as keyof NodeInstance])
}

export function loopItemData(nodeArr?: any[]): any[] {
  if (!nodeArr) return []
  const nodeList: any[] = []
  const _loop = (nodeArr: any[], father: any) => {
    nodeArr.map((node, index) => {
      nodeList.push(node)
      if ("children" in node) {
        const { children } = node
        if (children && children.length > 0) {
          _loop(children, node)
        }
      }
    })
  }
  _loop(nodeArr, { key: "" })
  return nodeList
}
