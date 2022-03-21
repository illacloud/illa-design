/** @jsxImportSource @emotion/react */
import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { css } from "@emotion/react"
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

const blockStyles = css`
  width: 500px;
  white-space: pre-wrap;
`

const containerBlockStyles = css`
  background: rgba(0, 0, 0, 0.3);
  padding: 20px;
`

const loremIpsum = Array(10)
  .fill(0)
  .map(
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  )
  .join("\n\n")

export const Basic = (args) => {
  const { text, ...affixProps } = args
  return (
    <>
      <Affix {...affixProps}>
        <Button>Affix Top</Button>
      </Affix>
      <div css={blockStyles}>{loremIpsum}</div>
    </>
  )
}

export const Offset = () => {
  const offset = 200

  return (
    <>
      <div css={blockStyles}>{loremIpsum}</div>
      <Affix
        offsetTop={offset}
        onChange={(isFixed: boolean) =>
          Notification.info({
            content: isFixed ? `Fixed ${offset}px from top!` : "Not fixed.",
          })
        }
      >
        <Button>{offset}px to affix top</Button>
      </Affix>
      <div css={blockStyles}>{loremIpsum}</div>
      <Affix offsetBottom={offset}>
        <Button>{offset}px to affix bottom</Button>
      </Affix>
    </>
  )
}

export const targetContainer = () => {
  const container = React.useRef(null)

  return (
    <>
      <div
        style={{ overflow: "auto", height: 300, width: 500 }}
        ref={container}
      >
        <div css={containerBlockStyles}>
          <Affix
            target={() => container.current}
            targetContainer={() => window}
          >
            <Button>Affix in scrolling container</Button>
          </Affix>
          {loremIpsum}
        </div>
      </div>
      <div css={blockStyles}>{loremIpsum}</div>
    </>
  )
}
