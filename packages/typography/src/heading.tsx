/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef } from "react"
import { HeadingProps } from "./interface"
import { Base } from "./base"
import { Tooltip } from "@illa-design/tooltip"
import mergedToString from "./measure-element"

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {

  // get props
  const {
    colorScheme = "blackAlpha",
    level = "h2",
    ellipsis,
    bold,
    disabled,
    mark,
    underline,
    deleted,
    code,
    copyable,
    ...otherProps
  } = props

  const showTooltip = !disabled && (ellipsis == true || (typeof ellipsis == "object" && ellipsis.tooltip))

  const base = <Base colorScheme={colorScheme} ellipsis={ellipsis} bold={bold} disabled={disabled} mark={mark}
                     underline={underline} deleted={deleted} code={code} copyable={copyable}>
    {props.children}
  </Base>

  let headingNode

  switch (level) {
    case "h1":
      headingNode = <h1 ref={ref} {...otherProps}>
        {base}
      </h1>
      break
    case "h2":
      headingNode = <h2 ref={ref} {...otherProps}>
        {base}
      </h2>
      break
    case "h3":
      headingNode = <h3 ref={ref} {...otherProps}>
        {base}
      </h3>
      break
    case "h4":
      headingNode = <h4 ref={ref} {...otherProps}>
        {base}
      </h4>
      break
    case "h5":
      headingNode = <h5 ref={ref} {...otherProps}>
        {base}
      </h5>
      break
    case "h6":
      headingNode = <h6 ref={ref} {...otherProps}>
        {base}
      </h6>
      break
  }
  if (showTooltip) {
    return <Tooltip content={mergedToString(React.Children.toArray(props.children))}>
      {headingNode}
    </Tooltip>
  } else {
    return headingNode
  }
})
