import { FC } from "react"
import { ConfigProviderProps } from "./interface"
import { ConfigProviderContext } from "./config-provider-context"

export const ConfigProvider: FC<ConfigProviderProps> = (props) => {
  const { locale } = props
  return (
    <ConfigProviderContext.Provider value={{ locale }}>
      {props.children}
    </ConfigProviderContext.Provider>
  )
}

ConfigProvider.displayName = "ConfigProvider"
