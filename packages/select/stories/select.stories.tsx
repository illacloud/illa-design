import { Meta, StoryFn } from "@storybook/react"
import { Select, SelectProps } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Select",
  component: Select,
} as Meta

export const Basic: StoryFn<SelectProps> = (args) => (
  <div>
    <Select
      value="option1"
      options={[
        {
          label: "Option 1",
          value: "option1",
        },
        {
          label: "Option 2",
          value: "option2",
        },
        {
          label: "Option 3",
          value: "option3",
        },
      ]}
      showSearch={true}
      {...args}
    />
    <Select
      mt="20px"
      options={[
        {
          label: "Option 1",
          value: "option1",
        },
        {
          label: "Option 2",
          value: "option2",
        },
        {
          label: "Option 3",
          value: "option3",
        },
      ]}
      showSearch
      allowClear
      filterOption={true}
      {...args}
    />
    <Select
      mt="20px"
      options={[
        {
          label: "Option 1",
          value: "option1",
        },
        {
          label: "Option 2",
          value: "option2",
        },
        {
          label: "Option 3",
          value: "option3",
        },
      ]}
      {...args}
    />
    <Select
      mt="20px"
      multiple
      showSearch
      filterOption={true}
      options={[
        {
          label: "Option 1",
          value: "option1",
        },
        {
          label: "Option 2",
          value: "option2",
        },
        {
          label: "Option 3",
          value: "option3",
        },
      ]}
      {...args}
    />
    <Select
      mt="20px"
      multiple
      showSearch
      value={["option2"]}
      filterOption={true}
      options={[
        {
          label: "Option 1",
          value: "option1",
        },
        {
          label: "Option 2",
          value: "option2",
        },
        {
          label: "Option 3",
          value: "option3",
        },
      ]}
      {...args}
    />
  </div>
)
