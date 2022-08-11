import { forwardRef } from "react"
import { DividerProps } from "./interface"
import {
  applyDividerStyle,
  applyDividerWithTextContainerStyle,
  textCss,
} from "./style"
import { applyBoxStyle } from "@illa-design/theme"

export const DividerWithText = forwardRef<HTMLDivElement, DividerProps>(
  (props, ref) => {
    const {
      variant = "solid",
      text,
      textAlign = "center",
      textSize = "14px",
      colorScheme,
      ...otherProps
    } = props

    return (
      <div
        css={[
          applyDividerWithTextContainerStyle(colorScheme, textSize),
          applyBoxStyle(props),
        ]}
        ref={ref}
        {...otherProps}
      >
        <div css={applyDividerStyle(variant, textAlign !== "start")} />
        <span css={textCss}>{text}</span>
        <div css={applyDividerStyle(variant, textAlign !== "end")} />
      </div>
    )
  },
)

DividerWithText.displayName = "DividerWithText"
