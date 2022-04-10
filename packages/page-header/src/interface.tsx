import { HTMLAttributes, MouseEvent, ReactNode } from "react"
// import {breadcrumb} from '../../breadcrumb/'

export interface PageHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode
  subTitle?: ReactNode
  // breadcrumb: 
  breadcrumb?: ReactNode
  backIcon?: ReactNode | boolean
  extra?: ReactNode
  onBack?: (e: MouseEvent) => void
}
