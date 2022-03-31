import { Meta, Story } from "@storybook/react"
import { useState } from "react"
import { Switch } from "@illa-design/switch"
import { Avatar } from "@illa-design/avatar"
import { Typography, Paragraph } from "@illa-design/typography"
import { css } from "@emotion/react"
import { Skeleton, SkeletonProps } from "../src"

export default {
  title: "FEEDBACK/Skeleton",
  component: Skeleton,
} as Meta

const Template: Story<SkeletonProps> = (args) => {
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
    <div
      css={css`
        display: flex;
      `}
    >
      <Avatar
        size="medium"
        css={css`
          margin-right: 16px;
        `}
      />
      <Typography>
        {Array.from({ length: 3 }, () => (
          <Paragraph
            css={css`
              margin-bottom: 16px;
            `}
          >
            Nothing you can sing that can't be sung. Nothing you can say but you
            can learn how to play the game. It's easy.
          </Paragraph>
        ))}
      </Typography>
    </div>
  )

  return (
    <>
      <div
        css={css`
          margin-bottom: 16px;
        `}
      >
        <label>Animation:</label>
        <Switch
          defaultChecked
          onChange={(value) => setAnimation(value)}
        ></Switch>
      </div>

      <Skeleton image animation={animation} visible={animation}>
        {content}
      </Skeleton>
    </>
  )
}
