import { Children, forwardRef } from "react"
import { HeadingProps } from "./interface"
import { Base } from "./base"
import { Tooltip } from "@illa-design/tooltip"
import mergedToString from "./measure-element"

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (props, ref) => {
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

    const showTooltip =
      !disabled &&
      (ellipsis == true || (typeof ellipsis == "object" && ellipsis.tooltip))

    const base = (
      <Base
        colorScheme={colorScheme}
        ellipsis={ellipsis}
        bold={bold}
        disabled={disabled}
        mark={mark}
        underline={underline}
        deleted={deleted}
        code={code}
        copyable={copyable}
      >
        {props.children}
      </Base>
    )

    const TagWrapper = level

    let headingNode = (
      <TagWrapper ref={ref} {...otherProps}>
        {base}
      </TagWrapper>
    )

    if (showTooltip) {
      return (
        <Tooltip content={mergedToString(Children.toArray(props.children))}>
          {headingNode}
        </Tooltip>
      )
    } else {
      return headingNode
    }
  },
)

Heading.displayName = "Heading"
