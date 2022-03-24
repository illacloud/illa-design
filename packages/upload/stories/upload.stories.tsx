import { Meta, Story } from "@storybook/react"

import { Upload, UploadProps } from "../src"

export default {
  title: "DATA INPUT/Upload",
  component: Upload,
} as Meta

const Template: Story<UploadProps> = (args) => <Upload action={""} {...args} />

export const Basic = Template.bind({})
