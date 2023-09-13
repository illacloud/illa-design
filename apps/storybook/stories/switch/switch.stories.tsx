import { Meta, StoryFn } from "@storybook/react"
import { Space, CloseIcon, SwitchProps, Switch } from "@illa-design/react"
import { BiCheckbox, BiCheckboxChecked } from "react-icons/bi"

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
        checkedText={<BiCheckboxChecked />}
        uncheckedText={<CloseIcon />}
        checkedIcon={<BiCheckbox />}
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
