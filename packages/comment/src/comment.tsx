/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { CommentProps } from "./interface"
import { applyCommentContainer } from "./style"

export const Comment = forwardRef<HTMLDivElement, CommentProps>(
  (props, ref) => {
    const { placeholder, ...rest } = props
    return (
      <div
        placeholder={placeholder}
        css={applyCommentContainer()}
        ref={ref}
        {...rest}
      >
        comment
      </div>
    )
  },
)

Comment.displayName = "Comment"
