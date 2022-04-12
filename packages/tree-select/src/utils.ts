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
