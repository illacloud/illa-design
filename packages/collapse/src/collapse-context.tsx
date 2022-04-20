import { createContext } from "react"
import { CollapseContextProps } from "./interface"
import { CaretRightIcon } from "@illa-design/icon"

export const CollapseContext = createContext<CollapseContextProps>({
  expandIconPosition: "left",
  expandIcon: <CaretRightIcon />,
  activeKeys: [],
  onToggle: () => {},
})

CollapseContext.displayName = "CollapseContext"
