import { Children, forwardRef } from "react"
import { ParagraphProps } from "./interface"
import { Base } from "./base"
import { applyParagraphContainer } from "./paragraph-style"
import { Tooltip } from "@illa-design/tooltip"
import { mergedToString } from "@illa-design/system"
import { applyBoxStyle } from "@illa-design/theme"

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  (props, ref) => {
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
      indent,
      ...otherProps
    } = props

    const showTooltip =
      !disabled &&
      (ellipsis == true || (typeof ellipsis == "object" && ellipsis.tooltip))

    const p = (
      <div
        css={[applyParagraphContainer(indent ?? false), applyBoxStyle(props)]}
        ref={ref}
        {...otherProps}
      >
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
      </div>
    )

    if (showTooltip) {
      return (
        <Tooltip content={mergedToString(Children.toArray(props.children))}>
          {p}
        </Tooltip>
      )
    } else {
      return p
    }
  },
)

Paragraph.displayName = "Paragraph"
