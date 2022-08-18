import { Children, forwardRef, Fragment } from "react"
import { BreadcrumbProps } from "./interface"
import { css } from "@emotion/react"
import { separatorCss, itemCss, wrapCss } from "./style"
import { BreadcrumbContext } from "./breadcrumb-context"
import { BreadcrumbItem } from "./breadcrumbItem"
import { applyBoxStyle } from "@illa-design/theme"
import { deleteCssProps } from "@illa-design/theme"

export const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>(
  (props, ref) => {
    const { separator, routes, maxCount, ...restProps } = props

    function Separator() {
      return <span css={separatorCss}>{separator ? separator : "/"}</span>
    }

    const renderItem = (list: any, idx: number) => {
      if (!maxCount || list.length < maxCount) return true
      if (idx === 0 || idx > list.length - maxCount) return true
      return false
    }

    const routeItems =
      routes?.length &&
      routes.map((item, idx: number) => {
        return (
          <Fragment key={idx}>
            <BreadcrumbContext.Provider
              value={{
                isCurrent: idx === routes.length - 1,
                path: item.path,
                breadcrumbName: item.breadcrumbName,
                children: item.children,
              }}
            >
              {renderItem(routes, idx) ? (
                <BreadcrumbItem key={idx} />
              ) : (
                idx === 1 && <span css={itemCss}>...</span>
              )}
            </BreadcrumbContext.Provider>
            {idx < routes.length - 1 &&
              (renderItem(routes, idx) ? (
                <Separator />
              ) : idx === 1 ? (
                <Separator />
              ) : null)}
          </Fragment>
        )
      })

    let childLiItem = Children.toArray(props.children)
    const normalItems = Children.map(childLiItem, (ele, idx) => {
      return (
        <Fragment key={idx}>
          <BreadcrumbContext.Provider
            value={{
              isCurrent: idx === childLiItem.length - 1,
            }}
          >
            {renderItem(childLiItem, idx) ? (
              <>{ele}</>
            ) : (
              idx === 1 && <span css={itemCss}>...</span>
            )}
          </BreadcrumbContext.Provider>
          {idx < childLiItem.length - 1 &&
            (renderItem(childLiItem, idx) ? (
              <Separator />
            ) : idx === 1 ? (
              <Separator />
            ) : null)}
        </Fragment>
      )
    })

    return (
      <div
        ref={ref}
        css={css(wrapCss, applyBoxStyle(props))}
        {...deleteCssProps(restProps)}
      >
        {routes?.length ? routeItems : normalItems}
      </div>
    )
  },
)

Breadcrumb.displayName = "Breadcrumb"
