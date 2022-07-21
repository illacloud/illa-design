import { ReactNode, HTMLAttributes } from "react"

export interface EmptyProps extends HTMLAttributes<HTMLDivElement> {
  description?: ReactNode
  divideSize?: string
  paddingVertical?: string
  icon?: ReactNode
  imgSrc?: string
}
