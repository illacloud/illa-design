import { forwardRef } from "react"
import { TimelineItemProps, TimelineLabelPosition } from "./interface"
import { TimelineContext } from "./timeline-context"
import {
  applyItemStyle,
  applyDotItemStyle,
  applyLineStyle,
  dotCommonStyle,
  applyDotWrapperStyle,
  applyItemContentStyle,
} from "./styles"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

const modeHandle = (
  mode: string,
  key: number,
  labelPosition: TimelineLabelPosition,
) => {
  let classArr = ["alternate-same", "alternate-relative"]
  // if labelPosition is relative :  1 -> 0, 0 -> 1
  let classIdx = Math.abs((key % 2) - (labelPosition === "relative" ? 1 : 0))
  return mode === "alternate" ? classArr[classIdx] : mode
}

export const TimelineItem = forwardRef<HTMLDivElement, TimelineItemProps>(
  (props, ref) => {
    return (
      <TimelineContext.Consumer>
        {(value) => {
          const isChildrenLast = value?.isChildrenLast
          const {
            dot,
            direction = value?.direction || "vertical",
            mode = value?.mode || "left",
            index = value?.index || 0,
            label,
            labelPosition = "same",
            dotColor,
            dotType = "solid",
            lineType = "solid",
            lineColor,
            autoFixDotSize = true,
            children,
            ...rest
          } = props

          const _mode = modeHandle(mode, index, labelPosition)

          return (
            <div
              css={[
                applyItemStyle(direction, _mode, dot),
                applyBoxStyle(props),
              ]}
              ref={ref}
              {...deleteCssProps(rest)}
            >
              <div css={applyDotItemStyle(direction, _mode)}>
                {isChildrenLast ? null : (
                  <div css={applyLineStyle(direction, lineType, lineColor)} />
                )}
                <div css={applyDotWrapperStyle(direction)}>
                  {dot ? dot : <div css={dotCommonStyle(dotColor, dotType)} />}
                </div>
              </div>
              <div
                css={applyItemContentStyle(direction, _mode, autoFixDotSize)}
              >
                {label ? label : children}
              </div>
            </div>
          )
        }}
      </TimelineContext.Consumer>
    )
  },
)

TimelineItem.displayName = "TimelineItem"
