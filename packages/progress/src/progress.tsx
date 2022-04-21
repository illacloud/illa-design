import { forwardRef, ReactNode } from "react"
import { ProgressProps } from "./interface"
import { LineProgress } from "./line-progress"
import { CircleProgress } from "./circle-progress"
import { MiniCircleProgress } from "./mini-circle-progress"
import { MiniRingProgress } from "./mini-ring-progress"

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (props, ref) => {
    const { type = "line", ...otherProps } = props

    let progress: ReactNode

    switch (type) {
      case "line":
        progress = <LineProgress ref={ref} {...otherProps} />
        break
      case "circle":
        progress = <CircleProgress ref={ref} {...otherProps} />
        break
      case "miniCircle":
        progress = <MiniCircleProgress ref={ref} {...otherProps} />
        break
      case "miniRing":
        progress = <MiniRingProgress ref={ref} {...otherProps} />
        break
    }

    return <>{progress}</>
  },
)

Progress.displayName = "Progress"
