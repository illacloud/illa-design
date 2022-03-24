import { Meta, Story } from "@storybook/react"
import { Upload, UploadProps } from "../src"

export default {
  title: "DATA INPUT/Upload",
  component: Upload,
  argTypes: {
    defaultFileList: {
      control: false,
    },
    showUploadList: {
      control: {
        type: "boolean",
      },
    },
    fileList: {
      control: false,
    },
    tip: {
      control: {
        type: "text",
      },
    },
    headers: {
      control: false,
    },
    data: {
      control: false,
    },
    name: {
      control: false,
    },
  },
} as Meta

const Template: Story<UploadProps> = (args) => <Upload action={""} {...args} />

export const Basic = Template.bind({})
