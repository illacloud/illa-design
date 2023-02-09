import { createContext } from "react"
import { MenuContextProps } from "./interface"

export const MenuContext = createContext<MenuContextProps>({})

MenuContext.displayName = "MenuContext"
