import { Meta, Story } from "@storybook/react"
import { Input, InputProps } from "../src"
import { Space } from "@illa-design/space"
import { PersonIcon } from "@illa-design/icon"
import { useRef } from "react"
import { getColor } from "@illa-design/theme"

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
    inputRef: {
      control: false,
    },
    borderColor: {
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
        "techPink",
        "techPurple",
      ],
      control: {
        type: "select",
      },
    },
  },
} as Meta

const Template: Story<InputProps> = (props) => {
  const color = useRef("")
  const step = useRef("01")
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
        <div style={{ backgroundColor: getColor(color.current, step.current) }}>
          <input
            type="text"
            onChange={(e) => {
              color.current = e.target.value
            }}
          />
          <input
              type="text"
              onChange={(e) => {
                step.current = e.target.value
              }}
          />
        </div>
      </Space>
    </div>
  )
}

export const Basic = Template.bind({})
