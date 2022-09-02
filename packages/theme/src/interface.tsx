import { SerializedStyles } from "@emotion/react"

export type BoxProps = SizeStyledProps &
  ShapeStyledProps &
  ColorStyledProps &
  PositionStyledProps &
  FlexStyledProps &
  CustomStyledProps &
  FontStyledProps

export interface SizeStyledProps {
  /**
   * width
   */
  w?: string
  /**
   * max-width
   */
  maxW?: string
  /**
   * min-width
   */
  minW?: string
  /**
   * height
   */
  h?: string
  /**
   * max-height
   */
  maxH?: string
  /**
   * min-height
   */
  minH?: string
  /**
   * padding
   */
  pd?: string
  /**
   * padding-top
   */
  pt?: string
  /**
   * padding-bottom
   */
  pb?: string
  /**
   * padding-left
   */
  pl?: string
  /**
   * padding-right
   */
  pr?: string
  /**
   * margin
   */
  mg?: string
  /**
   * margin-left
   */
  ml?: string
  /**
   * margin-right
   */
  mr?: string
  /**
   * margin-top
   */
  mt?: string
  /**
   * margin-bottom
   */
  mb?: string
}

export interface ShapeStyledProps {
  /**
   * border
   */
  bd?: string
  /**
   * border-radius
   */
  bdRadius?: string
  /**
   * border-top
   */
  bt?: string
  /**
   * border-left
   */
  bl?: string
  /**
   * border-bottom
   */
  bb?: string
  /**
   * border-right
   */
  br?: string
}

export interface ColorStyledProps {
  /**
   * border-color
   */
  bdColor?: string
  /**
   * background-color
   */
  bgColor?: string
  /**
   * color
   */
  c?: string
  /**
   * opacity
   */
  opac?: number
}

export interface PositionStyledProps {
  pos?: "absolute" | "relative" | "fixed" | "static"
  posT?: string
  posL?: string
  posB?: string
  posR?: string
  /**
   * over-flow,over-flow-x,over-flow-y
   */
  ov?: string
  ovX?: string
  ovY?: string
}

export interface FontStyledProps {
  /**
   * font-size
   */
  fs?: string
  /**
   * font-family
   */
  ff?: string
  /**
   * font-weight
   */
  fw?: string
}

export interface FlexStyledProps {
  alignItems?: string
  alignContent?: string
  justifyItems?: string
  justifyContent?: string
  flexWrap?: string
  flexDirection?: string
  flex?: string
  flexGrow?: string
  flexShrink?: string
  flexBasis?: string
  justifySelf?: string
  alignSelf?: string
  /**
   * order
   */
  o?: string
}

export interface CustomStyledProps {
  _css?: SerializedStyles
}
