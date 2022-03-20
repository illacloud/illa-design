/** @jsxImportSource @emotion/react */
import React, { forwardRef } from "react"
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
    status,
    children,
    ...restProps
  } = props

  const colorStyle = getDotColor(count, colorScheme, status)

  const hasChildren = !!children

  const renderBadge = () => {
    // display status dot
    if (status) {
      return (
        <span css={applyBadgeStatusWrapper}>
          <span css={applyBadgeDot(colorStyle, hasChildren, true)} />
          {text && <span css={applyBadgeStatusText}>{text}</span>}
        </span>
      )
    }
    // display customized icon
    if (isObject(count)) {
      return (
        <span css={applyBadgeNumberOrText(colorStyle, hasChildren, 0)}>
          {count}
        </span>
      )
    }
    // display text
    if (text) {
      return (
        <span
          css={applyBadgeNumberOrText(colorStyle, hasChildren, text.length)}
        >
          {text}
        </span>
      )
    }
    // display dot
    if (dot && count && count > 0) {
      return <span css={applyBadgeDot(colorStyle, hasChildren)} />
    }

    let renderCount = count && count > maxCount ? `${maxCount}+` : `${count}`
    return count && count > 0 ? (
      <Count count={renderCount} hasChildren={hasChildren} color={colorStyle} />
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
