import { createContext } from "react"

type TimezoneContext = {
  utcOffset?: number
  timezone?: string
}

export const PickerContext = createContext<TimezoneContext>({})
