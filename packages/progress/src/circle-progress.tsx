/** @jsxImportSource @emotion/react */
import { forwardRef, ReactNode } from "react"
import { ProgressProps } from "./interface"
import { applyCircleStatus, applyProgressText } from "./circle-progress-style"
import { SuccessIcon, WarningIcon } from "@illa-design/icon"
import {
  applyContainer,
  applyProgressContainer,
  applyProgressContainerBg,
  applySvgContainer,
} from "./common-style"

export const CircleProgress = forwardRef<HTMLDivElement, ProgressProps>(
  (props, ref) => {
    const {
      type = "line",
      steps,
      status = "normal",
      color = "blue",
      width = "80px",
      strokeWidth = "4px",
      trailColor = "gray",
      showText = true,
      formatText = (percent: number) => {
        return `${percent}%`
      },
      percent = 0,
      ...otherProps
    } = props

    const radius = `calc((${width} - ${strokeWidth}) / 2)`
    const center = `calc(${width} / 2)`

    let finalColor: string

    switch (status) {
      case "normal":
        finalColor = color
        break
      case "success":
        finalColor = "green"
        break
      case "error":
        finalColor = "red"
        break
    }

    let statusComponent: ReactNode
    switch (status) {
      case "success":
        statusComponent = <SuccessIcon />
        break
      case "error":
        statusComponent = <WarningIcon />
        break
    }

    return (
      <div css={applyContainer(width)} ref={ref} {...otherProps}>
        <svg css={applySvgContainer(width)}>
          <circle
            css={applyProgressContainerBg(trailColor, width, strokeWidth)}
            fill="none"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <circle
            css={applyProgressContainer(
              finalColor,
              width,
              strokeWidth,
              percent,
            )}
            fill="none"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        </svg>
        {status == "normal" && showText && (
          <span css={applyProgressText}>{formatText(percent)}</span>
        )}
        {status != "normal" && (
          <span css={applyCircleStatus}>{statusComponent}</span>
        )}
      </div>
    )
  },
)

CircleProgress.displayName = "CircleProgress"
