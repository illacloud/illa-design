/** @jsxImportSource @emotion/react */
import React, { forwardRef } from "react"
import { TableProps } from "./interface"

export const Table = forwardRef<HTMLDivElement, TableProps>((props, ref) => {

  return (
    <div ref={ref}></div>
  )
})

Table.displayName = "Table"
