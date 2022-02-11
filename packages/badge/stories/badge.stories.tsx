import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Avatar } from "@illa-design/avatar"
import { SearchIcon } from "@illa-design/icon"
import { Badge, BadgeProps } from "../src"

import { Space } from "@illa-design/space"

import { Button, ButtonGroup } from "@illa-design/button"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Badge",
  component: Badge,

  argTypes: {
    status: {
      options: ["default", "processing", "success", "warning", "error"],
      control: { type: "radio" },
    },
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
        labels: {
          white: "white",
          blackAlpha: "blackAlpha",
          gray: "gray",
          red: "red",
          orange: "orange",
          yellow: "yellow",
          green: "green",
          blue: "blue",
          cyan: "cyan",
          purple: "purple",
          grayBlue: "grayBlue",
        },
      },
    },
  },
} as Meta

const Template: Story<BadgeProps> = (args) => {
  const [num, setNum] = React.useState(0)
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
  maxCount: 99,
  dotStyle: {},
  dot: false,
  text: "",
}
