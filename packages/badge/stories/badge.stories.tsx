import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Avatar } from "@illa-design/avatar"
import { CloseIcon } from "@illa-design/icon"
import { Badge, BadgeProps } from "../src"
import { withTests } from "@storybook/addon-jest"
import { Space } from "../../space"
import results from "../../../coverage/coverage-final.json"
import { ButtonGroup, Button } from "@illa-design/button"

export default {
  title: "DATA DISPLAY/Badge",
  component: Badge,
  decorators: [withTests({ results })],
} as Meta

const Template: Story<BadgeProps> = (args) => {
  const [num, setNum] = React.useState(0)
  return (
    <Space size={"large"}>
      <Badge {...args}>
        <Avatar />
      </Badge>
      <Badge {...args} />
      <Badge {...args} count={<CloseIcon />}>
        <Avatar shape={"square"}></Avatar>
      </Badge>
      <Badge count={num}>
        <Avatar></Avatar>
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
