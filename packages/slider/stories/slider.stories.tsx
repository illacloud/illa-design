import { Meta, StoryFn } from "@storybook/react"
import { Slider, SliderProps } from "../src"

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
    <>
      <div style={{ width: "200px", height: "200px" }}></div>
      <Slider value={6} />
      <div style={{ width: "50px", height: "200px" }}></div>
      <Slider value={[0, 2]} isRange={true} />
    </>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  checkedText: "",
  uncheckedText: "",
}
