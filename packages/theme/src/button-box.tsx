import { forwardRef } from "react"
import { ButtonBoxProps } from "./interface"
import { applyBoxStyle } from "./style"

export const ButtonBox = forwardRef<HTMLButtonElement, ButtonBoxProps>(
  (props, ref) => {
    const { children, ...rest } = props
    return (
      <button {...rest} ref={ref} css={applyBoxStyle(props)}>
        {children}
      </button>
    )
  },
)

ButtonBox.displayName = "ButtonBox"
