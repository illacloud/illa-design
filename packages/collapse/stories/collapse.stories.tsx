import { Meta, Story } from "@storybook/react"
import { Collapse, CollapseProps } from "../src"

export default {
  title: "DATA DISPLAY/Collapse",
  component: Collapse,
  argTypes: {
    expandIcon: {
      control: false,
    },
    activeKey: {
      control: false,
    },
    defaultActiveKey: {
      control: false,
    },
  },
} as Meta

const CollapseItem = Collapse.Item

export const Template: Story<CollapseProps> = (args) => {
  return (
    <Collapse
      defaultActiveKey={["1", "2"]}
      style={{ maxWidth: 1180 }}
      {...args}
    >
      <CollapseItem
        header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"
        name="1"
      >
        Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get
      </CollapseItem>

      <CollapseItem
        header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"
        name="2"
        disabled
      >
        Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get
      </CollapseItem>

      <CollapseItem
        header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"
        name="3"
      >
        Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get
      </CollapseItem>
    </Collapse>
  )
}
