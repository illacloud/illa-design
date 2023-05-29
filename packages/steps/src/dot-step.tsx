import React, { forwardRef, ReactNode, useMemo } from "react"
import { StepProps } from "./interface"
import {
  applyHorizontalDescriptionStyle,
  applyHorizontalLineStyle,
  applyHorizontalStepContainerStyle,
  horizontalStatusContainerStyle,
  horizontalTitleStyle,
} from "./style/dot-line-horizontal-style"
import { ErrorIcon, SuccessIcon } from "@illa-design/icon"
import { deleteCssProps, getColor } from "@illa-design/theme"
import { applyIndexStyle, applyStepDotStyle, stepIconStyle } from "./style"
import {
  applyVerticalDescriptionStyle,
  applyVerticalLineStyle,
  applyVerticalStepContainerStyle,
  verticalBottomContainer,
  verticalStatusContainerStyle,
  verticalTitleStyle,
} from "./style/dot-line-vertical-style"

export const DotStep = forwardRef<HTMLDivElement, StepProps>((props, ref) => {
  const {
    icon,
    status = "wait",
    index = 0,
    disabled,
    lineStatus = "wait",
    lineless,
    canClick,
    description,
    title,
    type = "dot",
    last,
    direction,
    ...otherProps
  } = props

  const statusElement = useMemo(() => {
    let renderElement: ReactNode = null

    switch (type) {
      case "dot":
        renderElement = <div css={applyStepDotStyle(status)} />
        break
      case "line":
        switch (status) {
          case "wait":
            renderElement = <div css={applyIndexStyle(status)}>{index + 1}</div>
            break
          case "process":
            renderElement = <div css={applyIndexStyle(status)}>{index + 1}</div>
            break
          case "finish":
            renderElement = (
              <div css={applyIndexStyle(status)}>
                <SuccessIcon c={getColor("blue", "03")} />
              </div>
            )
            break
          case "error":
            renderElement = (
              <div css={applyIndexStyle(status)}>
                <ErrorIcon c={getColor("red", "03")} />
              </div>
            )
            break
        }
        break
    }

    return icon ? <span css={stepIconStyle}>{icon}</span> : renderElement
  }, [type, icon, index, status])

  if (direction === "horizontal") {
    return (
      <div
        ref={ref}
        css={applyHorizontalStepContainerStyle(canClick, disabled, last)}
        {...deleteCssProps(otherProps)}
      >
        <div css={horizontalStatusContainerStyle}>
          {statusElement}
          <div css={horizontalTitleStyle}>{title}</div>
          {!last && (
            <div css={applyHorizontalLineStyle(lineStatus, lineless)} />
          )}
        </div>
        {description && (
          <div css={applyHorizontalDescriptionStyle(type)}>{description}</div>
        )}
      </div>
    )
  } else {
    return (
      <div
        ref={ref}
        css={applyVerticalStepContainerStyle(canClick, disabled, last)}
        {...deleteCssProps(otherProps)}
      >
        <div css={verticalStatusContainerStyle}>
          {statusElement}
          <div css={verticalTitleStyle}>{title}</div>
        </div>
        <div css={verticalBottomContainer}>
          {!last && (
            <div css={applyVerticalLineStyle(lineStatus, type, lineless)} />
          )}
          {description && (
            <div css={applyVerticalDescriptionStyle(type)}>{description}</div>
          )}
        </div>
      </div>
    )
  }
})

DotStep.displayName = "DotStep"
