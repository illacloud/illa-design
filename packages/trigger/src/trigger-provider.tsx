import { FC } from "react"
import { TriggerContext } from "./interface"
import { TriggerProviderContext } from "./trigger-context"

export const TriggerProvider: FC<TriggerContext> = (props) => {
  const { renderInBody, zIndex } = props

  return (
    <TriggerProviderContext.Provider value={{ renderInBody, zIndex }}>
      {props.children}
    </TriggerProviderContext.Provider>
  )
}

TriggerProvider.displayName = "TriggerProvider"
