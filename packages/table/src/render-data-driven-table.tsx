import { TableData } from "./table-data"
import {
  FilterOperator,
  FilterOptionsState,
  TableContextProps,
  TableProps,
} from "./interface"
import {
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
  ColumnSizingState,
} from "@tanstack/react-table"
import { Checkbox } from "@illa-design/checkbox"
import {
  customGlobalFn,
  downloadDataAsCSV,
  transformTableIntoCsvData,
} from "./utils"
import { isNumber, isString } from "@illa-design/system"
import {
  applyActionButtonStyle,
  applyBorderedStyle,
  applyContainerStyle,
  applyHeaderIconLeft,
  applyPreContainer,
  applyTableStyle,
  headerStyle,
  spinStyle,
  tableResizerStyle,
  toolBarStyle,
} from "./style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"
import { Spin } from "@illa-design/spin"
import { TableContext } from "./table-context"
import { Thead } from "./thead"
import { Tr } from "./tr"
import { Th } from "./th"
import {
  DownloadIcon,
  SorterDefaultIcon,
  SorterDownIcon,
  SorterUpIcon,
} from "@illa-design/icon"
import { TBody } from "./tbody"
import { Td } from "./td"
import { Empty } from "@illa-design/empty"
import { TFoot } from "./tfoot"
import { Button } from "@illa-design/button"
import { Pagination } from "@illa-design/pagination"
import { TableFilter } from "./table-filter"
import { useClickAway } from "react-use"

export function RenderDataDrivenTable<D extends TableData, TValue>(
  props: TableProps<D, TValue>,
): ReactElement {
  const {
    size = "medium",
    tableLayout = "auto",
    overFlow = "scroll",
    columns = [],
    data = [],
    loading = false,
    bordered,
    borderedCell,
    striped,
    children,
    disableSortBy,
    pinedHeader,
    colorScheme,
    align = "left",
    showFooter,
    hoverable,
    showHeader = true,
    emptyProps,
    columnVisibility,
    pagination,
    columnSizing: _columnSizing = {},
    enableColumnResizing,
    multiRowSelection = false,
    enableRowSelection = true,
    clickOutsideToResetRowSelect,
    checkAll = true,
    download,
    filter,
    rowSelection: selected = {},
    defaultSort = [],
    onSortingChange,
    onPaginationChange,
    onColumnFiltersChange,
    onRowSelectionChange,
    onColumnSizingChange,
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
    enableColumnResizing,
  } as TableContextProps

  const containerRef = useRef<HTMLDivElement>(null)
  const [sorting, setSorting] = useState<SortingState>(defaultSort)
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [filterOperator, setFilterOperator] = useState<FilterOperator>("and")
  const [filterOption, setFilterOption] = useState<FilterOptionsState>([
    { id: "", value: "" },
  ])
  const [rowSelection, setRowSelection] = useState(selected)
  const [currentColumns, setColumns] = useState<ColumnDef<D, TValue>[]>(columns)
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })
  const [columnSizing, setColumnSizing] =
    useState<ColumnSizingState>(_columnSizing)

  const _columns = useMemo(() => {
    const current = currentColumns?.filter((item) => {
      // @ts-ignore accessorKey is not in the interface
      return item.id || item.accessorKey
    })
    if (multiRowSelection && enableRowSelection) {
      const rowSelectionColumn: ColumnDef<D, TValue>[] = [
        {
          accessorKey: "select",
          enableSorting: false,
          header: checkAll
            ? ({ table }) => {
                return (
                  <Checkbox
                    {...{
                      checked: table.getIsAllRowsSelected(),
                      indeterminate: table.getIsSomeRowsSelected(),
                      onChange: (v, event) => {
                        table?.getToggleAllRowsSelectedHandler()?.(event)
                      },
                    }}
                  />
                )
              }
            : "",
          cell: ({ row }) => {
            return (
              <Checkbox
                {...{
                  checked: row.getIsSelected(),
                  indeterminate: row.getIsSomeSelected(),
                  onChange: row.getToggleSelectedHandler(),
                }}
              />
            )
          },
        },
      ]
      return rowSelectionColumn.concat(current)
    }
    return current
  }, [checkAll, currentColumns, multiRowSelection, enableRowSelection])

  const globalFilter = useMemo(() => {
    return { filters: columnFilters, operator: filterOperator }
  }, [columnFilters, filterOperator])

  const enableMultiRowSelection = useMemo(() => {
    return multiRowSelection && enableRowSelection
  }, [multiRowSelection, enableRowSelection])

  const table = useReactTable({
    data,
    columns: _columns,
    state: {
      columnVisibility,
      globalFilter,
      sorting,
      rowSelection,
      columnSizing,
      pagination: {
        pageIndex,
        pageSize,
      },
    },
    enableColumnResizing,
    columnResizeMode: "onChange",
    autoResetAll: true,
    enableMultiRowSelection,
    enableSorting: !disableSortBy,
    globalFilterFn: customGlobalFn,
    onColumnSizingChange: (columnSizing) => {
      setColumnSizing(columnSizing)
      onColumnSizingChange?.(table.getState().columnSizing)
    },
    onPaginationChange: (pagination) => {
      setPagination(pagination)
      onPaginationChange?.(table.getState().pagination, table)
    },
    onSortingChange: (columnSort) => {
      setSorting(columnSort)
      onSortingChange?.(columnSort)
    },
    onGlobalFilterChange: (globalFilter) => {
      console.log("onGlobalFilterChange", globalFilter)
      onColumnFiltersChange?.(globalFilter)
    },
    onColumnFiltersChange: (columnFilter) => {
      setColumnFilters(columnFilter)
      onColumnFiltersChange?.(columnFilter)
    },
    onRowSelectionChange: (rowSelection) => {
      new Promise((resolve) => {
        setRowSelection(rowSelection)
        resolve(true)
      }).then(() => {
        onRowSelectionChange?.(table.getState().rowSelection)
      })
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: overFlow === "scroll",
  })

  useClickAway(containerRef, () => {
    // when multiRowSelection is false, click outside the table, reset the row selection
    if (clickOutsideToResetRowSelect && !multiRowSelection) {
      table.resetRowSelection()
    }
  })

  useEffect(() => {
    if ("defaultSort" in props && defaultSort) {
      setSorting(defaultSort)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultSort])

  useEffect(() => {
    if (!enableMultiRowSelection) {
      if (rowSelection && Object.keys(rowSelection)?.length > 1) {
        const _selectedRow = { [Object.keys(rowSelection)[0]]: true }
        setRowSelection(_selectedRow)
        onRowSelectionChange?.(_selectedRow)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enableMultiRowSelection])

  useEffect(() => {
    if (!enableRowSelection) {
      table.resetRowSelection()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enableRowSelection])

  useEffect(() => {
    setColumns(columns)
  }, [columns])

  useEffect(() => {
    if (pagination) {
      const { pageSize: _pageSize, current } = pagination
      setPagination({
        pageIndex: isNumber(current) ? current : pageIndex,
        pageSize: isNumber(_pageSize) ? _pageSize : pageSize,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination])

  const downloadTableDataAsCsv = useCallback(() => {
    const csvData = transformTableIntoCsvData(table, multiRowSelection)
    downloadDataAsCSV({
      csvData: csvData,
      delimiter: ",",
      fileName: `table.csv`,
    })
  }, [table, multiRowSelection])

  const columnsOption = useMemo(() => {
    const res: { value: string; label: string }[] = []
    currentColumns.forEach((column, index) => {
      // [TODO] fix ts-error @xiaoyu
      // @ts-ignore custom is not in the interface
      if (!(multiRowSelection && index === 0) && !column.custom) {
        const label = column.header
        res.push({
          // @ts-ignore accessorKey is not in the interface
          value: column.id || column.accessorKey,
          label: isString(label) ? label : "-",
        })
      }
    })
    return res
  }, [multiRowSelection, currentColumns])

  const onPageChange = useCallback(
    (pageNumber: number, pageSize: number) => {
      const paginationUpdate = { pageIndex: pageNumber - 1, pageSize }
      setPagination(paginationUpdate)
      onPaginationChange?.(paginationUpdate, table)
    },
    [onPaginationChange, setPagination, table],
  )

  return (
    <div
      ref={containerRef}
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
                {table.getHeaderGroups().map((headerGroup, index) => (
                  <Tr key={headerGroup.id} hoverable>
                    {headerGroup.headers.map((header) => {
                      const lastCol =
                        headerGroup.headers.indexOf(header) ===
                        headerGroup.headers.length - 1
                      return (
                        <Th
                          w={`${header.getSize()}px`}
                          key={header.id}
                          colSpan={header.colSpan}
                          colIndex={headerGroup.headers.indexOf(header)}
                          rowIndex={table
                            .getHeaderGroups()
                            .indexOf(headerGroup)}
                          lastCol={lastCol}
                          lastRow={
                            table.getHeaderGroups().indexOf(headerGroup) ===
                            table.getHeaderGroups().length - 1
                          }
                        >
                          <div
                            css={applyPreContainer(align)}
                            onClick={() => header.column.toggleSorting()}
                          >
                            {header.isPlaceholder ? null : (
                              <span css={headerStyle}>
                                {flexRender(
                                  header.column.columnDef.header,
                                  header.getContext(),
                                )}
                              </span>
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
                          {header.column.getCanResize() && !lastCol ? (
                            <div
                              css={tableResizerStyle}
                              onTouchStart={(event) => {
                                header.getResizeHandler()(event)
                                event.stopPropagation()
                              }}
                              onMouseDown={(event) => {
                                header.getResizeHandler()(event)
                                event.stopPropagation()
                              }}
                            />
                          ) : null}
                        </Th>
                      )
                    })}
                  </Tr>
                ))}
              </Thead>
            )}
            <TBody>
              {table.getRowModel().rows.map((row, index) => (
                <Tr
                  key={row.id}
                  hoverable
                  selected={enableRowSelection ? row.getIsSelected() : false}
                  onClick={(e) => {
                    if (enableRowSelection) {
                      row.getToggleSelectedHandler()(e)
                    }
                  }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <Td
                      w={`${cell.column.getSize()}px`}
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
              {table.getRowModel().rows.length ? null : (
                <tr>
                  <td colSpan={99} style={{ textAlign: "center" }}>
                    <Empty {...emptyProps} />
                  </td>
                </tr>
              )}
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
      {overFlow === "pagination" || download || filter ? (
        <div css={toolBarStyle}>
          <div css={applyActionButtonStyle(overFlow === "pagination")}>
            {download ? (
              <Button
                variant={"text"}
                colorScheme={"grayBlue"}
                leftIcon={<DownloadIcon size={"16px"} />}
                onClick={downloadTableDataAsCsv}
              />
            ) : null}
            {filter ? (
              <TableFilter
                colorScheme={colorScheme}
                filterOperator={filterOperator}
                filterOption={filterOption}
                columnsOption={columnsOption}
                onChange={(filters, operator) => {
                  setColumnFilters(filters)
                  setFilterOperator(operator)
                }}
              />
            ) : null}
          </div>
          {overFlow === "pagination" ? (
            <Pagination
              total={Object.keys(table.getRowModel().rowsById).length}
              pageSize={pageSize}
              current={pageIndex + 1}
              hideOnSinglePage={false}
              simple
              onChange={onPageChange}
            />
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
