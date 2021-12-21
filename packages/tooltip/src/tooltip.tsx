/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { Trigger, TriggerProps } from "@illa-design/trigger"

export const Tooltip = forwardRef<HTMLDivElement, TriggerProps>((props, ref) => {

  const {
    colorScheme = "blackAlpha",
    ...otherProps
  } = props

  return <Trigger ref={ref} colorScheme={colorScheme} {...otherProps}>{props.children}</Trigger>

})
