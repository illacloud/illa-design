import { Meta, StoryFn } from "@storybook/react"
import { Spin, SpinProps } from "@illa-design/react"
import { css } from "@emotion/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "Feedback/Spin",
  component: Spin,
  argTypes: {
    icon: {
      control: false,
    },
    element: {
      control: false,
    },
    tip: {
      control: {
        type: "text",
      },
    },
  },
} as Meta

const Template: StoryFn<SpinProps> = (props) => {
  return (
    <Spin {...props}>
      <div
        css={css`
          width: 200px;
          height: 200px;
          background-color: #004444;
        `}
      />
    </Spin>
  )
}

export const Basic = Template.bind({})
