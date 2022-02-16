import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { SwitchProps, Switch } from "../src"
import { Space } from "@illa-design/space"
import { ImageDefaultIcon } from "@illa-design/icon"

export default {
  title: "DATA INPUT/Switch",
  component: Switch,
} as Meta

const Template: Story<SwitchProps> = (args) => <Switch {...args} />

export const Basic = Template.bind({})
