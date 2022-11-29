import { isArray } from "@illa-design/system"
import { SkeletonTextProps } from "./interface"
import { applyAnimation, applyLineStyle, textContainerStyle } from "./style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export function SkeletonText(props: SkeletonTextProps) {
  const { rows = 3, width = "80%", animation, ...restProps } = props

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
      />
    )
  })

  return (
    <ul
      css={[textContainerStyle, applyBoxStyle(props)]}
      {...deleteCssProps(restProps)}
    >
      {lines}
    </ul>
  )
}

SkeletonText.displayName = "SkeletonText"
