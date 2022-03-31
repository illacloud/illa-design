import { forwardRef, ReactElement } from "react"
import { isObject } from "@illa-design/system"
import {
  SkeletonProps,
  SkeletonImageProps,
  SkeletonTextProps,
} from "./interface"
import { Text } from "./text"
import { Image } from "./image"
import { skeletonStyle, skeletonImageStyle, skeletonTextStyle } from "./style"

function getProps(props: boolean | Object) {
  return isObject(props) ? props : {}
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (props, ref) => {
    const {
      style,
      className,
      animation,
      visible = true,
      image,
      text = true,
      children,
      ...restProps
    } = props

    function renderText() {
      if (!text) {
        return null
      }

      const textProps = getProps(text) as SkeletonTextProps

      return (
        <Text css={skeletonTextStyle} {...textProps} animation={animation} />
      )
    }

    function renderImage() {
      if (!image) {
        return null
      }
      const imageProps = getProps(image) as SkeletonImageProps

      return (
        <Image css={skeletonImageStyle} {...imageProps} animation={animation} />
      )
    }

    function renderSkeleton() {
      return (
        <div
          ref={ref}
          css={skeletonStyle}
          className={className}
          style={style}
          {...restProps}
        >
          {renderImage()}
          {renderText()}
        </div>
      )
    }

    return visible ? renderSkeleton() : (children as ReactElement)
  },
)

Skeleton.displayName = "Skeleton"
