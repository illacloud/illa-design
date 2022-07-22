import { Children, forwardRef, ReactElement } from "react"
import { TimelineProps } from "./interface"
import { Spin } from "@illa-design/spin"
import { TimelineItem } from "./timelineItem"
import { TimelineContext } from "./timeline-context"
import { applyWrapStyle } from "./styles"
import { css } from "@emotion/react"

export const Timeline = forwardRef<HTMLDivElement, TimelineProps>(
  (props, ref) => {
    const {
      _css,
      reverse,
      mode = "left",
      direction = "vertical",
      pending,
      pendingDot = <Spin size={"small"} />,
      children,
      ...rest
    } = props

    const items =
      Children.map(children as ReactElement, (ele: ReactElement) => {
        return ele
      }) || []

    if (reverse) items.reverse()

    const pendingNode = typeof pending === "boolean" ? null : pending
    const pendingItem = pending ? (
      <TimelineItem
        dot={pendingDot || pendingNode}
        mode={mode}
        direction={direction}
        key={items.length}
      />
    ) : null
    pending && items.push(pendingItem as ReactElement)

    return (
      <div ref={ref} {...rest} css={css(applyWrapStyle(direction, mode), _css)}>
        {items.map((child, index) => {
          if (!child) {
            return null
          }
          return (
            <TimelineContext.Provider
              key={index}
              value={{
                direction,
                mode,
                index,
                isChildrenLast: items.length - 1 === index,
              }}
            >
              {child}
            </TimelineContext.Provider>
          )
        })}
      </div>
    )
  },
)

Timeline.displayName = "Timeline"
