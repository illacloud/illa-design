import { Meta, Story } from "@storybook/react"
import { Collapse, CollapseProps } from "../src"
import { ShareIcon } from "@illa-design/icon"

export default {
  title: "DATA DISPLAY/Collapse",
  component: Collapse,
} as Meta

const CollapseItem = Collapse.Item

export const Template: Story<CollapseProps> = (args) => {
  return (
    <>
      <Collapse
        defaultActiveKey={["1", "2"]}
        style={{ maxWidth: 1000, marginBottom: 20 }}
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
      <Collapse
        {...args}
        defaultActiveKey={["1", "2"]}
        style={{ maxWidth: 1000 }}
      >
        <CollapseItem
          header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"
          name="1"
        >
          <Collapse defaultActiveKey={"1.1"} {...args}>
            <CollapseItem
              header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get."
              name="1.1"
              extra={<ShareIcon />}
            >
              Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get
            </CollapseItem>
            <CollapseItem
              header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"
              name="1.2"
            >
              Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get
            </CollapseItem>
          </Collapse>
        </CollapseItem>
        <CollapseItem
          header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"
          name="2"
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
    </>
  )
}

export const Basic = Template.bind({})
