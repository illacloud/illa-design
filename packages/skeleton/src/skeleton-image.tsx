import { SkeletonImageProps } from "./interface"
import { applyAnimation, applyImageStyle } from "./style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export function SkeletonImage(props: SkeletonImageProps) {
  const { shape = "circle", size = "medium", animation, ...restProps } = props

  return (
    <div
      css={[
        applyImageStyle({ shape, size }),
        applyAnimation(animation),
        applyBoxStyle(props),
      ]}
      {...deleteCssProps(restProps)}
    />
  )
}

SkeletonImage.displayName = "SkeletonImage"
