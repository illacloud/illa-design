import { Meta, StoryFn } from "@storybook/react"
import { Space, RateProps, Rate } from "@illa-design/react"

export default {
  title: "DATA INPUT/Rate",
  component: Rate,
  argTypes: {
    character: {
      control: false,
    },
  },
} as Meta

const Template: StoryFn<RateProps> = (args) => {
  return (
    <Space size={"large"} direction={"vertical"} style={{ marginTop: 50 }}>
      <Rate {...args} />
      <Rate {...args} tooltips={[]} />
    </Space>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  tooltips: ["👌", "❤️", "🤔", "😊", "😄"],
}
