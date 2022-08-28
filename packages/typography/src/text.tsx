import { Children, forwardRef } from "react"
import { TextProps } from "./interface"
import { Base } from "./base"
import { Trigger } from "@illa-design/trigger"
import { mergedToString } from "@illa-design/system"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export const Text = forwardRef<HTMLSpanElement, TextProps>((props, ref) => {
  // get props
  const {
    colorScheme = "blackAlpha",
    ellipsis,
    bold,
    disabled,
    mark,
    underline,
    deleted,
    code,
    copyable,
    fs = "14px",
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
  const text = (
    <span
      css={[applyBoxStyle(props)]}
      ref={ref}
      {...deleteCssProps(otherProps)}
    >
      {base}
    </span>
  )

  if (showTooltip) {
    return (
      <Trigger content={mergedToString(Children.toArray(props.children))}>
        {text}
      </Trigger>
    )
  } else {
    return text
  }
})

Text.displayName = "Text"
