import { ReactElement, useEffect, useState } from "react"
import { TableContextProps, TableProps } from "./interface"
import {
  applyBorderedStyle,
  applyContainerStyle,
  applyHeaderIconLeft,
  applyPreContainer,
  applyTableStyle,
  spinStyle,
} from "./style"
import { TableContext } from "./table-context"
import { Thead } from "./thead"
import { Tr } from "./tr"
import { Th } from "./th"
import { TBody } from "./tbody"
import { Td } from "./td"
import { TFoot } from "./tfoot"
import { TableData } from "./table-data"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"
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
import { rankItem } from "@tanstack/match-sorter-utils"
import { Spin } from "@illa-design/spin"
import { Empty } from "@illa-design/empty"

export function Table<D extends TableData, TValue>(
  props: TableProps<D, TValue>,
) {
  const { columns, data } = props
  if (columns == undefined || data == undefined) {
    return RenderDirectTable(props)
  } else {
    return RenderDataDrivenTable(props)
  }
}

function RenderDirectTable<D extends TableData, TValue>(
  props: TableProps<D, TValue>,
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
    pinedHeader,
    hoverable,
    align = "left",
    showFooter = true,
    showHeader = true,
    loading = false,
    ...otherProps
  } = props

  const contextProps = {
    align,
    borderedCell,
    striped,
    size,
    showHeader,
    hoverable,
    showFooter,
  } as TableContextProps

  return (
    <div
      css={[
        applyContainerStyle(),
        applyBoxStyle(props),
        applyBorderedStyle(bordered),
      ]}
    >
      <Spin loading={loading}>
        <TableContext.Provider value={contextProps}>
          <table
            css={applyTableStyle(tableLayout)}
            {...deleteCssProps(otherProps)}
          >
            {children}
          </table>
        </TableContext.Provider>
      </Spin>
    </div>
  )
}

function RenderDataDrivenTable<D extends TableData, TValue>(
  props: TableProps<D, TValue>,
): ReactElement {
  const {
    size = "medium",
    tableLayout = "auto",
    columns = [],
    data = [],
    loading = false,
    bordered,
    borderedCell,
    striped,
    children,
    disableSortBy,
    pinedHeader,
    align = "left",
    showFooter,
    hoverable,
    showHeader = true,
    emptyProps,
    defaultSort = [],
    onSortingChange,
    onPaginationChange,
    onColumnFiltersChange,
    ...otherProps
  } = props

  const contextProps = {
    align,
    borderedCell,
    striped,
    size,
    hoverable,
    showHeader,
    showFooter,
  } as TableContextProps

  const [sorting, setSorting] = useState<SortingState>(defaultSort)
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  useEffect(() => {
    if (defaultSort?.length) {
      setSorting(defaultSort)
    }
  }, [defaultSort])

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
    onPaginationChange,
    enableSorting: !disableSortBy,
    onSortingChange: (columnSort) => {
      setSorting(columnSort)
      onSortingChange?.(columnSort)
    },
    onColumnFiltersChange: (columnFilter) => {
      setColumnFilters(columnFilter)
      onColumnFiltersChange?.(columnFilter)
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div
      css={[
        applyContainerStyle(),
        applyBoxStyle(props),
        applyBorderedStyle(bordered),
      ]}
    >
      <Spin loading={loading} css={spinStyle}>
        <TableContext.Provider value={contextProps}>
          <table
            css={applyTableStyle(tableLayout)}
            {...deleteCssProps(otherProps)}
          >
            {showHeader && (
              <Thead pinedHeader={pinedHeader}>
                {table.getHeaderGroups().map((headerGroup) => (
                  <Tr key={headerGroup.id} hoverable>
                    {headerGroup.headers.map((header) => (
                      <Th
                        key={header.id}
                        colSpan={header.colSpan}
                        colIndex={headerGroup.headers.indexOf(header)}
                        rowIndex={table.getHeaderGroups().indexOf(headerGroup)}
                        lastCol={
                          headerGroup.headers.indexOf(header) ===
                          headerGroup.headers.length - 1
                        }
                        lastRow={
                          table.getHeaderGroups().indexOf(headerGroup) ===
                          table.getHeaderGroups().length - 1
                        }
                      >
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
                      </Th>
                    ))}
                  </Tr>
                ))}
              </Thead>
            )}
            <TBody>
              {table.getRowModel().rows.length ? null : columns?.length ? (
                <tr>
                  <td colSpan={99} style={{ textAlign: "center" }}>
                    <Empty {...emptyProps} />
                  </td>
                </tr>
              ) : null}
              {table.getRowModel().rows.map((row) => (
                <Tr key={row.id} hoverable>
                  {row.getVisibleCells().map((cell) => (
                    <Td
                      key={cell.id}
                      colIndex={row.getVisibleCells().indexOf(cell)}
                      rowIndex={table.getRowModel().rows.indexOf(row)}
                      lastCol={
                        row.getVisibleCells().indexOf(cell) ===
                        row.getVisibleCells().length - 1
                      }
                      lastRow={
                        table.getRowModel().rows.indexOf(row) ===
                        table.getRowModel().rows.length - 1
                      }
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </Td>
                  ))}
                </Tr>
              ))}
            </TBody>
            {showFooter && (
              <TFoot>
                {table.getFooterGroups().map((footerGroup) => (
                  <Tr key={footerGroup.id} hoverable>
                    {footerGroup.headers.map((header) => (
                      <Th
                        key={header.id}
                        colSpan={header.colSpan}
                        colIndex={footerGroup.headers.indexOf(header)}
                        rowIndex={table.getHeaderGroups().indexOf(footerGroup)}
                        lastCol={
                          footerGroup.headers.indexOf(header) ===
                          footerGroup.headers.length - 1
                        }
                        lastRow={
                          table.getHeaderGroups().indexOf(footerGroup) ===
                          table.getHeaderGroups().length - 1
                        }
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.footer,
                              header.getContext(),
                            )}
                      </Th>
                    ))}
                  </Tr>
                ))}
              </TFoot>
            )}
          </table>
        </TableContext.Provider>
      </Spin>
    </div>
  )
}

Table.displayName = "Table"
