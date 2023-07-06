import React, { forwardRef, useCallback } from "react"
import { StepsProps, StepsStatus } from "./interface"
import { applyStepsContainerStyle } from "./style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"
import { useMergeValue } from "@illa-design/system"
import { NavigateStep } from "./navigate-step"
import { DotStep } from "./dot-step"

export const Steps = forwardRef<HTMLDivElement, StepsProps>((props, ref) => {
  const {
    children,
    direction = "horizontal",
    lineless,
    current,
    type = "dot",
    items,
    onChange,
    ...otherProps
  } = props

  const [finalCurrent, setFinalCurrent] = useMergeValue(-1, {
    value: current,
    defaultValue: 0,
  })

  const handleClick = useCallback((index: number, disabled?: boolean) => {
    if (disabled) {
      return
    }
    if (current === undefined) {
      setFinalCurrent(index)
    }
    onChange?.(index)
  }, [current, onChange, setFinalCurrent])

  return (
    <div
      css={[applyStepsContainerStyle(direction), applyBoxStyle(props)]}
      ref={ref}
      {...deleteCssProps(otherProps)}
    >
      {items &&
        items.map((item, index) => {
          let nodeStatus: StepsStatus = "wait"
          if (item.status === undefined) {
            nodeStatus =
              finalCurrent > index
                ? "finish"
                : finalCurrent === index
                ? "process"
                : "wait"
          } else {
            nodeStatus = item.status
          }
          let lineStatus: StepsStatus = finalCurrent > index ? "finish" : "wait"
          if (index + 1 < items.length) {
            lineStatus =
              items[index + 1].status === "error" ? "error" : lineStatus
          }
          switch (type) {
            case "navigation":
              return (
                <NavigateStep
                  key={index}
                  status={nodeStatus}
                  lineless={lineless || index !== finalCurrent}
                  last={index === items.length - 1}
                  canClick={true}
                  lineStatus={nodeStatus}
                  icon={item.icon}
                  disabled={item.disabled}
                  type={type}
                  direction={direction}
                  description={item.description}
                  title={item.title}
                  index={index}
                  onClick={() => {
                    handleClick(index, item.disabled)
                  }}
                />
              )
            case "dot":
            case "line":
            default:
              return (
                <DotStep
                  key={index}
                  status={nodeStatus}
                  lineless={lineless}
                  last={index === items.length - 1}
                  canClick={false}
                  lineStatus={lineStatus}
                  icon={item.icon}
                  disabled={item.disabled}
                  type={type}
                  direction={direction}
                  description={item.description}
                  title={item.title}
                  index={index}
                  onClick={() => {
                    handleClick(index, item.disabled)
                  }}
                />
              )
          }
        })}
    </div>
  )
})

Steps.displayName = "Steps"
