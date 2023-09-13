import { Meta, StoryFn } from "@storybook/react"
import { Description, DescriptionProps } from "@illa-design/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Description",
  component: Description,
} as Meta

export const Basic: StoryFn<DescriptionProps> = (args) => (
  <Description
    {...args}
    data={[
      {
        label: "Name",
        value: "ILLA",
      },
      {
        label: "Mobile",
        value: "123-1234-1234",
      },
      {
        label: "Residence",
        value: "Beijing",
      },
      {
        label: "Hometown",
        value: "Beijing",
      },
      {
        label: "Date of Birth",
        value: "2020-05-15",
        span: 2,
      },
      {
        label: "Address",
        value: "Building, Road, Beijing",
        span: 3,
      },
    ]}
  />
)
