import { Meta, Story } from "@storybook/react"
import { Space } from "@illa-design/space"
import { JSTransformerIcon, PenIcon } from "@illa-design/icon"
import { Select, SelectProps, Option } from "../src"
import { BsFacebook } from "react-icons/bs"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Select",
  component: Select,
  argTypes: {
    value: {
      control: {
        type: "array",
      },
    },
    colorScheme: {
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
        "grayBlue",
      ],
      control: {
        type: "select",
      },
    },
  },
} as Meta

const cityOption = [
  {
    value: "beijing",
    label: "Beijing",
    disabled: true,
  },
  {
    value: "shanghai",
    label: "Shanghai",
  },
  {
    value: "guangdong",
    label: "Guangdong",
  },
]

const options = [
  "Beijing",
  "Shanghai",
  "Guangzhou",
  "Shenzhen",
  "Wuhan",
  "Dongguan",
  "Dalian",
  "Shanghai",
  "Hongkong",
  "Macau",
  "A city with a very long long long long name",
]

const Template: Story<SelectProps> = (args) => (
  <Space direction="vertical" style={{ height: "200vh" }}>
    <Select w={"280px"} options={cityOption} {...args} />

    <Select
      showSearch={true}
      w={"280px"}
      options={options}
      defaultValue={"Shenzhen"}
      {...args}
    />

    <Select
      showSearch={true}
      w={"280px"}
      options={options}
      defaultValue={"Shenzhen"}
      addonBefore={{ render: "222" }}
      addonAfter={{
        buttonProps: {
          variant: "outline",
          colorScheme: "gray",
          leftIcon: <PenIcon />,
        },
      }}
      {...args}
    />

    <Select w={"280px"} placeholder="Select items" {...args} showSearch>
      {Array.from({ length: 10 }, (i, idx) => {
        return (
          <Option value={idx} key={idx} disabled={true}>
            <JSTransformerIcon style={{ marginRight: 8 }} />
            {`option-${idx}`}
          </Option>
        )
      })}
    </Select>
  </Space>
)

export const Basic = Template.bind({
  icon: <BsFacebook />,
})
