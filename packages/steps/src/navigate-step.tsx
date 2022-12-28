import React, { forwardRef } from "react"
import { StepProps } from "./interface"
import { stepsContainerStyle } from "./style"

export const NavigateStep = forwardRef<HTMLDivElement, StepProps>(
  (props, ref) => {
    return <div ref={ref} css={stepsContainerStyle}></div>
  },
)

NavigateStep.displayName = "NavigateStep"
