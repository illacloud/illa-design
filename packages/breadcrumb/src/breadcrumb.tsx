import { Children, forwardRef } from "react"
import { BreadcrumbProps, RouteProps } from "./interface"
import { separatorCss, itemCss } from "./style"
import { BreadcrumbContext } from "./breadcrumb-context"
import { BreadcrumbItem } from "./breadcrumbItem"

export const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>(
  (props, ref) => {
    const { _css, separator, routes, maxCount, ...restProps } = props

    function Separator() {
      return <>{separator ? separator : <span css={separatorCss}>/</span>}</>
    }

    const routeItems =
      routes?.length &&
      routes.map((item, idx: number) => {
        return (
          <>
            <BreadcrumbContext.Provider
              value={{
                isCurrent: idx === routes.length - 1,
                path: item.path,
                breadcrumbName: item.breadcrumbName,
                children: item.children,
              }}
            >
              {maxCount && routes.length > maxCount ? (
                idx === 0 || idx > routes.length - maxCount ? (
                  <BreadcrumbItem key={idx} />
                ) : (
                  <span css={itemCss}>...</span>
                )
              ) : (
                <BreadcrumbItem key={idx} />
              )}
            </BreadcrumbContext.Provider>
            {idx < routes.length - 1 && <Separator />}
          </>
        )
      })

    let childLiItem = Children.toArray(props.children)
    const normalItems = Children.map(childLiItem, (ele, idx) => {
      return (
        <>
          <BreadcrumbContext.Provider
            value={{
              isCurrent: idx === childLiItem.length - 1,
            }}
          >
            {maxCount && childLiItem.length > maxCount ? (
              idx === 0 || idx > childLiItem.length - maxCount ? (
                <>{ele}</>
              ) : (
                <span css={itemCss}>...</span>
              )
            ) : (
              <>{ele}</>
            )}
          </BreadcrumbContext.Provider>
          {idx < childLiItem.length - 1 && <Separator />}
        </>
      )
    })

    return (
      <div ref={ref} {...restProps} css={_css}>
        {routes?.length ? routeItems : normalItems}
      </div>
    )
  },
)

Breadcrumb.displayName = "Breadcrumb"
