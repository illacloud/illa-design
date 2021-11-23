import { create } from "react-test-renderer"
import { Avatar } from "../src"
import { BsFacebook } from "react-icons/bs"

test("Avatar renders with text", () => {
  const node = create(<Avatar className="test-avatar-with-text" text="Hello World" />)
  expect(node.root.findByProps({ text: "Hello World" }).props.className).toBe("test-avatar-with-text")
})

test("Avatar renders with src", () => {
  const node = create(
    <Avatar className="test-avatar-with-src"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />,
  )
  expect(node.root.findByProps({ src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" }).props.className).toBe("test-avatar-with-src")
})

test("Avatar renders with icon", () => {
  const node = create(<Avatar className="test-avatar-with-icon" icon={<BsFacebook />} />).toJSON()
  expect(node).toMatchSnapshot()
})

test("Avatar renders with shape", () => {
  expect(create(<Avatar shape="circle" />).toJSON()).toMatchSnapshot()
  expect(create(<Avatar shape="square" />).toJSON()).toMatchSnapshot()
})

test("Avatar renders with size", () => {
  expect(create(<Avatar size="small" />).toJSON()).toMatchSnapshot()
  expect(create(<Avatar size="medium" />).toJSON()).toMatchSnapshot()
  expect(create(<Avatar size="large" />).toJSON()).toMatchSnapshot()
})

test("Avatar renders with colorScheme", () => {
  expect(create(<Avatar colorScheme="gray" />).toJSON()).toMatchSnapshot()
  expect(create(<Avatar colorScheme="green" />).toJSON()).toMatchSnapshot()
  expect(create(<Avatar colorScheme="#123321" />).toJSON()).toMatchSnapshot()
})