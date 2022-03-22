import {
  HTMLAttributes,
  TableHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from "react"
import { Column } from "react-table"

export interface IllaTableProps<D extends object>
  extends TableHTMLAttributes<HTMLTableElement> {
  columns: ReadonlyArray<Column<D>>
  data: readonly D[]
}

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {}
export interface TBodyProps extends HTMLAttributes<HTMLTableSectionElement> {}
export interface TdProps extends TdHTMLAttributes<HTMLTableDataCellElement> {}
export interface TFootProps extends HTMLAttributes<HTMLTableSectionElement> {}
export interface ThProps extends ThHTMLAttributes<HTMLTableHeaderCellElement> {}
export interface THeadProps extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TrProps extends HTMLAttributes<HTMLTableRowElement> {}
