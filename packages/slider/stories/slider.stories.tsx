import { Meta, Story } from "@storybook/react"
import { Slider, SliderProps } from "../src"
import { useState } from "react"
import { Space } from "@illa-design/react"

export default {
  title: "DATA INPUT/Slider",
  component: Slider,
  argTypes: {
    range: {
      control: false,
    },
    value: {
      control: false,
    },
    defaultValue: {
      control: false,
    },
    marks: {
      control: false,
    },
  },
} as Meta

const Template: StoryFn<SliderProps> = (args) => {
  const [value, setValue] = useState(30)
  const [value2, setValue2] = useState(0)
  const [value3, setValue3] = useState([0, 0])
  return (
    <Space size={"large"} direction={args.vertical ? "horizontal" : "vertical"}>
      <Slider
        {...args}
        value={value}
        onChange={(val: number | number[]) => {
          setValue(val as number)
        }}
        style={{ width: 400 }}
      />
      <Slider
        {...args}
        value={value2}
        onChange={(val: number | number[]) => {
          setValue2(val as number)
        }}
        marks={{
          0: "0km",
          5: "5km",
          10: "10km",
          15: "15km",
        }}
        max={15}
        style={{ width: 400 }}
      />
      <Slider
        {...args}
        defaultValue={[0, 12]}
        value={value3}
        onChange={(val: number | number[]) => {
          setValue3(val as number[])
        }}
        range={{ draggableBar: true }}
        style={{ width: 400 }}
      />
    </Space>
  )
}

export const Basic = Template.bind({})
