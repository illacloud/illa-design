import { forwardRef, useCallback, useContext, useMemo } from "react"
import { BreadcrumbItemProps } from "./interface"
import { itemCss, itemCurrentCss, itemHoverCss } from "./style"
import { css } from "@emotion/react"
import { BreadcrumbContext } from "./breadcrumb-context"
import { Dropdown } from "@illa-design/dropdown"
import { Menu } from "@illa-design/menu"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

const { Item } = Menu

export const BreadcrumbItem = forwardRef<HTMLDivElement, BreadcrumbItemProps>(
  (props, ref) => {
    const { dropList, dropdownProps, ...restProps } = props

    const { isCurrent, path, breadcrumbName, children } =
      useContext(BreadcrumbContext)

    const dropItem = useMemo(() => {
      return (
        children?.length && (
          <Menu>
            {children.map((cItem: any, cIdx: number) => {
              return <Item key={cIdx + ""} title={cItem.breadcrumbName}></Item>
            })}
          </Menu>
        )
      )
    }, [children])

    const finalDrop = dropList || dropItem

    const handleItemCss = useCallback(() => {
      return css`
        ${itemCss};
        ${isCurrent && itemCurrentCss};
        ${path && itemHoverCss}
      `
    }, [isCurrent, path])

    const item = (
      <div
        ref={ref}
        css={css(handleItemCss(), applyBoxStyle(props))}
        {...deleteCssProps(restProps)}
      >
        {breadcrumbName || props.children}
      </div>
    )

    return finalDrop ? (
      <Dropdown dropList={finalDrop} {...dropdownProps}>
        {item}
      </Dropdown>
    ) : (
      item
    )
  },
)

BreadcrumbItem.displayName = "BreadcrumbItem"
