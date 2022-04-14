import { createContext } from "react"
import { BreadcrumbContextProps } from "./interface"

export const BreadcrumbContext = createContext<BreadcrumbContextProps>({
  isCurrent: false,
  path: "",
  breadcrumbName: "",
  children: [],
})

BreadcrumbContext.displayName = "BreadcrumbContext"
