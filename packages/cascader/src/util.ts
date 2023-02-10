import { CascaderOptionObject, SelectorOption } from "./interface"

export function getLabelListFromValueList(
  v: string[],
  options: CascaderOptionObject[],
): string[] {
  const returnList: string[] = []
  let currentCascaderList = options
  v.forEach((item) => {
    let currentCascader = currentCascaderList.find((o) => o.value === item)
    if (currentCascader) {
      returnList.push(currentCascader.label)
      if (currentCascader.children) {
        currentCascaderList = currentCascader.children
      }
    }
  })
  return returnList
}

export function traversalOptions(
  allList: SelectorOption[][],
  currentList: SelectorOption[],
  node: CascaderOptionObject,
) {
  let pathList = [
    ...currentList,
    {
      label: node.label,
      value: node.value,
    },
  ]
  if (node.children === undefined || node.children.length === 0) {
    allList.push(pathList)
  } else {
    node.children.forEach((v) => {
      traversalOptions(allList, pathList, v)
    })
  }
}
