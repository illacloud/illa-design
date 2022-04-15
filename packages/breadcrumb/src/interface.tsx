import { HTMLAttributes, ReactNode } from "react"
import { SerializedStyles } from "@emotion/react"
import { DropdownProps } from "@illa-design/dropdown"

export type RouteProps = {
  path?: string
  breadcrumbName?: string
  children?: {
    path?: string
    breadcrumbName?: string
  }[]
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
  separator?: string | ReactNode
  routes?: RouteProps[]
  maxCount?: number
  _css?: SerializedStyles
}

export interface BreadcrumbItemProps extends HTMLAttributes<HTMLDivElement> {
  _css?: SerializedStyles
  droplist?: ReactNode
  dropdownProps?: DropdownProps
}

export interface BreadcrumbContextProps {
  isCurrent: boolean
  path?: string
  breadcrumbName?: string
  children?: {
    path?: string
    breadcrumbName?: string
  }[]
}
