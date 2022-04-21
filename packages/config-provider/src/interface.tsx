import { ReactNode } from "react"

export interface ConfigProviderProps {
  children?: ReactNode
  locale?: Locale
}

export interface Locale {
  typography: Record<string, string>
  timePicker: Record<string, string | string[]>
  popover: Record<string, string>
  empty: Record<string, string>
  pagination: Record<string, string>
  upload: Record<string, string>
  popConfirm: Record<string, string>
  calendar: Record<string, string>
  modal: Record<string, string>
  drawer: Record<string, string>
  datePicker: Record<string, string>
}
