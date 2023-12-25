import { Children, forwardRef } from "react"
import { HeadingProps } from "./interface"
import { Base } from "./base"
import { Trigger } from "@illa-design/trigger"
import { mergedToString } from "@illa-design/system"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

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
        copyable={copyable}
      >
        {props.children}
      </Base>
    )

    const TagWrapper = level

    let headingNode = (
      <TagWrapper
        css={[applyBoxStyle(props)]}
        ref={ref}
        {...deleteCssProps(otherProps)}
      >
        {base}
      </TagWrapper>
    )

    if (showTooltip) {
      return (
        <Trigger content={mergedToString(Children.toArray(props.children))}>
          {headingNode}
        </Trigger>
      )
    } else {
      return headingNode
    }
  },
)

Heading.displayName = "Heading"
