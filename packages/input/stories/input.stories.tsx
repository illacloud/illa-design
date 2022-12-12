import { Meta, Story } from "@storybook/react"
import { Input, InputProps } from "../src"
import { Space, PersonIcon } from "@illa-design/react"

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
        type: "text",
      },
    },
  },
} as Meta

const Template: StoryFn<InputProps> = (props) => {
  return (
    <div>
      <Space direction={"vertical"} wrap>
        <Input w={"280px"} {...props} />
        <Input w={"280px"} suffix={{ render: <PersonIcon /> }} {...props} />
        <Input w={"280px"} prefix={{ render: "prefix" }} {...props} />
        <Input w={"280px"} suffix={{ render: "suffix" }} {...props} />
        <Input
          w={"280px"}
          addonBefore={{ render: "Before" }}
          addonAfter={{ render: "After" }}
          {...props}
        />
      </Space>
    </div>
  )
}

export const Basic = Template.bind({})
