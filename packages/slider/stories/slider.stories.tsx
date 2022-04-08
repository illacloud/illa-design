import { Meta, Story } from "@storybook/react"
import { Slider, SliderProps } from "../src"
import React from "react"

export default {
  title: "DATA INPUT/Slider",
  component: Slider,
} as Meta

const Template: Story<SliderProps> = (args) => {
  const [value, setValue] = React.useState(30)
  return (
    <Slider
      value={value}
      onChange={(val: number | number[]) => {
        setValue(val as number)
      }}
      style={{ width: 200 }}
    />
  )
}

export const Basic = Template.bind({})
