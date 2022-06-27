import { HTMLAttributes, MouseEvent, ReactNode } from "react"
import { BreadcrumbProps } from "@illa-design/breadcrumb"
import { SerializedStyles } from "@emotion/react"

export interface PageHeaderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  _css?: SerializedStyles
  title?: ReactNode
  subTitle?: ReactNode
  breadcrumb?: BreadcrumbProps
  backIcon?: ReactNode | boolean
  extra?: ReactNode
  onBack?: (e: MouseEvent) => void
}
