import { createContext } from "react"
import { ButtonGroupContextProps } from "./interface"

export const ButtonGroupContext = createContext<
  ButtonGroupContextProps | undefined
>(undefined)

ButtonGroupContext.displayName = "ButtonGroupContext"
