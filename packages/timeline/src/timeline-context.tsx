import { createContext } from "react"
import { TimelineContextProps } from "./interface"

export const TimelineContext = createContext<TimelineContextProps | undefined>(
  undefined,
)

TimelineContext.displayName = "TimelineContext"
