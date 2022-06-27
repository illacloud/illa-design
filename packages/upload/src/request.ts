import { RequestOptions, UploadRequestReturn } from "./index"
import { isObject } from "@illa-design/system"

export function sendUploadRequest(
  options: RequestOptions,
): UploadRequestReturn {
  const {
    onProgress = () => {},
    onError = () => {},
    onSuccess = () => {},
    action = "",
    headers = {},
    name: originName,
    file,
    data: originData = {},
    withCredentials = false,
  } = options

  function getValue(value: any) {
    if (typeof value === "function") {
      return value(file)
    }
    return value
  }

  const name = getValue(originName) as string
  const data = getValue(originData)
  const xhr = new XMLHttpRequest()
  if (onProgress && xhr.upload) {
    xhr.upload.onprogress = function (event: ProgressEvent) {
      let percent = 0
      if (event.total > 0) {
        percent = (event.loaded / event.total) * 100
      }
      onProgress(percent, event)
    }
  }

  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status >= 300) {
      onError(xhr.response)
    } else {
      onSuccess(xhr.response)
    }
  }
  const formData = new FormData()
  formData.append(name || "file", file)
  if (isObject(data)) {
    Object.keys(data).map((key: string) => {
      formData.append(key, data[key])
    })
  }
  xhr.open("post", action, true)
  if (withCredentials && "withCredentials" in xhr) {
    xhr.withCredentials = true
  }
  for (const h in headers) {
    if (headers.hasOwnProperty(h) && headers[h as keyof object] !== null) {
      xhr.setRequestHeader(h, headers[h as keyof object])
    }
  }
  xhr.send(formData)
  return {
    abort() {
      xhr.abort()
    },
  }
}
