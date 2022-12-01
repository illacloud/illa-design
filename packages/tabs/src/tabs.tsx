import {
  forwardRef,
  ReactElement,
  useState,
  useMemo,
  Children,
  useCallback,
} from "react"
import {
  TabHeaderChildProps,
  TabHeaderProps,
  TabPaneProps,
  TabsProps,
} from "./interface"
import { TabPane } from "./tab-pane"
import { TabContent } from "./tab-content"
import { applyContainerCss } from "./style"
import { TabCommonHeader } from "./headers/tab-common-header"
import { TabLineHeader } from "./headers/tab-line-header"
import { isObject } from "@illa-design/system"
import { applyBoxStyle } from "@illa-design/theme"

export type TabChildren = {
  headers: TabHeaderChildProps[]
  panes: ReactElement[]
  firstTabKey?: string
}

function getTabChildren(children: ReactElement) {
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

function removeHeaderAndPane(index: number, tabsArr: TabChildren) {
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

function getSelectedIndex(key?: string, headers?: TabHeaderChildProps[]) {
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
    editable,
    variant = "line",
    addIcon,
    deleteIcon,
    tabBarSpacing,
    tabPosition = "top",
    align = "flex-start",
    activeKey,
    prefix,
    suffix,
    colorScheme,
    withoutContent = false,
    onChange,
    onAddTab,
    onDeleteTab,
    onClickTab,
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
  }, [children, defaultActiveKey])

  const headerAnimated = useMemo(() => {
    if (typeof animated === "boolean") {
      return animated
    } else if (isObject(animated)) {
      return animated.inkBar ?? true
    }
  }, [animated])

  const paneAnimated = useMemo(() => {
    if (typeof animated === "boolean") {
      return animated
    } else if (isObject(animated)) {
      return animated.tabPane ?? false
    }
  }, [animated])

  const _activeKey = useMemo(
    () => activeKey ?? activeKeyState,
    [activeKey, activeKeyState],
  )

  const selectedIndex = useMemo(() => {
    return getSelectedIndex(_activeKey, _children.headers)
  }, [_activeKey, _children])

  const handleDeleteTab = useCallback(
    (key: string) => {
      const index = _children.headers.findIndex((item) => {
        return item.tabKey === key
      })
      if (index === selectedIndex) {
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
    [_children, selectedIndex, onChange, onDeleteTab],
  )

  const handleSelectTab = useCallback(
    (key: string) => {
      onClickTab && onClickTab(key)
      setActiveKeyState(key)
      onChange && onChange(key)
    },
    [onChange, onClickTab],
  )

  const headerProps: TabHeaderProps = {
    selectedIndex,
    animated: headerAnimated,
    tabHeaderChild: _children?.headers,
    handleSelectTab,
    size,
    align,
    variant,
    editable,
    addIcon,
    onAddTab,
    tabBarSpacing,
    tabPosition,
    handleDeleteTab,
    deleteIcon,
    suffix,
    prefix,
    colorScheme,
  }

  const _variant = useMemo(() => {
    if (variant === "capsule" && tabPosition !== "top") {
      return "line"
    }
    if (
      variant === "card" &&
      (tabPosition === "left" || tabPosition === "right")
    ) {
      return "line"
    }
    return variant
  }, [variant, tabPosition])

  return (
    <div
      css={[applyContainerCss(tabPosition), applyBoxStyle(props)]}
      placeholder={placeholder}
      ref={ref}
      {...rest}
    >
      {_variant === "line" && <TabLineHeader {...headerProps} />}
      {_variant != "line" && <TabCommonHeader {...headerProps} />}
      {!withoutContent && (
        <TabContent
          animated={paneAnimated}
          tabPanes={_children?.panes}
          selectedIndex={selectedIndex}
          variant={_variant}
          tabPosition={tabPosition}
        />
      )}
    </div>
  )
})

Tabs.displayName = "Tabs"
