import { Children, cloneElement, forwardRef, ReactElement } from "react"
import { CardGridProps } from "./interface"
import { applyCardGrid } from "./style"
import { applyBoxStyle } from "@illa-design/theme"
import { deleteCssProps } from "@illa-design/theme"

export const CardGrid = forwardRef<HTMLDivElement, CardGridProps>(
  (props, ref) => {
    const { hoverable, children, ...restProps } = props
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
      <div
        ref={ref}
        css={[applyCardGrid(hoverable ?? false), applyBoxStyle(props)]}
        {...deleteCssProps(restProps)}
      >
        {renderChildren}
      </div>
    )
  },
)

CardGrid.displayName = "CardGrid"
