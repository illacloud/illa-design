/** @jsxImportSource @emotion/react */
import React, { forwardRef } from "react"
import { BadgeProps } from "./interface"
import { globalColor, illaPrefix } from "@illa-design/theme"
import {
  applyBadge,
  applyBadgeStatusWrapper,
  applyBadgeDot,
  applyBadgeStatusText,
  applyBadgeNumberOrText,
} from "./style"

import { Count } from "./count"

const statusColor = {
  default: `--${illaPrefix}-gray-06`,
  processing: `--${illaPrefix}-blue-03`,
  success: `--${illaPrefix}-green-03`,
  warning: `--${illaPrefix}-yellow-03`,
  error: `--${illaPrefix}-red-03`,
}

export function isObject(obj: any): obj is { [key: string]: any } {
  return Object.prototype.toString.call(obj) === "[object Object]"
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const {
    count = 0,
    text,
    dot,
    maxCount = 99,
    colorScheme,
    dotStyle: propsDotStyle,
    offset,
    status,
    children,
    ...restProps
  } = props

  const [leftOffset, topOffset] = offset || []
  const dotStyle = propsDotStyle ?? {}

  if (leftOffset) {
    dotStyle.marginRight = -leftOffset
  }
  if (topOffset) {
    dotStyle.marginTop = topOffset
  }

  let colorStyle: string = ""
  if (status) {
    colorStyle = globalColor(statusColor[status])
  }
  if (colorScheme) {
    colorStyle = globalColor(`--${illaPrefix}-${colorScheme}-03`)
  }
  colorStyle = colorStyle ? colorStyle : globalColor(`--${illaPrefix}-red-03`)

  const hasChildren = children ? true : false

  const renderBadge = () => {
    // status优先级最高
    if (status) {
      return (
        <span css={applyBadgeStatusWrapper()}>
          <span
            css={applyBadgeDot(colorStyle, hasChildren, true)}
            style={dotStyle}
          />
          {text && <span css={applyBadgeStatusText()}>{text}</span>}
        </span>
      )
    }
    // 自定义图标
    if (isObject(count)) {
      return (
        <span
          style={dotStyle}
          css={applyBadgeNumberOrText(colorStyle, hasChildren, 0)}
        >
          {count}
        </span>
      )
    }
    // 显示自定义文本
    if (text) {
      return (
        <span
          style={dotStyle}
          css={applyBadgeNumberOrText(colorStyle, hasChildren, text.length)}
        >
          {text}
        </span>
      )
    }
    // 显示小圆点
    if (dot && count && count > 0) {
      return (
        <span
          style={dotStyle}
          css={applyBadgeDot(colorStyle, hasChildren)}
        ></span>
      )
    }

    let renderCount = count && count > maxCount ? `${maxCount}+` : `${count}`
    return count && count > 0 ? (
      <Count
        dotStyle={dotStyle}
        count={renderCount}
        hasChildren={hasChildren}
        color={colorStyle}
      />
    ) : null
  }
  return (
    <span css={applyBadge()} ref={ref} {...restProps}>
      {children}
      {renderBadge()}
    </span>
  )
})

Badge.displayName = "Badge"
