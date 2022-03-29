import { forwardRef } from "react"
import { {{properCase name}}Props } from "./interface"

export const {{properCase name}} = forwardRef<HTMLDivElement, {{properCase name}}Props>((props, ref) => {

  return (
    <div ref={ref}></div>
  )
})

{{properCase name}}.displayName = "{{properCase name}}"
