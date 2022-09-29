import { ReactElement, useEffect, useMemo, useState } from "react"
import { TableContextProps, TableProps } from "./interface"
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
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel, getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"
import {
  FilterIcon,
  SorterDefaultIcon,
  SorterDownIcon,
  SorterUpIcon,
  DownloadIcon,
} from "@illa-design/icon"
import { rankItem } from "@tanstack/match-sorter-utils"
import { Spin } from "@illa-design/spin"
import { Empty } from "@illa-design/empty"
import { Pagination } from "@illa-design/pagination"
import { isNumber, isString } from "@illa-design/system"
import { Checkbox } from "@illa-design/checkbox"
import { PaginationState, filterFns } from "@tanstack/table-core"
import {
  doesNotContain,
  downloadDataAsCSV,
  empty,
  lessThan,
  moreThan,
  notEmpty,
  notLessThan,
  notMoreThan,
  transformTableIntoCsvData, notEqualTo, FilterOptions,
} from "./utils"
import { Button } from "@illa-design/button"
import { Trigger } from "@illa-design/trigger"
import { Select } from "@illa-design/select"
import { Input } from "@illa-design/input"
import { FilterFn } from "@tanstack/table-core/src/features/Filters"

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
  const [rowSelection, setRowSelection] = useState({})
  const [filterOption, setFilterOption] = useState([{}])
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const currentPagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize],
  )

  const currentColumns = useMemo(() => {
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
      return rowSelectionColumn.concat(columns)
    }
    return columns
  }, [columns, multiRowSelection])

  const table = useReactTable({
    data,
    columns: currentColumns,
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
      equals: filterFns.equals,
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
      pagination: currentPagination,
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
      console.log(columnFilter, "columnFilter change")
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
  console.log(columnFilters, "columnFilters")
  useEffect(() => {
    if (defaultSort?.length) {
      setSorting(defaultSort)
    }
  }, [defaultSort])

  useEffect(() => {
    if (pagination) {
      const { pageSize: _pageSize, currentPage } = pagination
      setPagination({
        pageIndex: isNumber(currentPage) ? currentPage : pageIndex,
        pageSize: isNumber(_pageSize) ? _pageSize : pageSize,
      })
    }
  }, [pagination])

  const downloadTableDataAsCsv = () => {
    const csvData = transformTableIntoCsvData(table, multiRowSelection)
    downloadDataAsCSV({
      csvData: csvData,
      delimiter: ",",
      fileName: `table.csv`,
    })
  }

  const ColumnsOption = useMemo(() => {
    const res: { value: string; label: string; }[] = []
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
                leftIcon={<DownloadIcon size={"16px"} />}
                onClick={downloadTableDataAsCsv}
              />
            ) : null}
            {filter ? (
              <Trigger colorScheme={"white"} position={"bottom"} trigger={"click"} content={

                <div>
                  <div>
                    <Select options={ColumnsOption} />
                    <Select options={FilterOptions} />
                    <Input />
                  </div>
                  {columnFilters.map((filter, index) => {
                    return <div key={index}>
                      <Select value={filter.id} options={ColumnsOption} onChange={(id) => {
                        const c = columnFilters
                        c[index].id = id
                        setColumnFilters(c)
                      }} />
                      <Select options={FilterOptions} onChange={
                        (filterFn) => {
                          setFilterOption([{ id: filter.id, filterFn }])
                        }
                      } />
                      <Input value={isString(filter.value) ? filter.value : undefined} onChange={(value) => {
                        console.log(value, "filter")
                        const c = columnFilters
                        c[index].value = value
                        setColumnFilters(c)
                      }} />
                    </div>
                  })}
                </div>
              }>
                <Button
                  variant={"text"}
                  leftIcon={<FilterIcon size={"16px"} />}
                  onClick={() => {
                    table.getColumn("name").columnDef.filterFn = "equals"
                    setColumnFilters([{ id: "name", value: "Eliza" }])
                  }}
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
              onChange={(pageNumber: number, pageSize: number) => {
                setPagination({ pageIndex: pageNumber, pageSize })
                table.setPageIndex(pageNumber)
              }}
            />
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

Table.displayName = "Table"
