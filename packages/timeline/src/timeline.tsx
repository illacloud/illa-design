/** @jsxImportSource @emotion/react */
import * as React from "react"
import { Children, forwardRef } from "react"
import { TimelineProps } from "./interface"
// import { Spin } from "@illa-design/spin"
import { TimelineItem } from "./timelineItem"
import {
  applyItemCss,
  mainInfoCss,
  timeTextCss,
  applyVertItemLineCss,
  applyHorItemLineCss,
  applyVertItemDotCss,
  applyHorItemDotCss,
  applyVertItemContentCss,
  applyHorItemContentCss,
} from "./styles"
// import { css } from "@emotion/react"

export const Timeline = forwardRef<HTMLDivElement, TimelineProps>(
  (props, ref) => {
    const {
      style,
      className,
      reverse,
      // direction = "vertical",
      direction = "horizontal",
      mode = "alternate",
      // mode = "bottom",
      pending,
      // pendingDot = <Spin size={12} />,
      pendingDot,
      labelPosition = "same",
      ...rest
    } = props

    let testData = [1, 2, 3]

    let modehandle = (mode: string, key: number) => {
      return mode === "alternate"
        ? key % 2 === 0
          ? "alternate-left"
          : "alternate-right"
        : mode
    }

    return (
      <div>
        <ul>
          {
            // 纵向
            direction === "vertical" &&
              testData.map((item, key) => (
                <li css={applyItemCss(direction)}>
                  <div css={applyVertItemLineCss(mode)}></div>
                  <div css={applyVertItemDotCss(mode)}></div>
                  <div css={applyVertItemContentCss(modehandle(mode, key))}>
                    <div css={mainInfoCss}>The first milestone</div>
                    <div css={timeTextCss}>2017-03-10</div>
                  </div>
                </li>
              ))
          }
        </ul>
        <ul>
          {
            // 横向
            direction === "horizontal" &&
              testData.map((item, key) => (
                <li css={applyItemCss(direction)}>
                  <div css={applyHorItemLineCss(mode)}></div>
                  <div css={applyHorItemDotCss(mode)}></div>
                  <div css={applyHorItemContentCss(modehandle(mode, key))}>
                    <div css={mainInfoCss}>The first milestone</div>
                    <div css={timeTextCss}>2017-03-10</div>
                  </div>
                </li>
              ))
          }
        </ul>
      </div>
    )
  },
)

// Timeline.Item = TimelineItem;
