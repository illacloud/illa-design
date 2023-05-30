import {
  ForwardedRef,
  HTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from "react"
import { TableData } from "./table-data"
import { BoxProps } from "@illa-design/theme"
import {
  ColumnDef,
  ColumnFiltersState,
  ColumnSizingState,
  ColumnSort,
  Cell,
  FilterFnOption,
  OnChangeFn,
  PaginationState,
  RowSelectionState,
  SortingState,
  VisibilityState,
  Table,
  Row,
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
  tableRef?: ForwardedRef<TableHandler<D>>
  colorScheme?: TableColorScheme
  columns?: ColumnDef<D, TValue>[]
  data?: D[]
  pinedHeader?: boolean
  tableLayout?: TableLayout
  bordered?: boolean
  hoverable?: boolean
  customCellPadding?: string
  defaultSort?: ColumnSort[]
  disableSortBy?: boolean
  enableColumnResizing?: boolean
  loading?: boolean
  emptyProps?: EmptyProps
  overFlow?: TableOverFlow
  pagination?: PaginationProps
  multiRowSelection?: boolean
  enableRowSelection?: boolean
  enableSingleCellSelection?: boolean
  clickOutsideToResetRowSelect?: boolean
  serverSidePagination?: boolean
  // useAble when serverSidePagination is true
  total?: number
  checkAll?: boolean
  download?: boolean
  downloadRawData?: boolean
  refresh?: boolean
  filter?: boolean
  columnSizing?: ColumnSizingState
  rowSelection?: RowSelectionState
  columnVisibility?: VisibilityState
  onRefresh?: (table: Table<D>) => void
  onRowClick?: (row: Row<D>, index: number) => void
  onSortingChange?: (sort: SortingState) => void
  onGlobalFiltersChange?: (
    filters: FilterOptions[],
    operator: FilterOperator,
  ) => void
  onColumnFiltersChange?: OnChangeFn<ColumnFiltersState>
  onPaginationChange?: (
    paginationState: PaginationState,
    table: Table<D>,
  ) => void
  onRowSelectionChange?: (rowSelection?: RowSelectionState) => void
  onCellSelectionChange?: (cell?: Cell<D, TValue>) => void
  onColumnSizingChange?: (columnSizing?: ColumnSizingState) => void
}

export interface TableHandler<D extends TableData> {
  table: Table<D>
  selectPage: (pageIndex: number) => void
  selectRow: (rowSelection: RowSelectionState) => void
  setGlobalFilters: (filters: FilterOptions[], operator: FilterOperator) => void
  clearSelection: () => void
}

export interface RowSelectionProps<D = any> {
  checkAll?: boolean
}

export interface TableContextProps {
  borderedCell?: boolean
  striped?: boolean
  showHeader?: boolean
  showFooter?: boolean
  customCellPadding?: string
  size?: TableSize
  align?: TableAlign
  hoverable?: boolean
  enableColumnResizing?: boolean
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
  selected?: boolean
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

export interface TableFilterProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  onChange: (filters: FilterOptions[], operator: FilterOperator) => void
  colorScheme?: TableColorScheme
  filterOperator: FilterOperator
  filterOption: FilterOptionsState
  columnsOption: { value: string; label: string }[]
}
