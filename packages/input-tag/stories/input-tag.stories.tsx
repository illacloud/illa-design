/** @jsxImportSource @emotion/react */
import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { InputTagProps, InputTag } from "../src"
import { Space } from "@illa-design/space"
import { ObjectValueType } from "../src/utils"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/InputTag",
  component: InputTag,
  argTypes: {
    suffix: {
      control: {
        type: "text",
      },
    },
  },
} as Meta

const Template: Story<InputTagProps> = (props) => {
  function defaultValidate(inputValue: string, values: ObjectValueType[]) {
    return values?.every((item) => item?.value !== inputValue)
  }

  return (
    <div>
      <Space direction={"vertical"} wrap>
        <InputTag
          style={{ maxWidth: "350px" }}
          validate={defaultValidate}
          {...props}
        />
      </Space>
    </div>
  )
}

export const Basic = Template.bind({})
