/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, useContext, ReactNode, UIEventHandler } from "react"
import { List } from "@illa-design/list"
import { css } from "@emotion/react"
import { Empty } from "@illa-design/empty"
import { OptionListProps } from "./interface"

export const OptionList = forwardRef<HTMLDivElement, OptionListProps<any>>(
  (props, ref) => {
    const {
      childrenList,
      render,
      // event
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
              border: unset !important;
            `}
            size="small"
            data={childrenList as any}
            render={render}
            renderRaw
            onMouseMove={onMouseMove}
            onScroll={onScroll}
            renderKey={(data, index) => {
              return index.toString()
            }}
            hoverable
          />
        ) : (
          <Empty
            css={css`
              padding: 16px 0;
            `}
          />
        )}
      </>
    )
  },
)

OptionList.displayName = "OptionList"
