import React, {
  useState,
  useEffect,
  useRef,
  ReactNode,
  ReactElement,
} from "react"
import { getStyle } from "@illa-design/system"
import useMeasure from "react-use/lib/useMeasure"
import { OverflowWrapperProps } from "./interface"
import { SubMenu } from "./sub-menu"
import { overflowMenuItemCss } from "./style"
import { subMenuPlaceholderCss } from "./styles"

function getNodeWidth(node: HTMLElement) {
  if (!node) {
    return 0
  }

  const width = +node.getBoundingClientRect().width.toFixed(2)
  const marginLeft = px2Number(getStyle(node, "margin-left"))
  const marginRight = px2Number(getStyle(node, "margin-right"))

  return width + marginLeft + marginRight
}

function px2Number(str: string): number {
  const num = Number(str.replace("px", ""))
  return Number.isNaN(num) ? 0 : num
}

export const OverflowWrapper = (props: OverflowWrapperProps) => {
  const { children } = props
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const subMenuPlaceholderRef = useRef<HTMLElement | null>(null)
  const [measureWrapperRef, measureWrapperInfo] = useMeasure<HTMLDivElement>()
  const [lastVisibleIndex, setLastVisibleIndex] = useState<number | null>(null)

  useEffect(() => {
    calcLastVisibleIndex()
  }, [children, measureWrapperInfo])

  function calcLastVisibleIndex() {
    if (!wrapperRef.current) {
      return
    }

    const wrapperElement = wrapperRef.current
    const maxWidth = getNodeWidth(wrapperElement)
    const childrenNodeList = Array.from(wrapperElement.children)

    let menuItemIndex = 0
    let currentMaxWidth = 0
    let overflowSubMenuWidth = getNodeWidth(
      subMenuPlaceholderRef.current as HTMLElement,
    )

    for (const node of childrenNodeList) {
      if (node.getAttribute("data-sub-menu-marker") !== null) {
        continue
      }
      const nodeWidth = getNodeWidth(node as HTMLElement)
      currentMaxWidth += nodeWidth

      if (currentMaxWidth > maxWidth) {
        menuItemIndex--
        currentMaxWidth -= nodeWidth

        if (currentMaxWidth + overflowSubMenuWidth > maxWidth) {
          menuItemIndex--
        }

        setLastVisibleIndex(menuItemIndex)
        return
      }

      menuItemIndex++
    }

    setLastVisibleIndex(null)
  }

  const renderOverflowSubMenu = (
    children: ReactNode,
    isPlaceholder: boolean,
  ) => {
    3
    return (
      <SubMenu
        title={<span>...</span>}
        key={"overflow-sub-menu"}
        data-sub-menu-marker
        css={isPlaceholder && subMenuPlaceholderCss}
        ref={(el) => {
          isPlaceholder && (subMenuPlaceholderRef.current = el as HTMLElement)
        }}
        {...props}
        children={children}
      />
    )
  }

  const renderChildren = () => {
    let overflowSubMenu = null
    const overflowSubMenuPlaceholder = renderOverflowSubMenu(null, true)

    const originalMenuItems = React.Children.map(children, (child, index) => {
      let item = child

      if (lastVisibleIndex !== null) {
        // set overflow item invisible
        if (index > lastVisibleIndex) {
          item = React.cloneElement(child as ReactElement, {
            css: overflowMenuItemCss,
          })
        }

        // put overflow item into sub menu
        if (index === lastVisibleIndex + 1) {
          const overflowMenuItems = React.Children.toArray(children)
            .slice(lastVisibleIndex + 1)
            .map((child) => React.cloneElement(child as ReactElement), {
              key: (child as ReactElement).props._key,
            })

          overflowSubMenu = renderOverflowSubMenu(overflowMenuItems, false)
        }
      }

      return item
    })

    return [
      overflowSubMenuPlaceholder,
      ...(originalMenuItems as ReactElement[]),
      overflowSubMenu,
    ]
  }

  return (
    <div
      ref={(el) => {
        wrapperRef.current = el
        measureWrapperRef(el as HTMLDivElement)
      }}
    >
      {renderChildren()}
    </div>
  )
}
