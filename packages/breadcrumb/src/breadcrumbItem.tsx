import { forwardRef, useContext } from "react"
import { BreadcrumbItemProps } from "./interface"
import { applyItemStyle, itemFinalStyle } from "./style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"
import { Dropdown } from "@illa-design/dropdown"
import { DownIcon } from "@illa-design/icon"
import { BreadcrumbContext } from "./breadcrumb-context"

export const BreadcrumbItem = forwardRef<HTMLDivElement, BreadcrumbItemProps>(
  (props, ref) => {
    const {
      dropList,
      dropdownProps,
      children,
      last,
      href,
      onClick,
      ...restProps
    } = props

    const breadcrumbContext = useContext(BreadcrumbContext)

    return (
      <Dropdown position="bottom-start" dropList={dropList} {...dropdownProps}>
        <a
          css={[
            last
              ? itemFinalStyle
              : applyItemStyle(href !== undefined || onClick !== undefined),
            applyBoxStyle(props),
          ]}
          href={breadcrumbContext?.blockRouterChange ? undefined : href}
          onClick={(event) => {
            onClick?.(event)
            breadcrumbContext?.onClickPath?.(href ?? "", last ?? false)
          }}
          {...deleteCssProps(restProps)}
        >
          {children}
          {dropList && <DownIcon ml="2px" />}
        </a>
      </Dropdown>
    )
  },
)

BreadcrumbItem.displayName = "BreadcrumbItem"
