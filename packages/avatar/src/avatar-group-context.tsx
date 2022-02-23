import { createContext } from "react"
import { AvatarGroupContextProps } from "./interface"

export const AvatarGroupContext = createContext<
  AvatarGroupContextProps | undefined
>(undefined)

AvatarGroupContext.displayName = "AvatarGroupContext"
