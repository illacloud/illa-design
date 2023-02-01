import React, { ReactNode } from "react"
import { ProgressProps } from "@illa-design/progress"

export const STATUS: {
  [key: string]: UploadStatus
} = {
  INIT: "init",
  UPLOADING: "uploading",
  SUCCESS: "done",
  FAIL: "error",
}

export type UploadStatus = "init" | "uploading" | "done" | "error"

export type CustomIconType = {
  previewIcon?: ReactNode
  removeIcon?: ReactNode
  fileIcon?: ReactNode
  reuploadIcon?: ReactNode
  cancelIcon?: ReactNode
  startIcon?: ReactNode
  errorIcon?: ReactNode
  successIcon?: ReactNode
  fileName?: (file: UploadItem) => ReactNode
  // 2.34.0
  progressRender?: (
    file: UploadItem,
    originDom: ReactNode,
  ) => React.ReactElement
  // 2.34.0
  imageRender?: (file: UploadItem) => React.ReactNode
}

export interface UploadRequestReturn {
  abort?: () => void
  [key: string]: any
}

export type UploadRequestProps = (
  options: RequestOptions,
) => UploadRequestReturn | void

export type UploadListType = "text" | "picture" | "picture-card"

export interface UploadProps {
  listType?: string
  defaultFileList?: UploadItem[]
  imagePreview?: boolean
  fileList?: UploadItem[]
  autoUpload?: boolean
  directory?: boolean
  accept?: string
  limit?: number | { maxCount: number; hideOnExceedLimit?: boolean }
  action?: string
  disabled?: boolean
  drag?: boolean
  multiple?: boolean
  tip?: string | React.ReactNode
  headers?: Record<string, string>
  data?: object | ((any: any) => object)
  name?: string | ((any: any) => string)
  progressProps?: Partial<ProgressProps>
  showUploadList?: boolean | CustomIconType
  customRequest?: (options: RequestOptions) => UploadRequestReturn | void
  renderUploadItem?: (
    originNode: ReactNode,
    file: UploadItem,
    fileList: UploadItem[],
  ) => ReactNode
  /**
   * @zh 自定义展示上传文件列表
   * @en Custom uploadList
   */
  renderUploadList?: (
    fileList: UploadItem[],
    uploadListProps: UploadListProps,
  ) => ReactNode
  /**
   * @zh 上传文件改变时的回调。文件开始上传，失败，成功时会触发。注意：如果需要实时获取文件的上传进度，请在 `onProgress` 中处理。
   * @en Callback when uploading state is changing
   */
  onChange?: (fileList: UploadItem[], file: UploadItem) => void
  onRemove?: (
    file: UploadItem,
    fileList: UploadItem[],
  ) => boolean | Promise<any>
  onProgress?: (file: UploadItem, e?: ProgressEvent) => void
  onReupload?: (file: UploadItem) => void
  onExceedLimit?: (files: File[], fileList: UploadItem[]) => void
  onPreview?: (file: UploadItem) => void
  beforeUpload?: (file: File, filesList: File[]) => boolean | Promise<any>
  onDrop?: (e: React.DragEvent) => void
  onDragOver?: (e: React.DragEvent) => void
  onDragLeave?: (e: React.DragEvent) => void
}

export type RequestOptions = Pick<
  UploadProps,
  "headers" | "name" | "data" | "action"
> & {
  /** 更新当前文件的上传进度 。percent: 当前上传进度百分比 */
  onProgress: (percent: number, event?: ProgressEvent) => void
  /** 上传成功后，调用onSuccess方法，传入的response参数将会附加到当前上传文件的reponse字段上 */
  onSuccess: (response?: object) => void
  /** 上传失败后，调用onError方法，传入的 response 参数将会附加到当前上传文件的response字段 */
  onError: (response?: object) => void
  /** 当前上传文件 */
  file: File
}

export interface UploadFileObj extends File {
  uid: string
}

export interface UploadFile<T = any> {
  uid: string
  size?: number
  name: string
  fileName?: string
  lastModified?: number
  lastModifiedDate?: Date
  url?: string
  status?: UploadStatus
  percent?: number
  thumbUrl?: string
  crossOrigin?: React.ImgHTMLAttributes<HTMLImageElement>["crossOrigin"]
  originFileObj?: UploadFileObj
  response?: T
  error?: any
  linkProps?: any
  type?: string
  xhr?: T
  preview?: string
}

export interface UploadListProps {
  listType?: string
  imagePreview?: boolean
  fileList?: UploadItem[]
  showUploadList?: boolean | CustomIconType
  progressProps?: Partial<ProgressProps>
  onUpload?: (file: UploadItem) => void
  /**
   * @zh 中止文件上传的回调
   * @en Callback when the cancel icon is clicked
   */
  onAbort?: (file: UploadItem) => void
  /**
   * @zh 点击删除文件时的回调。返回 false 或者 Promise.reject 的时候不会执行删除
   * @en Callback when the remove icon is clicked.Remove actions will be aborted when the return value is false or a Promise which resolve(false) or reject
   */
  onRemove?: (file: UploadItem) => void
  /**
   * @zh 重新上传的回调
   * @en Callback when the re-upload icon is clicked
   */
  onReupload?: (file: UploadItem) => void
  /**
   * @zh 点击预览时候的回调。
   * @en Callback when the preview icon is clicked
   */
  onPreview?: (file: UploadItem) => void
  /**
   * @zh 禁用
   * @en Whether to disable
   */
  disabled?: boolean
  renderUploadItem?: (
    originNode: ReactNode,
    file: UploadItem,
    fileList: UploadItem[],
  ) => ReactNode
  renderUploadList?: (
    fileList: UploadItem[],
    uploadListProps: Omit<UploadListProps, "renderUploadList">,
  ) => ReactNode
  prefixCls?: string
}

export type UploadItem = {
  /**
   * @zh 当前上传文件的唯一标示
   * @en Unique identifier
   */
  uid: string
  /**
   * @zh 当前上传文件的状态
   * @en Uploading status
   */
  status?: UploadStatus
  /**
   * @zh 文件对象
   * @en File Object
   */
  originFile?: File
  /**
   * @zh 上传进度百分比
   * @en Upload progress percentage
   */
  percent?: number
  /**
   * @zh 当前文件上传请求返回的响应
   * @en Response of upload request
   */
  response?: object
  /**
   * @zh 文件 url
   * @en File url
   */
  url?: string
  /**
   * @zh 文件名
   * @en File name
   */
  name?: string
  children?: ReactNode
}

export interface UploaderProps extends UploadProps {
  prefixCls?: string
  limit?: number
  hide?: boolean
  onFileStatusChange?: (file: UploadItem) => void
}

export type TriggerProps = {
  tip?: string | React.ReactNode
  multiple?: boolean
  accept?: string
  disabled?: boolean
  directory?: boolean
  drag?: boolean
  listType?: string
  onClick: () => void
  onDrop?: (e: React.DragEvent) => void
  onDragLeave?: (e: React.DragEvent) => void
  onDragOver?: (e: React.DragEvent) => void
  onDragFiles: (files: File[]) => void
  prefixCls?: string
}

export type UploadInstance = {
  /** 手动上传时，调用该方法，开始上传。不传参数时，会默认上传全部init状态的文件 */
  submit: (file?: UploadItem) => void
  /** 中止文件上传 */
  abort: (file: UploadItem) => void
  /** 重新上传文件 */
  reupload: (file: UploadItem) => void
}

export interface UploadProgressProps extends CustomIconType {
  listType?: UploadListProps["listType"]
  file: UploadItem
  progressProps?: Partial<ProgressProps>
  onReupload?: UploadListProps["onReupload"]
  onUpload?: UploadListProps["onUpload"]
  onAbort?: UploadListProps["onAbort"]
}
