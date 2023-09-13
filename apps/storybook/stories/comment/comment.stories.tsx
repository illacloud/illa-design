import { Meta, StoryFn } from "@storybook/react"
import { Avatar, Comment, CommentProps } from "@illa-design/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Comment",
  component: Comment,
  argTypes: {
    author: {
      control: {
        type: "text",
      },
    },
    datetime: {
      control: {
        type: "text",
      },
    },
  },
} as Meta

export const Basic: StoryFn<CommentProps> = (args) => {
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
    <div>
      <Comment
        align={{ actions: "right" }}
        actions={actions}
        avatar={<Avatar />}
        author={<span>aoao</span>}
        content={<div>Comment body content.</div>}
        datetime="1 hour"
        {...args}
      />

      <Comment
        align={{ actions: "right" }}
        actions={actions}
        avatar={<Avatar />}
        author={"aoao"}
        content={<div>Comment body content.</div>}
        datetime="1 hour"
        {...args}
      >
        <Comment
          align={{ actions: "right" }}
          actions={actions}
          avatar={<Avatar />}
          author={"aoao"}
          content={<div>Comment body content.</div>}
          datetime="1 hour"
          {...args}
        >
          {" "}
          <Comment
            align={{ actions: "right" }}
            actions={actions}
            avatar={<Avatar />}
            author={"aoao"}
            content={<div>Comment body content.</div>}
            datetime="1 hour"
          />
        </Comment>
        <Comment
          align={{ actions: "right" }}
          actions={actions}
          avatar={<Avatar />}
          author={"aoao"}
          content={<div>Comment body content.</div>}
          datetime="1 hour"
        />
      </Comment>
    </div>
  )
}
