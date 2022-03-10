/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef } from "react"
import { TimelineItemProps } from "./interface"
import { SerializedStyles } from "@emotion/react"
import { TimelineContext } from './timeline-context'
import {
  applyItemCss,
  applyVertItemLineCss,
  applyHorItemLineCss,
  applyVertItemDotCss,
  applyHorItemDotCss,
  applyVertPropDotCss,
  applyHorPropDotCss,
  applyVertItemContentCss,
  applyHorItemContentCss
} from "./styles"

export const TimelineItem = forwardRef<HTMLDivElement, TimelineItemProps>(
  (props, ref) => {
    return (
      <TimelineContext.Consumer>
        {(value) => {
          const {
            dot,
            direction = value?.direction || 'vertical',
            mode = value?.mode || 'left',
            index = value?.index || 0,
            ...rest
          } = props

          let modehandle = (mode: string, key: number) => {
            return mode === "alternate"
              ? key % 2 === 0
                ? "alternate-left"
                : "alternate-right"
              : mode
          }

          let handleLineCss: SerializedStyles, handleDotCss: SerializedStyles, handleContentCss: SerializedStyles, handlePropDotCss: SerializedStyles
          switch (direction) {
            case "vertical":
              handleLineCss = applyVertItemLineCss(mode)
              handleDotCss = applyVertItemDotCss(mode)
              handlePropDotCss = applyVertPropDotCss(mode)
              handleContentCss = applyVertItemContentCss(modehandle(mode, index))
              break
            case "horizontal":
              handleLineCss = applyHorItemLineCss(mode)
              handleDotCss = applyHorItemDotCss(mode)
              handlePropDotCss = applyHorPropDotCss(mode)
              handleContentCss = applyHorItemContentCss(modehandle(mode, index))
              break
            default:
              handleLineCss = applyVertItemLineCss(mode)
              handleDotCss = applyVertItemDotCss(mode)
              handlePropDotCss = applyVertPropDotCss(mode)
              handleContentCss = applyVertItemContentCss(modehandle(mode, index))
          }

          return (
            <div css={applyItemCss(direction)} ref={ref} {...rest}>
              {!dot && <div css={handleLineCss}></div>}
              {
                dot ? <div css={handlePropDotCss}>{dot}</div> : <div css={handleDotCss}></div>
              }
              <div css={handleContentCss}>
                {props.children}
              </div>
            </div>
          )
        }}
      </TimelineContext.Consumer>
    )
  },
)
