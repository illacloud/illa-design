import { FC, ReactElement } from "react"
import { ListProps, NodeInstance } from "./interface"
import { TreeNode } from "./tree-node"
import { List } from "@illa-design/list"

export const TreeList: FC<ListProps> = (props) => {
  const {
    listData = [],
    saveNodeCache,
    checkable,
    loadingMoreKeys,
    ...rest
  } = props

  return (
    <div>
      <List
        data={listData}
        render={(data) => {
          let node: NodeInstance = (
            <TreeNode
              loadingMore={loadingMoreKeys && loadingMoreKeys.has(data.key)}
              _key={data.key}
              expanding={data?.expanding}
              {...data}
              checkable={data.checkable !== false && checkable}
              {...rest}
            />
          )
          saveNodeCache && saveNodeCache(data.key, node)
          return node
        }}
        renderRaw={true}
        bordered={false}
        renderKey={(data, index) => {
          return data.key + index
        }}
      />
    </div>
  )
}
