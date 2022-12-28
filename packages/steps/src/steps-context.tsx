import { createContext } from "react"
import { StepsProps } from "./interface"

export const StepsContext = createContext<StepsProps | undefined>(undefined)

StepsContext.displayName = "StepsContext"
