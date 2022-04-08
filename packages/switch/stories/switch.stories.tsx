import { Meta, Story } from "@storybook/react"
import { SwitchProps, Switch } from "../src"
import { Space } from "@illa-design/space"
import { CheckmarkIcon, CloseIcon } from "@illa-design/icon"

export default {
  title: "DATA INPUT/Switch",
  component: Switch,
  argTypes: {
    checkedIcon: {
      control: false,
    },
    uncheckedIcon: {
      control: false,
    },
  },
} as Meta

const Template: Story<SwitchProps> = (args) => {
  return (
    <Space size={"large"}>
      <Switch {...args} />
      <Switch
        {...args}
        checkedText={<CheckmarkIcon />}
        uncheckedText={<CloseIcon />}
        checkedIcon={<CheckmarkIcon />}
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
