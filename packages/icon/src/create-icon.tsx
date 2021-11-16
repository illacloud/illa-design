// thx charkra ui
import { forwardRef, ReactElement } from "react"
import { Icon } from "./icon"
import { IconProps } from "./interface"

interface CreateIconOptions {
  /**
   * The icon `svg` viewBox
   * @default "0 0 24 24"
   */
  viewBox?: string
  /**
   * The `svg` path or group element
   * @type React.ReactElement | React.ReactElement[]
   */
  path?: ReactElement | ReactElement[]
  /**
   * If the has a single path, simply copy the path's `d` attribute
   */
  d?: string
  /**
   * Default props automatically passed to the component; overwriteable
   */
  defaultProps?: IconProps
}

export function createIcon(options: CreateIconOptions) {
  const {
    viewBox = "0 0 24 24",
    d: pathDefinition,
    path,
    defaultProps = {},
  } = options

  return forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <Icon ref={ref} viewBox={viewBox} {...defaultProps} {...props}>
      {path ?? <path fill="currentColor" d={pathDefinition} />}
    </Icon>
  ))
}