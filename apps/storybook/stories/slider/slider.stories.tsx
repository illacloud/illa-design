import { Meta, StoryFn } from "@storybook/react"
import { Slider, SliderProps } from "@illa-design/react"

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
      <div style={{ width: "100%", height: "200px" }}>
        <div style={{ width: "33%" }}></div>
        <div style={{ width: "67%" }}>
          <Slider value={6} />
        </div>
      </div>

      <div style={{ width: "50px", height: "200px" }}></div>
      <Slider value={[0, 2]} isRange={true} />
    </>
  )
}

export const Basic = Template.bind({})
