import React, { forwardRef, ReactNode, useMemo } from "react"
import { StepProps } from "./interface"
import { applyIndexStyle, stepIconStyle } from "./style"
import { ErrorIcon, NextIcon, SuccessIcon } from "@illa-design/icon"
import { deleteCssProps, getColor } from "@illa-design/theme"
import {
  applyHorizontalNavigationContainerStyle,
  applyHorizontalNavigationLineStyle,
  horizontalNavigationContentStyle,
  horizontalNavigationDescriptionStyle,
  horizontalNavigationTitleStyle,
} from "./style/navigation-horizontal-style"

export const NavigateStep = forwardRef<HTMLDivElement, StepProps>(
  (props, ref) => {
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
      type,
      last,
      direction,
      ...otherProps
    } = props

    const statusElement = useMemo(() => {
      let renderElement: ReactNode = null

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

      return icon ? <span css={stepIconStyle}>{icon}</span> : renderElement
    }, [icon, index, status])

    return (
      <div
        css={applyHorizontalNavigationContainerStyle(direction, last, disabled)}
        ref={ref}
        {...deleteCssProps(otherProps)}
      >
        <div css={horizontalNavigationContentStyle}>
          {statusElement}
          <div css={horizontalNavigationTitleStyle}>{title}</div>
          <NextIcon fs="12px" mr="16px" c={getColor("grayBlue", "06")} />
        </div>
        <div css={horizontalNavigationDescriptionStyle}>{description}</div>
        <span css={applyHorizontalNavigationLineStyle(lineStatus, lineless)} />
      </div>
    )
  },
)

NavigateStep.displayName = "NavigateStep"
