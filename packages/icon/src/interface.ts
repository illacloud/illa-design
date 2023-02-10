import { SVGAttributes } from "react"
import { BoxProps } from "@illa-design/theme"

export interface IconProps extends SVGAttributes<SVGElement>, BoxProps {
  size?: string
  spin?: boolean
}
