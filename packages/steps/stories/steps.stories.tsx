import React, { useState } from "react"
import { Tooltip } from "@illa-design/tooltip"
import { Meta, Story } from "@storybook/react"
import { Space } from "@illa-design/space"
import { Button } from "@illa-design/button"
import { HeartIcon, LikeIcon, ShareIcon } from "@illa-design/icon"
import { Steps, StepsProps } from "../src"

const { Step } = Steps

export default {
  title: "NAVIGATION/Steps",
  component: Steps,
} as Meta

const Template: Story<StepsProps> = (args) => {
  const { onChange, ...restArgs } = args
  return (
    <Steps {...restArgs}>
      <Step title="Succeeded" />
      <Step title="Processing" />
      <Step title="Pending" />
    </Steps>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  current: 2,
}

const TemplateWithDescription = (args) => (
  <Steps {...args}>
    <Step title="Succeeded" description="Read the message" />
    <Step title="Processing" description="Please Confirm" />
    <Step title="Pending" description="Commit it" />
  </Steps>
)

export const Description = TemplateWithDescription.bind({})
Description.args = {
  current: 3,
}

export const CustomIcon = (args) => (
  <Steps {...args}>
    <Step
      icon={<LikeIcon />}
      title="Thumb up"
      description="Give it a thumb up!"
    />
    <Step icon={<HeartIcon />} title="Subscribe" description="Subscribe it" />
    <Step
      icon={<ShareIcon />}
      title="Share"
      description="Share to your friends"
    />
  </Steps>
)
CustomIcon.args = {}

export const Error = TemplateWithDescription.bind({})
Error.args = {
  status: "error",
  current: 2,
}

export const Lineless = TemplateWithDescription.bind({})
Lineless.args = {
  lineless: true,
}

export const Vertical = TemplateWithDescription.bind({})
Vertical.args = {
  direction: "vertical",
}

export const Dot = (args) => {
  const { onChange, ...restArgs } = args
  return (
    <Space direction="vertical">
      <Steps {...restArgs}>
        <Step title="Succeeded" description="Read the message" />
        <Step title="Processing" description="Please Confirm" />
        <Step title="Pending" description="Commit it" />
      </Steps>

      <Steps {...restArgs} direction="vertical">
        <Step title="Succeeded" description="Read the message" />
        <Step title="Processing" description="Please Confirm" />
        <Step title="Pending" description="Commit it" />
      </Steps>
    </Space>
  )
}
Dot.args = {
  type: "dot",
  current: 2,
}

export const CustomDot = () => {
  const customDot = (iconNode, { index }) => {
    return <Tooltip content={index}>{iconNode}</Tooltip>
  }
  return (
    <Steps customDot={customDot}>
      <Step title="Succeeded" description="Read the message" />
      <Step title="Processing" description="Please Confirm" />
      <Step title="Pending" description="Commit it" />
    </Steps>
  )
}

export const Size = () => {
  const steps = (
    <>
      <Step title="Succeeded" description="Read the message" />
      <Step title="Processing" description="Please Confirm" />
      <Step title="Pending" description="Commit it" />
    </>
  )
  return (
    <Space direction="vertical">
      <Steps style={{ width: 800 }}>
        <Step title="Succeeded" description="Read the message" />
        <Step title="Processing" description="Please Confirm" />
        <Step title="Pending" description="Commit it" />
      </Steps>

      <Steps style={{ width: 800 }} size="large">
        <Step title="Succeeded" description="Read the message" />
        <Step title="Processing" description="Please Confirm" />
        <Step title="Pending" description="Commit it" />
      </Steps>

      <Steps style={{ width: 800 }} labelPlacement="vertical">
        <Step title="Succeeded" description="Read the message" />
        <Step title="Processing" description="Please Confirm" />
        <Step title="Pending" description="Commit it" />
      </Steps>

      <Steps style={{ width: 800 }} size="large" labelPlacement="vertical">
        <Step title="Succeeded" description="Read the message" />
        <Step title="Processing" description="Please Confirm" />
        <Step title="Pending" description="Commit it" />
      </Steps>

      <Space>
        <Steps direction="vertical">
          <Step title="Succeeded" description="Read the message" />
          <Step title="Processing" description="Please Confirm" />
          <Step title="Pending" description="Commit it" />
        </Steps>

        <Steps size="large" direction="vertical">
          <Step title="Succeeded" description="Read the message" />
          <Step title="Processing" description="Please Confirm" />
          <Step title="Pending" description="Commit it" />
        </Steps>
      </Space>

      <Steps style={{ width: 800 }} type="dot">
        <Step title="Succeeded" description="Read the message" />
        <Step title="Processing" description="Please Confirm" />
        <Step title="Pending" description="Commit it" />
      </Steps>

      <Steps style={{ width: 800 }} type="dot" size="large">
        <Step title="Succeeded" description="Read the message" />
        <Step title="Processing" description="Please Confirm" />
        <Step title="Pending" description="Commit it" />
      </Steps>

      <Space>
        <Steps type="dot" direction="vertical">
          <Step title="Succeeded" description="Read the message" />
          <Step title="Processing" description="Please Confirm" />
          <Step title="Pending" description="Commit it" />
        </Steps>

        <Steps type="dot" size="large" direction="vertical">
          <Step title="Succeeded" description="Read the message" />
          <Step title="Processing" description="Please Confirm" />
          <Step title="Pending" description="Commit it" />
        </Steps>
      </Space>

      <Steps style={{ width: 800 }} type="navigation">
        <Step title="Succeeded" description="Read the message" />
        <Step title="Processing" description="Please Confirm" />
        <Step title="Pending" description="Commit it" />
      </Steps>

      <Steps style={{ width: 800 }} type="navigation" size="large">
        <Step title="Succeeded" description="Read the message" />
        <Step title="Processing" description="Please Confirm" />
        <Step title="Pending" description="Commit it" />
      </Steps>
    </Space>
  )
}

export const SwitchStep = () => {
  const [current, setCurrent] = useState(1)

  return (
    <Space direction="vertical">
      <Steps current={current}>
        <Step title="Succeeded" description="Read the message" />
        <Step title="Processing" description="Please Confirm" />
        <Step title="Pending" description="Commit it" />
      </Steps>

      <Space>
        <Button disabled={current == 1} onClick={() => setCurrent(current - 1)}>
          Prev
        </Button>
        <Button disabled={current == 3} onClick={() => setCurrent(current + 1)}>
          Next
        </Button>
      </Space>
    </Space>
  )
}

export const OnChange = () => {
  const [current, setCurrent] = useState(1)
  const onChange = (index: number) => {
    setCurrent(index)
  }
  return (
    <Space direction="vertical" align="start">
      <Steps onChange={onChange} current={current}>
        <Step title="Succeeded" description="Read the message" />
        <Step title="Processing" description="Please Confirm" />
        <Step title="Pending" description="Commit it" />
      </Steps>
      <Steps
        type="dot"
        direction="vertical"
        onChange={onChange}
        current={current}
      >
        <Step title="Succeeded" description="Read the message" />
        <Step title="Processing" description="Please Confirm" />
        <Step title="Pending" description="Commit it" />
      </Steps>
    </Space>
  )
}

export const Disabled = () => {
  const [current, setCurrent] = useState(1)
  const onChange = (index: number) => {
    setCurrent(index)
  }
  return (
    <Steps onChange={onChange} current={current}>
      <Step title="Succeeded" description="Read the message" />
      <Step title="Processing" description="Please Confirm" />
      <Step title="Disabled" description="Click not work" disabled />
    </Steps>
  )
}

export const Navigation = () => {
  const [current, setCurrent] = useState(1)
  const onChange = (index: number) => {
    setCurrent(index)
  }
  return (
    <Space direction="vertical">
      <Steps
        type="navigation"
        current={current}
        style={{ width: 800, marginBottom: 20 }}
      >
        <Step title="Succeeded" />
        <Step title="Processing" />
        <Step title="Pending" />
      </Steps>
      <Steps
        type="navigation"
        onChange={onChange}
        current={current}
        style={{ width: 800 }}
      >
        <Step title="Succeeded" description="Read the message" />
        <Step title="Processing" description="Please Confirm" />
        <Step title="Pending" description="Commit it" />
      </Steps>
    </Space>
  )
}
