import { TriggerContext } from "./interface"
import { createContext, FC, useEffect } from "react"

export const TriggerProviderContext = createContext<TriggerContext>({
  renderInBody: true,
} as TriggerContext)

export const TriggerProvider: FC<TriggerContext> = (props) => {
  const { renderInBody } = props

  return (
    <TriggerProviderContext.Provider value={{ renderInBody }}>
      {props.children}
    </TriggerProviderContext.Provider>
  )
}

TriggerProvider.displayName = "TriggerProvider"
