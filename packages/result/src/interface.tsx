import { HTMLAttributes, ReactNode } from "react"

export type ResultStatus =
  | "success"
  | "error"
  | "info"
  | "warning"
  | "404"
  | "403"
  | "500"

export interface ResultProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  extra?: ReactNode
  icon?: ReactNode
  status?: ResultStatus
  subTitle?: ReactNode
  title?: ReactNode
}
