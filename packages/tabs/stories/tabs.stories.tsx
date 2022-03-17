import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Tabs, TabsProps } from "../src"
import { TabPane } from "../src"
import { ReactNode } from "react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Tabs",
  component: Tabs,
  argTypes: {
    addIcon: {
      control: false,
    },
    deleteIcon: {
      control: false,
    },
    activeKey: {
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
  const tabArr: {
    key: string
    title: string | ReactNode
    content: string
    disabled?: boolean
  }[] = [
    {
      key: "2",
      title: "tab 0sssss2",
      content: "tab content 02",
    },
    { key: "3", title: "tab 03", content: "tab content 03", disabled: true },
    { key: "4", title: "tab 04", content: "tab content 04" },
    {
      key: "6",
      title: "tab 0sssss2",
      content: "tab content 02",
    },
    { key: "7", title: "tab 03", content: "tab content 03" },
    { key: "8", title: "tab 04", content: "tab content 04" },
    {
      key: "9",
      title: "tab 0sssss2",
      content: "tab content 02",
    },
    { key: "10", title: "tab 03", content: "tab content 03" },
    { key: "11", title: "tab 04", content: "tab content 04" },
    {
      key: "12",
      title: "tab 0sssss2",
      content: "tab content 02",
    },
    { key: "13", title: "tab 03", content: "tab content 03" },
    { key: "14", title: "tab 04", content: "tab content 04" },
    {
      key: "15",
      title: "tab 0sssss2",
      content: "tab content 02",
    },
    { key: "16", title: "tab 03", content: "tab content 03" },
    { key: "17", title: "tab 04", content: "tab content 04" },
  ]

  return (
    <Tabs style={{ width: 600, height: 400 }} {...props}>
      {tabArr.map((item, index) => {
        return (
          <TabPane title={item.title} key={item.key} disabled={item.disabled}>
            {item.content}
          </TabPane>
        )
      })}
    </Tabs>
  )
}

export const Basic = Template.bind({})
