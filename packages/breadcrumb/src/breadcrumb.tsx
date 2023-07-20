import {
  Children,
  cloneElement,
  forwardRef,
  Fragment,
  ReactElement,
  useMemo,
} from "react"
import { BreadcrumbProps } from "./interface"
import { breadcrumbContainerStyle, dividerStyle, dotStyle } from "./style"
import { SlashIcon } from "@illa-design/icon"
import { applyBoxStyle, deleteCssProps, getColor } from "@illa-design/theme"
import { BreadcrumbItem } from "./breadcrumbItem"
import { DropList, DropListItem } from "@illa-design/dropdown"
import { BreadcrumbContext } from "./breadcrumb-context"

export const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>(
  (props, ref) => {
    const {
      separator,
      routes,
      maxCount,
      blockRouterChange,
      children,
      onClickPath,
      ...otherProps
    } = props

    const separatorNode = useMemo(() => {
      return typeof separator === "string" ? (
        <span css={dividerStyle}>{separator}</span>
      ) : (
        separator ?? (
          <SlashIcon ml="12px" mr="12px" fs="8px" c={getColor("gray", "06")} />
        )
      )
    }, [separator])

    const childrenNode = useMemo(() => {
      if (routes) {
        return routes.map((child, index) => {
          return (
            <Fragment key={index}>
              <BreadcrumbItem
                key={child.path}
                last={index === routes.length - 1}
                dropList={
                  child.children ? (
                    <DropList>
                      {child.children?.map((c) => {
                        return (
                          <DropListItem
                            value={c.path ?? ""}
                            key={c.path ?? ""}
                            title={c.breadcrumbName}
                            onClick={() => {
                              if (c.path && !blockRouterChange) {
                                window.location.href = c.path
                              }
                              onClickPath?.(
                                c.path ?? "",
                                index === routes.length - 1,
                              )
                            }}
                          />
                        )
                      })}
                    </DropList>
                  ) : undefined
                }
              >
                {child.breadcrumbName}
              </BreadcrumbItem>
              {index !== routes.length - 1 && separatorNode}
            </Fragment>
          )
        })
      } else {
        return Children.toArray(children)
          .filter((child) => child !== undefined && child !== null)
          .map((child, index, array) => {
            return (
              <Fragment key={index}>
                {index !== array.length - 1
                  ? child
                  : cloneElement(child as ReactElement, { last: true })}
                {index !== array.length - 1 && separatorNode}
              </Fragment>
            )
          })
      }
    }, [blockRouterChange, children, onClickPath, routes, separatorNode])

    const maxChildren = useMemo(() => {
      if (maxCount != undefined && childrenNode) {
        if (childrenNode.length > maxCount) {
          if (maxCount == 0) {
            return <span css={dotStyle}>...</span>
          } else if (maxCount === 1) {
            return childrenNode[childrenNode.length - 1]
          } else if (maxCount === 2) {
            return (
              <>
                {childrenNode[0]}
                <span css={dotStyle}>...</span>
                {separatorNode}
                {childrenNode[childrenNode.length - 1]}
              </>
            )
          } else {
            return (
              <>
                {childrenNode[0]}
                <span css={dotStyle}>...</span>
                {separatorNode}
                {childrenNode[childrenNode.length - 2]}
                {childrenNode[childrenNode.length - 1]}
              </>
            )
          }
        }
      }
      return childrenNode
    }, [childrenNode, maxCount, separatorNode])

    return (
      <div
        css={[breadcrumbContainerStyle, applyBoxStyle(props)]}
        {...deleteCssProps(otherProps)}
      >
        <BreadcrumbContext.Provider
          value={{
            onClickPath,
            blockRouterChange,
          }}
        >
          {maxChildren}
        </BreadcrumbContext.Provider>
      </div>
    )
  },
)

Breadcrumb.displayName = "Breadcrumb"
