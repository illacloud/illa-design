import { Meta, StoryFn } from "@storybook/react"
import { Steps, StepsProps } from "@illa-design/react"

export default {
  title: "NAVIGATION/Steps",
  component: Steps,
} as Meta

export const Basic: StoryFn<StepsProps> = (args) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Steps
        {...args}
        style={{ width: 850 }}
        type="dot"
        items={[
          {
            title: "Finished",
            description: "Finished",
          },
          {
            title: "In Progress",
            status: "error",
          },
          {
            title: "Waiting",
          },
        ]}
      />
      <Steps
        {...args}
        style={{ width: 850, marginTop: "20px" }}
        type="line"
        items={[
          {
            title: "Finished",
            description: "Finished",
          },
          {
            title: "In Progress",
          },
          {
            title: "Waiting",
          },
        ]}
      />
      <Steps
        {...args}
        style={{ width: 850, marginTop: "20px" }}
        type="navigation"
        items={[
          {
            title: "Finished",
            description: "Finished",
          },
          {
            title: "In Progress",
            status: "error",
          },
          {
            title: "Waiting",
          },
        ]}
      />
      <Steps
        {...args}
        style={{ width: 850, marginTop: "20px" }}
        type="navigation"
        items={[
          {
            title: "Finished",
            description:
              "FinishedFinished" +
              "FinishedFinished" +
              "FinishedFinishedFinishedFinishedFin" +
              "ishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinished",
          },
          {
            title: "In Progress",
          },
          {
            title: "Waiting",
          },
        ]}
      />
    </div>
  )
}

export const Vertical: StoryFn<StepsProps> = (args) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Steps
        {...args}
        style={{ height: 300 }}
        direction="vertical"
        type="dot"
        items={[
          {
            title: "Finished",
            description: "Finished",
          },
          {
            title: "In Progress",
            status: "error",
          },
          {
            title: "Waiting",
          },
        ]}
      />
      <Steps
        {...args}
        style={{ height: 300, marginLeft: "20px" }}
        direction="vertical"
        type="line"
        items={[
          {
            title: "Finished",
            description: "Finished",
          },
          {
            title: "In Progress",
          },
          {
            title: "Waiting",
          },
        ]}
      />
      <Steps
        {...args}
        style={{ height: 300, marginLeft: "20px" }}
        direction="vertical"
        type="navigation"
        items={[
          {
            title: "Finished",
            description: "Finished",
          },
          {
            title: "In Progress",
            status: "error",
          },
          {
            title: "Waiting",
          },
        ]}
      />
      <Steps
        {...args}
        style={{ height: 300, marginLeft: "20px" }}
        direction="vertical"
        type="navigation"
        items={[
          {
            title: "Finished",
            description: "Finished",
          },
          {
            title: "In Progress",
          },
          {
            title: "Waiting",
          },
        ]}
      />
    </div>
  )
}
