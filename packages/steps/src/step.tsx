/** @jsxImportSource @emotion/react */
import React, { forwardRef } from "react"
import { CloseIcon, SuccessIcon } from "@illa-design/icon"
import { isFunction } from "@illa-design/system"
import { StepProps, StepStatus } from "./interface"
import {
  applyDescriptionStyle,
  applyIconStyle,
  applyTitleStyle,
  applyContentStyle,
  applyWrapperStyle,
  applyConnectionNodeStyle,
  isVerticalLabel,
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
    disabled = false,
    icon,
    customDot,
    onClick,
    lastStep = false,
    nextStepError = false,
    lineless = false,
    ...restProps
  } = props

  let currentStatus: StepStatus = "wait"

  const hoverable = !!onClick && !disabled && current !== index

  function onClickStep() {
    onClick && !disabled && current !== index && onClick(index, id)
  }

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

  function renderIcon(status: StepStatus) {
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
    <div
      css={applyIconStyle({
        size,
        status: currentStatus,
        type,
        direction,
        labelPlacement,
      })}
    >
      {renderIcon(currentStatus)}
    </div>
  )
  const stepIconNode = isFunction(customDot)
    ? customDot(iconNode, { index, status: currentStatus, title, description })
    : iconNode

  function renderConnectionNode() {
    if (lastStep || lineless) {
      return null
    }

    if (
      direction === "vertical" ||
      isVerticalLabel({ type, direction, labelPlacement })
    ) {
      return (
        <div
          css={applyConnectionNodeStyle({
            type,
            direction,
            size,
            labelPlacement,
          })}
        />
      )
    }

    return null
  }

  return (
    <div
      ref={ref}
      css={applyWrapperStyle({
        type,
        status: currentStatus,
        direction,
        labelPlacement,
        disabled,
      })}
      onClick={onClickStep}
      style={style}
      className={className}
      {...restProps}
    >
      {renderConnectionNode()}
      {stepIconNode}
      <div
        css={applyContentStyle({ type, labelPlacement, direction, hoverable })}
      >
        <div
          css={applyTitleStyle({
            type,
            size,
            lastStep,
            lineless,
            direction,
            labelPlacement,
            nextStepError,
            status: currentStatus,
          })}
        >
          {title}
        </div>
        {description && (
          <div css={applyDescriptionStyle(size)}>{description}</div>
        )}
      </div>
    </div>
  )
})

Step.displayName = "Step"
