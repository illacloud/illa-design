import { Meta, StoryFn } from "@storybook/react"
import { Button, useNotification, Affix, AffixProps } from "@illa-design/react"
import { CSSProperties, useRef } from "react"

export default {
  title: "OTHERS /Affix",
  component: Affix,
} as Meta

const blockStyles: CSSProperties = {
  width: "500px",
  whiteSpace: "pre-wrap",
}

const containerBlockStyles: CSSProperties = {
  background: "rgba(0, 0, 0, 0.3)",
  padding: "20px",
}

const loremIpsum = Array(10)
  .fill(0)
  .map(
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  )
  .join("\n\n")

export const Basic: StoryFn<AffixProps> = (args) => {
  return (
    <>
      <Affix {...args}>
        <Button>Affix Top</Button>
      </Affix>
      <div style={blockStyles}>{loremIpsum}</div>
    </>
  )
}

export const Offset = () => {
  const offset = 200

  const notification = useNotification()

  return (
    <>
      <div style={blockStyles}>{loremIpsum}</div>
      <Affix
        offsetTop={offset}
        onChange={(isFixed: boolean) =>
          notification.info({
            content: isFixed ? `Fixed ${offset}px from top!` : "Not fixed.",
          })
        }
      >
        <Button>{offset}px to affix top</Button>
      </Affix>
      <div style={blockStyles}>{loremIpsum}</div>
      <Affix offsetBottom={offset}>
        <Button>{offset}px to affix bottom</Button>
      </Affix>
    </>
  )
}

export const TargetContainer = () => {
  const container = useRef<HTMLDivElement | null>(null)

  return (
    <>
      <div
        style={{ overflow: "auto", height: 300, width: 500 }}
        ref={container}
      >
        <div style={containerBlockStyles}>
          <Affix
            target={() => container.current}
            targetContainer={() => window}
          >
            <Button>Affix in scrolling container</Button>
          </Affix>
          {loremIpsum}
        </div>
      </div>
      <div style={blockStyles}>{loremIpsum}</div>
    </>
  )
}
