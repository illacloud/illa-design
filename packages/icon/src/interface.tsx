import { SVGAttributes } from "react"
import { SerializedStyles } from "@emotion/react"

export interface IconProps extends SVGAttributes<SVGElement> {
  size?: string
  spin?: boolean
  _css?: SerializedStyles
}
