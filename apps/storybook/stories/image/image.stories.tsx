import { Meta, StoryFn } from "@storybook/react"
import { Image, ImageProps } from "@illa-design/react"
import { BsTwitch } from "react-icons/bs"

//👇 This default export determines where your story goes in the story list
export default {
  title: "General/Image",
  component: Image,
  argTypes: {
    objectFit: {
      options: ["fill", "container", "cover", "none", "scale-down"],
      control: {
        type: "select",
      },
    },
    alt: {
      control: {
        type: "text",
      },
    },
    fallbackSrc: {
      control: {
        type: "text",
      },
    },
    src: {
      control: {
        type: "text",
      },
    },
    width: {
      control: {
        type: "text",
      },
    },
    height: {
      control: {
        type: "text",
      },
    },
    radius: {
      control: {
        type: "text",
      },
    },
    fallback: {
      control: false,
    },
  },
} as Meta

const Template: StoryFn<ImageProps> = (args) => {
  return (
    <div>
      <Image {...args} />
      <Image
        style={{
          marginLeft: "10px",
        }}
        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        {...args}
      />
      <Image
        style={{
          marginLeft: "10px",
        }}
        src="empty"
        fallbackSrc="https://media.istockphoto.com/photos/exclamation-point-picture-id1300306784?b=1&k=20&m=1300306784&s=170667a&w=0&h=zARxLkZL09BrdPnLT3xu4Ib6YLkJ8B5YlcGke7GqJ0g="
        {...args}
      />
      <Image
        style={{
          marginLeft: "10px",
        }}
        src="empty"
        fallback={<BsTwitch />}
        {...args}
      />
    </div>
  )
}

export const Basic = Template.bind({})
