import { createContext } from "react"
import { TableContextProps } from "./interface"

export const TableContext = createContext<TableContextProps | undefined>(
  undefined,
)

TableContext.displayName = "TableContext"
