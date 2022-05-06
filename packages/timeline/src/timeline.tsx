import { Children, forwardRef, ReactElement } from "react"
import { TimelineProps } from "./interface"
import { Spin } from "@illa-design/spin"
import { TimelineItem } from "./timelineItem"
import { TimelineContext } from "./timeline-context"
import { applyWrapCss } from "./styles"
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
      Children.map(children as ReactElement, (ele: ReactElement, index) => {
        return (
          <TimelineContext.Provider
            value={{
              direction,
              mode,
              index,
            }}
          >
            {ele}
          </TimelineContext.Provider>
        )
      }) || []

    if (reverse) items.reverse()

    const pendingNode = typeof pending === "boolean" ? null : pending
    const pendingItem = pending ? (
      <TimelineItem
        dot={pendingDot || pendingNode}
        mode={mode}
        direction={direction}
        key={items.length}
      ></TimelineItem>
    ) : null
    pending && items.push(pendingItem as ReactElement)

    return (
      <div ref={ref} {...rest} css={css(applyWrapCss(direction), _css)}>
        {items}
      </div>
    )
  },
)

Timeline.displayName = "Timeline"
