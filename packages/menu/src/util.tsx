// thx arco
import React, { Children, cloneElement, ReactElement, ReactNode } from "react"

export type MenuInfo = {
  keyPath: string[]
  prev: string
  next: string
  firstChild?: string
  lastChild?: string
  disabled?: boolean
}

// Expand MenuGroup to get an array only contains MenuItem and SubMenu
const flatMenuGroup = (children: ReactElement): ReactElement[] => {
  let validMenuItems: ReactElement[] = []

  Children.forEach(children, (item) => {
    const menuType =
      item &&
      item.type &&
      (item.type as unknown as { menuType: string }).menuType
    if (menuType === "MenuItem" || menuType === "SubMenu") {
      validMenuItems.push(item)
    } else if (menuType === "MenuGroup") {
      validMenuItems = validMenuItems.concat(flatMenuGroup(item.props.children))
    }
  })

  return validMenuItems
}

export const processChildren = (
  children: ReactElement,
  props: object,
): ReactNode => {
  const newChildren = Children.map(children, (item, index) => {
    if (!item || !item.props) {
      return item
    }

    const isHTMLElement = typeof item.type === "string"
    const isMenuSubComponent =
      item.type && (item.type as unknown as { menuType: string }).menuType

    // Handling MenuSubComponent that may wrap by other element. e.g <div>
    if (!isMenuSubComponent && item.props.children) {
      const _props = isHTMLElement ? {} : props

      return cloneElement(item, {
        ..._props,
        _key: item.key,
        children: processChildren(item.props.children, props),
      })
    }

    return isHTMLElement
      ? item
      : cloneElement(item, {
          ...props,
          // Properties of the component itself have higher priority
          ...item.props,
          _key: item.key || `$menu-${index}`,
        })
  })

  return <>{newChildren}</>
}

export function isChildrenSelected(
  children: ReactElement,
  selectedKeys: string[],
) {
  let selected = false

  function loop(_children: ReactElement) {
    if (!_children || selected) {
      return
    }

    Children.forEach(_children, (c) => {
      if (c && c.props && c.type && !selected) {
        const menuType = (c.type as unknown as { menuType: string }).menuType
        const selectable = c.props.selectable

        if (menuType === "MenuItem" || (menuType === "SubMenu" && selectable)) {
          selected = selectedKeys.includes(c.key as string)
        }

        if (!selected && c.props.children) {
          loop(c.props.children)
        }
      }
    })
  }

  loop(children)
  return selected
}

export const generateInfoMap = (
  children: ReactNode,
  keyPath: string[] = [],
  result: {
    [key: string]: MenuInfo
  } = {},
) => {
  const validChildrenList: any[] = flatMenuGroup(children as ReactElement)

  validChildrenList.forEach((item, index) => {
    const key = item.key
    const menuType = item.type.menuType
    const _keyPath = [key, ...keyPath]
    const info: MenuInfo = {
      keyPath: [],
      prev: validChildrenList[index - 1]?.key || null,
      next: validChildrenList[index + 1]?.key || null,
    }

    if (index === 0 || index === validChildrenList.length - 1) {
      const parentKey = _keyPath[1]
      const propertyName = index === 0 ? "firstChild" : "lastChild"
      if (parentKey) {
        result[parentKey] = {
          ...result[parentKey],
          [propertyName]: key,
        }
      }
    }

    switch (menuType) {
      case "SubMenu":
        info.keyPath = _keyPath
        generateInfoMap(item.props.children, _keyPath, result)
        break

      case "MenuItem":
        info.keyPath = _keyPath
        info.disabled = item.props.disabled
        break

      default:
        break
    }

    result[key] = {
      ...result[key],
      ...info,
    }
  })

  return result
}
