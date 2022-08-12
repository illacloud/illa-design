import { ForwardedRef, forwardRef, ReactElement, useState } from "react"
import { TableContextProps, TableProps } from "./interface"
import {
  applyContainerStyle,
  applyFilterContainer,
  applyHeaderIconLeft,
  applyPreContainer,
  applyTableStyle,
} from "./style"
import { TableContext } from "./table-context"
import { Thead } from "./thead"
import { Tr } from "./tr"
import { Th } from "./th"
import { TBody } from "./tbody"
import { Td } from "./td"
import { TFoot } from "./tfoot"
import { TableData } from "./table-data"
import { applyBoxStyle } from "@illa-design/theme"
import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"
import {
  SorterDefaultIcon,
  SorterDownIcon,
  SorterUpIcon,
} from "@illa-design/icon"
import { TableFilter } from "./table-filter"
import { rankItem } from "@tanstack/match-sorter-utils"

export const Table = forwardRef<HTMLDivElement, TableProps<any>>(
  (props, ref) => {
    if (props.columns == undefined || props.data == undefined) {
      return renderDirectTable(props, ref)
    } else {
      return renderDataDrivenTable(props, ref)
    }
  },
)

function renderDirectTable<D extends TableData>(
  props: TableProps<D>,
  ref: ForwardedRef<HTMLDivElement>,
): ReactElement {
  const {
    size = "medium",
    tableLayout = "auto",
    columns,
    data,
    bordered,
    borderedCell,
    striped,
    children,
    disableSortBy,
    disableFilters,
    align = "left",
    showFooter = true,
    showHeader = true,
    ...otherProps
  } = props

  const contextProps = {
    align,
    borderedCell,
    striped,
    size,
    showHeader,
    showFooter,
  } as TableContextProps

  return (
    <div css={[applyContainerStyle(), applyBoxStyle(props)]} ref={ref}>
      <TableContext.Provider value={contextProps}>
        <table css={applyTableStyle(tableLayout, bordered)} {...otherProps}>
          {children}
        </table>
      </TableContext.Provider>
    </div>
  )
}

function renderDataDrivenTable<D extends TableData>(
  props: TableProps<D>,
  ref: ForwardedRef<HTMLDivElement>,
): ReactElement {
  const {
    size = "medium",
    tableLayout = "auto",
    columns = [],
    data = [],
    bordered,
    borderedCell,
    striped,
    children,
    disableSortBy,
    disableFilters,
    align = "left",
    showFooter,
    showHeader = true,
    ...otherProps
  } = props

  const contextProps = {
    align,
    borderedCell,
    striped,
    size,
    showHeader,
    showFooter,
  } as TableContextProps

  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: (row, columnId, value, addMeta) => {
        // Rank the item
        const itemRank = rankItem(row.getValue(columnId), value)
        // Store the itemRank info
        addMeta({
          itemRank,
        })
        // Return if the item should be filtered in/out
        return itemRank.passed
      },
    },
    state: {
      columnFilters,
      sorting,
    },
    enableSorting: !disableSortBy,
    enableFilters: !disableFilters,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div css={[applyContainerStyle(), applyBoxStyle(props)]} ref={ref}>
      <TableContext.Provider value={contextProps}>
        <table css={applyTableStyle(tableLayout, bordered)} {...otherProps}>
          {showHeader && (
            <Thead>
              {table.getHeaderGroups().map(headerGroup => (
                <Tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <Th key={header.id} colSpan={header.colSpan}>
                      <div
                        css={applyPreContainer(align)}
                        onClick={() => header.column.toggleSorting()}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                        {header.column.getCanSort() &&
                          (header.column.getIsSorted() ? (
                            header.column.getIsSorted() === "desc" ? (
                              <SorterDownIcon _css={applyHeaderIconLeft} />
                            ) : (
                              <SorterUpIcon _css={applyHeaderIconLeft} />
                            )
                          ) : (
                            <SorterDefaultIcon _css={applyHeaderIconLeft} />
                          ))}
                      </div>
                      {header.column.getCanFilter() && (
                        <div css={applyFilterContainer}>
                          {header.column.getFilterFn() != undefined && (
                            <TableFilter columnProps={header.column} />
                          )}
                        </div>
                      )}
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
          )}
          <TBody>
            {table.getRowModel().rows.map(row => (
              <Tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <Td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
          </TBody>
          {showFooter && (
            <TFoot>
              {table.getFooterGroups().map(footerGroup => (
                <tr key={footerGroup.id}>
                  {footerGroup.headers.map(header => (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </TFoot>
          )}
        </table>
      </TableContext.Provider>
    </div>
  )
}

Table.displayName = "Table"
