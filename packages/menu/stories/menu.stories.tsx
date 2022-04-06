import { Meta, Story } from "@storybook/react"
import { Menu, MenuProps } from "../src"

export default {
  title: "NAVIGATION/Menu",
  component: Menu,
} as Meta

const Template: Story<MenuProps> = (args) => {
  return (
      <Menu {...args}  />
  )
}

export const Basic = Template.bind({})
