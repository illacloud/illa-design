import { Meta, Story } from "@storybook/react"
import { Alert, AlertProps } from "../src"
import { SearchIcon } from "@illa-design/icon"
import { Space } from "@illa-design/space"
import { Button } from "@illa-design/button"

export default {
  title: "FEEDBACK/Alert",
  component: Alert,
  argTypes: {
    icon: {
      control: false,
    },
    closeElement: {
      control: false,
    },
    action: {
      control: false,
    },
    onClose: {
      control: false,
    },
    afterClose: {
      control: false,
    },
  },
} as Meta

const Template: Story<AlertProps> = (args) => {
  return (
    <>
      <Alert {...args} style={{ marginBottom: "12px" }} />
      <Alert
        {...args}
        icon={<SearchIcon />}
        closeElement={<SearchIcon />}
        action={
          <Space direction={"vertical"}>
            <Button size="small">Detail</Button>
            <Button size="small">Close</Button>
          </Space>
        }
        onClose={() => {
          console.log("close")
        }}
        afterClose={() => {
          console.log("after close")
        }}
      />
    </>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  title: "Alert Title",
  content: "Alert Content",
}
