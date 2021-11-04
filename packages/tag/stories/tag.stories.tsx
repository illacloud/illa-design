import * as React from "react"
import { Tag } from "@illa-design/tag"

export default {
  title: "Tag",
  decorators: [(story: Function) => <div>{story()}</div>],
}

export const basic = () => <Tag size="large">123456</Tag>
