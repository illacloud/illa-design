import { mergedToString } from "@illa-design/system"
import { NodeProps } from "@illa-design/tree-common"

export function getSearchReason(input: string, options: NodeProps[]) {
  return options.filter((item) => {
    const { title } = item
    if (typeof title === "string") {
      return title.includes(input)
    } else {
      return mergedToString(title).includes(input)
    }
  })
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
