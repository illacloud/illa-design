import {
  forwardRef,
  createContext,
  MouseEvent,
  isValidElement,
  Children,
  cloneElement,
} from "react"
import { DropListComponent, DropListProps } from "./interface"
import { DropListItem } from "./item"
import { applyListCss } from "./style"

export const DropListContext = createContext<{
  onClickItem?: (key: string, event: MouseEvent) => void
}>({})

export const DropList = forwardRef<HTMLDivElement, DropListProps>(
  (props, ref) => {
    const { children, onClickItem, width, isDropList, ...otherProps } = props

    return (
      <div ref={ref} css={applyListCss(width)} {...otherProps}>
        <DropListContext.Provider
          value={{
            onClickItem,
          }}
        >
          {Children.map(children, (item, index) => {
            if (isValidElement(item)) {
              return cloneElement(item, {
                ...item.props,
                _key: item.key || `$item-${index}`,
              })
            }
            return item
          })}
        </DropListContext.Provider>
      </div>
    )
  },
) as DropListComponent

DropList.displayName = "DropList"
DropList.Item = DropListItem
DropList.defaultProps = {
  isDropList: true,
}
