import { createContext } from "react"
import { AnchorContextType } from "./interface"
export const AnchorContext = createContext<AnchorContextType>({
  currentLink: "",
  onClickLink: () => { },
  addLink: () => { },
  removeLink: () => { },
})
