import { isArray } from "@illa-design/system"
import { SkeletonImageProps } from "./interface"
import { applyAnimation, applyImageStyle } from "./style"

export function Image(props: SkeletonImageProps) {
  const { shape = "circle", size = "medium", animation, ...restProps } = props

  return (
    <div
      css={[applyImageStyle({ shape, size }), applyAnimation(animation)]}
      {...restProps}
    ></div>
  )
}
