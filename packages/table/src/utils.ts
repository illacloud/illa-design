import { Table } from "@tanstack/table-core"
import { FilterFn } from "@tanstack/table-core/src/features/Filters"
import { isString } from "@illa-design/system"

export const transformTableIntoCsvData = (
  table: Table<any>,
  multiRowSelection?: boolean,
) => {
  const csvData: Array<Array<any>> = []
  table.getHeaderGroups().map((headerGroup) => {
    const headerData: unknown[] = []
    headerGroup.headers.map((header, index) => {
      if (multiRowSelection && index === 0) {
        return
      }
      headerData.push(header.column.columnDef.header)
    })
    csvData.push(headerData)
  })
  table.getRowModel().rows.map((row) => {
    const rowCellData: unknown[] = []
    row.getVisibleCells().map((cell, index) => {
      if (multiRowSelection && index === 0) {
        return
      }
      rowCellData.push(cell.getContext().getValue())
    })
    csvData.push(rowCellData)
  })
  return csvData
}

export const downloadDataAsCSV = (props: {
  csvData: Array<Array<any>>
  delimiter: string
  fileName: string
}) => {
  let csvContent = ""
  props.csvData.forEach((infoArray: Array<any>, index: number) => {
    const dataString = infoArray.join(props.delimiter)
    csvContent += index < props.csvData.length ? dataString + "\n" : dataString
  })
  const anchor = document.createElement("a")
  const mimeType = "application/octet-stream"
  if (URL && "download" in anchor) {
    anchor.href = URL.createObjectURL(
      new Blob([csvContent], {
        type: mimeType,
      }),
    )
    anchor.setAttribute("download", props.fileName)
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
  }
}

export const notEqualTo: FilterFn<any> = (
  row,
  columnId: string,
  filterValue: unknown,
) => {
  return row.getValue(columnId) !== filterValue
}

export const empty: FilterFn<any> = (
  row,
  columnId: string,
  filterValue: string,
) => {
  const rowValue = row.getValue<string>(columnId)
  return rowValue === "" || rowValue === undefined || rowValue === null
}

export const notEmpty: FilterFn<any> = (
  row,
  columnId: string,
  filterValue: string,
) => {
  const rowValue = row.getValue<string>(columnId)
  return rowValue !== "" && rowValue !== undefined && rowValue !== null
}

const less = (a: any, b: any) => {
  const numericB = Number(b)
  const numericA = Number(a)
  return numericA < numericB
}

export const lessThan: FilterFn<any> = (
  row,
  columnId: string,
  filterValue: unknown,
) => {
  const rowValue = row.getValue<number>(columnId)
  return less(rowValue, filterValue)
}

export const notLessThan: FilterFn<any> = (
  row,
  columnId: string,
  filterValue: unknown,
) => {
  const rowValue = row.getValue<number>(columnId)
  return !less(rowValue, filterValue)
}

const more = (a: any, b: any) => {
  const numericB = Number(b)
  const numericA = Number(a)
  return numericA < numericB
}

export const moreThan: FilterFn<any> = (
  row,
  columnId: string,
  filterValue: unknown,
) => {
  const rowValue = row.getValue<number>(columnId)
  return more(rowValue, filterValue)
}

export const notMoreThan: FilterFn<any> = (
  row,
  columnId: string,
  filterValue: unknown,
) => {
  const rowValue = row.getValue<number>(columnId)
  return !more(rowValue, filterValue)
}

export const doesNotContain: FilterFn<any> = (
  row,
  columnId: string,
  filterValue: unknown,
) => {
  const rowValue = row.getValue<string>(columnId)
  if (isString(rowValue) && isString(filterValue)) {
    return !rowValue.includes(filterValue)
  }
  return false
}

export const FilterOptions = [
  { label: "is equal to", value: "equals" },
  { label: "not equal to", value: "notEqualTo" },
  { label: "contains", value: "contains" },
  { label: "does not contain", value: "doesNotContain" },
  { label: "less than", value: "lessThan" },
  { label: "not less than", value: "notLessThan" },
  { label: "more than", value: "moreThan" },
  { label: "not more than", value: "notMoreThan" },
  { label: "empty", value: "empty" },
  { label: "not empty", value: "notEmpty" },
]
