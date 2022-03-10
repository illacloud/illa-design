/** @jsxImportSource @emotion/react */
import * as React from "react"
import { Children, forwardRef, ReactElement } from "react"
import { TimelineProps } from "./interface"
import { Spin } from "@illa-design/spin"
import { TimelineItem } from "./timelineItem"
import { TimelineContext } from './timeline-context'
import { wrapLineCss } from './styles'

export const Timeline = forwardRef<HTMLDivElement, TimelineProps>(
  (props, ref) => {
    const {
      style,
      className,
      reverse = false,
      direction = "vertical",
      pending = true,
      pendingDot = <Spin size={'small'} />,
      labelPosition = "same",
      ...rest
    } = props
    let { mode = "left" } = props

    const pendingNode = typeof pending === 'boolean' ? null : pending;
    const pedningItem = pending ? (
      <TimelineItem dot={pendingDot}>{pendingNode}</TimelineItem>
    ) : null

    let childLiItem = Children.toArray(props.children)

    if (reverse) {
      childLiItem.reverse()
    }

    pending && childLiItem.push(pedningItem as any)

    if (labelPosition === 'relative') {
      // 
      mode = 'alternate'
    }

    const items = Children.map(childLiItem, (ele, index) => {
      return (
        <TimelineContext.Provider
          value={{
            direction,
            mode,
            index
          }}
        >
          {ele}
        </TimelineContext.Provider>
      )
    })

    let wrapCss = (direction === 'horizontal' && mode === "alternate") ? wrapLineCss : ''

    return (
      <div ref={ref} {...rest} css={wrapCss}>
        {items}
      </div>
    )
  },
)

// Timeline.Item = TimelineItem;
