import { HTMLAttributes, MouseEvent, ReactNode } from "react"
import { BreadcrumbProps } from "@illa-design/breadcrumb"
import { BoxProps } from "@illa-design/theme"

export interface PageHeaderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title">,
    BoxProps {
  title?: ReactNode
  subTitle?: ReactNode
  breadcrumb?: BreadcrumbProps
  backIcon?: ReactNode | boolean
  extra?: ReactNode
  onBack?: (e: MouseEvent) => void
}
