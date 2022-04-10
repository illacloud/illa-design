import { forwardRef, useContext } from "react"
import { BreadcrumbItemProps } from "./interface"
import { itemCss, itemCurrentCss, itemHoverCss } from './style'
import { css } from "@emotion/react"
import { BreadcrumbContext } from "./breadcrumb-context"

export const BreadcrumbItem = forwardRef<HTMLDivElement, BreadcrumbItemProps>((props, ref) => {
  const {
    _css,
    ...restProps
  } = props

  const { isCurrent, path, breadcrumbName } = useContext(BreadcrumbContext)

  const handleItemCss = () => {
    return css`
      ${itemCss};
      ${isCurrent && itemCurrentCss};
      ${path && itemHoverCss}
    `
  }

  return (
    <div ref={ref} {...restProps} css={css(handleItemCss(), _css)}>
      {breadcrumbName || props.children}
    </div>
  )
})

BreadcrumbItem.displayName = "BreadcrumbItem"
