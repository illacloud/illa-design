import { FC } from "react"
import { Trigger, TriggerProps } from "@illa-design/trigger"

export const Tooltip: FC<TriggerProps> = (props) => {
  const { colorScheme = "gray", ...otherProps } = props
  return (
    <Trigger colorScheme={colorScheme} {...otherProps}>
      {props.children}
    </Trigger>
  )
}

Tooltip.displayName = "Tooltip"
