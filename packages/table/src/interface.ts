import { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react"
import { TableData } from "./table-data"
import { BoxProps } from "@illa-design/theme"
import {
  ColumnDef,
  ColumnFiltersState,
  ColumnSort,
  FilterFnOption,
  OnChangeFn,
  PaginationState,
  RowSelectionState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table"
import { EmptyProps } from "@illa-design/empty"
import { PaginationProps } from "@illa-design/pagination"

export type TableSize = "small" | "medium" | "large"

export type TableLayout = "auto" | "fixed"
export type TableOverFlow = "pagination" | "scroll"

export type TableAlign =
  | "left"
  | "center"
  | "right"
  | "start"
  | "end"
  | "flex-start"
  | "flex-end"

export type TableColorScheme =
  | string
  | "white"
  | "blackAlpha"
  | "gray"
  | "grayBlue"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "cyan"
  | "purple"
  | "techPink"
  | "techPurple"

export interface TableProps<D extends TableData, TValue>
  extends HTMLAttributes<HTMLDivElement>,
    TableContextProps,
    BoxProps {
  colorScheme?: TableColorScheme
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
  overFlow?: TableOverFlow
  pagination?: PaginationProps
  multiRowSelection?: boolean
  enableRowSelection?: boolean
  clickOutsideToResetRowSelect?: boolean
  checkAll?: boolean
  download?: boolean
  filter?: boolean
  rowSelection?: RowSelectionState
  columnVisibility?: VisibilityState
  onSortingChange?: OnChangeFn<SortingState>
  onPaginationChange?: OnChangeFn<PaginationState>
  onColumnFiltersChange?: OnChangeFn<ColumnFiltersState>
  onRowSelectionChange?: (rowSelection?: RowSelectionState) => void
}

export interface RowSelectionProps<D = any> {
  checkAll?: boolean
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
  selected?: boolean
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

export interface FiltersEditorProps {
  colorScheme?: TableColorScheme
  filterOperator: FilterOperator
  columnFilters: FilterOptionsState
  columnsOption: { value: string; label: string }[]
  onAdd: () => void
  onDelete: (index: number, columnFilters: FilterOptions) => void
  onChange: (index: number, columnFilters: FilterOptions) => void
  onChangeOperator: (filterOperator: FilterOperator) => void
}

export type CustomFilterFn =
  | "equalTo"
  | "notEqualTo"
  | "contains"
  | "doesNotContain"
  | "lessThan"
  | "notLessThan"
  | "moreThan"
  | "notMoreThan"
  | "empty"
  | "notEmpty"
  | "before"
  | "after"

export type FilterFn = FilterFnOption<any> & CustomFilterFn

export type FilterOptions = {
  id: string
  value: unknown
  filterFn?: FilterFn
}

export type FilterOptionsState = FilterOptions[]

export type FilterOperator = "and" | "or"

export interface TableFilterProps {
  onChange: (filters: FilterOptions[], operator: FilterOperator) => void
  colorScheme?: TableColorScheme
  filterOperator: FilterOperator
  filterOption: FilterOptionsState
  columnsOption: { value: string; label: string }[]
}
