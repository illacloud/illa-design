import { Meta, Story } from "@storybook/react"
import { Slider, SliderProps } from "../src"
import React from "react"
import { Space } from "@illa-design/space"

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

const Template: Story<SliderProps> = (args) => {
  const [value, setValue] = React.useState(30)
  const [value2, setValue2] = React.useState(0)
  const [value3, setValue3] = React.useState([0, 0])
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
        range
        style={{ width: 400 }}
      />
    </Space>
  )
}

export const Basic = Template.bind({})
