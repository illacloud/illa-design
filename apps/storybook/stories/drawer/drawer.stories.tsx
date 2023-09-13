import { Meta, StoryFn } from "@storybook/react"
import { Drawer, DrawerProps, Button, Space } from "@illa-design/react"
import { useRef, useState } from "react"

export default {
  title: "FEEDBACK/Drawer",
  component: Drawer,
} as Meta

const Template: StoryFn<DrawerProps> = (args) => {
  const [visible, setVisible] = useState(false)
  return (
    <Space>
      <Button onClick={() => setVisible(true)}>Open Drawer</Button>
      <Drawer
        {...args}
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
      >
        <div>Here is an example text.</div>
        <div>Here is an example text.</div>
      </Drawer>
    </Space>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  title: "Drawer Title",
}

const TemplateWithContainer = () => {
  const [visibleInner, setVisibleInner] = useState(true)
  const refWrapper = useRef(null)
  return (
    <>
      <Drawer
        title="Basic"
        visible={visibleInner}
        placement={"left"}
        onOk={() => {
          setVisibleInner(false)
        }}
        onCancel={() => {
          setVisibleInner(false)
        }}
      >
        <div style={{ textAlign: "left" }}>Here is an example text.</div>
      </Drawer>
      <div
        ref={refWrapper}
        style={{
          width: 1200,
          height: 300,
          backgroundColor: "gray",
          position: "relative",
          overflow: "hidden",
          lineHeight: "300px",
          textAlign: "center",
        }}
      >
        <Button onClick={() => setVisibleInner(true)}>Open</Button>
      </div>
    </>
  )
}

export const Container = TemplateWithContainer.bind({})
