import { createContext } from "react"
import { ThContextProps } from "./interface"

export const ThContext = createContext<ThContextProps | undefined>(undefined)

ThContext.displayName = "ThContext"
