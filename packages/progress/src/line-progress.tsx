/** @jsxImportSource @emotion/react */
import { forwardRef, ReactNode } from "react"
import { ProgressProps } from "./interface"
import {
  applyLineContainer,
  applyLineProgress,
  applyLineProgressBg,
  applyLineProgressBgStep,
  applyLineProgressStep,
  applyProgressContainer,
  applyProgressText,
  applySpace,
  applyStatusIcon,
} from "./line-progress-style"
import { WarningIcon, SuccessIcon } from "@illa-design/icon"
import { Space } from "@illa-design/space"

export const LineProgress = forwardRef<HTMLDivElement, ProgressProps>((props, ref) => {

  const {
    steps = 1,
    status = "normal",
    color = "blue",
    trailColor = "gray",
    showText = true,
    formatText = (percent: number) => {
      return `${percent}%`
    },
    percent = 0,
    strokeWidth = "4px",
    width = "320px",
    ...otherProps
  } = props

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

  if (steps == 1) {
    return <div ref={ref} {...otherProps} css={applyProgressContainer}>
      <div css={applyLineContainer(width, strokeWidth)}>
        <div css={applyLineProgressBg(strokeWidth, trailColor)} />
        <div css={applyLineProgress(percent, strokeWidth, finalColor)} />
      </div>
      {showText && <span css={applyProgressText}>
      {formatText(percent)}
    </span>}
      {status != "normal" && <span css={applyStatusIcon}>
      {statusComponent}
    </span>}
    </div>
  } else {
    let lineProgressContainer = []
    let lineProgressBgContainer = []

    for (let i = 0; i < steps; i++) {
      lineProgressContainer.push(
        <div key={i} css={applyLineProgressStep(percent,
          strokeWidth,
          `calc((${width} - (${steps} - 1) * 4px) / ${steps})`,
          finalColor,
          steps,
          i)} />,
      )
      lineProgressBgContainer.push(
        <div key={i} css={applyLineProgressBgStep(strokeWidth,
          `calc((${width} - (${steps} - 1) * 4px) / ${steps})`,
          trailColor)} />,
      )
    }

    return <div ref={ref} {...otherProps} css={applyProgressContainer}>
      <div css={applyLineContainer(width, strokeWidth)}>
        <Space css={applySpace()} size="4px">
          {lineProgressBgContainer}
        </Space>
        <Space css={applySpace()} size="4px">
          {lineProgressContainer}
        </Space>
      </div>
      {showText && <span css={applyProgressText}>
      {formatText(percent)}
    </span>}
      {status != "normal" && <span css={applyStatusIcon}>{statusComponent}</span>}
    </div>
  }
})

LineProgress.displayName = "LineProgress"