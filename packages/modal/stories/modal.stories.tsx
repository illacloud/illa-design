import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Modal, ModalGroup, ModalProps, useModal } from "../src"
import { Space } from "@illa-design/space"
import { Button } from "@illa-design/button"
import { Input } from "@illa-design/input"
import { MessageGroup, useMessage } from "@illa-design/message"

export default {
  title: "FEEDBACK/Modal",
  component: Modal,
  args: {
    onOk: {
      control: false,
    },
    onCancel: {
      control: false,
    },
  },
} as Meta

const Template: Story<ModalProps> = (args) => {
  const [visible, setVisible] = React.useState(false)
  const [confirmLoading, setConfirmLoading] = React.useState(false)

  const message = useMessage()
  const modal = useModal()

  function onOk() {
    Promise.resolve().then((res) => {
      setConfirmLoading(true)
      setTimeout(() => {
        message.success({
          content: "Success !",
        })
        setVisible(false)
        setConfirmLoading(false)
      }, 1500)
    })
  }

  return (
    <>
      <MessageGroup />
      <ModalGroup />
      <Space size={"large"}>
        <Button
          onClick={() => {
            setVisible(true)
          }}
        >
          Open Modal
        </Button>
        <Modal
          {...args}
          visible={visible}
          okLoading={confirmLoading}
          onCancel={() => setVisible(false)}
          onOk={onOk}
        >
          ILLA very good!
        </Modal>
        <Space size={"large"} direction={"vertical"}>
          <Button
            onClick={() =>
              modal.info({ children: <Input />, title: "Confirm" })
            }
          >
            Confirm
          </Button>
          <Button
            onClick={() =>
              modal.warning({ children: "Warning", title: "Warning" })
            }
          >
            Warning
          </Button>
        </Space>
      </Space>
    </>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  title: "Modal Title",
}
