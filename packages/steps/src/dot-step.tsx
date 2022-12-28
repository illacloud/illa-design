import React, { forwardRef, ReactNode, useContext, useMemo } from "react"
import { StepProps } from "./interface"
import {
  applyStepDotStyle,
  applyStepLineStyle,
  stepIconStyle,
  stepsContainerStyle,
} from "./style"
import { StepsContext } from "./steps-context"

export const DotStep = forwardRef<HTMLDivElement, StepProps>((props, ref) => {
  const { icon, status = "wait", index, lineStatus = "wait", showLine } = props

  const stepsContext = useContext(StepsContext)

  const statusElement = useMemo(() => {
    let renderElement: ReactNode = null

    switch (stepsContext?.type) {
      case "dot":
        renderElement = <div css={applyStepDotStyle(status)} />
        break
      case "line":
        switch (status) {
          case "wait":
            renderElement = <div css={applyStepLineStyle(status)}>{index}</div>
            break
          case "process":
            renderElement = <div css={applyStepLineStyle(status)}>{index}</div>
            break
          case "finish":
            renderElement = <div css={applyStepLineStyle(status)}></div>
            break
          case "error":
            renderElement = <div css={applyStepLineStyle(status)} />
            break
        }
        break
    }

    return icon ? <span css={stepIconStyle}>{icon}</span> : renderElement
  }, [icon, index, status, stepsContext?.type])

  return (
    <div ref={ref} css={stepsContainerStyle}>
      <div>{icon}</div>
    </div>
  )
})

DotStep.displayName = "DotStep"
