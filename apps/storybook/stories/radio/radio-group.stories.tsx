import { Meta, StoryFn } from "@storybook/react"
import { RadioGroup, RadioGroupProps, Space } from "@illa-design/react"

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

const Template: StoryFn<RadioGroupProps<any>> = (args) => {
  return (
    <Space direction="vertical">
      <RadioGroup w={"200px"} options={["A", "B", "C", "D"]} {...args} />
      <RadioGroup
        w={"280px"}
        options={["pear", "watermelon", "peach"]}
        {...args}
      />
      <RadioGroup w={"280px"} options={[1, 2, 3]} {...args} />
      <RadioGroup w={"280px"} options={["left", "right"]} {...args} />
      <RadioGroup w={"280px"} options={["train", "plane"]} {...args} />
      <RadioGroup w={"280px"} options={[1]} {...args} />
    </Space>
  )
}

export const Basic = Template.bind({})
