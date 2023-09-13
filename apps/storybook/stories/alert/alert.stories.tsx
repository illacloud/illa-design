import { Meta, StoryFn } from "@storybook/react"
import { Button, Alert, AlertProps } from "@illa-design/react"

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

const Template: StoryFn<AlertProps> = (args) => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Alert {...args} mb="12px" content={undefined} />
      <Alert
        {...args}
        closable={true}
        action={<Button size="small">Detail</Button>}
      />
    </div>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  title: "Alert Title",
  content: "Alert Content",
}
