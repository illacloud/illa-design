import { ConfigProviderProps } from "./interface"
import * as React from "react"
import { createContext } from "react"
import { def } from "./locale/def"

export const ConfigProviderContext = createContext<ConfigProviderProps>({ locale: def } as ConfigProviderProps)

ConfigProviderContext.displayName = "ConfigProviderContext"
