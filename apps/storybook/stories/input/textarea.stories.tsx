import { Meta, StoryFn } from "@storybook/react"
import { TextArea, TextAreaProps } from "@illa-design/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Textarea",
  component: TextArea,
} as Meta

export const Basic: StoryFn<TextAreaProps> = (props) => {
  return (
    <div>
      <TextArea w="320px" {...props} />
      <TextArea
        mt="12px"
        showWordLimit={true}
        maxLength={{
          length: 20,
          errorOnly: true,
        }}
        {...props}
      />
      <TextArea
        w="120px"
        autoSize={{
          minRows: 2,
          maxRows: 4,
        }}
        {...props}
      />
    </div>
  )
}
