import { ConfigProviderProps } from "./interface"

let configProvider: ConfigProviderProps = {}

export function setConfigProviderProps(
  configProviderProps: ConfigProviderProps,
) {
  configProvider = {
    ...configProviderProps,
  }
}

export function getConfigProviderProps() {
  return configProvider
}
