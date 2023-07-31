import { forwardRef, ReactNode } from "react"
import { ProgressProps } from "./interface"
import { SuccessIcon, WarningCircleIcon } from "@illa-design/icon"
import { Trigger } from "@illa-design/trigger"
import { applyContainer } from "./common-style"
import {
  applyCircleProgressContainer,
  applyCircleStatus,
  applyCircleSvgContainer,
} from "./mini-circle-progress-style"
import { applyBoxStyle, deleteCssProps, getColor } from "@illa-design/theme"

export const MiniCircleProgress = forwardRef<HTMLDivElement, ProgressProps>(
  (props, ref) => {
    const {
      type,
      status = "normal",
      color = "blue",
      w = "16px",
      strokeWidth = "4px",
      trailColor = "gray",
      showText = true,
      formatText = (percent: number) => {
        return `${percent}%`
      },
      percent = 0,
      steps,
      ...otherProps
    } = props

    const radius = `calc(${w} / 2)`
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
        statusComponent = <SuccessIcon color={getColor("green", "03")} />
        break
      case "error":
        statusComponent = <WarningCircleIcon color={getColor("red", "03")} />
        break
    }

    return (
      <Trigger disabled={!showText} content={formatText(percent)}>
        <div
          css={[applyContainer(w), applyBoxStyle(props)]}
          ref={ref}
          {...deleteCssProps(otherProps)}
        >
          {(status == "normal" || status == "error") && (
            <svg css={applyCircleSvgContainer(w, trailColor)}>
              <circle
                css={applyCircleProgressContainer(finalColor, w, percent)}
                fill="none"
                cx={center}
                cy={center}
                r={radius}
                strokeWidth={w}
              />
            </svg>
          )}
          {status == "success" && (
            <span css={applyCircleStatus}>{statusComponent}</span>
          )}
        </div>
      </Trigger>
    )
  },
)

MiniCircleProgress.displayName = "MiniCircleProgress"
