import { HTMLAttributes, ReactNode } from "react"

export type ImageSize = number | "small" | "medium" | "large"
export type ImageShape = "circle" | "square"

export interface SkeletonImageProps extends HTMLAttributes<HTMLDivElement> {
  shape?: ImageShape
  size?: ImageSize
  animation?: boolean
}

export interface SkeletonTextProps extends HTMLAttributes<HTMLUListElement> {
  rows?: number
  width?: number | string | Array<number | string>
  animation?: boolean
}

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  animation?: boolean
  visible?: boolean
  image?: SkeletonImageProps | boolean
  text?: SkeletonTextProps | boolean
  children?: ReactNode
}
