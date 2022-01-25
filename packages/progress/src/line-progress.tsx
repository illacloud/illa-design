/** @jsxImportSource @emotion/react */
import { forwardRef, ReactNode } from "react"
import { ProgressProps } from "./interface"
import {
  applyLineContainer,
  applyLineProgress,
  applyLineProgressBg,
  applyProgressContainer,
  applyProgressText,
  applyStatusIcon,
} from "./line-progress-style"
import { ErrorIcon, SuccessIcon } from "@illa-design/icon"

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
    strokeWidth = "8px",
    width = "320px",
    ...otherProps
  } = props

  let statusComponent: ReactNode
  switch (status) {
    case "success":
      statusComponent = <SuccessIcon />
      break
    case "error":
      statusComponent = <ErrorIcon />
      break
  }

  return <div ref={ref} {...otherProps} css={applyProgressContainer}>
    <div css={applyLineContainer(width, strokeWidth)}>
      <div css={applyLineProgressBg(strokeWidth, trailColor)} />
      <div css={applyLineProgress(percent, strokeWidth, color)} />
    </div>
    {showText && <span css={applyProgressText}>
      {formatText(percent)}
    </span>}
    {status != "normal" && <span css={applyStatusIcon}>
      {statusComponent}
    </span>}
  </div>
})

LineProgress.displayName = "LineProgress"