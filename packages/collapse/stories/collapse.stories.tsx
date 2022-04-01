import { Meta, Story } from "@storybook/react"
import { Collapse, CollapseProps } from "../src"

export default {
  title: "DATA DISPLAY/Collapse",
  component: Collapse,
} as Meta

const Template: Story<CollapseProps> = (args) => {
  return <Collapse {...args} />
}

export const Basic = Template.bind({})
