import { Meta, Story } from "@storybook/react"
import { SwitchProps, Switch } from "../src"
import { Space, CheckmarkIcon, CloseIcon } from "@illa-design/react"

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

const Template: StoryFn<SwitchProps> = (args) => {
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
