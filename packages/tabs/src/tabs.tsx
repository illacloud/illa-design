/** @jsxImportSource @emotion/react */
import React, { forwardRef, ReactElement, useState, useEffect } from "react"
import { TabHeaderChildProps, TabPaneProps, TabsProps } from "./interface"
import { TabPane } from "./tab-pane"
import { TabContent } from "./tab-content"
import { containerCss } from "./styles"
import { TabLineHeader } from "./headers/tab-line-header"
import { TabCardHeader } from "./headers/tab-card-header"
import { TabCapsuleHeader } from "./headers/tab-capsule-header"

export function isObject(obj: any): obj is { [key: string]: any } {
  return Object.prototype.toString.call(obj) === "[object Object]"
}

export type TabChildren = {
  headers: TabHeaderChildProps[]
  panes: ReactElement[]
  firstTabKey?: string
}

export function getTabChildren(children: ReactElement) {
  const headerChildren: TabHeaderChildProps[] = []
  const paneChildren: ReactElement[] = []
  let firstTabKey: string | undefined
  React.Children.forEach(children, (child: ReactElement, index: number) => {
    if (child && child.type && (child as ReactElement<TabPaneProps>)) {
      if (child.props && (child.props as TabPaneProps) && child.props.title) {
        const _props = child.props
        const key = child?.key?.toString() ?? _props.title + index
        if (!firstTabKey) firstTabKey = key
        headerChildren.push({
          ..._props,
          tabKey: key,
        })
        paneChildren.push(<TabPane key={key} {..._props} />)
      }
    }
  })
  return {
    headers: headerChildren,
    panes: paneChildren,
    firstTabKey: firstTabKey,
  }
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const {
    children,
    placeholder,
    defaultActiveKey,
    size = "medium",
    animated,
  } = props

  const [activeKey, setActiveKey] = useState<string | undefined>(
    defaultActiveKey,
  )
  const [_selectedIndex, setSelectedIndex] = useState<number>(0)

  const _children: TabChildren = getTabChildren(children as ReactElement)
  useEffect(() => {
    setActiveKey(_children.firstTabKey)
  }, [])

  useEffect(() => {
    const index = _children.headers.findIndex((item) => {
      return item.tabKey === activeKey
    })
    setSelectedIndex(index)
  }, [activeKey])

  let headerAnimated = true
  let paneAnimated = false
  if (typeof animated === "object") {
    headerAnimated = animated.inkBar ?? headerAnimated
    paneAnimated = animated.tabPane ?? paneAnimated
  } else if (typeof animated === "boolean") {
    headerAnimated = paneAnimated = animated
  }

  return (
    <div css={containerCss} placeholder={placeholder}>
      <TabCardHeader
        selectedIndex={_selectedIndex}
        size={size}
        animated={headerAnimated}
        tabHeaderChild={_children?.headers}
        defaultActiveKey={activeKey}
        onSelectTab={(key) => {
          setActiveKey(key)
        }}
      />
      <TabContent
        animated={paneAnimated}
        tabPanes={_children?.panes}
        defaultActiveKey={activeKey}
      />
    </div>
  )
})
