import { Meta, Story } from "@storybook/react"
import { Input, InputProps } from "../src"
import { Space } from "@illa-design/space"
import { PersonIcon } from "@illa-design/icon"
import { useRef, useState } from "react"
import { getColor } from "@illa-design/theme"
import { colorPalette } from "@illa-design/theme/src"

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

const Template: Story<InputProps> = (props) => {
  const [color, setColor] = useState("black")
  const [step, setStep] = useState("01")

  function generate(color: string) {
    const format = "hex"
    const list = []
    const func = colorPalette
    for (let i = 1; i <= 10; i++) {
      list.push(func(color, i, format))
    }
    return list
  }

  console.log(generate('red'))
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
        <div style={{ backgroundColor: getColor(color, step), padding: 10 }}>
          <input
            type="text"
            defaultValue={color}
            onChange={(e) => {
              setColor(e.target.value)
            }}
          />
          <input
              type="text"
              defaultValue={step}
              onChange={(e) => {
                setStep(e.target.value)
              }}
          />
        </div>
      </Space>
    </div>
  )
}

export const Basic = Template.bind({})
