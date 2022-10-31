import { HTMLAttributes, ReactNode } from "react"
import { BoxProps } from "@illa-design/theme"

export type PaginationSize = "small" | "medium" | "large"

export interface PaginationProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange">,
    BoxProps {
  currentPage?: number
  pageSize?: number
  total?: number
  defaultCurrent?: number
  defaultPageSize?: number
  disabled?: boolean
  hideOnSinglePage?: boolean
  size?: PaginationSize
  showTotal?: boolean | ((total: number, range: number[]) => ReactNode)
  sizeCanChange?: boolean
  sizeOptions?: number[]
  simple?: boolean
  showJumper?: boolean
  placeholder?: string
  onChange?: (pageNumber: number, pageSize: number) => void
  onPageSizeChange?: (size: number, current: number) => void
  prevIcon?: ReactNode
  nextIcon?: ReactNode
  moreIcon?: ReactNode
}

export interface PageNumProps extends HTMLAttributes<HTMLSpanElement> {
  index: number | string
  selected: boolean
  moreIcon?: ReactNode
  isMoreIndex: boolean | undefined
  handleClick: (index: number) => void
  wholeDisable: boolean | undefined
  size: PaginationSize
}

export interface PageNumGroupProps extends HTMLAttributes<HTMLSpanElement> {
  total: number
  moreIcon?: ReactNode
  selectedIndex: number
  onCurPageIndexChanged: (index: number) => void
  wholeDisable: boolean | undefined
  size: PaginationSize
}

export interface JumperInputProps extends HTMLAttributes<HTMLSpanElement> {
  onEnterPress: (pageNum: number) => void
  wholeDisable: boolean | undefined
  size: PaginationSize
  totalPages: number
  currentPage: number
}

export interface SimplePaginationProps extends HTMLAttributes<HTMLSpanElement> {
  defaultSelectedPageIndex: number
  onCurrentChange: (pageNum: number) => void
  pageSum: number
  prevIcon?: ReactNode
  nextIcon?: ReactNode
  wholeDisabled: boolean
  size: PaginationSize
}

export interface PageSizeSelectorProps extends HTMLAttributes<HTMLSpanElement> {
  onPageSizeSelected: (pageSize: number) => void
  sizeOptions: number[]
  wholeDisable: boolean | undefined
  size: PaginationSize
}
