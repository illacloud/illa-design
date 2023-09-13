import { Meta, StoryFn } from "@storybook/react"
import { Trigger, TriggerProps, Button, Space, Input } from "@illa-design/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Trigger",
  component: Trigger,
  argTypes: {
    colorScheme: {
      options: [
        "white",
        "blackAlpha",
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "cyan",
        "purple",
        "grayBlue",
      ],
      control: {
        type: "select",
      },
    },
  },
} as Meta

export const Basic: StoryFn<TriggerProps> = (args) => {
  return (
    <div
      style={{
        height: 500,
        overflow: "scroll",
        padding: 100,
      }}
    >
      <Space direction="vertical">
        <Space style={{ marginLeft: 70 }}>
          <Trigger {...args} position="top-start" content="TopLeft">
            <Button>TL</Button>
          </Trigger>
          <Trigger {...args} position="top" content="TOP">
            <Button>TOP</Button>
          </Trigger>
          <Trigger {...args} position="top-end" content="TR">
            <Button>TR</Button>
          </Trigger>
        </Space>
        <Space direction="horizontal" size="200px">
          <Space direction="vertical">
            <Trigger {...args} position="left-start" content="LT">
              <Button>LT</Button>
            </Trigger>
            <Trigger {...args} position="left" content="LEFT">
              <Button>LEFT</Button>
            </Trigger>
            <Trigger {...args} position="left-end" content="LB">
              <Button>LB</Button>
            </Trigger>
          </Space>
          <Space direction="vertical" style={{ marginLeft: 20 }}>
            <Trigger {...args} position="right-start" content="RT">
              <Button>RT</Button>
            </Trigger>
            <Trigger {...args} position="right" content="RIGHT">
              <Button>RIGHT</Button>
            </Trigger>
            <Trigger {...args} position="right-end" content="RB">
              <Button>RB</Button>
            </Trigger>
          </Space>
        </Space>
        <Space style={{ marginLeft: 70 }}>
          <Trigger {...args} position="bottom-start" content="BL">
            <Button onClick={(ignore) => {}}>BL</Button>
          </Trigger>
          <Trigger {...args} position="bottom" content="Test">
            <Button>BOTTOM</Button>
          </Trigger>
          <Trigger
            {...args}
            position="bottom-end"
            trigger="focus"
            content="A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or pro"
          >
            <Input />
          </Trigger>
        </Space>
      </Space>
    </div>
  )
}
