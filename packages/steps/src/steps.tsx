/** @jsxImportSource @emotion/react */
import React, { forwardRef, ReactElement, ReactNode } from "react"
import { StepsProps } from "./interface"
import { applyStepsStyle } from "./style"
import { Step } from "./step"

const ForwardRefSteps = forwardRef<HTMLDivElement, StepsProps>((props, ref) => {
  const {
    style,
    className,
    variant = "line",
    size = "small",
    direction = "horizontal",
    labelPlacement = "horizontal",
    current = 1,
    status = "process",
    lineless = false,
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
      size,
      status: current === index ? status : undefined,
      customDot,
      direction,
      labelPlacement,
      lineless,
      lastStep: index === arr.length,
      nextStepError: status === "error" && current > index,
      onClick: onChange,
      ...(child as ReactElement).props,
    }

    return React.cloneElement(child as ReactElement, childProps)
  }

  return (
    <div
      ref={ref}
      css={[applyStepsStyle({ direction })]}
      style={style}
      className={className}
      {...restProps}
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
