import { Children, ReactElement } from "react"
import {
  NodeInstance,
  NodeProps,
  TreeDataType,
} from "@illa-design/tree-common/src"

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

export function getNodeList(cache: { [key: string]: NodeInstance }) {
  return Object.keys(cache).map((x) => cache[x as keyof NodeInstance])
}
