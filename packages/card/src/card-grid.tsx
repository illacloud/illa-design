import { forwardRef, Children, ReactElement, cloneElement } from "react"
import { CardGridProps } from "./interface"
import { applyCardGrid } from "./style"

export const CardGrid = forwardRef<HTMLDivElement, CardGridProps>(
  (props, ref) => {
    const { hoverable = false, children, ...restProps } = props
    const renderChildren = Children.map(
      children as ReactElement,
      (element: JSX.Element) => {
        if (element && element.type && element.type.displayName === "Card") {
          return cloneElement(element, { isGridMode: true })
        }
        return element
      },
    )
    return (
      <div ref={ref} css={applyCardGrid(hoverable)} {...restProps}>
        {renderChildren}
      </div>
    )
  },
)

CardGrid.displayName = "CardGrid"
