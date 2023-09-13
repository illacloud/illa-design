import { Meta, StoryFn } from "@storybook/react"
import {
  Avatar,
  Button,
  ButtonGroup,
  SearchIcon,
  Space,
  Badge,
  BadgeProps,
} from "@illa-design/react"
import { useState } from "react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Badge",
  component: Badge,
} as Meta

const Template: StoryFn<BadgeProps> = (args) => {
  const [num, setNum] = useState(0)
  return (
    <Space size={"large"}>
      <Badge {...args}>
        <Avatar shape={"square"} />
      </Badge>
      <Badge {...args} />
      <Badge {...args} count={<SearchIcon style={{ color: "black" }} />}>
        <Avatar shape={"square"} />
      </Badge>
      <Badge count={num}>
        <Avatar shape={"square"} />
      </Badge>
      <ButtonGroup>
        <Button onClick={() => setNum((num) => num + 1)}>+</Button>
        <Button onClick={() => setNum((num) => num - 1)}>-</Button>
      </ButtonGroup>
    </Space>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  count: 1,
  offset: [0, 0],
}
