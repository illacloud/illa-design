import { UploadItem } from "./interface"

interface FileWithPath extends UploadItem {
  webkitRelativePath?: string
}

interface InternalDataTransferItem extends DataTransferItem {
  isFile: boolean
  file: (cd: (item: FileWithPath) => void) => void
  createReader: () => any
  fullPath: string
  isDirectory: boolean
  name: string
  path: string
}

function loopFiles(
  item: InternalDataTransferItem,
  callback: (fileList: InternalDataTransferItem[]) => void,
) {
  const dirReader = item.createReader()
  let fileList: InternalDataTransferItem[] = []

  function sequence() {
    dirReader.readEntries((entries: InternalDataTransferItem[]) => {
      const entryList = Array.prototype.slice.apply(entries)
      fileList = fileList.concat(entryList)
      const isFinished = !entryList.length
      if (isFinished) {
        callback(fileList)
      } else {
        sequence()
      }
    })
  }

  sequence()
}

export const traverseFileTree = (
  files: InternalDataTransferItem[],
  callback: (files: File[]) => undefined | void,
  isAccepted: (file: FileWithPath) => boolean,
) => {
  const _traverseFileTree = (item: InternalDataTransferItem, path?: string) => {
    item.path = path || ""
    if (item.isFile) {
      item.file((file) => {
        if (isAccepted(file)) {
          if (item.fullPath && !file.webkitRelativePath) {
            Object.defineProperties(file, {
              webkitRelativePath: {
                writable: true,
              },
            })
          }
          callback([file.originFile])
        }
      })
    } else if (item.isDirectory) {
      loopFiles(item, (entries: InternalDataTransferItem[]) => {
        entries.forEach((entryItem) => {
          _traverseFileTree(entryItem, `${path}${item.name}/`)
        })
      })
    }
  }
  files.forEach((file) => {
    _traverseFileTree(file.webkitGetAsEntry() as any)
  })
}
