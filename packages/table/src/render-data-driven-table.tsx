import { TableData } from "./table-data"
import { FilterOptionsState, TableContextProps, TableProps } from "./interface"
import { ReactElement, useCallback, useEffect, useMemo, useState } from "react"
import {
  ColumnDef,
  ColumnFilter,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"
import {
  FilterFnOption,
  filterFns,
  PaginationState,
} from "@tanstack/table-core"
import { Checkbox } from "@illa-design/checkbox"
import { rankItem } from "@tanstack/match-sorter-utils"
import {
  doesNotContain,
  downloadDataAsCSV,
  empty,
  equalTo,
  lessThan,
  moreThan,
  notEmpty,
  notEqualTo,
  notLessThan,
  notMoreThan,
  transformTableIntoCsvData,
} from "./utils"
import { isNumber, isString } from "@illa-design/system"
import {
  actionButtonStyle,
  applyBorderedStyle,
  applyContainerStyle,
  applyHeaderIconLeft,
  applyPreContainer,
  applyTableStyle,
  applyToolBarStyle,
  spinStyle,
} from "./style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"
import { Spin } from "@illa-design/spin"
import { TableContext } from "./table-context"
import { Thead } from "./thead"
import { Tr } from "./tr"
import { Th } from "./th"
import {
  DownloadIcon,
  FilterIcon,
  SorterDefaultIcon,
  SorterDownIcon,
  SorterUpIcon,
} from "@illa-design/icon"
import { TBody } from "./tbody"
import { Td } from "./td"
import { Empty } from "@illa-design/empty"
import { TFoot } from "./tfoot"
import { Button } from "@illa-design/button"
import { Trigger } from "@illa-design/trigger"
import { FiltersEditor } from "./filters-editor"
import { Pagination } from "@illa-design/pagination"

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
    align = "left",
    showFooter,
    hoverable,
    showHeader = true,
    emptyProps,
    columnVisibility,
    pagination,
    multiRowSelection,
    checkAll = true,
    download,
    filter,
    defaultSort = [],
    onSortingChange,
    onPaginationChange,
    onColumnFiltersChange,
    onRowSelectionChange,
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
  const [filterOption, setFilterOption] = useState<FilterOptionsState>([
    { id: "", value: "" },
  ])
  const [rowSelection, setRowSelection] = useState({})
  const [currentColumns, setColumns] = useState<ColumnDef<D, TValue>[]>(columns)
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const _columns = useMemo(() => {
    if (multiRowSelection) {
      const rowSelectionColumn: ColumnDef<D, TValue>[] = [
        {
          id: "select",
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
      return rowSelectionColumn.concat(currentColumns)
    }
    return currentColumns
  }, [currentColumns, multiRowSelection])

  const table = useReactTable({
    data,
    columns: _columns,
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
      equalTo,
      notEqualTo,
      contains: filterFns.includesString,
      doesNotContain,
      lessThan,
      notLessThan,
      moreThan,
      notMoreThan,
      empty,
      notEmpty,
    },
    state: {
      columnVisibility,
      columnFilters,
      sorting,
      rowSelection,
      pagination: {
        pageIndex,
        pageSize,
      },
    },
    enableColumnFilters: true,
    enableSorting: !disableSortBy,
    onPaginationChange: (pagination) => {
      setPagination(pagination)
      onPaginationChange?.(pagination)
    },
    onSortingChange: (columnSort) => {
      setSorting(columnSort)
      onSortingChange?.(columnSort)
    },
    onColumnFiltersChange: (columnFilter) => {
      setColumnFilters(columnFilter)
      onColumnFiltersChange?.(columnFilter)
    },
    onRowSelectionChange: (rowSelection) => {
      setRowSelection(rowSelection)
      onRowSelectionChange?.(rowSelection)
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: overFlow === "scroll",
  })

  useEffect(() => {
    if (defaultSort?.length) {
      setSorting(defaultSort)
    }
  }, [defaultSort])

  useEffect(() => {
    setColumns(columns)
  }, [columns])

  useEffect(() => {
    if (pagination) {
      const { pageSize: _pageSize, currentPage } = pagination
      setPagination({
        pageIndex: isNumber(currentPage) ? currentPage : pageIndex,
        pageSize: isNumber(_pageSize) ? _pageSize : pageSize,
      })
    }
  }, [pagination])

  useEffect(() => {
    setColumnFilters(
      filterOption.filter((item) => {
        return item.id.length && item.value
      }),
    )
  }, [filterOption])

  const downloadTableDataAsCsv = useCallback(() => {
    const csvData = transformTableIntoCsvData(table, multiRowSelection)
    downloadDataAsCSV({
      csvData: csvData,
      delimiter: ",",
      fileName: `table.csv`,
    })
  }, [table, multiRowSelection])

  const ColumnsOption = useMemo(() => {
    const res: { value: string; label: string }[] = []
    table.getAllColumns().forEach((column, index) => {
      if (!(multiRowSelection && index === 0)) {
        const label = column.columnDef.header
        res.push({
          value: column.id,
          label: isString(label) ? label : "-",
        })
      }
    })
    return res
  }, [columns, multiRowSelection])

  const updateColumns = useCallback(
    (index: number, id: string, filterFn: FilterFnOption<D>) => {
      if (!filterFn) return
      const colIndex = currentColumns?.findIndex((current) => {
        return current.id === id
      })
      const col = [...currentColumns]
      if (col[colIndex]) {
        col[colIndex].filterFn = filterFn
        setColumns(col)
      }
    },
    [currentColumns, setColumns],
  )

  const addOrUpdateFilters = useCallback(
    (index?: number, filter?: ColumnFilter) => {
      const filters = [...filterOption]
      if (filters) {
        if (isNumber(index) && filter && index < filters.length) {
          filters[index] = filter
        } else {
          filters.push({ id: "", value: "" })
        }
      }
      setFilterOption(filters)
    },
    [filterOption, setFilterOption],
  )

  const removeFilters = useCallback(
    (index: number, id: string) => {
      const filters = [...filterOption]
      if (filters) {
        filters.splice(index, 1)
        if (filters.length == 0) {
          filters.push({ id: "", value: "" })
        }
      }
      setFilterOption(filters)
      updateColumns(index, id, "auto")
    },
    [filterOption, setFilterOption, updateColumns],
  )

  const onPageChange = useCallback(
    (pageNumber: number, pageSize: number) => {
      setPagination({ pageIndex: pageNumber, pageSize })
      table.setPageIndex(pageNumber)
    },
    [table.setPageIndex, setPagination],
  )

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
              {table.getRowModel().rows.length ? null : columns?.length ? (
                <tr>
                  <td colSpan={99} style={{ textAlign: "center" }}>
                    <Empty {...emptyProps} />
                  </td>
                </tr>
              ) : null}
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
        <div css={applyToolBarStyle(bordered)}>
          <div css={actionButtonStyle}>
            {download ? (
              <Button
                variant={"text"}
                colorScheme={"grayBlue"}
                leftIcon={<DownloadIcon size={"16px"} />}
                onClick={downloadTableDataAsCsv}
              />
            ) : null}
            {filter ? (
              <Trigger
                withoutPadding
                closeWhenScroll={false}
                colorScheme={"white"}
                position={"bottom-end"}
                trigger={"click"}
                content={
                  <FiltersEditor
                    columnFilters={filterOption}
                    columnsOption={ColumnsOption}
                    onChange={(index, filters) => {
                      addOrUpdateFilters(index, filters)
                    }}
                    onChangeFilterFn={updateColumns}
                    onAdd={addOrUpdateFilters}
                    onDelete={(index, filters) => {
                      removeFilters(index, filters.id)
                    }}
                  />
                }
              >
                <Button
                  variant={"text"}
                  colorScheme={"grayBlue"}
                  leftIcon={<FilterIcon size={"16px"} />}
                />
              </Trigger>
            ) : null}
          </div>
          {overFlow === "pagination" ? (
            <Pagination
              total={data.length}
              pageSize={pageSize}
              currentPage={pageIndex}
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
