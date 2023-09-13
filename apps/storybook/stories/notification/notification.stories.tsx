import { Meta, StoryFn } from "@storybook/react"
import {
  Space,
  Button,
  useNotification,
  Notification,
  NotificationProps,
  NotificationGroup,
} from "@illa-design/react"

export default {
  title: "FEEDBACK/Notification",
  component: Notification,
  argTypes: {
    icon: {
      control: false,
    },
    type: {
      control: false,
    },
    update: {
      control: false,
    },
    noticeType: {
      control: false,
    },
    closeElement: {
      control: false,
    },
    action: {
      control: false,
    },
    removeHook: {
      control: false,
    },
    onClose: {
      control: false,
    },
    afterClose: {
      control: false,
    },
    position: {
      options: ["topLeft", "topRight", "bottomLeft", "bottomRight"],
    },
  },
} as Meta

const Template: StoryFn<NotificationProps> = (args) => {
  const notification = useNotification()

  return (
    <>
      <NotificationGroup />
      <Space direction={"vertical"}>
        <Button
          onClick={() => {
            notification.info({
              title: "Info",
              ...args,
            })
          }}
        >
          Open Notification(Info)
        </Button>
        <Button
          onClick={() => {
            notification.success({
              title: "Success",
              ...args,
            })
          }}
        >
          Open Notification(Success)
        </Button>
        <Button
          onClick={() => {
            notification.warning({
              title: "Warning",
              ...args,
            })
          }}
        >
          Open Notification(Warning)
        </Button>
        <Button
          onClick={() => {
            notification.error({
              title: "Error",
              ...args,
            })
          }}
        >
          Open Notification(Error)
        </Button>
        <Button
          onClick={() => {
            notification.normal({
              title: "Normal",
              ...args,
            })
          }}
        >
          Open Notification(normal)
        </Button>
        <Button
          onClick={() => {
            notification.clear()
          }}
        >
          Clear
        </Button>
      </Space>
    </>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  title: "Alert Title",
  content: "Alert Content",
}
