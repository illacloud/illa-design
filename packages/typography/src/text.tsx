/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef } from "react"
import { TextProps } from "./interface"
import { Base } from "./base"
import { applyTextContainer } from "./text-style"
import mergedToString from "./measure-element"
import { Tooltip } from "@illa-design/tooltip"

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
    <span css={applyTextContainer(fontSize)} ref={ref} {...otherProps}>
      {base}
    </span>
  )

  if (showTooltip) {
    return (
      <Tooltip content={mergedToString(React.Children.toArray(props.children))}>
        {text}
      </Tooltip>
    )
  } else {
    return text
  }
})

Text.displayName = "Text"
