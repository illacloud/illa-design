/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, useContext, ReactNode, UIEventHandler } from "react"
import { List } from "@illa-design/list"
import { css } from "@emotion/react"
import { Empty } from "@illa-design/empty"

interface OptionListProps<T> {
  childrenList?: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >[]
  render?: (data: T, index: number) => ReactNode

  onMouseMove?: () => void
  onScroll?: UIEventHandler<HTMLElement>
}

export const OptionList = forwardRef<HTMLDivElement, OptionListProps<any>>(
  (props, ref) => {
    const {
      childrenList,
      render,
      //
      onMouseMove,
      onScroll,
    } = props

    return (
      <>
        {childrenList?.length ? (
          <List
            ref={ref}
            css={css`
              min-width: unset !important;
              width: 100%;
            `}
            size="small"
            data={childrenList as any}
            render={render}
            onMouseMove={onMouseMove}
            onScroll={onScroll}
            renderKey={(data, index) => {
              return index.toString()
            }}
            hoverable
          />
        ) : (
          <Empty />
        )}
      </>
    )
  },
)

OptionList.displayName = "OptionList"
