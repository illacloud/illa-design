import { createContext } from "react"
import { CheckboxGroupProps } from "./interface"

export const CheckboxGroupContext = createContext<CheckboxGroupProps>({})

CheckboxGroupContext.displayName = "CheckboxGroupContext"
