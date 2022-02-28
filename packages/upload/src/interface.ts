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
  listType?: string
  fileList?: UploadItem[]
  showUploadList?: boolean | CustomIconType
  progressProps?: Partial<ProgressProps>
  onUpload?: (file: UploadItem) => void
  onAbort?: (file: UploadItem) => void
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
  prefixCls?: string
}

export interface UploadProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "onProgress"> {
  defaultFileList?: UploadItem[]
  fileList?: UploadItem[]
  directory?: boolean
  accept?: string
  customRequest?: (options: RequestOptions) => UploadRequestReturn | void
  listType?: ListType
  showUploadList?: boolean | CustomIconType
  autoUpload?: boolean
  action?: string
  limit?: number
  disabled?: boolean
  drag?: boolean
  multiple?: boolean
  tip?: string | ReactNode
  headers?: object
  data?: object | ((any: any) => object)
  name?: string | ((any: any) => string)
  withCredentials?: boolean
  progressProps?: Partial<ProgressProps>
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
  // todo @zhengjiaiq 跟产品确定
  pictureUpload?: boolean
  placeholder?: string
}

export interface UploadInputElementProps extends UploadProps {
  onUploadItemStatusChange?: (item: UploadItem) => void
  updateTargetItem: (file?: UploadItem, e?: ProgressEvent) => void
}

export interface UploadItem {
  uid: string
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
}

export interface CustomIconType {
  previewIcon?: ReactNode
  removeIcon?: ReactNode
  fileIcon?: ReactNode
  reuploadIcon?: ReactNode
  cancelIcon?: ReactNode
  startIcon?: ReactNode
  errorIcon?: ReactNode
}

export interface FileList {
  fileList: UploadItem[]
}

export type UploadRefType = {
  upload: (file: UploadItem) => void
  reUpload: (file: UploadItem) => void
  abort: (file: UploadItem) => void
  deleteUpload: (file: UploadItem) => void
  dom: HTMLDivElement | null
}

export interface TriggerNodeProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onClick"> {
  disabled?: boolean
  tip?: string | ReactNode
  onFileDragged?: (file: File[]) => void
  onClick: () => void
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
}
