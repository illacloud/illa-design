import { isArray, isFunction } from "@illa-design/system"
import { UploadItem, InternalDataTransferItem } from "./interface"
import {
  FileDefaultIcon,
  FileExcelIcon,
  FileMusicIcon,
  FilePdfIcon,
  FilePictureIcon,
  FilePPTIcon,
  FileVideoIcon,
  FileWordIcon,
  FileWPSIcon,
} from "@illa-design/icon"
import { KeyboardEvent } from "react"

export const getIconType = (file: UploadItem) => {
  let type = ""
  let fileExtension = ""

  const name = file.name || ""
  fileExtension = name.split(".").pop() || ""
  if (!fileExtension) {
    if (file.originFile && file.originFile.type) {
      fileExtension =
        (file.originFile.type.split("/").pop() || "").split(".").pop() || ""
    }
  }

  type = fileExtension
  if (
    [
      "png",
      "jpg",
      "jpeg",
      "bmp",
      "gif",
      "svg",
      "svg+xml",
      "webp",
      "jfif",
      "dpg",
      "ico",
      "heic",
      "heif",
    ].indexOf(fileExtension) > -1
  ) {
    type = "image"
  } else if (["mp4", "m2v", "mkv", "mpeg"].indexOf(fileExtension) > -1) {
    type = "video"
  } else if (["mp3", "wav", "wmv"].indexOf(fileExtension) > -1) {
    type = "audio"
  } else if (
    ["doc", "docx", "msword", "document"].indexOf(fileExtension) > -1
  ) {
    type = "doc"
  } else if (["xls", "xlsx", "sheet", "ms-excel"].indexOf(fileExtension) > -1) {
    type = "excel"
  } else if (
    ["ppt", "pptx", "ms-powerpoint", "presentation"].indexOf(fileExtension) > -1
  ) {
    type = "ppt"
  }

  if (type.indexOf("ppt") > -1) {
    return FilePPTIcon
  }
  if (type.indexOf("doc") > -1) {
    return FileWordIcon
  }
  if (type.indexOf("excel") > -1) {
    return FileExcelIcon
  }
  if (type.indexOf("image") > -1) {
    return FilePictureIcon
  }
  if (type.indexOf("pdf") > -1) {
    return FilePdfIcon
  }
  if (type.indexOf("audio") > -1) {
    return FileMusicIcon
  }
  if (type.indexOf("video") > -1) {
    return FileVideoIcon
  }
  if (type.indexOf("wps") > -1) {
    return FileWPSIcon
  }
  return FileDefaultIcon
}

export const isAcceptFile = (
  file: File,
  accept?: string | string[],
): boolean => {
  if (accept && file) {
    const accepts = isArray(accept)
      ? accept
      : accept
          .split(",")
          .map((x) => x.trim())
          .filter((x) => x)
    const fileExtension = (
      file.name.indexOf(".") > -1 ? `.${file.name.split(".").pop()}` : ""
    ).toLowerCase()
    return accepts.some((type) => {
      const typeText = type && type.toLowerCase()
      const fileType = (file.type || "").toLowerCase()
      const baseFileType = fileType.split("/")[0] // audio/mpeg => audio;
      if (/^\*(\/\*)?$/.test(typeText)) {
        return true
      }
      if (
        typeText === fileType ||
        `${baseFileType}${fileExtension.replace(".", "/")}` === typeText
      ) {
        return true
      }
      if (/\/\*/.test(typeText)) {
        // image/*
        return fileType.replace(/\/.*$/, "") === typeText.replace(/\/.*$/, "")
      }
      if (/\..*/.test(typeText)) {
        // .jpg
        let affixList = [typeText]
        // accept=".jpg", jpeg
        if (typeText === ".jpg" || typeText === ".jpeg") {
          affixList = [".jpg", ".jpeg"]
        }
        return affixList.includes(fileExtension)
      }
      return false
    })
  }
  return !!file
}

export const getAcceptedFiles = (fileList: FileList, accept?: string) => {
  if (!fileList) {
    return
  }
  let files = [].slice.call(fileList)
  if (accept) {
    files = files.filter((file) => {
      return isAcceptFile(file, accept)
    })
  }
  return files
}

export const loopDirectory = (
  items: InternalDataTransferItem[],
  callback: (files: File[]) => void,
  accept?: string | string[],
) => {
  const files: File[] = []
  let restFileCount = 0
  const onFinish = () => {
    !restFileCount && callback(files)
  }
  const _loopDirectory = (item: InternalDataTransferItem) => {
    restFileCount += 1
    if (item.isFile) {
      item.file((file) => {
        restFileCount -= 1
        if (isAcceptFile(file, accept)) {
          Object.defineProperty(file, "webkitRelativePath", {
            value: item.fullPath.replace(/^\//, ""),
          })
          files.push(file)
        }
        onFinish()
      })
      return
    } else if (item.isDirectory) {
      const reader = item.createReader()
      let flag = false
      const readEntries = () => {
        reader.readEntries((entries: InternalDataTransferItem[]) => {
          if (!flag) {
            restFileCount -= 1
            flag = true
          }
          if (entries.length === 0) {
            onFinish()
          } else {
            readEntries() // the maximum files read using readEntries is 100
            entries.forEach(_loopDirectory)
          }
        })
      }
      readEntries()
      return
    }
    restFileCount -= 1
    onFinish()
  }

  items.forEach((item: DataTransferItem) => {
    if (item.webkitGetAsEntry) {
      _loopDirectory(item.webkitGetAsEntry() as any)
    }
  })
}

export const getFileURL = (file: UploadItem) => {
  const { originFile } = file
  const url =
    file.url ||
    (file?.response &&
      file?.response.hasOwnProperty("url") &&
      (file.response as { url: string }).url) ||
    undefined
  return url !== undefined
    ? file.url
    : originFile && isFunction(URL.createObjectURL)
    ? URL.createObjectURL(originFile)
    : undefined
}

export const handleKeyDown = (
  event: KeyboardEvent<HTMLSpanElement>,
  callback?: () => void,
) => {
  const keyCode = event.code
  if (keyCode === "Enter") {
    callback?.()
  }
}

const extname = (url: string = "") => {
  const temp = url.split("/")
  const filename = temp[temp.length - 1]
  const filenameWithoutSuffix = filename.split(/#|\?/)[0]
  return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [""])[0]
}

export const isImageUrl = (file: UploadItem) => {
  if (file.originFile && file.originFile.type) {
    return file.originFile.type.indexOf("image/") === 0
  }
  const url: string = (file.url || "") as string
  const extension = extname(url)

  if (
    /^data:image\//.test(url) ||
    /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico|heic|heif)$/i.test(extension)
  ) {
    return true
  }
  if (/^data:/.test(url)) {
    // other file types of base64
    return false
  }
  if (extension) {
    // other file types which have extension
    return false
  }
  return true
}
