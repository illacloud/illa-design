import { Meta, StoryFn } from "@storybook/react"
import { Timeline, TimelineProps, TimelineItem } from "@illa-design/react"

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

const Template: StoryFn<TimelineProps> = (props) => {
  return (
    <Timeline pending {...props}>
      <TimelineItem>The first milestone</TimelineItem>
      <TimelineItem>The second milestone</TimelineItem>
      <TimelineItem>The third milestone</TimelineItem>
    </Timeline>
  )
}

export const Basic = Template.bind({})
