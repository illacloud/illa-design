/** @jsxImportSource @emotion/react */
import * as React from "react"
import { Children, forwardRef } from "react"
import { TimelineItemProps } from "./interface"

export const TimelineItem = forwardRef<HTMLDivElement, TimelineItemProps>(
  (props, ref) => {
    const { ...rest } = props

    return <li></li>
  },
)
