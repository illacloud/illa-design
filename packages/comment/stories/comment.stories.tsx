import { Meta, Story } from "@storybook/react"
import { Comment, CommentProps } from "../src"
import { Avatar } from "@illa-design/avatar"
import { css } from "@emotion/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Comment",
  component: Comment,
} as Meta

export const Basic: Story<CommentProps> = (args) => {
  const actions = (
    <div data-testid="test-action">
      <span className="custom-comment-action" key="heart" onClick={() => {}}>
        {`like   `}
      </span>
      <span className="custom-comment-action" key="star" onClick={() => {}}>
        {`star   `}
      </span>
      <span className="custom-comment-action" key="reply">
        {`reply   `}
      </span>
    </div>
  )
  return (
    <div
      css={css`
        width: 400px;
      `}
    >
      <Comment
        align={{ actions: "right" }}
        actions={actions}
        avatar={<Avatar />}
        author={<span>aoao</span>}
        content={<div>Comment body content.</div>}
        datetime="1 hour"
      />
    </div>
  )
}
