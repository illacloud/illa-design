import { SVGAttributes } from "react"

export interface IconProps extends SVGAttributes<SVGElement> {
  measure?: string;
  spin?: boolean;
}
