import { CSSProperties, forwardRef, useMemo } from "react"
import { BadgeProps } from "./interface"
import { isObject } from "@illa-design/system"
import {
  applyBadge,
  applyBadgeDot,
  applyBadgeNumberOrText,
  applyBadgeStatusText,
  applyBadgeStatusWrapper,
  getDotColor,
} from "./style"

import { Count } from "./count"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

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

  const renderBadge = useMemo(() => {
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
    if (dot && count && (count as number) > 0) {
      return (
        <span css={applyBadgeDot(colorStyle, hasChildren)} style={dotStyle} />
      )
    }

    let renderCount =
      count && (count as number) > maxCount ? `${maxCount}+` : `${count}`
    return count && (count as number) > 0 ? (
      <Count
        count={renderCount}
        hasChildren={hasChildren}
        color={colorStyle}
        style={dotStyle}
      />
    ) : null
  }, [colorStyle, count, dot, dotStyle, hasChildren, maxCount, status, text])
  return (
    <span
      css={[applyBadge, applyBoxStyle(props)]}
      ref={ref}
      {...deleteCssProps(restProps)}
    >
      {children}
      {renderBadge}
    </span>
  )
})

Badge.displayName = "Badge"
