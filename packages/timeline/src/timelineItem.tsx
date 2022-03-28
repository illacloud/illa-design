import { forwardRef } from "react"
import { TimelineItemProps } from "./interface"
import { SerializedStyles } from "@emotion/react"
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

export const TimelineItem = forwardRef<HTMLDivElement, TimelineItemProps>(
  (props, ref) => {
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

          let handleLineCss: SerializedStyles = applyVertItemLineCss(
              mode,
              lineColor,
              lineType,
            ),
            handleDotCss: SerializedStyles = applyVertItemDotCss(
              mode,
              dotColor,
              dotType,
            ),
            handleContentCss: SerializedStyles = applyVertItemContentCss(
              modehandle(mode, index),
              autoFixDotSize,
            ),
            handlePropDotCss: SerializedStyles = applyVertPropDotCss(mode)
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
            <div css={applyItemCss(direction, mode)} ref={ref} {...rest}>
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
  },
)
