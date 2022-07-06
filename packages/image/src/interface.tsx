import { ImgHTMLAttributes, ReactNode } from "react"

export interface ImageProps extends ImgHTMLAttributes<HTMLDivElement> {
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down"
  fallback?: ReactNode
  fallbackSrc?: string
  radius?: string
}
