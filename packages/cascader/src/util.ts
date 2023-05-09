import { CascaderOptionObject, SelectorOption } from "./interface"

export function getLabelListFromValueList(
  v: string[],
  options: CascaderOptionObject[],
) {
  const returnList: string[] = []
  let currentCascaderList = options
  v.forEach((item) => {
    let currentCascader = currentCascaderList?.find((o) => o.value === item)
    if (currentCascader) {
      returnList.push(currentCascader.label)
      if (currentCascader.children) {
        currentCascaderList = currentCascader.children
      }
    }
  })
  if (returnList.length === 0) {
    return v.join("/")
  }
  return returnList.join("/")
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
