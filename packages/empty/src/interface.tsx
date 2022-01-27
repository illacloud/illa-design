import { ReactNode, HTMLAttributes } from "react"

export interface EmptyProps extends HTMLAttributes<HTMLDivElement> {
  description?: ReactNode
  icon?: ReactNode
  imgSrc?: string
}
