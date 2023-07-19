// thx chakra ui
import { Children, forwardRef, ReactElement } from "react"
import { Icon } from "./icon"
import { IconProps } from "./interface"
import { iconContainerStyle } from "./style"
import { deleteCssProps } from "@illa-design/theme"

interface CreateIconOptions {
  /**
   * The icon `svg` viewBox
   * @default "0 0 24 24"
   */
  viewBox?: string
  /**
   * The svg title
   */
  title: string
  /**
   * The `svg` path or group element
   * @type ReactElement | ReactElement[]
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
  /**
   * The icon `svg` fill color
   * @default "none"
   */
  fill?: string
}

export function createIcon(options: CreateIconOptions) {
  const {
    viewBox = "0 0 24 24",
    d: pathDefinition,
    path,
    title,
    fill = "none",
    defaultProps = {},
  } = options
  // eslint-disable-next-line react/display-name
  return forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const { containerStyle, ...rest } = props

    return (
      <span css={[iconContainerStyle, containerStyle]}>
        <Icon
          ref={ref}
          viewBox={viewBox}
          fill={fill}
          {...defaultProps}
          {...rest}
        >
          <title>{title}</title>
          {path ? (
            Children.toArray(path)
          ) : (
            <path fill="currentColor" d={pathDefinition} />
          )}
        </Icon>
      </span>
    )
  })
}
