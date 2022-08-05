import { Children, forwardRef } from "react"
import { TextProps } from "./interface"
import { Base } from "./base"
import { applyTextContainer } from "./text-style"
import { Tooltip } from "@illa-design/tooltip"
import { mergedToString } from "@illa-design/system"
import { applyBoxStyle } from "@illa-design/theme"

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
    fontSize = "14px",
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
      css={[applyTextContainer(fontSize), applyBoxStyle(props)]}
      ref={ref}
      {...otherProps}
    >
      {base}
    </span>
  )

  if (showTooltip) {
    return (
      <Tooltip content={mergedToString(Children.toArray(props.children))}>
        {text}
      </Tooltip>
    )
  } else {
    return text
  }
})

Text.displayName = "Text"
