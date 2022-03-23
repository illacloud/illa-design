/** @jsxImportSource @emotion/react */
import React, { forwardRef } from "react"
import { CloseIcon, SuccessIcon } from "@illa-design/icon"
import { isFunction } from "@illa-design/system"
import { StepProps, stepStatus } from "./interface"
import {
  applyDescriptionStyle,
  applyIconStyle,
  applyTitleStyle,
  applyContentStyle,
  stepWrapperStyle,
} from "./style"

export const Step = forwardRef<HTMLDivElement, StepProps>((props, ref) => {
  const {
    style,
    className,
    id,
    index = 1,
    current = 1,
    type = "line",
    size = "small",
    title,
    direction = "horizontal",
    labelPlacement = "horizontal",
    description,
    status,
    disabled,
    icon,
    customDot,
    ...restProps
  } = props

  let currentStatus: stepStatus = "wait"

  if (status) {
    currentStatus = status
  } else {
    if (index < current) {
      currentStatus = "finish"
    } else if (index === current) {
      currentStatus = "process"
    } else if (index > current) {
      currentStatus = "wait"
    }
  }

  function renderIcon(status: stepStatus) {
    if (type === "dot") {
      return null
    }

    if (icon) {
      return icon
    }

    if (status === "finish") {
      return <SuccessIcon />
    } else if (status === "error") {
      return <CloseIcon />
    }
    return index
  }

  const iconNode = (
    <div css={applyIconStyle({ size, status: currentStatus, type })}>
      {renderIcon(currentStatus)}
    </div>
  )
  const stepIconNode = isFunction(customDot)
    ? customDot(iconNode, { index, status: currentStatus, title, description })
    : iconNode

  return (
    <div ref={ref} css={stepWrapperStyle} className={className} {...restProps}>
      {stepIconNode}
      <div css={applyContentStyle({ type, labelPlacement })}>
        <div css={applyTitleStyle(size, currentStatus)}>{title}</div>
        {description && (
          <div css={applyDescriptionStyle(size)}>{description}</div>
        )}
      </div>
    </div>
  )
})

Step.displayName = "Step"
