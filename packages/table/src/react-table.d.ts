import type { RowData } from "@tanstack/react-table"
import "@tanstack/react-table"
import { SerializedStyles } from "@emotion/react"

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    style?: SerializedStyles
  }
}
