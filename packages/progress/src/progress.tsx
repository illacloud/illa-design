import { forwardRef, ReactNode } from "react"
import { ProgressProps } from "./interface"
import { LineProgress } from "./line-progress"
import { CircleProgress } from "./circle-progress"
import { MiniCircleProgress } from "./mini-circle-progress"
import { MiniRingProgress } from "./mini-ring-progress"
import { deleteCssProps } from "@illa-design/theme"

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (props, ref) => {
    const { type = "line", ...otherProps } = props

    let progress: ReactNode

    switch (type) {
      case "line":
        progress = <LineProgress ref={ref} {...deleteCssProps(otherProps)} />
        break
      case "circle":
        progress = <CircleProgress ref={ref} {...deleteCssProps(otherProps)} />
        break
      case "miniCircle":
        progress = (
          <MiniCircleProgress ref={ref} {...deleteCssProps(otherProps)} />
        )
        break
      case "miniRing":
        progress = (
          <MiniRingProgress ref={ref} {...deleteCssProps(otherProps)} />
        )
        break
    }

    return <>{progress}</>
  },
)

Progress.displayName = "Progress"
