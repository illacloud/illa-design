import { Table } from "@tanstack/table-core"

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
