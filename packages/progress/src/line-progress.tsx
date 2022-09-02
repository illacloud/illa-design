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
import { SuccessIcon, WarningCircleIcon } from "@illa-design/icon"
import { Space } from "@illa-design/space"
import {
  applyBoxStyle,
  deleteCssProps,
  globalColor,
  illaPrefix,
} from "@illa-design/theme"

export const LineProgress = forwardRef<HTMLDivElement, ProgressProps>(
  (props, ref) => {
    const {
      type,
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
      w = "320px",
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
        statusComponent = (
          <SuccessIcon color={globalColor(`--${illaPrefix}-green-03`)} />
        )
        break
      case "error":
        statusComponent = (
          <WarningCircleIcon color={globalColor(`--${illaPrefix}-red-03`)} />
        )
        break
    }

    if (steps == 1) {
      return (
        <div
          ref={ref}
          css={[applyProgressContainer, applyBoxStyle(props)]}
          {...deleteCssProps(otherProps)}
        >
          <div css={applyLineContainer(w, strokeWidth)}>
            <div css={applyLineProgressBg(strokeWidth, trailColor)} />
            <div css={applyLineProgress(percent, strokeWidth, finalColor)} />
          </div>
          {showText && (
            <span css={applyProgressText}>{formatText(percent)}</span>
          )}
          {status != "normal" && (
            <span css={applyStatusIcon}>{statusComponent}</span>
          )}
        </div>
      )
    } else {
      let lineProgressContainer = []
      let lineProgressBgContainer = []

      for (let i = 0; i < steps; i++) {
        lineProgressContainer.push(
          <div
            key={i}
            css={applyLineProgressStep(
              percent,
              strokeWidth,
              `calc((${w} - (${steps} - 1) * 4px) / ${steps})`,
              finalColor,
              steps,
              i,
            )}
          />,
        )
        lineProgressBgContainer.push(
          <div
            key={i}
            css={applyLineProgressBgStep(
              strokeWidth,
              `calc((${w} - (${steps} - 1) * 4px) / ${steps})`,
              trailColor,
            )}
          />,
        )
      }

      return (
        <div
          ref={ref}
          css={[applyProgressContainer, applyBoxStyle(props)]}
          {...deleteCssProps(otherProps)}
        >
          <div css={applyLineContainer(w, strokeWidth)}>
            <Space css={applySpace()} size="4px">
              {lineProgressBgContainer}
            </Space>
            <Space css={applySpace()} size="4px">
              {lineProgressContainer}
            </Space>
          </div>
          {showText && (
            <span css={applyProgressText}>{formatText(percent)}</span>
          )}
          {status != "normal" && (
            <span css={applyStatusIcon}>{statusComponent}</span>
          )}
        </div>
      )
    }
  },
)

LineProgress.displayName = "LineProgress"
