import { RequestOptions, UploadRequestProps } from "./interface"
import { isFunction, isArray } from "@illa-design/system"

export const initialHandler = () => {}

function getBody(xhr: XMLHttpRequest) {
  const text = xhr.responseText || xhr.response
  if (!text) {
    return text
  }
  try {
    return JSON.parse(text)
  } catch (e) {
    return text
  }
}

const uploadRequestSender: UploadRequestProps = function (
  options: RequestOptions,
) {
  const {
    onProgress = initialHandler,
    onError = initialHandler,
    onSuccess = initialHandler,
    action,
    headers = {},
    name: originName,
    file,
    data: originData = {},
  } = options

  const name = isFunction(originName) ? originName(file) : originName
  const data = isFunction(originData) ? originData(file) : originData
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
  xhr.onerror = function error(e) {
    onError(e)
  }
  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status >= 300) {
      return onError(getBody(xhr))
    }
    onSuccess(getBody(xhr))
  }
  const formData = new FormData()
  if (data) {
    Object.keys(data).forEach((key) => {
      const value = data[key]
      if (isArray(value)) {
        value.forEach((item) => {
          formData.append(`${key}[]`, item)
        })
      }
      formData.append(key, value)
    })
  }
  formData.append(name || "file", file)

  xhr.open("post", action || "", true)

  Object.keys(headers).forEach((h) => {
    if (headers[h] !== null) {
      xhr.setRequestHeader(h, headers[h])
    }
  })
  xhr.send(formData)
  return {
    abort() {
      xhr.abort()
    },
  }
}

export default uploadRequestSender
