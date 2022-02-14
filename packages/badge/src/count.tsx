/** @jsxImportSource @emotion/react */
import React from "react"
import usePrevious from "./usePrevious"
import { CountProps } from "./interface"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { applyBadgeNumberOrText, applyBadgeScale } from "./style"

const defaultColor = globalColor(`--${illaPrefix}-red-03`)
export function Count(props: CountProps) {
  const { count, dotStyle, color = defaultColor, hasChildren = false } = props
  const oldCount = usePrevious(count)
  const isChanged = count !== oldCount

  return (
    <span
      style={dotStyle}
      css={applyBadgeNumberOrText(color, hasChildren, (count as string).length)}
    >
      <span key={count as React.Key} css={applyBadgeScale(isChanged)}>
        {count}
      </span>
    </span>
  )
}
