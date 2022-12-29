import { TriggerContext } from "./interface"
import { createContext, FC } from "react"

export const TriggerProviderContext = createContext<TriggerContext>({
  renderInBody: true,
  zIndex: 1,
} as TriggerContext)

export const TriggerProvider: FC<TriggerContext> = (props) => {
  const { renderInBody, zIndex } = props

  return (
    <TriggerProviderContext.Provider value={{ renderInBody, zIndex }}>
      {props.children}
    </TriggerProviderContext.Provider>
  )
}

TriggerProvider.displayName = "TriggerProvider"
