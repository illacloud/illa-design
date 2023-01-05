import { createContext, forwardRef, MouseEvent, ReactNode } from "react"
import { DropListProps } from "./interface"
import { applyListCss } from "./style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export const DropListContext = createContext<{
  onClickItem?: (key: string, clickedNode: ReactNode, event: MouseEvent) => void
}>({})

export const DropList = forwardRef<HTMLDivElement, DropListProps>(
  (props, ref) => {
    const { children, onClickItem, ...otherProps } = props

    return (
      <div
        ref={ref}
        css={[applyListCss(), applyBoxStyle(props)]}
        {...deleteCssProps(otherProps)}
      >
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
