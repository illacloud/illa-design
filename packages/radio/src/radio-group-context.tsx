import { ChangeEvent, createContext } from "react"
import { RadioGroupContextProps } from "./interface"

interface extraProps {
  onChangeValue?: (value: any, event: ChangeEvent) => void
}

export const RadioGroupContext = createContext<
  (RadioGroupContextProps<any> & extraProps) | undefined
>(undefined)

RadioGroupContext.displayName = "RadioGroupContext"
