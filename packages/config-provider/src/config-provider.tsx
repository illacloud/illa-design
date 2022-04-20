import { FC, useEffect } from "react"
import { ConfigProviderProps } from "./interface"
import { ConfigProviderContext } from "./config-provider-context"
import { setConfigProviderProps } from "./config"

export const ConfigProvider: FC<ConfigProviderProps> = (props) => {
  const { locale } = props
  useEffect(() => {
    setConfigProviderProps({ locale })
  }, [locale])
  return (
    <ConfigProviderContext.Provider value={{ locale }}>
      {props.children}
    </ConfigProviderContext.Provider>
  )
}

ConfigProvider.displayName = "ConfigProvider"
