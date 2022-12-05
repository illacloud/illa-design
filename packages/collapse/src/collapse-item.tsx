import {
  forwardRef,
  MouseEvent,
  useCallback,
  useContext,
  useMemo,
  useRef,
} from "react"
import { CollapseItemProps } from "./interface"
import { CollapseContext } from "./collapse-context"
import {
  applyChildrenContainerStyle,
  applyChildrenContentStyle,
  applyCollapseExtraStyle,
  applyCollapseTitleStyle,
  applyPositionIconAnimateStyle,
  collapseStyle,
  collapseTitleContainerStyle,
  dividerStyle,
  expandIconStyle,
} from "./style"
import { CaretLeftIcon, CaretRightIcon } from "@illa-design/icon"
import useMeasure from "react-use-measure"
import { getColor } from "@illa-design/theme"

export const CollapseItem = forwardRef<HTMLDivElement, CollapseItemProps>(
  (props, ref) => {
    const {
      children,
      name,
      header,
      extra,
      disabled,
      destroyOnHide,
      expandIcon,
      showExpandIcon,
      lazyload,
      triggerRegion,
      expandIconPosition,
      ...otherProps
    } = props

    const collapseContext = useContext(CollapseContext)

    const [childrenRef, childrenMeasure] = useMeasure({
      polyfill: ResizeObserver,
    })

    const ll = lazyload ? lazyload : collapseContext.lazyload ?? false
    const alreadyLoad = useRef(false)
    const doh = destroyOnHide
      ? destroyOnHide
      : collapseContext.destroyOnHide ?? false

    const se = showExpandIcon
      ? showExpandIcon
      : collapseContext.showExpandIcon ?? false
    const eip = expandIconPosition
      ? expandIconPosition
      : collapseContext.expandIconPosition ?? false

    const ei = expandIcon ? expandIcon : collapseContext.expandIcon

    const tr = triggerRegion
      ? triggerRegion
      : collapseContext.triggerRegion ?? "header"

    const active = useMemo(() => {
      if (collapseContext.activeKey) {
        if (typeof collapseContext.activeKey === "string") {
          return name === collapseContext.activeKey
        } else {
          return collapseContext.activeKey?.some((value) => {
            return value === name
          })
        }
      } else {
        return false
      }
    }, [collapseContext.activeKey, name])

    const expandFun = useCallback(
      (e?: MouseEvent<HTMLDivElement>) => {
        let keys = new Set<string>(collapseContext.activeKey)
        if (active) {
          keys.delete(name)
        } else {
          keys.add(name)
        }
        collapseContext?.onToggle?.(name, Array.from<string>(keys.values()), e)
      },
      [active, collapseContext, name],
    )

    const childrenMetaNode = useMemo(() => {
      if (ll) {
        if (active) {
          if (!alreadyLoad.current) {
            alreadyLoad.current = true
          }
          return children
        } else {
          if (doh) {
            return null
          } else {
            if (alreadyLoad.current) {
              return children
            } else {
              return null
            }
          }
        }
      } else {
        if (active) {
          return children
        } else {
          if (doh) {
            return null
          } else {
            return children
          }
        }
      }
    }, [active, children, doh, ll])

    return (
      <div css={collapseStyle} ref={ref} {...otherProps}>
        <div
          css={collapseTitleContainerStyle}
          onClick={(e) => {
            if (tr === "header") {
              expandFun(e)
            }
          }}
        >
          {se && eip === "left" && (
            <div
              css={expandIconStyle}
              onClick={(e) => {
                if (tr === "icon") {
                  expandFun(e)
                }
              }}
            >
              {ei ? (
                ei
              ) : (
                <CaretRightIcon
                  css={applyPositionIconAnimateStyle(active, eip)}
                  c={getColor("gray", "03")}
                />
              )}
            </div>
          )}
          <div css={applyCollapseTitleStyle(se && eip === "left")}>
            {header}
          </div>
          <div css={dividerStyle} />
          <div css={applyCollapseExtraStyle(se && eip === "right")}>
            {extra}
          </div>
          {se && eip === "right" && (
            <div
              css={expandIconStyle}
              onClick={(e) => {
                if (tr === "icon") {
                  expandFun(e)
                }
              }}
            >
              {ei ? (
                ei
              ) : (
                <CaretLeftIcon
                  css={applyPositionIconAnimateStyle(active, eip)}
                  c={getColor("gray", "03")}
                />
              )}
            </div>
          )}
        </div>
        <div
          css={applyChildrenContainerStyle(
            active,
            active ? childrenMeasure.height : 0,
          )}
        >
          <div ref={childrenRef} css={applyChildrenContentStyle()}>
            {childrenMetaNode}
          </div>
        </div>
      </div>
    )
  },
)

CollapseItem.displayName = "CollapseItem"
