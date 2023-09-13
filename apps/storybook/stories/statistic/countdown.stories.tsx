import { Meta, StoryFn } from "@storybook/react"
import { Space, CountDownProps, Countdown } from "@illa-design/react"

export default {
  title: "DATA DISPLAY/Countdown",
  component: Countdown,
} as Meta

const Template: StoryFn<CountDownProps> = (args) => {
  return (
    <Space size={"large"}>
      <Countdown {...args} />
    </Space>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  title: "",
  value: Date.now() + 1000 * 20,
  now: Date.now(),
}
