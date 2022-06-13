import { forwardRef } from "react"
import { DividerProps } from "./interface"
import { applyDividerStyle, applyDividerWithTextContainerStyle } from "./style"

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
        css={applyDividerWithTextContainerStyle(colorScheme, textSize)}
        ref={ref}
        {...otherProps}
      >
        <div
          css={applyDividerStyle(
            variant,
            textAlign === "end" || textAlign === "center",
          )}
        />
        <span>{text}</span>
        <div
          css={applyDividerStyle(
            variant,
            textAlign === "start" || textAlign === "center",
          )}
        />
      </div>
    )
  },
)
