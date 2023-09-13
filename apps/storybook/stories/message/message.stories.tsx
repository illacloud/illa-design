import { Meta, StoryFn } from "@storybook/react"
import {
  Space,
  Button,
  Message,
  MessageGroup,
  MessageProps,
  useMessage,
} from "@illa-design/react"

export default {
  title: "FEEDBACK/Message",
  component: Message,
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

const Template: StoryFn<MessageProps> = (args) => {
  const message = useMessage()
  return (
    <>
      <MessageGroup />
      <div>
        <Space direction={"vertical"}>
          <Button
            onClick={() => {
              message.info({
                content: "Info",
                position: "bottom",
                ...args,
              })
            }}
          >
            Open Message(Info)
          </Button>
          <Button
            onClick={() => {
              message.normal({
                content: "Normal",
                ...args,
              })
            }}
          >
            Open Message(Normal)
          </Button>
          <Button
            onClick={() => {
              message.success({
                content: "Success",
                ...args,
              })
            }}
          >
            Open Message(Success)
          </Button>
          <Button
            onClick={() => {
              message.loading({
                content: "Loading",
                ...args,
              })
            }}
          >
            Open Message(Loading)
          </Button>
          <Button
            onClick={() => {
              message.warning({
                content: "Warning",
                ...args,
              })
            }}
          >
            Open Message(Warning)
          </Button>
          <Button
            onClick={() => {
              message.error({
                content: "Error",
                ...args,
              })
            }}
          >
            Open Message(Error)
          </Button>
          <Button
            onClick={() => {
              message.clear()
            }}
          >
            Clear
          </Button>
        </Space>
      </div>
    </>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  content: "This is Message",
}
