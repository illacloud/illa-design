import {
  forwardRef,
  ReactElement,
  useState,
  useMemo,
  Children,
  useCallback,
  useEffect,
  useRef,
} from "react"
import { TabPaneProps, TabsProps } from "./interface"
import { TabPane } from "./tab-pane"
import { TabsProvider } from "./context/context"
import {
  iconStyle,
  nextIconStyle,
  tabsContainerStyle,
  tabsStyle,
} from "./style"
import { UpIcon, DownIcon, PreviousIcon } from "@illa-design/icon"
import { isHorizontalLayout } from "./utils"
import { SCROLL_ICON_WIDTH } from "./constants"
import { LayoutGroup } from "framer-motion"
import { v4 } from "uuid"

const getTabItems = (children: ReactElement | undefined) => {
  if (!children) return []
  const tabItems: ReactElement[] = []
  let firstTabKey: string | undefined
  Children.forEach(children, (child: ReactElement, index: number) => {
    if (child && child.type && (child as ReactElement<TabPaneProps>)) {
      if (child.props && (child.props as TabPaneProps) && child.props.title) {
        const _props = child.props
        const key = child?.key?.toString() ?? _props.title + index
        if (!firstTabKey) firstTabKey = key
        tabItems.push(<TabPane key={key} data-key={key} {..._props} />)
      }
    }
  })
  return tabItems
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const {
    children,
    defaultActiveKey,
    variant = "line",
    tabBarSpacing,
    tabPosition = "top",
    align = "flex-start",
    activeKey,
    prefix,
    suffix,
    withoutBorderLine,
    onChange,
    onDeleteTab,
    onClickTab,
  } = props

  const tabItems = useMemo(() => {
    return getTabItems(children as ReactElement)
  }, [children])

  const [curTabItems, setCurTabItems] = useState<ReactElement[]>(tabItems)
  const firstTabKey = useMemo(() => {
    return curTabItems[0]?.key?.toString()
  }, [curTabItems])
  const containerRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const [showScrollIcon, setShowScrollIcon] = useState(false)
  const [translate, setTranslate] = useState(0)
  const [selectedKey, setSelectedKey] = useState(
    defaultActiveKey ?? firstTabKey,
  )
  const layoutId = v4()

  const handleSelectTab = useCallback(
    (key: string | undefined) => {
      if (!key) return
      onClickTab && onClickTab(key)
      setSelectedKey(key)
      onChange && onChange(key)
    },
    [onChange, onClickTab],
  )

  const handleDeleteTab = useCallback(
    (key: string | undefined) => {
      if (!key || !tabItems) return
      const index = tabItems.findIndex((item) => item.key === key)
      if (index !== -1) {
        tabItems.splice(index, 1)
        setCurTabItems([...tabItems])
      }
      onDeleteTab && onDeleteTab(key)
    },
    [onDeleteTab, tabItems],
  )

  const handleGoNext = () => {
    if (containerRef.current && panelRef.current) {
      if (
        -(translate - containerRef.current.clientWidth / 2) +
          containerRef.current.clientWidth +
          SCROLL_ICON_WIDTH >=
        panelRef.current.scrollWidth
      ) {
        setTranslate(
          -(
            panelRef.current.scrollWidth +
            SCROLL_ICON_WIDTH -
            containerRef.current.clientWidth
          ),
        )
      } else {
        setTranslate(translate - containerRef.current.clientWidth / 2)
      }
    }
  }
  const handleGoPrevious = () => {
    if (containerRef.current && panelRef.current) {
      if (
        translate + containerRef.current.clientWidth / 2 >=
        SCROLL_ICON_WIDTH
      ) {
        setTranslate(SCROLL_ICON_WIDTH)
      } else {
        setTranslate(translate + containerRef.current.clientWidth / 2)
      }
    }
  }

  useEffect(() => {
    if (showScrollIcon) {
      setTranslate(SCROLL_ICON_WIDTH)
    } else {
      setTranslate(0)
    }
  }, [showScrollIcon])

  const handleShowScrollIcon = useCallback((width?: number) => {
    if (containerRef.current && panelRef.current) {
      if (width) {
        if (width + SCROLL_ICON_WIDTH < panelRef.current.scrollWidth) {
          setShowScrollIcon(true)
        } else {
          setShowScrollIcon(false)
        }
      } else {
        if (
          containerRef.current.clientWidth + SCROLL_ICON_WIDTH <
          panelRef.current.scrollWidth
        ) {
          setShowScrollIcon(true)
        } else {
          setShowScrollIcon(false)
        }
      }
    }
  }, [])

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        handleShowScrollIcon(entry.contentRect.width)
      })
    })
    if (containerRef.current) {
      handleShowScrollIcon()
      observer.observe(containerRef.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [handleShowScrollIcon])

  useEffect(() => {
    setCurTabItems(tabItems)
  }, [tabItems])

  return (
    <LayoutGroup id={layoutId}>
      <TabsProvider
        {...props}
        selectedKey={activeKey || selectedKey}
        handleSelectTab={handleSelectTab}
        handleDeleteTab={handleDeleteTab}
      >
        <div
          css={tabsContainerStyle(
            tabPosition,
            align,
            variant,
            withoutBorderLine,
          )}
          ref={containerRef}
        >
          {prefix}
          {!isHorizontalLayout(tabPosition) && showScrollIcon && (
            <span css={iconStyle("previous")} onClick={handleGoPrevious}>
              {isHorizontalLayout(tabPosition) ? (
                <UpIcon size="12" />
              ) : (
                <PreviousIcon size="12" />
              )}
            </span>
          )}
          <div
            ref={panelRef}
            css={tabsStyle(
              tabPosition,
              tabBarSpacing,
              variant,
              translate,
              align,
              withoutBorderLine,
            )}
          >
            {curTabItems}
          </div>
          {!isHorizontalLayout(tabPosition) && showScrollIcon && (
            <span css={iconStyle("next")} onClick={handleGoNext}>
              {isHorizontalLayout(tabPosition) ? (
                <DownIcon size="12" />
              ) : (
                <PreviousIcon css={nextIconStyle} size="12" />
              )}
            </span>
          )}
          {suffix}
        </div>
      </TabsProvider>
    </LayoutGroup>
  )
})

Tabs.displayName = "Tabs"
