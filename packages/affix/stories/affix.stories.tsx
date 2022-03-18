import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Button } from "@illa-design/button"
import { Notification } from "@illa-design/notification"
import { Affix, AffixProps } from "../src"

export default {
  title: "OTHERS /Affix",
  component: Affix,
} as Meta

interface AffixStoryProps extends AffixProps {
  text: String
}

const Template: Story<AffixStoryProps> = (args) => {
  const { text, ...affixProps } = args
  return (
    <>
      <div
        style={{
          height: "1000px",
          width: "200px",
          background: "linear-gradient(pink, orange)",
        }}
      >
        Scroll up and down
      </div>
      <Affix {...affixProps}>
        <Button>{text}</Button>
      </Affix>
      <div
        style={{
          height: "1000px",
          width: "200px",
          background: "linear-gradient(orange, pink)",
        }}
      ></div>
    </>
  )
}
const offset = 200

export const Basic = Template.bind({})
Basic.args = { text: "Affix Top" }

export const OffsetTop = Template.bind({})
OffsetTop.args = {
  text: `${offset}px to affix top`,
  offsetTop: offset,
}

export const OffsetBottom = Template.bind({})
OffsetBottom.args = {
  text: `${offset}px to affix bottom`,
  offsetBottom: offset,
}

export const AffixCallback = Template.bind({})
AffixCallback.args = {
  text: `${offset}px to affix top`,
  offsetTop: offset,
  onChange: (isFixed: boolean) =>
    Notification.info({ content: isFixed ? "Fixed!" : "Not fixed." }),
}

export const targetContainer = () => {
  const container = React.useRef(null)

  return (
    <>
      <div style={{ overflow: "auto", height: 300 }} ref={container}>
        <div
          style={{
            height: 600,
            background: "linear-gradient(pink, lightblue)",
          }}
        >
          <Affix
            target={() => container.current}
            offsetTop={20}
            targetContainer={() => window}
          >
            <Button>Affix in scrolling container</Button>
          </Affix>
        </div>
      </div>
      <div
        style={{
          height: "1000px",
          width: "200px",
          background: "linear-gradient(orange, pink)",
        }}
      ></div>
    </>
  )
}
