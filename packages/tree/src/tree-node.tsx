import { forwardRef } from "react"
import { NodeProps } from "./interface"

export const TreeNode = forwardRef<HTMLDivElement, NodeProps>((props, ref) => {
  const { title = "title", _level } = props
  return (
    <div>
      {title}
      {_level}
    </div>
  )
})
