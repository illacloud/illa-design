import { Meta, Story } from "@storybook/react"
import { Anchor, AnchorProps } from "../src"

const { Link: AnchorLink } = Anchor
const loremIpsum = Array(20)
  .fill(0)
  .map(
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  )
  .join("\n\n")

export default {
  title: "OTHERS/Anchor",
  component: Anchor,
} as Meta

export const Basic = (args: AnchorProps) => (
  <>
    <Anchor
      affixStyle={{
        right: 0,
        background: "white",
        width: 80
      }}
      offsetTop={20}
      style={{ width: 80 }}
    >
      <AnchorLink href="#title" title="title" />
      <AnchorLink href="#section1" title="Section1" />
      <AnchorLink href="#section2" title="Section2" />
      <AnchorLink href="#section3" title="Section3" />
    </Anchor>
    <article>
      <h1 id="title">Artical</h1>

      <section id="section1">
        <h2>Section1</h2>
        <p>{loremIpsum}</p>
      </section>

      <section id="section2">
        <h2>Section2</h2>
        <p>{loremIpsum}</p>
      </section>

      <section id="section3">
        <h2>Section3</h2>
        <p>{loremIpsum}</p>
      </section>
    </article>
  </>
)
