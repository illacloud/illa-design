import { HTMLAttributes, ReactNode } from "react"
import { DropdownProps } from "@illa-design/dropdown"
import { BoxProps } from "@illa-design/theme"

export type RouteProps = {
  path?: string
  breadcrumbName?: string
  children?: {
    path?: string
    breadcrumbName?: string
  }[]
}

export interface BreadcrumbProps
  extends HTMLAttributes<HTMLDivElement>,
    BoxProps {
  separator?: string | ReactNode
  routes?: RouteProps[]
  maxCount?: number
}

export interface BreadcrumbItemProps
  extends HTMLAttributes<HTMLDivElement>,
    BoxProps {
  dropList?: ReactNode
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
