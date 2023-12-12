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
  avatarContainerCSS,
  singleCommentContainerCss,
} from "./style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

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
        css={[commentContainerCss, applyBoxStyle(props)]}
        ref={ref}
        {...deleteCssProps(rest)}
      >
        <div css={singleCommentContainerCss}>
          <span css={avatarContainerCSS}>{avatar}</span>
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
