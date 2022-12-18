import { Meta, StoryFn } from "@storybook/react"
import { Tabs, TabPane, TabsProps } from "../src"
import { ReactNode } from "react"
import { Space } from "@illa-design/react"

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
    animated: {
      control: {
        type: "boolean",
      },
    },
    colorScheme: {
      options: [
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
        "techPink",
        "techPurple",
      ],
      control: {
        type: "select",
      },
    },
  },
} as Meta

const Template: StoryFn<TabsProps> = (props) => {
  const tabArr: {
    key: string
    title: string | ReactNode
    content: string
    disabled?: boolean
  }[] = [
    {
      key: "1",
      title: "tab 01",
      content: "tab content 01",
    },
    {
      key: "2",
      title: "tab 02",
      content: "tab content 02",
    },
    { key: "3", title: "tab 03", content: "tab content 03", disabled: true },
    { key: "4", title: "tab 04", content: "tab content 04" },
    { key: "5", title: "tab 05", content: "tab content 05" },
    {
      key: "6",
      title: "tab 06",
      content: "tab content 06",
    },
    { key: "7", title: "tab 07", content: "tab content 07" },
    { key: "8", title: "tab 08", content: "tab content 08" },
  ]

  return (
    <Space>
      <Tabs style={{ width: 400, height: 200 }} {...props}>
        {tabArr.map((item) => {
          return (
            <TabPane title={item.title} key={item.key} disabled={item.disabled}>
              {item.content}
            </TabPane>
          )
        })}
      </Tabs>
    </Space>
  )
}

export const Basic = Template.bind({})
