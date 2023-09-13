import { Meta, StoryFn } from "@storybook/react"
import {
  LikeFillIcon,
  Collapse,
  CollapseItem,
  CollapseProps,
} from "@illa-design/react"

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

export const Template: StoryFn<CollapseProps> = (args) => {
  return (
    <div>
      <Collapse
        defaultActiveKey={["1", "2"]}
        style={{
          width: "100px",
        }}
        {...args}
      >
        <CollapseItem
          header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"
          name="1"
        >
          header1
        </CollapseItem>

        <CollapseItem
          header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"
          name="2"
          disabled
        >
          header2
        </CollapseItem>

        <CollapseItem
          header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"
          name="3"
        >
          header3
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
              extra={<LikeFillIcon />}
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
          disabled
          header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"
          name="3"
        >
          Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get
        </CollapseItem>
      </Collapse>
    </div>
  )
}
