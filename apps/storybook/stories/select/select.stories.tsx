import { Meta, StoryFn } from "@storybook/react"
import {
  AddIcon,
  PeopleIcon,
  Option,
  Select,
  SelectProps,
  Space,
} from "@illa-design/react"
import { useState } from "react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Select",
  component: Select,
} as Meta

export const Basic: StoryFn<SelectProps> = (args) => {
  const [currentValue, setCurrentValue] = useState("option2")

  return (
    <div>
      <Select value={1} options={[1, 2, 3]} {...args} />
      <Select mt="20px" options={[1, 2, 3]} multiple {...args} />
      <Select
        {...args}
        mt="20px"
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
            label: <PeopleIcon />,
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
        {...args}
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
            disabled: true,
          },
        ]}
      />
      <Select
        {...args}
        mt="20px"
        options={[
          {
            label: "Option 1",
            value: 1,
          },
          {
            label: "Option 2",
            value: 2,
          },
          {
            label: "Option 3",
            value: 3,
          },
        ]}
      />
      <Select
        {...args}
        mt="20px"
        multiple
        options={[
          {
            label: "Option 1",
            value: 1,
          },
          {
            label: "Option 2",
            value: 2,
          },
          {
            label: "Option 3",
            value: 3,
          },
        ]}
      />
      <Select mt="20px" options={["option1", "option2", "option3"]} {...args} />
      <Select mt="20px" multiple options={[1, 2, 3]} {...args} />
      <Select mt="20px" options={[1, 2, 3]} {...args} />
      <Select
        mt="20px"
        {...args}
        value={currentValue}
        onChange={(value) => {
          setCurrentValue(value as string)
        }}
      >
        <Option value="option1" isSelectOption={false}>
          <Space size="8px" direction="horizontal" alignItems="center">
            <AddIcon size="14px" />
            Add
          </Space>
        </Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>
    </div>
  )
}
