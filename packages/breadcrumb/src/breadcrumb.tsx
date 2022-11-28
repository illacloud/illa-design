import { Children, forwardRef, useCallback, useMemo } from "react"
import { BreadcrumbProps } from "./interface"
import { css } from "@emotion/react"
import { itemCss, separatorCss, wrapCss } from "./style"
import { BreadcrumbContext } from "./breadcrumb-context"
import { BreadcrumbItem } from "./breadcrumbItem"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>(
  (props, ref) => {
    const { separator, routes, maxCount, children, ...restProps } = props

    const newSeparator = useMemo(() => {
      return <span css={separatorCss}>{separator ? separator : "/"}</span>
    }, [separator])

    const renderItem = useCallback(
      (list: any, idx: number) => {
        if (!maxCount || list.length < maxCount) return true
        return idx === 0 || idx > list.length - maxCount
      },
      [maxCount],
    )

    const routeItems = useMemo(() => {
      return (
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
                {renderItem(routes, idx) ? (
                  <BreadcrumbItem key={idx} />
                ) : (
                  idx === 1 && <span css={itemCss}>...</span>
                )}
              </BreadcrumbContext.Provider>
              {idx < routes.length - 1 &&
                (renderItem(routes, idx)
                  ? { newSeparator }
                  : idx === 1
                  ? { newSeparator }
                  : null)}
            </>
          )
        })
      )
    }, [newSeparator, renderItem, routes])

    const normalItems = useMemo(() => {
      let childLiItem = Children.toArray(children)
      return Children.map(childLiItem, (ele, idx) => {
        return (
          <>
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
              (renderItem(childLiItem, idx)
                ? { newSeparator }
                : idx === 1
                ? { newSeparator }
                : null)}
          </>
        )
      })
    }, [children, renderItem, newSeparator])

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
