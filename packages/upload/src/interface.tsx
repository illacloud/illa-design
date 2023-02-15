import React, { ReactNode } from "react"
import { ProgressProps } from "@illa-design/progress"
import { ButtonVariant } from "@illa-design/button"

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
  successIcon?: ReactNode
  fileName?: (file: UploadItem) => ReactNode
  progressRender?: (
    file: UploadItem,
    originDom: ReactNode,
  ) => React.ReactElement
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
  text?: string
  colorScheme?: string
  loading?: boolean
  variant?: ButtonVariant
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
  renderUploadList?: (
    fileList: UploadItem[],
    uploadListProps: UploadListProps,
  ) => ReactNode
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
  onProgress: (percent: number, event?: ProgressEvent) => void
  onSuccess: (response?: object) => void
  onError: (response?: object) => void
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
  fileList?: UploadItem[]
  showUploadList?: boolean | CustomIconType
  onUpload?: (file: UploadItem) => void
  onRemove?: (file: UploadItem) => void
  onReupload?: (file: UploadItem) => void
  onPreview?: (file: UploadItem) => void
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
  progressProps?: Partial<ProgressProps>
}

export type UploadItem = {
  uid: string
  status?: UploadStatus
  originFile?: File
  percent?: number
  response?: object
  url?: string
  name?: string
  children?: ReactNode
}

export interface UploaderProps extends UploadProps {
  limit?: number
  hide?: boolean
  children?: React.ReactNode
  onFileStatusChange?: (file: UploadItem) => void
}

export type TriggerNodeProps = {
  text?: string
  colorScheme?: string
  loading?: boolean
  variant?: ButtonVariant
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
}

export type UploadInstance = {
  submit: (file?: UploadItem) => void
  abort: (file: UploadItem) => void
  reupload: (file: UploadItem) => void
}

export type UploaderInstance = {
  upload: (file: UploadItem) => void
  reupload: (file: UploadItem) => void
  abort: (file?: UploadItem) => void
}

export interface UploadProgressProps extends CustomIconType {
  listType?: UploadListProps["listType"]
  file: UploadItem
  progressProps?: Partial<ProgressProps>
  onReupload?: UploadListProps["onReupload"]
  onUpload?: UploadListProps["onUpload"]
}

export interface InternalDataTransferItem extends DataTransferItem {
  isFile: boolean
  file: (cd: (file: File & { webkitRelativePath?: string }) => void) => void
  createReader: () => any
  fullPath: string
  isDirectory: boolean
  name: string
}

export interface UploadListItemProps extends UploadListProps {
  file: UploadItem
}
