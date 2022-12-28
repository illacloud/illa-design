import React, { forwardRef, useContext } from "react"
import { StepProps } from "./interface"
import { StepsContext } from "./steps-context"
import { NavigateStep } from "./navigate-step"
import { DotStep } from "./dot-step"

export const Step = forwardRef<HTMLDivElement, StepProps>((props, ref) => {
  const stepContext = useContext(StepsContext)
  switch (stepContext?.type ?? "dot") {
    case "navigation":
      return <NavigateStep {...props} ref={ref} />
    case "dot":
    case "line":
    default:
      return <DotStep {...props} ref={ref} />
  }
})

Step.displayName = "Step"
