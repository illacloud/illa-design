import { Meta, Story } from "@storybook/react"
import { Trigger, TriggerProps } from "../src"

import { Button } from "@illa-design/button"
import { Space } from "@illa-design/space"
import { Input } from "@illa-design/input"

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

export const Basic: Story<TriggerProps> = (args) => {
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
          <Trigger {...args} position="tl" content="TopLeft">
            <Button>TL</Button>
          </Trigger>
          <Trigger {...args} position="top" content="TOP">
            <Button>TOP</Button>
          </Trigger>
          <Trigger {...args} position="tr" content="TR">
            <Button>TR</Button>
          </Trigger>
        </Space>
        <Space direction="horizontal" size="200px">
          <Space direction="vertical">
            <Trigger {...args} position="lt" content="LT">
              <Button>LT</Button>
            </Trigger>
            <Trigger {...args} position="left" content="LEFT">
              <Button>LEFT</Button>
            </Trigger>
            <Trigger {...args} position="lb" content="LB">
              <Button>LB</Button>
            </Trigger>
          </Space>
          <Space direction="vertical" style={{ marginLeft: 20 }}>
            <Trigger {...args} position="rt" content="RT">
              <Button>RT</Button>
            </Trigger>
            <Trigger {...args} position="right" content="RIGHT">
              <Button>RIGHT</Button>
            </Trigger>
            <Trigger {...args} position="rb" content="RB">
              <Button>RB</Button>
            </Trigger>
          </Space>
        </Space>
        <Space style={{ marginLeft: 70 }}>
          <Trigger {...args} position="bl" content="BL">
            <Button
              onClick={(e) => {
                console.log(e)
              }}
            >
              BL
            </Button>
          </Trigger>
          <Trigger {...args} position="bottom" content="Test">
            <Button>BOTTOM</Button>
          </Trigger>
          <Trigger
            {...args}
            position="br"
            content="A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or pro"
          >
            <Button>BR</Button>
          </Trigger>
        </Space>
      </Space>
    </div>
  )
}
