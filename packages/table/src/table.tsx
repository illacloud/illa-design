import { TableProps } from "./interface"
import { TableData } from "./table-data"
import { RenderDirectTable } from "./render-direct-table"
import { RenderDataDrivenTable } from "./render-data-driven-table"

export function Table<D extends TableData, TValue>(
  props: TableProps<D, TValue>,
) {
  const {
    columns,
    data,
    onSortingChange,
    onColumnSizingChange,
    onColumnFiltersChange,
    onRowSelectionChange,
    onPaginationChange,
    ...otherProps
  } = props
  if (columns == undefined || data == undefined) {
    return RenderDirectTable(otherProps)
  } else {
    return RenderDataDrivenTable(props)
  }
}

Table.displayName = "Table"
