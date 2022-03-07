import * as React from "react"
import { createContext } from "react"
import { RowContextProps } from "./interface"

export const RowContext = createContext<RowContextProps | undefined>(undefined)

RowContext.displayName = "RowContext"
