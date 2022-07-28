import React, { useState } from "react"
import { Tooltip } from "@illa-design/tooltip"
import { Meta, Story } from "@storybook/react"
import { Space } from "@illa-design/space"
import { Button } from "@illa-design/button"
import { HeartIcon, LikeIcon, ShareIcon } from "@illa-design/icon"
import { css } from "@emotion/react"
import { Steps, StepsProps } from "../src"

const { Step } = Steps

export default {
  title: "NAVIGATION/Steps",
  component: Steps,
} as Meta

const Template: Story<StepsProps> = (args) => {
  const { onChange, ...restArgs } = args
  return (
    <Space direction={"vertical"}>
      <Steps {...restArgs} style={{ width: 850 }}>
        <Step title="Succeeded" />
        <Step title="Processing" />
        <Step title="Pending" />
      </Steps>

      <Steps labelPlacement={"vertical"} {...restArgs} style={{ width: 850 }}>
        <Step title="Succeeded" />
        <Step title="Processing" />
        <Step title="Pending" />
      </Steps>
    </Space>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  current: 2,
}

const TemplateWithDescription = (args: StepsProps) => (
  <Steps {...args} style={{ width: 850 }}>
    <Step title="Succeeded" description="Read the message" />
    <Step title="Processing" description="Please Confirm" />
    <Step title="Pending" description="Commit it" />
  </Steps>
)

export const Description = TemplateWithDescription.bind({
  current: 3,
})

export const CustomIcon = (args: StepsProps) => (
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

export const Error = TemplateWithDescription.bind({
  status: "error",
  current: 2,
})

export const Lineless = TemplateWithDescription.bind({
  lineless: true,
})

export const Vertical = TemplateWithDescription.bind({ direction: "vertical" })

export const Dot = (args: StepsProps) => {
  const { onChange, ...restArgs } = args
  return (
    <Space direction="vertical">
      <Steps {...restArgs}>
        <Step title="Succeeded" description="Read the message" />
        <Step title="Processing" description="Please Confirm" />
        <Step title="Pending" description="Commit it" />
      </Steps>

      <Steps variant={"dot"} current={2}>
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
  variant: "dot",
  current: 2,
  status: "error",
}

export const CustomDot = () => {
  return (
    <Steps
      customDot={(icon, config) => {
        return <Tooltip content={config.index}>{icon}</Tooltip>
      }}
    >
      <Step title="Succeeded" description="Read the message" />
      <Step title="Processing" description="Please Confirm" />
      <Step title="Pending" description="Commit it" />
    </Steps>
  )
}

export const SwitchStep = () => {
  const [current, setCurrent] = useState(1)

  return (
    <Space direction="vertical">
      <Steps current={current} style={{ minWidth: 500 }}>
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
      <Steps
        onChange={onChange}
        current={current}
        css={css`
          width: 500px;
        `}
      >
        <Step title="Succeeded" description="Read the message" />
        <Step title="Processing" description="Please Confirm" />
        <Step title="Pending" description="Commit it" />
      </Steps>
      <Steps
        variant="dot"
        direction="vertical"
        onChange={onChange}
        current={current}
        css={css`
          width: 500px;
        `}
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
        variant="navigation"
        current={current}
        style={{ width: 800, marginBottom: 20 }}
      >
        <Step title="Succeeded" />
        <Step title="Processing" />
        <Step title="Pending" />
      </Steps>
      <Steps
        variant="navigation"
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
