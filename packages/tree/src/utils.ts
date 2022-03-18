import { NodeProps, TreeDataType } from "./interface"

export const loopNode = (nodeArr?: TreeDataType[]) => {
  if (!nodeArr) return []
  const nodeList: NodeProps[] = []
  const loop = (nodeArr: TreeDataType[], father: NodeProps) => {
    nodeArr.map((node) => {
      const nodeProps: NodeProps & { children?: NodeProps[] } = {
        key: node.key,
        title: node.title,
        _father: father,
        _fatherPath: father?._fatherPath
          ? [...father?._fatherPath, father]
          : [father],
        _level: father?._level !== undefined ? father._level + 1 : 0,
      }
      nodeList.push(nodeProps)
      if (node.children) {
        loop(node.children, nodeProps)
      }
    })
  }
  loop(nodeArr, {})

  return nodeList
}
