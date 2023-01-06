import React, { forwardRef } from "react"
import { CloseIcon, SuccessIcon } from "@illa-design/icon"
import { isFunction } from "@illa-design/system"
import { StepProps, StepStatus } from "./interface"
import { deleteCssProps } from "@illa-design/theme"
import { applyIconStyle } from "./style/icon"
import { isVerticalLabel } from "./style"
import { applyConnectionNodeStyle } from "./style/connector-node"
import { applyWrapperStyle } from "./style/wrapper"
import { applyContentStyle } from "./style/content"
import { applyTitleStyle } from "./style/title"
import { applyDescriptionStyle } from "./style/description"

export const Step = forwardRef<HTMLDivElement, StepProps>((props, ref) => {
  const {
    id,
    index = 1,
    current = 1,
    variant = "line",
    title,
    direction = "horizontal",
    labelPlacement = "horizontal",
    description,
    status,
    disabled,
    icon,
    customDot,
    onClick,
    lastStep,
    nextStepError,
    lineless,
    ...restProps
  } = props

  // fix small size
  const size = "small"

  let currentStatus: StepStatus = "wait"

  const hoverable = !!onClick && !disabled && current !== index

  const onClickStep = () => {
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

  const renderIcon = (status: StepStatus) => {
    if (variant === "dot") {
      return null
    }

    if (icon) {
      return icon
    }

    if (status === "finish") {
      return <SuccessIcon size={"12"} />
    } else if (status === "error") {
      return <CloseIcon size={"12"} />
    }
    return index
  }

  const iconNode = (
    <div
      css={applyIconStyle({
        size,
        status: currentStatus,
        variant,
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

  const renderConnectionNode = () => {
    if (lastStep || lineless) {
      return null
    }

    if (
      direction === "vertical" ||
      isVerticalLabel({ variant, direction, labelPlacement })
    ) {
      return (
        <div
          css={applyConnectionNodeStyle({
            variant,
            direction,
            size,
            labelPlacement,
            status: currentStatus,
            nextStepError,
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
        variant,
        status: currentStatus,
        direction,
        labelPlacement,
        disabled,
        hoverable,
      })}
      onClick={onClickStep}
      {...deleteCssProps(restProps)}
    >
      {renderConnectionNode()}
      {stepIconNode}
      <div
        css={applyContentStyle({
          variant,
          labelPlacement,
          direction,
        })}
      >
        <div
          css={applyTitleStyle({
            variant,
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
