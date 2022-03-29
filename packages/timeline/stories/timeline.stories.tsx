import { Meta, Story } from "@storybook/react"
import { Timeline, TimelineProps, TimelineItem } from "../src"

export default {
  title: "DATA DISPLAY/Timeline",
  component: Timeline,
  argTypes: {
    pending: {
      control: false,
    },
    pendingDot: {
      control: false,
    },
  },
} as Meta

const Template: Story<TimelineProps> = (props) => {
  return (
    <Timeline {...props}>
      <TimelineItem>The first milestone</TimelineItem>
      <TimelineItem>The second milestone</TimelineItem>
      <TimelineItem>The third milestone</TimelineItem>
    </Timeline>
  )
}

export const Basic = Template.bind({})
