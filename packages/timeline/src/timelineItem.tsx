import { forwardRef } from "react"
import { TimelineItemProps } from "./interface"
import { TimelineContext } from "./timeline-context"
import {
  applyItemCss,
  applyVertItemContentCss,
  applyHorItemContentCss,
  applyDotItemStyle,
  applyLineStyle,
  dotCommonStyle, applyDotWrapperStyle,
} from "./styles"

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

          let modehandle = (mode: string, key: number) => {
            let classArr = ["alternate-same", "alternate-relative"]
            // if labelPosition is relative :  1 -> 0, 0 -> 1
            let classIdx = Math.abs(
              (key % 2) - (labelPosition === "relative" ? 1 : 0),
            )
            return mode === "alternate" ? classArr[classIdx] : mode
          }
          let handleContentCss

          if (direction === "vertical") {
            handleContentCss = applyVertItemContentCss(
              modehandle(mode, index),
              autoFixDotSize,
            )
          }
          if (direction === "horizontal") {
            handleContentCss = applyHorItemContentCss(
              modehandle(mode, index),
              autoFixDotSize,
            )
          }

          return (
            <div css={applyItemCss(direction)} ref={ref} {...rest}>
              <div css={applyDotItemStyle(direction, mode)}>
                <div css={applyLineStyle(direction, lineType, lineColor)} />
                <div css={applyDotWrapperStyle(direction)}>
                  {dot ? dot : <div css={dotCommonStyle(dotColor, dotType)} />}
                </div>
              </div>
              <div css={handleContentCss}>{label ? label : children}</div>
            </div>
          )
        }}
      </TimelineContext.Consumer>
    )
  },
)

TimelineItem.displayName = "TimelineItem"
