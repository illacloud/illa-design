import { forwardRef, useMemo } from "react"
import { isObject } from "@illa-design/system"
import {
  SkeletonImageProps,
  SkeletonProps,
  SkeletonTextProps,
} from "./interface"
import { SkeletonText } from "./skeleton-text"
import { SkeletonImage } from "./skeleton-image"
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

    const renderText = useMemo(() => {
      if (!text) {
        return <></>
      }
      const textProps = getProps(text) as SkeletonTextProps

      return (
        <SkeletonText
          css={[skeletonTextStyle]}
          animation={animation}
          {...textProps}
        />
      )
    }, [animation, text])

    const renderImage = useMemo(() => {
      if (!image) {
        return null
      }
      const imageProps = getProps(image) as SkeletonImageProps

      return (
        <SkeletonImage
          css={[skeletonImageStyle]}
          animation={animation}
          {...imageProps}
        />
      )
    }, [animation, image])

    return visible ? (
      <div
        ref={ref}
        css={[skeletonStyle, applyBoxStyle(props)]}
        {...deleteCssProps(restProps)}
      >
        {renderImage}
        {renderText}
      </div>
    ) : (
      <>{children}</>
    )
  },
)

Skeleton.displayName = "Skeleton"
