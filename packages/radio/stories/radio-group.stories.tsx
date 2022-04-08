import { Meta, Story } from "@storybook/react"
import { Space } from "@illa-design/space"
import { RadioGroup, RadioGroupProps } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/RadioGroup",
  component: RadioGroup,
  argTypes: {
    colorScheme: {
      options: [
        "white",
        "blackAlpha",
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "cyan",
        "purple",
        "grayBlue",
      ],
      control: {
        type: "select",
      },
    },
  },
} as Meta

const Template: Story<RadioGroupProps<any>> = (args) => {
  return (
    <div>
      <Space direction="vertical">
        <RadioGroup {...args} options={["A", "B", "C", "D"]} />
        <RadioGroup {...args} options={[1, 2, 3]} />
        <RadioGroup {...args} options={[1]} />
      </Space>
    </div>
  )
}

export const Basic = Template.bind({})
