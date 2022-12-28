import { createContext, forwardRef, MouseEvent, ReactNode } from "react"
import { DropListProps } from "./interface"
import { applyListCss } from "./style"

export const DropListContext = createContext<{
  onClickItem?: (key: string, clickedNode: ReactNode, event: MouseEvent) => void
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
          {children}
        </DropListContext.Provider>
      </div>
    )
  },
)

DropList.displayName = "DropList"
