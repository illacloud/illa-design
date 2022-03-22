import React, { forwardRef } from "react"
import { TableProps } from "./interface"

export const Table = forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  return <table ref={ref} {...props} />
})

Table.displayName = "Table"
