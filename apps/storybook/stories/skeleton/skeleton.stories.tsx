import { Meta, StoryFn } from "@storybook/react"
import { useState } from "react"
import {
  Avatar,
  Paragraph,
  Space,
  Switch,
  Typography,
  Skeleton,
  SkeletonProps,
} from "@illa-design/react"

export default {
  title: "FEEDBACK/Skeleton",
  component: Skeleton,
} as Meta

const Template: StoryFn<SkeletonProps> = (args) => {
  return <Skeleton {...args} />
}

export const Basic = () => (
  <>
    <p>Basic</p>
    <Skeleton />

    <p>10 rows</p>
    <Skeleton text={{ rows: 10 }} />

    <p>custom last row width</p>
    <Skeleton text={{ rows: 5, width: 500 }} />

    <p>custom all row width</p>
    <Skeleton text={{ rows: 5, width: ["20%", "40%", "60%", 200, 400] }} />
  </>
)

export const WithImage = () => (
  <>
    <p>Basic (medium size)</p>
    <Skeleton image />

    <p>Square image</p>
    <Skeleton image={{ shape: "square" }} />

    <p>small</p>
    <Skeleton image={{ size: "small" }} />

    <p>large</p>
    <Skeleton image={{ size: "large" }} />

    <p>custom size</p>
    <Skeleton image={{ size: 100 }} />
  </>
)

export const Animation = () => {
  const [animation, setAnimation] = useState(true)

  const content = (
    <Space>
      <Avatar size="medium" ml="16px" />
      <Typography>
        {Array.from({ length: 3 }, (v, k) => (
          <Paragraph key={k} mb="16px">
            Nothing you can sing that can&apos;t be sung. Nothing you can say
            but you can learn how to play the game. It&apos;s easy.
          </Paragraph>
        ))}
      </Typography>
    </Space>
  )

  return (
    <Space>
      <div>
        <label>Animation:</label>
        <Switch
          defaultChecked
          onChange={(value) => setAnimation(value)}
        ></Switch>
      </div>

      <Skeleton image animation={animation} visible={animation}>
        {content}
      </Skeleton>
    </Space>
  )
}
