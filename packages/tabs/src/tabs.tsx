import { forwardRef, ReactElement, useState, useMemo, Children } from "react"
import {
  TabHeaderChildProps,
  TabHeaderProps,
  TabPaneProps,
  TabsProps,
} from "./interface"
import { TabPane } from "./tab-pane"
import { TabContent } from "./tab-content"
import { commonContainerCss, horizontalContainerCss } from "./style"
import { TabCommonHeader } from "./headers/tab-common-header"
import { isAhead, isHorizontalLayout } from "./utils"
import { TabLineHeader } from "./headers/tab-line-header"
import { isObject } from "@illa-design/system"

export type TabChildren = {
  headers: TabHeaderChildProps[]
  panes: ReactElement[]
  firstTabKey?: string
}

export function getTabChildren(children: ReactElement) {
  const headerChildren: TabHeaderChildProps[] = []
  const paneChildren: ReactElement[] = []
  let firstTabKey: string | undefined
  Children.forEach(children, (child: ReactElement, index: number) => {
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

export function removeHeaderAndPane(index: number, tabsArr: TabChildren) {
  if (index < 0) return tabsArr
  const newHeaders = [...tabsArr.headers]
  newHeaders.splice(index, 1)
  const newPanes = [...tabsArr.panes]
  newPanes.splice(index, 1)
  return {
    headers: newHeaders,
    panes: newPanes,
    firstTabKey: newHeaders[0]?.tabKey ?? "",
  }
}

export function getSelectedIndex(
  key?: string,
  headers?: TabHeaderChildProps[],
) {
  if (!headers) return -1
  return headers.findIndex((item) => key === item.tabKey)
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const {
    children,
    placeholder,
    defaultActiveKey,
    size = "medium",
    animated,
    editable = false, // just valid when variant is card
    variant = "line",
    addIcon,
    deleteIcon,
    onChange,
    onAddTab,
    onDeleteTab,
    onClickTab,
    tabBarSpacing,
    tabPosition = "top",
    activeKey,
    ...rest
  } = props

  const [activeKeyState, setActiveKeyState] = useState<string | undefined>(
    defaultActiveKey,
  )

  const [_children, setChildren] = useState<TabChildren>({
    headers: [],
    panes: [],
  })

  useMemo(() => {
    const tabs = getTabChildren(children as ReactElement)
    setChildren(tabs)
    if (!defaultActiveKey) setActiveKeyState(tabs.firstTabKey)
  }, [children])

  let headerAnimated = true
  let paneAnimated = false

  if (typeof animated === "boolean") {
    headerAnimated = paneAnimated = animated
  } else if (isObject(animated)) {
    headerAnimated = animated.inkBar ?? headerAnimated
    paneAnimated = animated.tabPane ?? paneAnimated
  }

  const _activeKey = activeKey ?? activeKeyState

  const headerProps: TabHeaderProps = {
    selectedIndex: getSelectedIndex(_activeKey, _children.headers),
    animated: headerAnimated,
    tabHeaderChild: _children?.headers,
    handleSelectTab: (key) => {
      onClickTab && onClickTab(key)
      setActiveKeyState(key)
      onChange && onChange(key)
    },
    size: size,
    variant: variant,
    editable: editable,
    addIcon: addIcon,
    onAddTab: onAddTab,
    tabBarSpacing: tabBarSpacing,
    tabPosition: tabPosition,
    handleDeleteTab: (key) => {
      const index = _children.headers.findIndex((item) => {
        return item.tabKey === key
      })
      if (index === getSelectedIndex(_activeKey, _children.headers)) {
        if (index === _children.headers.length - 1) {
          setActiveKeyState(_children.headers[index - 1].tabKey)
          onChange && onChange(_children.headers[index - 1].tabKey)
        } else {
          setActiveKeyState(_children.headers[index + 1].tabKey)
          onChange && onChange(_children.headers[index + 1].tabKey)
        }
      }
      const newArr = removeHeaderAndPane(index, _children)
      setChildren(newArr)
      onDeleteTab && onDeleteTab(key)
    },
    deleteIcon: deleteIcon,
  }

  const containerCss = useMemo(() => {
    if (isHorizontalLayout(tabPosition)) {
      return horizontalContainerCss
    }
    return commonContainerCss
  }, [tabPosition])

  const _variant = useMemo(() => {
    if (tabPosition && tabPosition !== "top") {
      return "line"
    }
    return variant
  }, [variant, tabPosition])

  return (
    <div css={containerCss} placeholder={placeholder} ref={ref} {...rest}>
      {isAhead(tabPosition) && _variant === "line" && (
        <TabLineHeader {...headerProps} />
      )}
      {tabPosition === "top" && _variant != "line" && (
        <TabCommonHeader {...headerProps} />
      )}
      <TabContent
        animated={paneAnimated}
        tabPanes={_children?.panes}
        selectedIndex={getSelectedIndex(
          activeKey ?? activeKeyState,
          _children.headers,
        )}
        variant={_variant}
      />
      {!isAhead(tabPosition) && _variant === "line" && (
        <TabLineHeader {...headerProps} />
      )}
      {!isAhead(tabPosition) && _variant != "line" && (
        <TabCommonHeader {...headerProps} />
      )}
    </div>
  )
})
