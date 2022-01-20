import { createContext, FC } from "react"
import { ConfigProviderProps } from "./interface"

export const ConfigProviderContext = createContext<ConfigProviderProps | undefined>(undefined)

export const ConfigProvider: FC<ConfigProviderProps> = ((props) => {
  const {
    locale,
  } = props
  return <ConfigProviderContext.Provider value={{
    locale,
  }}>
    {props.children}
  </ConfigProviderContext.Provider>
})

ConfigProviderContext.displayName = "ConfigProviderContext"

ConfigProvider.displayName = "ConfigProvider"