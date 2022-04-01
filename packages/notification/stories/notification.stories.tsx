import { Meta, Story } from "@storybook/react"
import { SearchIcon } from "@illa-design/icon"
import { Space } from "@illa-design/space"
import { Button, ButtonGroup } from "@illa-design/button"
import { Notification, NoticeProps, Notice } from "../src"

export default {
  title: "FEEDBACK/Notification",
  component: Notice,
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

const Template: Story<NoticeProps> = (args) => {
  return (
    <>
      <Space direction={"vertical"}>
        <Button
          onClick={() => {
            Notification.info(args)
          }}
        >
          Open Notification(Info)
        </Button>
        <Button
          onClick={() => {
            Notification.info({
              ...args,
              style: { width: 500 },
              afterClose: () => {
                console.log("complete animate")
              },
              onClose: () => {
                console.log("closing")
              },
            })
          }}
        >
          Open Notification(Style)
        </Button>
        <Button
          onClick={() => {
            Notification.success(args)
          }}
        >
          Open Notification(Success)
        </Button>
        <Button
          onClick={() => {
            Notification.warning(args)
          }}
        >
          Open Notification(Warning)
        </Button>
        <Button
          onClick={() => {
            Notification.error(args)
          }}
        >
          Open Notification(Error)
        </Button>
        <Button
          onClick={() => {
            Notification.normal(args)
          }}
        >
          Open Notification(normal)
        </Button>
        <Button
          onClick={() => {
            Notification.config({ maxCount: 3, duration: 1500 })
          }}
        >
          Config maxcount 3 duration 1500
        </Button>
        <Button
          onClick={() => {
            Notification.info({
              ...args,
              action: (
                <ButtonGroup>
                  <Button type={"button"}>Cancel</Button>
                  <Button>OK</Button>
                </ButtonGroup>
              ),
            })
          }}
        >
          Open Notification(Action)
        </Button>
        <Button
          onClick={() => {
            Notification.normal({
              id: "need_update_duration",
              title: "Ready to update",
              content: "Will update after 2 seconds...",
              duration: 8000,
            })
            window.setTimeout(() => {
              Notification.success({
                title: "Success update",
                id: "need_update_duration",
                content: "content has updated!",
                duration: 3000,
                closable: true,
                closeElement: <SearchIcon />,
              })
            }, 2000)
          }}
        >
          Update Notification
        </Button>
        <Button
          onClick={() => {
            Notification.clear()
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
