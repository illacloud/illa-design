import { createContext } from "react"
import { CheckboxGroupContextProps } from "./interface"

export const CheckboxGroupContext = createContext<CheckboxGroupContextProps>({
  isGroup: false,
  checkboxGroupValue: [],
  onGroupChange: () => {},
  registerValue: () => {},
  unRegisterValue: () => {},
})

CheckboxGroupContext.displayName = "CheckboxGroupContext"
