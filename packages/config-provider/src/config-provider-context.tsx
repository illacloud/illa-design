import { ConfigProviderProps } from "./interface"

import { createContext } from "react"
import { def } from "./locale/def"

export const ConfigProviderContext = createContext<ConfigProviderProps>({
  locale: def,
} as ConfigProviderProps)

ConfigProviderContext.displayName = "ConfigProviderContext"
