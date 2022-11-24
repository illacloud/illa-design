import {
  Children,
  cloneElement,
  FC,
  ReactElement,
  useMemo,
  useEffect,
  useRef,
  useState,
} from "react"
import { getStyle } from "@illa-design/system"
import useMeasure from "react-use-measure"
import { ResizeObserver } from "@juggle/resize-observer"
import { OverflowSubMenuProps, OverflowWrapperProps } from "./interface"
import { SubMenu } from "./sub-menu"
import { applyAlignStyle, overflowMenuItemCss } from "./style"
import { overflowWrapperCss, subMenuPlaceholderCss } from "./styles"

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

const OverflowSubMenu: FC<OverflowSubMenuProps> = (props) => {
  const { children, isPlaceholder, ...restProps } = props

  return (
    <SubMenu
      title={<span>...</span>}
      key={`overflow-sub-menu${isPlaceholder && "placeholder"}`}
      data-sub-menu-marker
      data-sub-menu-placeholder-marker={isPlaceholder}
      _css={isPlaceholder ? subMenuPlaceholderCss : undefined}
      showArrow={false}
      {...restProps}
    >
      {children}
    </SubMenu>
  )
}

export const OverflowWrapper: FC<OverflowWrapperProps> = (props) => {
  const { children, horizontalAlign, ...restProps } = props
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const [measureWrapperRef, measureWrapperInfo] = useMeasure({
    polyfill: ResizeObserver,
  })
  const [lastVisibleIndex, setLastVisibleIndex] = useState<number | null>(null)
  const OVERFLOW_THRESHOLD = 10

  function calcLastVisibleIndex() {
    if (!wrapperRef.current) {
      return
    }

    const wrapperElement = wrapperRef.current
    const maxWidth = getNodeWidth(wrapperElement) - OVERFLOW_THRESHOLD
    const childrenNodeList = Array.from(wrapperElement.children)

    let menuItemIndex = 0
    let currentMaxWidth = 0
    let overflowSubMenuWidth = 0

    for (const node of childrenNodeList) {
      if (node.getAttribute("data-sub-menu-marker") !== null) {
        if (node.getAttribute("data-sub-menu-placeholder-marker")) {
          overflowSubMenuWidth = getNodeWidth(node as HTMLElement)
        }
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

  useEffect(() => {
    calcLastVisibleIndex()
  }, [children, measureWrapperInfo])

  const renderChildren = useMemo(() => {
    let overflowSubMenu = null
    const overflowSubMenuPlaceholder = (
      <OverflowSubMenu key={"placeholder"} isPlaceholder {...restProps} />
    )
    const originalMenuItems = Children.map(children, (child, index) => {
      let item = child

      if (lastVisibleIndex !== null) {
        // set overflow item invisible
        if (index > lastVisibleIndex) {
          item = cloneElement(child as ReactElement, {
            _css: overflowMenuItemCss,
          })
        }

        // put overflow item into sub menu
        if (index === lastVisibleIndex + 1) {
          const overflowMenuItems = Children.toArray(children)
            .slice(lastVisibleIndex + 1)
            .map((child) => cloneElement(child as ReactElement), {
              key: (child as ReactElement).props._key,
            })

          overflowSubMenu = (
            <OverflowSubMenu key={index} isPlaceholder={false} {...restProps}>
              {overflowMenuItems}
            </OverflowSubMenu>
          )
        }
      }

      return item
    })

    return [
      overflowSubMenuPlaceholder,
      ...(originalMenuItems as ReactElement[]),
      overflowSubMenu,
    ]
  }, [children, lastVisibleIndex, restProps])

  return (
    <div
      ref={(el) => {
        wrapperRef.current = el
        measureWrapperRef(el as HTMLDivElement)
      }}
      css={[overflowWrapperCss, applyAlignStyle(horizontalAlign)]}
    >
      {renderChildren}
    </div>
  )
}
