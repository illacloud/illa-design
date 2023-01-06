import React, {
  Children,
  cloneElement,
  forwardRef,
  ReactElement,
  ReactNode,
} from "react"
import { StepsProps } from "./interface"
import { Step } from "./step"
import { deleteCssProps } from "@illa-design/theme"
import { applyStepsStyle } from "./style/steps"

export const Steps = forwardRef<HTMLDivElement, StepsProps>((props, ref) => {
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

  const filterStepComponent = (child: ReactNode) => {
    return (
      child &&
      (child as ReactElement).type &&
      ((child as ReactElement).type as { displayName?: string }).displayName ===
        "Step"
    )
  }

  const fillStepComponent = (
    child: ReactNode,
    index: number,
    arr: ReactNode[],
  ) => {
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

    return cloneElement(child as ReactElement, childProps)
  }

  return (
    <div
      ref={ref}
      css={[applyStepsStyle({ direction })]}
      {...deleteCssProps(restProps)}
    >
      {Children.toArray(children)
        .filter(filterStepComponent)
        .map(fillStepComponent)}
    </div>
  )
})

Steps.displayName = "Steps"
