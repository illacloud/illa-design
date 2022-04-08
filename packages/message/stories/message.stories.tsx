import { Meta, Story } from "@storybook/react"
import { Space } from "@illa-design/space"
import { Button } from "@illa-design/button"
import { Message } from "../src"
import { NoticeProps, Notice } from "../../notification/src"

export default {
  title: "FEEDBACK/Message",
  component: Notice,
  argTypes: {
    icon: {
      control: false,
    },
    type: {
      control: false,
    },
    title: {
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
      options: ["top", "bottom"],
    },
  },
} as Meta

const Template: Story<NoticeProps> = (args) => {
  return (
    <>
      <Space direction={"vertical"}>
        <Button
          onClick={() => {
            Message.info(args)
          }}
        >
          Open Message(Info)
        </Button>
        <Button
          onClick={() => {
            Message.info({
              ...args,
              style: { width: 500 },
              onClose: () => {
                console.log("closing")
              },
            })
          }}
        >
          Open Message(Style)
        </Button>
        <Button
          onClick={() => {
            Message.success(args)
          }}
        >
          Open Notification(Success)
        </Button>
        <Button
          onClick={() => {
            Message.loading(args)
          }}
        >
          Open Message(Loading)
        </Button>
        <Button
          onClick={() => {
            Message.loading(
              "LongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLong",
            )
          }}
        >
          Open Message(Loading with string)
        </Button>
        <Button
          onClick={() => {
            Message.warning(args)
          }}
        >
          Open Message(Warning)
        </Button>
        <Button
          onClick={() => {
            Message.error(args)
          }}
        >
          Open Message(Error)
        </Button>
        <Button
          onClick={() => {
            Message.normal(args)
          }}
        >
          Open Message(normal)
        </Button>
        <Button
          onClick={() => {
            Message.config({ maxCount: 3, duration: 1500 })
          }}
        >
          Config max count 3 duration 1500
        </Button>
        <Button
          onClick={() => {
            Message.normal({
              id: "need_update_duration",
              content: "Will update after 2 seconds...",
              duration: 3000,
            })
            window.setTimeout(() => {
              Message.success({
                id: "need_update_duration",
                content: "content has updated!",
                duration: 3000,
                closable: true,
              })
            }, 2000)
          }}
        >
          Update Message
        </Button>
        <Button
          onClick={() => {
            Message.clear()
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
  content: "This is Message",
}
