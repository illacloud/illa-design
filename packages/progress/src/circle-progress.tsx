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
import {
  applyBoxStyle,
  deleteCssProps,
  globalColor,
  illaPrefix,
} from "@illa-design/theme"

export const CircleProgress = forwardRef<HTMLDivElement, ProgressProps>(
  (props, ref) => {
    const {
      type,
      steps,
      status = "normal",
      color = "blue",
      w = "80px",
      strokeWidth = "4px",
      trailColor = "gray",
      showText = true,
      formatText = (percent: number) => {
        return `${percent}%`
      },
      percent = 0,
      ...otherProps
    } = props

    const radius = `calc((${w} - ${strokeWidth}) / 2)`
    const center = `calc(${w} / 2)`

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
          <WarningIcon color={globalColor(`--${illaPrefix}-red-03`)} />
        )
        break
    }

    return (
      <div
        css={[applyContainer(w), applyBoxStyle(props)]}
        ref={ref}
        {...deleteCssProps(otherProps)}
      >
        <svg css={applySvgContainer(w)}>
          <circle
            css={applyProgressContainerBg(trailColor, w, strokeWidth)}
            fill="none"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <circle
            css={applyProgressContainer(finalColor, w, strokeWidth, percent)}
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
