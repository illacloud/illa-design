import { createContext } from "react"
import { PickerContextProps } from "./interface"

export const PickerContext = createContext<PickerContextProps | undefined>(
  undefined,
)

PickerContext.displayName = "PickerContext"
