import { Meta, StoryFn } from "@storybook/react"
import { TabPane, Tabs, TabsProps, InfoIcon } from "@illa-design/react"
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
    { key: "4", title: "tab 04", content: "tab content 04", disabled: true },
    { key: "5", title: "tab 05", content: "tab content 05", disabled: true },
    {
      key: "6",
      title: "tab 06",
      content: "tab content 06",
    },
    {
      key: "7",
      title: (
        <span>
          <InfoIcon />
          1234
        </span>
      ),
      content: "tab content 07",
    },
    { key: "8", title: "tab 08", content: "tab content 08" },
    { key: "9", title: "tab 08", content: "tab content 08" },
    { key: "10", title: "tab 08", content: "tab content 08" },
    { key: "11", title: "tab 08", content: "tab content 08" },
    { key: "12", title: "tab 08", content: "tab content 08" },
    { key: "13", title: "tab 13", content: "tab content 08" },
    { key: "14", title: "tab 14", content: "tab content 08" },
    { key: "15", title: "tab 15", content: "tab content 08" },
    { key: "16", title: "tab 16", content: "tab content 08" },
  ]

  return (
    <div style={{ width: "100%", height: "100px" }}>
      <Tabs {...props}>
        {tabArr.map((item) => {
          return (
            <TabPane
              title={item.title}
              key={item.key}
              disabled={item.disabled}
              closable={item.closable}
            >
              {item.content}
            </TabPane>
          )
        })}
      </Tabs>
    </div>
  )
}

export const Basic = Template.bind({})
