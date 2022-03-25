import { Children, forwardRef, ReactNode } from "react"
import { ButtonGroupContext } from "./button-group-context"
import { ButtonGroupProps } from "./interface"
import { applySpacing, avatarGroupContainer } from "./style"

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  (props, ref) => {
    const {
      colorScheme = "blue",
      size = "small",
      variant = "fill",
      shape = "square",
      spacing = "4px",
      attached,
      ...otherProps
    } = props
    const newChildren = Children.map(
      props.children,
      (child: ReactNode, index: number) => {
        const first = index == 0
        const last = index == Children.count(props.children) - 1
        return (
          <ButtonGroupContext.Provider
            value={{
              colorScheme,
              size,
              variant,
              shape,
              spacing,
              attached,
              first,
              last,
            }}
          >
            <span css={applySpacing(spacing, index, attached ?? false)}>
              {child}
            </span>
          </ButtonGroupContext.Provider>
        )
      },
    )
    return (
      <div css={avatarGroupContainer} ref={ref} {...otherProps}>
        {newChildren}
      </div>
    )
  },
)

ButtonGroup.displayName = "ButtonGroup"
