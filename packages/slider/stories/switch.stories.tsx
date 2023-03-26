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
    <>
      <div style={{ width: "200px", height: "200px" }}></div>
      <Slider value={6} />
      <div style={{ width: "50px", height: "200px" }}></div>
      <Slider value={[0, 2]} isRange={true} />
      <div style={{ width: "50px", height: "200px" }}></div>
      <Slider value={[0, 2]} isRange={{ draggableBar: true }} />
      <div style={{ width: "50px", height: "200px" }}></div>
    </>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  checkedText: "",
  uncheckedText: "",
}
