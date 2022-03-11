/** @jsxImportSource @emotion/react */
import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Tabs, TabsProps } from "../src"
import { TabPane } from "../src/tab-pane"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Tabs",
  component: Tabs,
  argTypes: {
    icon: {
      control: false,
    },
    element: {
      control: false,
    },
    animated: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta

const Template: Story<TabsProps> = (props) => {
  return (
    <Tabs {...props}>
      <TabPane key={"yyyy"} title={"tab 01"}>
        "tab content 01"
      </TabPane>
      <TabPane key={"2"} title={"tab 02000000"}>
        "tab content 02"
      </TabPane>
      <TabPane key={"3"} title={"tab 03"}>
        "tab content 03"
      </TabPane>
      <TabPane key={"4"} title={"tab 04"}>
        "tab content 03"
      </TabPane>
      <TabPane key={"5"} title={"tab 05"}>
        "tab content 03"
      </TabPane>
      <TabPane key={"s6"} title={"tab 03"}>
        "tab content 03"
      </TabPane>
      <TabPane key={"7"} title={"tab 04"}>
        "tab content 03"
      </TabPane>
    </Tabs>
  )
}

export const Basic = Template.bind({})
