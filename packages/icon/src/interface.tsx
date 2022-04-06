import { SVGAttributes } from "react"
import { SerializedStyles } from "@storybook/theming"

export interface IconProps extends SVGAttributes<SVGElement> {
  size?: string
  spin?: boolean
  _css?: SerializedStyles
}
