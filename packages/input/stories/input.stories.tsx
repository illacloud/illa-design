import { Meta, Story } from "@storybook/react"
import { InputProps, Input } from "../src"
import { Space } from "@illa-design/space"
import { PersonIcon } from "@illa-design/icon"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Input",
  component: Input,

  argTypes: {
    prefix: {
      control: {
        type: "text",
      },
    },
    suffix: {
      control: {
        type: "text",
      },
    },
    addonAfter: {
      control: false,
    },
    addonBefore: {
      control: false,
    },
    boarderColor: {
      options: [
        "gray",
        "blue",
        "purple",
        "red",
        "green",
        "yellow",
        "orange",
        "cyan",
        "white",
      ],
      control: {
        type: "select",
      },
    },
  },
  parameters: {
    docs: {
      source: {
        type: "code",
      },
    },
  },
} as Meta

const Template: Story<InputProps> = (props) => {
  return (
    <div>
      <Space direction={"vertical"} wrap>
        <Input style={{ width: 280 }} {...props} />
        <Input
          style={{ width: 280 }}
          suffix={{ render: <PersonIcon /> }}
          {...props}
        />
        <Input
          style={{ width: 280 }}
          prefix={{ render: "prefix" }}
          {...props}
        />
        <Input
          style={{ width: 280 }}
          suffix={{ render: "suffix" }}
          {...props}
        />
        <Input
          style={{ width: 280 }}
          addonBefore={{ render: "Before" }}
          addonAfter={{ render: "After" }}
          {...props}
        />
      </Space>
    </div>
  )
}

export const Basic = Template.bind({})
