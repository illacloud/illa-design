import { Children, forwardRef, Fragment, ReactElement } from "react"
import { TimelineProps } from "./interface"
import { Spin } from "@illa-design/spin"
import { TimelineItem } from "./timelineItem"
import { TimelineContext } from "./timeline-context"
import { applyWrapCss } from "./styles"
import { css } from "@emotion/react"

const TimeContainer = forwardRef<HTMLDivElement, TimelineProps>(
  (props, ref) => {
    const {
      _css,
      reverse = false,
      mode = "left",
      direction = "vertical",
      pending,
      pendingDot = <Spin size={"small"} />,
      children,
      ...rest
    } = props

    const items =
      Children.map(children as ReactElement, (ele: ReactElement, index) => {
        if (ele?.type && (ele.type as typeof TimelineItem).isTimelineItem) {
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
        } else {
          return null
        }
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
      <div ref={ref} {...rest} css={css(applyWrapCss(direction), _css)}>
        {items}
      </div>
    )
  },
)
const Timeline = TimeContainer as typeof TimeContainer & {
  Item: typeof TimelineItem
}
Timeline.displayName = "Timeline"
Timeline.Item = TimelineItem

export { Timeline }
