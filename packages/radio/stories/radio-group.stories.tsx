import { Meta, Story } from "@storybook/react"
import { Space } from "@illa-design/space"
import { RadioGroup, RadioGroupProps } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/RadioGroup",
  component: RadioGroup,
  argTypes: {
    colorScheme: {
      control: {
        type: "text",
      },
    },
  },
} as Meta

const Template: Story<RadioGroupProps<any>> = (args) => {
  return (
    <Space style={{ width: 300 }} direction="vertical">
      <RadioGroup {...args} options={["A", "B", "C", "D"]} />
      <RadioGroup {...args} options={["pear", "watermelon", "peach"]} />
      <RadioGroup {...args} options={[1, 2, 3]} />
      <RadioGroup {...args} options={["left", "right"]} />
      <RadioGroup {...args} options={["train", "plane"]} />
      <RadioGroup {...args} options={[1]} />
    </Space>
  )
}

export const Basic = Template.bind({})
