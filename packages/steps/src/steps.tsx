import React, { forwardRef, ReactElement, ReactNode } from "react"
import { StepsProps } from "./interface"
import { applyStepsStyle } from "./style"
import { Step } from "./step"
import { deleteCssProps } from "@illa-design/theme"

const ForwardRefSteps = forwardRef<HTMLDivElement, StepsProps>((props, ref) => {
  const {
    variant = "line",
    direction = "horizontal",
    labelPlacement = "horizontal",
    current = 1,
    status = "process",
    lineless,
    customDot,
    onChange,
    children,
    ...restProps
  } = props

  function filterStepComponent(child: ReactNode) {
    return (
      child &&
      (child as ReactElement).type &&
      ((child as ReactElement).type as { displayName?: string }).displayName ===
        "Step"
    )
  }

  function fillStepComponent(
    child: ReactNode,
    index: number,
    arr: ReactNode[],
  ) {
    if (!child) {
      return null
    }

    index += 1

    const childProps = {
      index,
      current,
      variant,
      status: current === index ? status : undefined,
      customDot,
      direction,
      labelPlacement,
      lineless,
      lastStep: index === arr.length,
      nextStepError: status === "error" && current === index + 1,
      onClick: onChange,
      ...(child as ReactElement).props,
    }

    return React.cloneElement(child as ReactElement, childProps)
  }

  return (
    <div
      ref={ref}
      css={[applyStepsStyle({ direction })]}
      {...deleteCssProps(restProps)}
    >
      {React.Children.toArray(children)
        .filter(filterStepComponent)
        .map(fillStepComponent)}
    </div>
  )
})

export const Steps = ForwardRefSteps as typeof ForwardRefSteps & {
  Step: typeof Step
}

Steps.displayName = "Steps"
Steps.Step = Step
