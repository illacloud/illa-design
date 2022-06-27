import { CSSProperties, forwardRef } from "react"
import { BadgeProps } from "./interface"
import { isObject } from "@illa-design/system"
import {
  applyBadge,
  applyBadgeStatusWrapper,
  applyBadgeDot,
  applyBadgeStatusText,
  applyBadgeNumberOrText,
  getDotColor,
} from "./style"

import { Count } from "./count"

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const {
    count = 0,
    text,
    dot,
    maxCount = 99,
    colorScheme,
    offset,
    status,
    children,
    ...restProps
  } = props

  const [leftOffset, topOffset] = offset || []
  const dotStyle: CSSProperties = {}

  if (leftOffset) {
    dotStyle.marginRight = -leftOffset
  }
  if (topOffset) {
    dotStyle.marginTop = topOffset
  }

  let colorStyle = getDotColor(count, colorScheme, status)

  const hasChildren = !!children

  const renderBadge = () => {
    // display status dot
    if (status) {
      return (
        <span css={applyBadgeStatusWrapper} style={dotStyle}>
          <span css={applyBadgeDot(colorStyle, hasChildren, true)} />
          {text && <span css={applyBadgeStatusText}>{text}</span>}
        </span>
      )
    }
    // display customized icon
    if (isObject(count)) {
      return (
        <span
          css={applyBadgeNumberOrText(colorStyle, hasChildren, 0)}
          style={dotStyle}
        >
          {count}
        </span>
      )
    }
    // display text
    if (text) {
      return (
        <span
          css={applyBadgeNumberOrText(colorStyle, hasChildren, text.length)}
          style={dotStyle}
        >
          {text}
        </span>
      )
    }
    // display dot
    if (dot && count && count > 0) {
      return (
        <span css={applyBadgeDot(colorStyle, hasChildren)} style={dotStyle} />
      )
    }

    let renderCount = count && count > maxCount ? `${maxCount}+` : `${count}`
    return count && count > 0 ? (
      <Count
        count={renderCount}
        hasChildren={hasChildren}
        color={colorStyle}
        style={dotStyle}
      />
    ) : null
  }
  return (
    <span css={applyBadge} ref={ref} {...restProps}>
      {children}
      {renderBadge()}
    </span>
  )
})

Badge.displayName = "Badge"
