import { forwardRef } from "react"
import { CommentProps } from "./interface"
import {
  applyActionCss,
  applyAuthorDatetimeContainer,
  authorTextCss,
  childrenCss,
  commentContainerCss,
  contentContainerCss,
  contentCss,
  dateTimeTextCss,
  singleCommentContainerCss,
} from "./style"

export const Comment = forwardRef<HTMLDivElement, CommentProps>(
  (props, ref) => {
    const {
      placeholder,
      avatar,
      actions,
      author,
      datetime,
      children,
      content,
      align,
      ...rest
    } = props

    let dateTimeAlign
    let actionAlign
    if (typeof align === "object") {
      dateTimeAlign = align?.datetime ?? "left"
      actionAlign = align?.actions ?? "left"
    } else {
      dateTimeAlign = align ?? "left"
      actionAlign = align ?? "left"
    }
    return (
      <div
        placeholder={placeholder}
        css={commentContainerCss}
        ref={ref}
        {...rest}
      >
        <div css={singleCommentContainerCss}>
          <span>{avatar}</span>
          <div css={contentContainerCss}>
            <div css={applyAuthorDatetimeContainer(dateTimeAlign)}>
              <span css={authorTextCss}> {author}</span>
              <span css={[dateTimeTextCss]}>{datetime}</span>
            </div>
            <span css={contentCss}>{content}</span>
            <span css={applyActionCss(actionAlign)}> {actions}</span>
          </div>
        </div>
        <div css={childrenCss}>{children}</div>
      </div>
    )
  },
)

Comment.displayName = "Comment"
