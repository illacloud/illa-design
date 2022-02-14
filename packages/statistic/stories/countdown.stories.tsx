import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { CountDownProps, Countdown } from "../src"
import { Space } from "@illa-design/space"

export default {
  title: "DATA DISPLAY/Countdown",
  component: Countdown,
} as Meta

const Template: Story<CountDownProps> = (args) => {
  return (
    <Space size={"large"}>
      <Countdown {...args} />
      <Countdown
        {...args}
        onChange={(num) => console.log(num)}
        onFinish={() => {
          console.log("finish!")
        }}
      />
    </Space>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  title: "",
  // value: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30,
  value: Date.now() + 1000 * 20,
  now: Date.now(),
}
