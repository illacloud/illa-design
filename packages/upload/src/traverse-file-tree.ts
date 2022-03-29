import { isAcceptFile } from "./file-accept"

interface InternalDataTransferItem extends DataTransferItem {
  isFile: boolean
  file: (cd: (item: File) => void) => void
  createReader: () => any
  fullPath: string
  isDirectory: boolean
  name: string
  path: string
}

function sequence(
  dirReader: any,
  fileList: InternalDataTransferItem[],
  callback: (fileList: InternalDataTransferItem[]) => void,
) {
  dirReader.readEntries((entries: InternalDataTransferItem[]) => {
    const entryList = Array.prototype.slice.apply(entries)
    fileList = fileList.concat(entryList)
    const isFinished = !entryList.length
    if (isFinished) {
      callback(fileList)
    } else {
      sequence(dirReader, fileList, callback)
    }
  })
}

function loopFiles(
  item: InternalDataTransferItem,
  callback: (fileList: InternalDataTransferItem[]) => void,
) {
  const dirReader = item.createReader()
  let fileList: InternalDataTransferItem[] = []
  sequence(dirReader, fileList, callback)
}

const traverseByRecur = (
  item: InternalDataTransferItem,
  callback: (files: File[]) => void | undefined,
  accept?: string,
  path?: string,
) => {
  item.path = path || ""
  if (item.isFile) {
    item.file((file) => {
      if (isAcceptFile(file, accept)) {
        if (item.fullPath && !file.webkitRelativePath) {
          Object.defineProperty(file, "webkitRelativePath", {
            value: item.fullPath.replace(/^\//, ""),
          })
        }
        callback([file])
      }
    })
  } else if (item.isDirectory) {
    loopFiles(item, (entries: InternalDataTransferItem[]) => {
      entries.forEach((entryItem) => {
        traverseByRecur(entryItem, callback, accept, `${path}${item.name}/`)
      })
    })
  }
}

export const traverseFileTree = (
  files: InternalDataTransferItem[],
  callback: (files: File[]) => void | undefined,
  accept?: string,
) => {
  files.forEach((file) => {
    traverseByRecur(file.webkitGetAsEntry() as any, callback, accept)
  })
}
