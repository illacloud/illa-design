import { Meta, StoryFn } from "@storybook/react"
import {
  DropListItem,
  Dropdown,
  DropdownProps,
  DropList,
  Button,
  Space,
} from "@illa-design/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "NAVIGATION/Dropdown",
  component: Dropdown,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta

const dropList = () => {
  return (
    <DropList>
      <DropListItem value="blog" title={"Blog"} key={"1"} disabled />
      <DropListItem value="tutorial" title={"Tutorial"} key={"2"} />
      <DropListItem value="docs" title={"Docs"} key={"3"} selected />
      <DropListItem value="community" title={"Community"} key={"4"} />
      <DropListItem value="github" title={"Github"} key={"5"} />
    </DropList>
  )
}

export const Basic: StoryFn<DropdownProps> = (args) => (
  <Space>
    <Dropdown dropList={dropList()} trigger="hover" {...args}>
      <Button>Hover me</Button>
    </Dropdown>
    <Dropdown dropList={dropList()} trigger={"contextmenu"} {...args}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "lightgray",
          width: 200,
          height: 150,
        }}
      >
        Click me on right
      </div>
    </Dropdown>
  </Space>
)
