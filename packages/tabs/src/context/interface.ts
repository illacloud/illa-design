import { ReactNode } from "react"

export interface ProviderProps {
  selectedKey?: string
  handleSelectTab: (key: string | undefined) => void
  handleDeleteTab: (key: string | undefined) => void
}

export interface Inject {
  children?: ReactNode
}
