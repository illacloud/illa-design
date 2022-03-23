import { HTMLAttributes, ReactNode } from "react"
import { ProgressProps } from "@illa-design/progress"

export type UploadStatus = "init" | "uploading" | "done" | "error"
export type ListType = "text" | "picture-list"
export type RequestOptions = Pick<
  UploadProps,
  "headers" | "name" | "data" | "withCredentials" | "action"
> & {
  onProgress: (percent: number, event?: ProgressEvent) => void
  onSuccess: (response?: object) => void
  onError: (response?: object) => void
  file: File
}

export class UploadRequestReturn {
  abort?: () => void;
  [key: string]: any
}

export interface UploadListProps {
  onAbort: (file: UploadItem) => void
  onRemove: (file: UploadItem) => void
  onReupload: (file: UploadItem) => void
  disabled?: boolean
}

export interface UploadProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "onProgress"> {
  defaultFileList?: UploadItem[]
  // controlled
  fileList?: UploadItem[]
  // input props
  directory?: boolean
  action?: string
  accept?: string
  multiple?: boolean
  headers?: object
  data?: object | ((any: any) => object)
  name?: string | ((any: any) => string)
  withCredentials?: boolean
  customRequest?: (options: RequestOptions) => UploadRequestReturn | void
  // ui
  listType?: ListType
  showUploadList?: boolean | CustomIconType
  autoUpload?: boolean
  disabled?: boolean
  drag?: boolean
  tip?: string | ReactNode
  limit?: number

  // action
  renderUploadList?: (
    fileList: UploadItem[],
    uploadListProps: UploadListProps,
  ) => ReactNode
  beforeUpload?: (file: File, filesList: File[]) => boolean | Promise<any>
  onChange?: (fileList: UploadItem[], file: UploadItem) => void
  onRemove?: (file: UploadItem, fileList: UploadItem[]) => void | Promise<any>
  onProgress?: (file: UploadItem, e?: ProgressEvent) => void
  onReupload?: (file: UploadItem) => void
  onExceedLimit?: (files: File[], fileList: UploadItem[]) => void
  pictureUpload?: boolean
  placeholder?: string
}

export interface UploadInputElementProps extends UploadProps {
  onUploadItemStatusChange?: (item: UploadItem) => void
  updateTargetItem: (file?: UploadItem, e?: ProgressEvent) => void
  getFileList: () => UploadItem[]
}

export interface UploadItem {
  uid?: string
  status: UploadStatus
  originFile: File
  percent: number
  response?: object
  url?: string
  name: string
}

export interface FileListItemProps extends HTMLAttributes<HTMLSpanElement> {
  item: UploadItem
  deleteUpload: (file: UploadItem) => void
  reUpload: (file: UploadItem) => void
  icons?: CustomIconType
}

export interface CustomIconType {
  removeIcon?: ReactNode
  fileIcon?: ReactNode
  reuploadIcon?: ReactNode
}

export interface FileList {
  fileList: UploadItem[]
}

export type UploadRefType = {
  dom: HTMLDivElement | null
  reUpload: (file: UploadItem) => void
  deleteUpload: (file: UploadItem) => void
  abort: (file: UploadItem) => void
}

export interface TriggerNodeProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onClick"> {
  disabled?: boolean
  tip?: string | ReactNode
  onFileDragged?: (file: File[]) => void
  onClick: () => void
  accept?: string
}

export interface ChildrenNodeProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onClick"> {
  disabled?: boolean
  tip?: string | ReactNode
  drag?: boolean
  autoUpload?: boolean
  onFileDragged?: (file: File[]) => void
  onClick?: () => void
  handleClickSelectedButton?: () => void
  handleClickUploadButton?: () => void
  pictureUpload?: boolean
  currentUploadItem?: UploadItem
  accept?: string
}
