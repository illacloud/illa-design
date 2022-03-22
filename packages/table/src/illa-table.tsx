/** @jsxImportSource @emotion/react */
import React, { forwardRef } from "react"
import { IllaTableProps } from "./interface"

export const IllaTable = forwardRef<HTMLDivElement, IllaTableProps<any>>(
  (props, ref) => {
    return <div ref={ref}></div>
  },
)

IllaTable.displayName = "IllaTable"
