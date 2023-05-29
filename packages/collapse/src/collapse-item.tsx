import { CollapseContext } from "./collapse-context"
import { CollapseItemProps } from "./interface"
import {
  applyChildrenContainerStyle,
  applyChildrenContentStyle,
  applyCollapseExtraStyle,
  applyCollapseTitleContainerStyle,
  applyCollapseTitleStyle,
  applyPositionIconAnimateStyle,
  collapseStyle,
  dividerStyle,
  expandIconStyle,
} from "./style"
import { CaretLeftIcon, CaretRightIcon } from "@illa-design/icon"
import { deleteCssProps, getColor } from "@illa-design/theme"
import { forwardRef, MouseEvent, useCallback, useContext, useMemo } from "react"
import { Transition } from "react-transition-group"

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

    const ll = lazyload ? lazyload : collapseContext.lazyload ?? false

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
        if (disabled) {
          return
        }
        let keys = new Set<string>(collapseContext.activeKey)
        if (active) {
          keys.delete(name)
          collapseContext?.onToggle?.(
            name,
            Array.from<string>(keys.values()),
            e,
          )
        } else {
          keys.add(name)
          collapseContext?.onToggle?.(
            name,
            Array.from<string>(keys.values()),
            e,
          )
        }
      },
      [active, collapseContext, disabled, name],
    )

    return (
      <div css={collapseStyle} ref={ref} {...deleteCssProps(otherProps)}>
        <div
          css={applyCollapseTitleContainerStyle(disabled)}
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
                  c={disabled ? getColor("gray", "05") : getColor("gray", "03")}
                />
              )}
            </div>
          )}
          <div css={applyCollapseTitleStyle(se && eip === "left", disabled)}>
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
                  c={disabled ? getColor("gray", "05") : getColor("gray", "03")}
                />
              )}
            </div>
          )}
        </div>
        <Transition
          in={active}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false)
          }}
          mountOnEnter={doh || ll}
          unmountOnExit={doh}
          onEnter={(e: HTMLElement) => {
            e.style.height = "0"
            e.style.display = "block"
          }}
          onEntering={(e: HTMLElement) => {
            e.style.height = `${e.scrollHeight}px`
          }}
          onEntered={(e: HTMLElement) => {
            e.style.height = "auto"
          }}
          onExit={(e: HTMLElement) => {
            e.style.display = "block"
            e.style.height = `${e.offsetHeight}px`
            // have to trigger reflow to get animation effect on exit
            e.offsetHeight // eslint-disable-line
          }}
          onExiting={(e: HTMLElement) => {
            e.style.height = "0"
          }}
          onExited={(e: HTMLElement) => {
            e.style.display = "none"
            e.style.height = "auto"
          }}
        >
          <div css={applyChildrenContainerStyle(active)}>
            <div css={applyChildrenContentStyle()}>{children}</div>
          </div>
        </Transition>
      </div>
    )
  },
)

CollapseItem.displayName = "CollapseItem"
