import { Meta, StoryFn } from "@storybook/react"
import { Search, Textarea, TextareaProps } from "../src"
import { Space } from "@illa-design/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Textarea",
  component: Search,
} as Meta

export const Basic: StoryFn<TextareaProps> = (props) => {
  return (
    <div>
      <Textarea w="320px" {...props} />
      <Textarea
        mt="12px"
        showWordLimit={true}
        maxLength={{
          length: 20,
          errorOnly: true,
        }}
        {...props}
      />
      <Textarea
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
