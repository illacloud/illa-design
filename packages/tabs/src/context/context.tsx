import { FC, createContext } from "react"
import { TabsProps } from "../interface"
import { ProviderProps, Inject } from "./interface"

export const TabContext = createContext<Inject & ProviderProps & TabsProps>(
  {} as Inject & ProviderProps & TabsProps,
)

export const TabsProvider: FC<ProviderProps & TabsProps> = (props) => {
  const { children, ...data } = props

  return (
    <TabContext.Provider value={{ ...data }}>{children}</TabContext.Provider>
  )
}

TabsProvider.displayName = "TabsProvider"
