import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { SwitchProps, Switch } from "../src"
import { Space } from "@illa-design/space"
import { SuccessIcon, CloseIcon } from "@illa-design/icon"

export default {
  title: "DATA INPUT/Switch",
  component: Switch,
} as Meta

const Template: Story<SwitchProps> = (args) => {
  return (
    <Space size={"large"}>
      <Switch {...args} />
      <Switch
        {...args}
        checkedText={<SuccessIcon />}
        uncheckedText={<CloseIcon />}
        checkedIcon={<SuccessIcon />}
        uncheckedIcon={<CloseIcon />}
      />
    </Space>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  checkedText: "",
  uncheckedText: "",
}
