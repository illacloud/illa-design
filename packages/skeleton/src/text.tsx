import { isArray } from "@illa-design/system"
import { SkeletonTextProps } from "./interface"
import { applyAnimation, applyLineStyle, textContainerStyle } from "./style"

export function Text(props: SkeletonTextProps) {
  const { rows = 3, width = "80%", animation = false, ...restProps } = props

  const lines = Array.from({ length: rows }, (_, idx) => {
    let lineWidth

    if (isArray(width)) {
      lineWidth = width[idx]
    } else if (idx === rows - 1) {
      lineWidth = width
    }

    return (
      <li
        key={idx}
        css={[applyLineStyle(lineWidth), applyAnimation(animation)]}
      ></li>
    )
  })

  return (
    <ul css={textContainerStyle} {...restProps}>
      {lines}
    </ul>
  )
}
