/** @jsxImportSource @emotion/react */
import React, { forwardRef, ReactElement, ReactNode } from "react"
import { StepsProps } from "./interface"
import { applyStepsStyle } from "./style"
import { Step } from "./step"

export const Steps = forwardRef<HTMLDivElement, StepsProps>((props, ref) => {
  const {
    style,
    className,
    type = "line",
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

  function fillStepComponent(child: ReactNode, index: number, arr: ReactNode[]) {
    if (!child) {
      return null
    }

    index += 1

    const childProps = {
      type,
      index,
      current,
      status: current === index ? status : undefined,
      customDot,
      labelPlacement,
      direction,
      onClick: onChange,
      lineless,
      lastStep: index === arr.length,
      nextStepError: status === "error" && current > index,
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

Steps.displayName = "Steps"
