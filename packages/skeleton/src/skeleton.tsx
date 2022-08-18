import { forwardRef, ReactElement } from "react"
import { isObject } from "@illa-design/system"
import {
  SkeletonImageProps,
  SkeletonProps,
  SkeletonTextProps,
} from "./interface"
import { Text } from "./text"
import { Image } from "./image"
import { skeletonImageStyle, skeletonStyle, skeletonTextStyle } from "./style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

function getProps(props: boolean | Object) {
  return isObject(props) ? props : {}
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (props, ref) => {
    const {
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
        <Text css={[skeletonTextStyle]} animation={animation} {...textProps} />
      )
    }

    function renderImage() {
      if (!image) {
        return null
      }
      const imageProps = getProps(image) as SkeletonImageProps

      return (
        <Image
          css={[skeletonImageStyle]}
          animation={animation}
          {...imageProps}
        />
      )
    }

    function renderSkeleton() {
      return (
        <div
          ref={ref}
          css={[skeletonStyle, applyBoxStyle(props)]}
          {...deleteCssProps(restProps)}
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
