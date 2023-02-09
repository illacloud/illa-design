import { Children, forwardRef, Fragment, ReactElement } from "react"
import { SpaceProps } from "./interface"
import { Divider, DividerDirection } from "@illa-design/divider"
import { applyContainer, applyDividerSize } from "./style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export const Space = forwardRef<HTMLDivElement, SpaceProps>((props, ref) => {
  const {
    size = "small",
    align = "start",
    direction = "horizontal",
    divider,
    wrap,
    ...otherProps
  } = props

  let childrenArray = Children.toArray(props.children)

  return (
    <div
      css={[
        applyContainer(direction, align, wrap ?? false, size),
        applyBoxStyle(props),
      ]}
      ref={ref}
      {...deleteCssProps(otherProps)}
    >
      {childrenArray.map((child, index) => {
        return (
          <Fragment key={(child as ReactElement)?.key || index}>
            {index != 0 && divider ? (
              <Divider
                css={applyDividerSize(size, direction, wrap ?? false, false)}
                direction={
                  direction == "horizontal"
                    ? ("vertical" as DividerDirection)
                    : ("horizontal" as DividerDirection)
                }
              />
            ) : null}
            <div
              css={applyDividerSize(
                size,
                direction,
                wrap ?? false,
                index == childrenArray.length - 1,
              )}
            >
              {child}
            </div>
          </Fragment>
        )
      })}
    </div>
  )
})

Space.displayName = "Space"
