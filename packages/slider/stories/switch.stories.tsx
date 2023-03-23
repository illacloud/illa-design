import { Meta, StoryFn } from "@storybook/react"
import { SliderProps, Slider } from "../src"
import { Space, CloseIcon } from "@illa-design/react"
import { BiCheckbox, BiCheckboxChecked } from "react-icons/all"

export default {
  title: "DATA INPUT/Slider",
  component: Slider,
  argTypes: {
    checkedIcon: {
      control: false,
    },
    uncheckedIcon: {
      control: false,
    },
  },
} as Meta

const Template: StoryFn<SliderProps> = (args) => {
  return (
    <Space size={"large"}>
      <Slider />
      <Slider />
    </Space>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  checkedText: "",
  uncheckedText: "",
}
