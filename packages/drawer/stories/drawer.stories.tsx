import { Meta, Story } from "@storybook/react"
import { Drawer, DrawerProps } from "../src"
import { Space } from "@illa-design/space"
import { Button } from "@illa-design/button"
import React from "react"

export default {
  title: "FEEDBACK/Drawer",
  component: Drawer,
} as Meta

const Template: Story<DrawerProps> = (args) => {
  const [visible, setVisible] = React.useState(false)
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
  const [visibleInner, setVisibleInner] = React.useState(true)
  const refWrapper = React.useRef(null)
  return (
    <>
      <Drawer
        title="Basic"
        visible={visibleInner}
        placement={"left"}
        getPopupContainer={() => refWrapper && refWrapper.current!}
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
