/** @jsxImportSource @emotion/react */
import * as React from "react"
import { Children, createContext, forwardRef, ReactNode } from "react"
import { ButtonGroupContextProps, ButtonGroupProps } from "./interface"
import { applySpacing, avatarGroupContainer } from "./style"

export const ButtonGroupContext = createContext<ButtonGroupContextProps | undefined>(undefined)

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {
  const {
    colorScheme = "blue",
    size = "small",
    variant = "fill",
    shape = "square",
    spacing = "4px",
    attached = false,
    ...otherProps
  } = props
  const newChildren = Children.map(props.children, (child: ReactNode, index: number) => {
    const first = index == 0
    const last = index == Children.count(props.children) - 1
    return <ButtonGroupContext.Provider value={{ colorScheme, size, variant, shape, spacing, attached, first, last }}>
      <span css={applySpacing(spacing, index, attached)}>
        {child}
      </span>
    </ButtonGroupContext.Provider>
  })
  return <div css={avatarGroupContainer} ref={ref} {...otherProps}>
    {newChildren}
  </div>
})