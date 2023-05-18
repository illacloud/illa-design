import type { RowData, CellContext } from "@tanstack/react-table"
import "@tanstack/react-table"
import { SerializedStyles } from "@emotion/react"

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    custom?: boolean
    style?: SerializedStyles
    getBackgroundColor?: (
      props: CellContext<TData, TValue>,
    ) => string | undefined
    getRenderedValueAsString?: (props: CellContext<TData, TValue>) => string
  }
}
