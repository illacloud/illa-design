import { HTMLAttributes, ReactNode } from "react"
import { BoxProps } from "@illa-design/theme"

export type ImageSize = number | "small" | "medium" | "large"
export type ImageShape = "circle" | "square"

export interface SkeletonImageProps
  extends HTMLAttributes<HTMLDivElement>,
    BoxProps {
  shape?: ImageShape
  size?: ImageSize
  animation?: boolean
}

export interface SkeletonTextProps
  extends HTMLAttributes<HTMLUListElement>,
    BoxProps {
  rows?: number
  width?: number | string | Array<number | string>
  animation?: boolean
}

export interface SkeletonProps
  extends HTMLAttributes<HTMLDivElement>,
    BoxProps {
  animation?: boolean
  visible?: boolean
  image?: SkeletonImageProps | boolean
  text?: SkeletonTextProps | boolean
  children?: ReactNode
}
