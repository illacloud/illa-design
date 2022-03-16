import { HTMLAttributes, ReactNode } from "react"

export interface RouteProps {
  path: string
  breadcrumbName?: string
  children: {
    path: string
    breadcrumbName?: string
  }[]
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
  separator?: string | ReactNode
  routes?: RouteProps
}

export interface BreadcrumbItemProps extends HTMLAttributes<HTMLSpanElement> {
  // droplist?:
}
