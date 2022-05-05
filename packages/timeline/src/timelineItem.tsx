import { forwardRef } from "react"
import { TimelineItemProps } from "./interface"
import { TimelineContext } from "./timeline-context"
import {
  applyItemCss,
  applyVertItemLineCss,
  applyHorItemLineCss,
  applyVertItemDotCss,
  applyHorItemDotCss,
  applyVertPropDotCss,
  applyHorPropDotCss,
  applyVertItemContentCss,
  applyHorItemContentCss,
} from "./styles"

const Item = forwardRef<HTMLDivElement, TimelineItemProps>((props, ref) => {
  return (
    <TimelineContext.Consumer>
      {(value) => {
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
        let handleLineCss, handleDotCss, handleContentCss, handlePropDotCss

        if (direction === "vertical") {
          handleLineCss = applyVertItemLineCss(mode, lineColor, lineType)
          handleDotCss = applyVertItemDotCss(mode, dotColor, dotType)
          handlePropDotCss = applyVertPropDotCss(mode)
          handleContentCss = applyVertItemContentCss(
            modehandle(mode, index),
            autoFixDotSize,
          )
        }
        if (direction === "horizontal") {
          handleLineCss = applyHorItemLineCss(mode, lineColor, lineType)
          handleDotCss = applyHorItemDotCss(mode, dotColor, dotType)
          handlePropDotCss = applyHorPropDotCss(mode)
          handleContentCss = applyHorItemContentCss(
            modehandle(mode, index),
            autoFixDotSize,
          )
        }

        return (
          <div css={applyItemCss(direction)} ref={ref} {...rest}>
            {!dot && <div css={handleLineCss}></div>}
            {dot ? (
              <div css={handlePropDotCss}>{dot}</div>
            ) : (
              <div css={handleDotCss}></div>
            )}
            <div css={handleContentCss}>{label ? label : props.children}</div>
          </div>
        )
      }}
    </TimelineContext.Consumer>
  )
})

const TimelineItem = Item as typeof Item & {
  isTimelineItem?: boolean
}

TimelineItem.displayName = "TimelineItem"
TimelineItem.isTimelineItem = true

export { TimelineItem }
