import { Meta, Story } from "@storybook/react"
import { SearchProps, Search } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Input",
  component: Search,
} as Meta

export const search: Story<SearchProps> = (props) => {
  return (
    <div>
      <Search style={{ width: 280 }} {...props} />
    </div>
  )
}
