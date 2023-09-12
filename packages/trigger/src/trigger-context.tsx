import { TriggerContext } from "./interface"
import { createContext } from "react"

export const TriggerProviderContext = createContext<TriggerContext>({
  renderInBody: true,
  zIndex: 5,
} as TriggerContext)

TriggerProviderContext.displayName = "TriggerProviderContext"
