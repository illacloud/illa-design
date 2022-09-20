import {
  HTMLAttributes,
  ReactNode,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from "react"
import { TableData } from "./table-data"
import { BoxProps } from "@illa-design/theme"
import { Column, ColumnDef } from "@tanstack/react-table"
import { EmptyProps } from "@illa-design/empty"
import { ColumnSort } from "@tanstack/table-core"

export type TableSize = "small" | "medium" | "large"

export type TableLayout = "auto" | "fixed"

export type TableAlign =
  | "left"
  | "center"
  | "right"
  | "start"
  | "end"
  | "flex-start"
  | "flex-end"

export interface TableProps<D extends TableData, TValue>
  extends HTMLAttributes<HTMLDivElement>,
    TableContextProps,
    BoxProps {
  columns?: ColumnDef<D, TValue>[]
  data?: D[]
  pinedHeader?: boolean
  tableLayout?: TableLayout
  bordered?: boolean
  hoverable?: boolean
  defaultSort?: ColumnSort[]
  disableSortBy?: boolean
  loading?: boolean
  emptyProps?: EmptyProps
}

export interface TableContextProps {
  borderedCell?: boolean
  striped?: boolean
  showHeader?: boolean
  showFooter?: boolean
  size?: TableSize
  align?: TableAlign
  hoverable?: boolean
}

export interface TBodyProps
  extends HTMLAttributes<HTMLTableSectionElement>,
    BoxProps {}

export interface TrProps extends HTMLAttributes<HTMLTableRowElement>, BoxProps {
  hoverable?: boolean
}

export interface TdProps
  extends Omit<TdHTMLAttributes<HTMLTableDataCellElement>, "align">,
    TableContextProps,
    BoxProps {
  colIndex?: number
  rowIndex?: number
  lastCol?: boolean
  lastRow?: boolean
}

export interface TFootProps
  extends HTMLAttributes<HTMLTableSectionElement>,
    BoxProps {}

export interface THeadProps
  extends HTMLAttributes<HTMLTableSectionElement>,
    BoxProps {
  pinedHeader?: boolean
}

export interface ThProps
  extends Omit<ThHTMLAttributes<HTMLTableHeaderCellElement>, "align">,
    TableContextProps,
    BoxProps {
  colIndex?: number
  rowIndex?: number
  lastCol?: boolean
  lastRow?: boolean
}

export interface TableFilterProps<D extends TableData> extends BoxProps {
  renderFilterContent?: (columnProps: Column<D, unknown>) => ReactNode
  columnProps: Column<D, unknown>
}
